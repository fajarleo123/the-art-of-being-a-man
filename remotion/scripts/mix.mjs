// Final audio mix (reused by every episode), WITHOUT re-rendering the picture:
//   voice track from the rendered video + music cues (ducked under the voice)
//   + simple synthesized sound effects → loudness-normalized → muxed back onto the video.
//
// Usage: node scripts/mix.mjs <timing.json> <voice-options.json> <music.json>
//   e.g. node scripts/mix.mjs src/episodes/ep001/timing.json src/episodes/ep001/voice-options.json src/episodes/ep001/music.json
import {execFileSync, spawnSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const [timingPath, optionsPath, musicPath] = process.argv.slice(2);
if (!timingPath || !optionsPath || !musicPath) {
  console.error('Usage: node scripts/mix.mjs <timing.json> <voice-options.json> <music.json>');
  process.exit(1);
}
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const timing = JSON.parse(readFileSync(timingPath, 'utf8'));
const opts = JSON.parse(readFileSync(optionsPath, 'utf8'));
const music = JSON.parse(readFileSync(musicPath, 'utf8'));
const FPS = 30;
const PAGE_TURN = 26 / FPS;

// ---- scene start/end times, computed exactly like engine/applyVoice.ts + Timeline.tsx
const scenes = [];
let frames = 0;
for (const ch of timing.chapters) {
  ch.scenes.forEach((s, i) => {
    const last = i === ch.scenes.length - 1;
    const hold = opts.holdAfter?.[s.id] ?? 0;
    const tail = last ? opts.tailAfter?.[s.id] ?? opts.chapterTail ?? 0 : 0;
    const f = Math.round((s.end - s.start + hold + tail) * FPS);
    scenes.push({id: s.id, start: frames / FPS, end: (frames + f) / FPS});
    frames += f;
  });
}
const total = frames / FPS;
const sc = (id) => {
  const s = scenes.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown scene ${id}`);
  return s;
};

const loudness = (file) => {
  const r = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-i', file, '-af', 'ebur128', '-f', 'null', '-'], {encoding: 'utf8'});
  const m = [...r.stderr.matchAll(/I:\s+(-?[\d.]+) LUFS/g)].pop();
  return m ? Number(m[1]) : -16;
};

const inputs = [];
const filters = [];
const addInput = (args) => {
  inputs.push(...args);
  return inputs.filter((a) => a === '-i').length - 1;
};

// 0: rendered video with voice
const videoIdx = addInput(['-i', resolve(root, music.voiceVideo)]);
filters.push(`[${videoIdx}:a]aresample=48000,aformat=channel_layouts=stereo,asplit=2[voice][vkey]`);

// music cues
const cueLabels = [];
music.cues.forEach((cue, i) => {
  const file = resolve(root, music.tracks[cue.track]);
  const gain = music.musicLoudness - loudness(file);
  const start = Math.max(0, sc(cue.fromScene).start - (i === 0 ? 0 : cue.fadeIn / 2));
  const isLast = i === music.cues.length - 1;
  const end = isLast ? total : sc(cue.toScene).end + cue.fadeOut / 2;
  const len = end - start;
  const idx = addInput(['-stream_loop', '-1', '-i', file]);
  const label = `cue${i}`;
  filters.push(
    `[${idx}:a]aresample=48000,aformat=channel_layouts=stereo,atrim=start=${cue.offset}:duration=${len.toFixed(3)},asetpts=PTS-STARTPTS,` +
      `volume=${gain.toFixed(2)}dB,afade=t=in:st=0:d=${cue.fadeIn},afade=t=out:st=${(len - cue.fadeOut).toFixed(3)}:d=${cue.fadeOut},` +
      `adelay=${Math.round(start * 1000)}|${Math.round(start * 1000)}[${label}]`,
  );
  cueLabels.push(`[${label}]`);
  console.log(`${cue.track}: ${start.toFixed(1)}s → ${end.toFixed(1)}s (gain ${gain.toFixed(1)} dB)`);
});
filters.push(`${cueLabels.join('')}amix=inputs=${cueLabels.length}:normalize=0:duration=longest[bed]`);
// duck the music under the voice
filters.push(`[bed][vkey]sidechaincompress=threshold=0.025:ratio=6:attack=40:release=600:makeup=1[ducked]`);

// simple synthesized sound effects
const sfxLabels = [];
music.sfx.forEach((fx, i) => {
  const label = `fx${i}`;
  let start;
  let dur;
  let src;
  if (fx.type === 'heartbeat') {
    start = sc(fx.fromScene).start + 1;
    dur = sc(fx.toScene).end - start;
    const T = 60 / fx.bpm;
    src =
      `aevalsrc='0.9*sin(2*PI*52*t)*exp(-mod(t,${T})*16)*lt(mod(t,${T}),0.22)+0.6*sin(2*PI*46*t)*exp(-(mod(t,${T})-0.3)*16)*gt(mod(t,${T}),0.3)*lt(mod(t,${T}),0.52)':s=48000:d=${dur.toFixed(3)}`;
  } else if (fx.type === 'page') {
    start = sc(fx.atScene).start - PAGE_TURN;
    dur = 0.9;
    src = `anoisesrc=c=pink:r=48000:d=${dur},highpass=f=700,lowpass=f=6500,afade=t=in:d=0.08,afade=t=out:st=0.15:d=0.75:curve=exp`;
  } else if (fx.type === 'wind') {
    start = sc(fx.fromScene).start;
    dur = sc(fx.toScene).end - start;
    src = `anoisesrc=c=brown:r=48000:d=${dur.toFixed(3)},lowpass=f=420,tremolo=f=0.15:d=0.6,afade=t=in:d=1.5,afade=t=out:st=${(dur - 1.5).toFixed(3)}:d=1.5`;
  } else {
    return;
  }
  const idx = addInput(['-f', 'lavfi', '-i', src]);
  filters.push(
    `[${idx}:a]aformat=channel_layouts=stereo,volume=${fx.volume},adelay=${Math.round(start * 1000)}|${Math.round(start * 1000)}[${label}]`,
  );
  sfxLabels.push(`[${label}]`);
  console.log(`sfx ${fx.type}: ${start.toFixed(1)}s (+${dur.toFixed(1)}s)`);
});

filters.push(
  `[voice][ducked]${sfxLabels.join('')}amix=inputs=${2 + sfxLabels.length}:normalize=0:duration=first,` +
    `loudnorm=I=${music.finalLoudness}:TP=-1.5:LRA=11,aresample=48000[mix]`,
);

const args = [
  '-hide_banner',
  '-nostats',
  '-loglevel',
  'error',
  '-y',
  ...inputs,
  '-filter_complex',
  filters.join(';'),
  '-map',
  `${videoIdx}:v`,
  '-map',
  '[mix]',
  '-c:v',
  'copy',
  '-c:a',
  'aac',
  '-b:a',
  '192k',
  '-t',
  total.toFixed(3),
  resolve(root, music.output),
];
console.log(`Total: ${total.toFixed(1)} s`);
execFileSync('ffmpeg', args, {stdio: ['ignore', 'inherit', 'inherit']});
console.log(`Wrote ${music.output}`);
