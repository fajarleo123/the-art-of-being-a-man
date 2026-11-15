// Applies voice-over timing (from scripts/voice.mjs → timing.json) to a list of scenes:
// each scene gets its exact length, its slice of the voice file, and subtitle times.
import {SceneSpec} from './Timeline';

export type VoiceTiming = {
  chapters: {
    audio: string;
    duration: number;
    scenes: {id: string; start: number; end: number; lines: {text: string; start: number; end: number}[]}[];
  }[];
};

export type VoiceOptions = {
  /** Extra silence (seconds) after a scene, e.g. for "[jeda panjang]" moments. */
  holdAfter?: Record<string, number>;
  /** Silence (seconds) after the last scene of every chapter. */
  chapterTail?: number;
  /** Override chapterTail for specific last scenes. */
  tailAfter?: Record<string, number>;
};

const FPS = 30;

export const applyVoice = (scenes: SceneSpec[], timing: VoiceTiming, opts: VoiceOptions = {}): SceneSpec[] => {
  const byId = new Map<string, {audio: string; start: number; end: number; lines: {text: string; start: number; end: number}[]; last: boolean}>();
  for (const ch of timing.chapters) {
    ch.scenes.forEach((s, i) => byId.set(s.id, {audio: ch.audio, start: s.start, end: s.end, lines: s.lines, last: i === ch.scenes.length - 1}));
  }
  return scenes.map((scene) => {
    const t = byId.get(scene.id);
    if (!t) return scene;
    const speech = t.end - t.start;
    const hold = opts.holdAfter?.[scene.id] ?? 0;
    const tail = t.last ? opts.tailAfter?.[scene.id] ?? opts.chapterTail ?? 0 : 0;
    return {
      ...scene,
      dur: speech + hold + tail,
      audio: {src: t.audio, from: t.start, to: t.end},
      captionTimes: t.lines.map((l) => ({
        text: l.text,
        from: Math.max(0, Math.round((l.start - t.start) * FPS)),
        to: Math.round((Math.min(l.end, t.end) - t.start) * FPS) + 6,
      })),
    };
  });
};
