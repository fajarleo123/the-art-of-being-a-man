import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

/** Aged-paper texture over the whole frame (static). */
export const PaperTexture: React.FC<{opacity?: number}> = ({opacity = 0.16}) => (
  <AbsoluteFill style={{mixBlendMode: 'multiply', opacity, pointerEvents: 'none'}}>
    <svg width="100%" height="100%">
      <filter id="paper">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves={4} seed={7} />
        <feColorMatrix type="matrix" values="0 0 0 0 0.55  0 0 0 0 0.42  0 0 0 0 0.28  0 0 0 0.9 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#paper)" />
    </svg>
  </AbsoluteFill>
);

/** Moving film grain. */
export const FilmGrain: React.FC<{opacity?: number}> = ({opacity = 0.09}) => {
  const frame = useCurrentFrame();
  const seed = Math.floor(frame / 2) % 12;
  return (
    <AbsoluteFill style={{mixBlendMode: 'overlay', opacity, pointerEvents: 'none'}}>
      <svg width="100%" height="100%">
        <filter id={`grain-${seed}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={1} seed={seed} />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${seed})`} />
      </svg>
    </AbsoluteFill>
  );
};

/** Dark edges (master-style: vignette on every frame). */
export const Vignette: React.FC<{strength?: number}> = ({strength = 0.65}) => (
  <AbsoluteFill
    style={{
      pointerEvents: 'none',
      background: `radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(20,16,16,${strength}) 100%)`,
    }}
  />
);

/** Full-frame color/brightness wash (e.g. to darken a room over time). */
export const Wash: React.FC<{color: string; opacity: number; blend?: React.CSSProperties['mixBlendMode']}> = ({
  color,
  opacity,
  blend = 'multiply',
}) => <AbsoluteFill style={{backgroundColor: color, opacity, mixBlendMode: blend, pointerEvents: 'none'}} />;

/** A soft light source (candle, phone, lantern) that can pulse. */
export const Glow: React.FC<{
  x: number;
  y: number;
  radius: number;
  color: string;
  intensity: number;
  flicker?: number;
  seed?: number;
}> = ({x, y, radius, color, intensity, flicker = 0, seed = 1}) => {
  const frame = useCurrentFrame();
  const f = 1 + flicker * (Math.sin(frame * 0.9 + seed) * 0.5 + Math.sin(frame * 0.37 + seed * 3) * 0.5);
  return (
    <AbsoluteFill
      style={{
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        opacity: Math.max(0, intensity * f),
        background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, ${color} 0px, rgba(0,0,0,0) ${radius}px)`,
      }}
    />
  );
};

/** Flash that fades in then out (used for match cuts). */
export const Flash: React.FC<{color: string; peakAt: number; length: number}> = ({color, peakAt, length}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [peakAt - length, peakAt, peakAt + length], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return <AbsoluteFill style={{backgroundColor: color, opacity: o, pointerEvents: 'none'}} />;
};

/** Fade from/to black at scene edges. */
export const FadeEdges: React.FC<{durationInFrames: number; fadeIn?: number; fadeOut?: number}> = ({
  durationInFrames,
  fadeIn = 0,
  fadeOut = 0,
}) => {
  const frame = useCurrentFrame();
  const a = fadeIn > 0 ? interpolate(frame, [0, fadeIn], [1, 0], {extrapolateRight: 'clamp'}) : 0;
  const b =
    fadeOut > 0
      ? interpolate(frame, [durationInFrames - fadeOut, durationInFrames], [0, 1], {extrapolateLeft: 'clamp'})
      : 0;
  return <AbsoluteFill style={{backgroundColor: '#000', opacity: Math.max(a, b), pointerEvents: 'none'}} />;
};
