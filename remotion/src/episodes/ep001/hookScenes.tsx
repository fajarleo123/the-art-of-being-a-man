// Episode 001 — hook S01–S05 and title S06 as scene data (same look as HookPreview.tsx),
// so the whole episode can run on the scene engine and follow the voice-over timing.
import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {FULL} from '../../components/KenBurns';
import {BubbleSpec, Notifications} from '../../components/Notifications';
import {TitleCard} from '../../components/Text';
import {LayerProps, SceneSpec} from '../../engine/Timeline';
import {colors} from '../../theme';

const img = (name: string) => `001-giacomo-casanova/images/${name}`;
const P01 = img('P01-kamar-ponsel-malam.png');
const P19 = img('P19-perpustakaan-dux.png');
const P02 = img('P02-venesia-karnaval.png');

const PHONE = {x: 0.785, y: 0.51};
const CANDLE = {x: 0.61, y: 0.5};
const phoneGlow = (intensity: number) => ({x: PHONE.x, y: PHONE.y, radius: 260, color: 'rgba(190,214,232,0.55)', intensity, flicker: 0.04});
const candleGlow = {x: CANDLE.x, y: CANDLE.y, radius: 180, color: 'rgba(255,190,110,0.6)', intensity: 0.75, flicker: 0.12, seed: 4};

// Bubble positions (screen space); three waves follow the three narration lines of S02.
const POS: Omit<BubbleSpec, 'appearAt'>[] = [
  {x: 0.06, y: 0.24},
  {x: 0.12, y: 0.36, w: 260},
  {x: 0.03, y: 0.48, w: 340},
  {x: 0.15, y: 0.58, w: 240},
  {x: 0.05, y: 0.13, w: 280},
  {x: 0.09, y: 0.69, w: 300},
  {x: 0.21, y: 0.17, w: 240},
  {x: 0.22, y: 0.45, w: 220},
  {x: 0.02, y: 0.6, w: 250},
];
const WAVE = [0, 0, 1, 1, 1, 2, 2, 2, 2];
const waveStarts = (captionTimes?: LayerProps['captionTimes']) => [0, 1, 2].map((i) => (captionTimes?.[i]?.from ?? i * 70) + 4);

const S02Bubbles: React.FC<LayerProps> = ({captionTimes}) => {
  const starts = waveStarts(captionTimes);
  const bubbles = POS.map((p, i) => ({...p, appearAt: starts[WAVE[i]] + (i % 4) * 7}));
  return <Notifications bubbles={bubbles} />;
};

const S03Bubbles: React.FC<LayerProps> = ({durationInFrames}) => {
  const step = Math.max(6, Math.floor((durationInFrames * 0.6) / POS.length));
  const bubbles = POS.map((p, i) => ({...p, appearAt: -30, vanishAt: 10 + i * step}));
  return <Notifications bubbles={bubbles} scale={0.75} />;
};

const S06Title: React.FC<LayerProps> = ({durationInFrames}) => {
  const frame = useCurrentFrame();
  const dim = interpolate(frame, [30, 70], [0, 0.4], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{backgroundColor: colors.charcoal, opacity: dim}} />
      <TitleCard
        title="Pria Paling Memikat di Eropa yang Akhirnya Sendirian"
        subtitle="Pelajaran tentang Pesona dan Karakter"
        from={45}
        to={durationInFrames - 10}
      />
    </AbsoluteFill>
  );
};

export const HOOK_SCENES: SceneSpec[] = [
  {
    id: 'S01',
    dur: 7,
    transitionIn: 'fade',
    image: P01,
    from: FULL,
    to: {x: 0.72, y: 0.52, scale: 1.12},
    glows: [phoneGlow(0.8)],
  },
  {
    id: 'S02',
    dur: 8,
    image: P01,
    from: {x: 0.72, y: 0.5, scale: 1.7},
    to: {x: 0.72, y: 0.5, scale: 1.78},
    glows: [phoneGlow(1.1)],
    screenLayer: S02Bubbles,
  },
  {
    id: 'S03',
    dur: 7,
    image: P01,
    from: {x: 0.6, y: 0.5, scale: 1.1},
    to: FULL,
    moveEnd: 0.9,
    brightness: {from: 1, to: 0.7, start: 0.1, end: 0.8},
    wash: {color: colors.night, from: 0, to: 0.55, start: 0.1, end: 0.8},
    glows: [phoneGlow(1.0)],
    screenLayer: S03Bubbles,
  },
  {
    id: 'S04',
    dur: 7,
    transitionIn: 'flash',
    image: P19,
    from: {x: CANDLE.x, y: CANDLE.y, scale: 3.2},
    to: {x: 0.55, y: 0.56, scale: 1.6},
    easing: Easing.out(Easing.cubic),
    glows: [candleGlow],
    particles: [{kind: 'dust', count: 40}],
  },
  {
    id: 'S05',
    dur: 6,
    image: P19,
    from: {x: 0.55, y: 0.56, scale: 1.6},
    to: FULL,
    moveEnd: 0.85,
    glows: [candleGlow],
    particles: [
      {kind: 'snow', count: 60, area: {x: 0.13, y: 0.04, w: 0.11, h: 0.6}, opacity: 0.5},
      {kind: 'dust', count: 30},
    ],
  },
  {
    id: 'S06',
    dur: 10,
    transitionIn: 'page',
    image: P02,
    from: {x: 0.44, y: 0.52, scale: 1.15},
    to: {x: 0.58, y: 0.46, scale: 1.15},
    easing: Easing.linear,
    glows: [
      {x: 0.445, y: 0.31, radius: 70, color: 'rgba(255,196,110,0.7)', intensity: 0.8, flicker: 0.15, seed: 2},
      {x: 0.925, y: 0.13, radius: 80, color: 'rgba(255,196,110,0.7)', intensity: 0.8, flicker: 0.15, seed: 9},
      {x: 0.027, y: 0.47, radius: 60, color: 'rgba(255,196,110,0.7)', intensity: 0.7, flicker: 0.15, seed: 5},
    ],
    particles: [{kind: 'dust', count: 35}],
    screenLayer: S06Title,
  },
];
