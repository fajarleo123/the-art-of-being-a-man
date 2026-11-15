// Episode 001 — the two Shorts from episodes/001-giacomo-casanova/shorts.md (approved).
// Segments are slices of the cleaned voice-over; times come from timing.json.
import React from 'react';
import {GlassWriting} from '../../components/GlassWriting';
import {ShortSegment, ShortSpec} from '../../shorts/Short';
import timing from './timing.json';

const V = (n: string) => `001-giacomo-casanova/voice/${n}`;
const img = (n: string) => `001-giacomo-casanova/images/${n}`;
const BAB0 = V('001-bab-0-hook.wav');
const BAB7 = V('001-bab-7-henriette.wav');
const BAB8 = V('001-bab-8-penutup.wav');

type Line = {text: string; start: number; end: number};
const allLines: Record<string, Line[]> = Object.fromEntries(
  timing.chapters.flatMap((c) => c.scenes.map((s) => [s.id, s.lines] as [string, Line[]])),
);
/** Lines of the given scenes (optionally only some line indexes), and the audio span they cover. */
const span = (ids: string[], pick?: (l: Line, i: number, id: string) => boolean) => {
  const lines = ids.flatMap((id) => allLines[id].filter((l, i) => (pick ? pick(l, i, id) : true)));
  return {lines, from: lines[0].start, to: lines[lines.length - 1].end};
};
const seg = (audio: string, ids: string[], rest: Omit<ShortSegment, 'audio' | 'lines' | 'from' | 'to'>, pick?: (l: Line, i: number, id: string) => boolean): ShortSegment => ({
  audio,
  ...span(ids, pick),
  ...rest,
});

const HENRIETTE = 'Tu oublieras aussi Henriette';

export const SHORT_A: ShortSpec = {
  hook: 'Pria paling memikat di Eropa menulis ini di kaca…',
  segments: [
    seg(BAB7, ['S27', 'S28'], {
      image: img('C1-closeup-menggores-kaca.png'),
      fullBleed: true,
      view: {x: 0.66, y: 0.5, scale: 1},
      viewTo: {x: 0.68, y: 0.48, scale: 1.05},
      hold: 1.0,
      screenLayer: () => <GlassWriting text={HENRIETTE} x={0.7} y={0.3} size={52} rotate={-6} mode="write" start={168} length={60} />,
    }),
    seg(BAB7, ['S25'], {image: img('P14-berjalan-bersama-henriette.png'), view: {x: 0.5, y: 0.5, scale: 1}, viewTo: {x: 0.48, y: 0.5, scale: 1.12}, label: 'Giacomo Casanova · ±1750'}),
    seg(BAB7, ['S26'], {image: img('P15-jenewa-henriette-pergi.png'), view: {x: 0.5, y: 0.52, scale: 1.12}, viewTo: {x: 0.5, y: 0.5, scale: 1}, label: 'Jenewa'}),
    seg(BAB7, ['S29', 'S30'], {
      image: img('P17-jenewa-sepuluh-tahun.png'),
      view: {x: 0.6, y: 0.4, scale: 1.1},
      viewTo: {x: 0.74, y: 0.3, scale: 2.0},
      label: 'Sepuluh tahun kemudian',
      imageLayer: () => <GlassWriting text={HENRIETTE} x={0.74} y={0.29} size={20} rotate={-8} mode="glint" start={60} length={300} />,
    }),
    seg(BAB7, ['S31'], {image: img('P15-jenewa-henriette-pergi.png'), view: {x: 0.85, y: 0.8, scale: 3.2}}, (_l, i) => i === 1),
  ],
  endCard: {subtitle: 'KISAH LENGKAPNYA', title: 'Pria Paling Memikat di Eropa yang Akhirnya Sendirian', seconds: 2.5},
  music: {src: 'music-local/001-m1-tema-utama.mp3', volume: 0.12, offset: 0},
};

export const SHORT_B: ShortSpec = {
  hook: 'PESONA TAK CUKUP',
  segments: [
    seg(BAB0, ['S01', 'S02', 'S03'], {
      image: img('P01-kamar-ponsel-malam.png'),
      view: {x: 0.5, y: 0.5, scale: 1},
      viewTo: {x: 0.72, y: 0.52, scale: 1.25},
      glows: [{x: 0.785, y: 0.51, radius: 220, color: 'rgba(190,214,232,0.55)', intensity: 0.9, flicker: 0.04}],
    }),
    seg(BAB0, ['S04', 'S05'], {
      image: img('P19-perpustakaan-dux.png'),
      view: {x: 0.61, y: 0.5, scale: 2.4},
      viewTo: {x: 0.5, y: 0.5, scale: 1},
      glows: [{x: 0.61, y: 0.5, radius: 160, intensity: 0.7, flicker: 0.12}],
      label: 'Giacomo Casanova',
    }),
    seg(BAB8, ['S35'], {image: img('C2-closeup-casanova-tua.png'), fullBleed: true, view: {x: 0.62, y: 0.45, scale: 1}, viewTo: {x: 0.62, y: 0.42, scale: 1.06}}),
    seg(BAB8, ['S36'], {image: img('P20-pria-fajar-jendela.png'), view: {x: 0.7, y: 0.45, scale: 1.3}, viewTo: {x: 0.6, y: 0.5, scale: 1.05}}),
    seg(BAB8, ['S37'], {image: img('P20-pria-fajar-jendela.png'), view: {x: 0.6, y: 0.5, scale: 1.05}, viewTo: FULL_VIEW()}),
  ],
  endCard: {subtitle: 'KISAH LENGKAP CASANOVA', title: 'The Art of Being a Man', seconds: 2},
  music: {src: 'music-local/001-m1-tema-utama.mp3', volume: 0.12, offset: 40},
};

function FULL_VIEW() {
  return {x: 0.5, y: 0.5, scale: 1};
}
