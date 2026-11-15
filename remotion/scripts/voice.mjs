// Voice-over pipeline (reused by every episode):
//   1. clean each chapter recording (tempo, pauses, warmth, loudness) with ffmpeg
//   2. find the pauses in the cleaned audio
//   3. place every narration line, and so every scene boundary, on a real pause
//   4. write timing.json, which the video reads for scene lengths and subtitles
//
// Usage: node scripts/voice.mjs <episode-folder> <narration.json> <timing.json> [tempo] [maxPause]
//   e.g. node scripts/voice.mjs 001-giacomo-casanova src/episodes/ep001/narration.json src/episodes/ep001/timing.json 1.05 0.8
import {execFileSync} from 'node:child_process';
import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const [episode, narrationPath, timingPath, tempoArg = '1.05', maxPauseArg = '0.8'] = process.argv.slice(2);
if (!episode || !narrationPath || !timingPath) {
  console.error('Usage: node scripts/voice.mjs <episode-folder> <narration.json> <timing.json> [tempo] [maxPause]');
  process.exit(1);
}
const tempo = Number(tempoArg);
const maxPause = Number(maxPauseArg);
const here = dirname(fileURLToPath(import.meta.url));
const remotionDir = join(here, '..');
const repo = join(remotionDir, '..');
const srcAudio = join(repo, 'voice-over', episode, 'audio');
const outDir = join(remotionDir, 'public', episode, 'voice');
mkdirSync(outDir, {recursive: true});

const SILENCE_DB = -38;
const MIN_PAUSE = 0.3;

const ff = (args) => execFileSync('ffmpeg', ['-hide_banner', '-nostats', ...args], {encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']});
const ffErr = (args) => {
  try {
    execFileSync('ffmpeg', ['-hide_banner', '-nostats', ...args], {stdio: ['ignore', 'pipe', 'pipe']});
    return '';
  } catch (e) {
    return String(e.stderr ?? '');
  }
};
const probeDuration = (file) =>
  Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file], {encoding: 'utf8'}).trim());

const clean = (input, output) => {
  const filters = [
    'highpass=f=70',
    // trim leading silence, shorten long pauses to maxPause
    `silenceremove=start_periods=1:start_threshold=${SILENCE_DB}dB:start_silence=0.25:stop_periods=-1:stop_duration=${maxPause}:stop_threshold=${SILENCE_DB}dB:stop_silence=${maxPause}`,
    `atempo=${tempo}`,
    // warmth & presence
    'equalizer=f=160:t=q:w=1:g=2.5',
    'equalizer=f=3200:t=q:w=1.2:g=1.5',
    'equalizer=f=8000:t=q:w=1:g=-1.5',
    'acompressor=threshold=-20dB:ratio=2.5:attack=8:release=180:makeup=2',
    'aresample=48000',
    'loudnorm=I=-16:TP=-1.5:LRA=11',
  ].join(',');
  ff(['-y', '-i', input, '-af', filters, '-ar', '48000', '-ac', '1', output]);
};

const detectPauses = (file) => {
  // silencedetect writes to stderr; run through a null muxer
  let log = '';
  try {
    log = execFileSync('ffmpeg', ['-hide_banner', '-nostats', '-i', file, '-af', `silencedetect=noise=${SILENCE_DB}dB:d=${MIN_PAUSE}`, '-f', 'null', '-'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
  } catch (e) {
    log = String(e.stderr ?? '');
  }
  const out = [];
  let start = null;
  for (const line of String(log).split('\n')) {
    const s = line.match(/silence_start: ([\d.]+)/);
    const e = line.match(/silence_end: ([\d.]+)/);
    if (s) start = Number(s[1]);
    if (e && start !== null) {
      out.push({start, end: Number(e[1])});
      start = null;
    }
  }
  return out;
};

// ffmpeg silencedetect prints to stderr even on success, so capture stderr explicitly.
const detect = (file) => {
  const r = ffErrCapture(['-i', file, '-af', `silencedetect=noise=${SILENCE_DB}dB:d=${MIN_PAUSE}`, '-f', 'null', '-']);
  const out = [];
  let start = null;
  for (const line of r.split('\n')) {
    const s = line.match(/silence_start: ([\d.]+)/);
    const e = line.match(/silence_end: ([\d.]+)/);
    if (s) start = Number(s[1]);
    if (e && start !== null) {
      out.push({start, end: Number(e[1])});
      start = null;
    }
  }
  return out;
};
import {spawnSync} from 'node:child_process';
function ffErrCapture(args) {
  const r = spawnSync('ffmpeg', ['-hide_banner', '-nostats', ...args], {encoding: 'utf8'});
  return r.stderr ?? '';
}

const words = (t) => t.split(/\s+/).filter(Boolean).length;
const round = (n) => Math.round(n * 100) / 100;

const narration = JSON.parse(readFileSync(narrationPath, 'utf8'));
const timing = {episode, tempo, maxPause, chapters: []};
let total = 0;

for (const chapter of narration.chapters) {
  const input = join(srcAudio, chapter.audio);
  const output = join(outDir, chapter.audio);
  clean(input, output);
  const dur = probeDuration(output);
  const pauses = detect(output).filter((p) => p.start > 0.05 && p.end < dur - 0.05);
  const lines = chapter.scenes.flatMap((s) => s.lines.map((text) => ({scene: s.id, text})));
  const speechStart = 0;
  const speechTotal = dur - pauses.reduce((a, p) => a + (p.end - p.start), 0);
  const counts = lines.map((l) => words(l.text));
  const totalWords = counts.reduce((a, b) => a + b, 0);

  // map "speech time" (pauses removed) to real time
  const speechToReal = (st) => {
    let real = 0;
    let acc = 0;
    let cursor = 0;
    for (const p of pauses) {
      const chunk = p.start - cursor;
      if (acc + chunk >= st) return cursor + (st - acc);
      acc += chunk;
      cursor = p.end;
    }
    return cursor + (st - acc);
  };

  // choose one pause per line boundary, in order, nearest to the proportional estimate
  const boundaries = [];
  let used = -1;
  let cum = 0;
  for (let i = 0; i < lines.length - 1; i++) {
    cum += counts[i];
    const target = speechToReal((cum / totalWords) * speechTotal);
    let best = -1;
    let bestD = Infinity;
    for (let k = used + 1; k < pauses.length - (lines.length - 2 - i); k++) {
      const mid = (pauses[k].start + pauses[k].end) / 2;
      const d = Math.abs(mid - target);
      if (d < bestD) {
        bestD = d;
        best = k;
      }
    }
    used = best;
    const p = pauses[best];
    boundaries.push({cut: (p.start + p.end) / 2, speechEnd: p.start, speechStart: p.end});
  }

  const lineTimes = lines.map((l, i) => ({
    scene: l.scene,
    text: l.text,
    start: round(i === 0 ? speechStart : boundaries[i - 1].speechStart - 0.1),
    end: round(i === lines.length - 1 ? dur : boundaries[i].speechEnd + 0.25),
    cut: i === lines.length - 1 ? dur : boundaries[i].cut,
  }));

  const scenes = chapter.scenes.map((s) => {
    const mine = lineTimes.filter((l) => l.scene === s.id);
    return {id: s.id, lines: mine.map(({text, start, end}) => ({text, start, end})), lastCut: mine[mine.length - 1].cut};
  });
  let prev = 0;
  const sceneTimes = scenes.map((s) => {
    const t = {id: s.id, start: round(prev), end: round(s.lastCut), lines: s.lines};
    prev = s.lastCut;
    return t;
  });

  timing.chapters.push({audio: `${episode}/voice/${chapter.audio}`, duration: round(dur), scenes: sceneTimes});
  total += dur;
  console.log(`${chapter.audio}: ${dur.toFixed(1)} s, ${pauses.length} pauses, ${lines.length} lines`);
}

timing.totalVoiceSeconds = round(total);
writeFileSync(timingPath, JSON.stringify(timing, null, 2) + '\n');
console.log(`Total voice: ${total.toFixed(1)} s (${Math.floor(total / 60)}:${String(Math.round(total % 60)).padStart(2, '0')})`);
