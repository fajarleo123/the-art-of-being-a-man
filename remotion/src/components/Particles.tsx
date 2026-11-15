import React from 'react';
import {AbsoluteFill, random, useCurrentFrame, useVideoConfig} from 'remotion';

type Kind = 'dust' | 'snow' | 'embers' | 'rain';

const presets: Record<Kind, {size: [number, number]; speed: [number, number]; drift: number; color: string; opacity: [number, number]}> = {
  dust: {size: [1.5, 3.5], speed: [-0.25, 0.25], drift: 0.35, color: '#E8C98F', opacity: [0.25, 0.7]},
  snow: {size: [2, 5], speed: [0.9, 2.2], drift: 0.6, color: '#F1E9DA', opacity: [0.45, 0.9]},
  embers: {size: [1.5, 4], speed: [-2.4, -1], drift: 0.8, color: '#F0A548', opacity: [0.5, 1]},
  rain: {size: [1, 1.6], speed: [16, 22], drift: 0, color: '#C9D4DE', opacity: [0.18, 0.35]},
};

/** Deterministic particles drawn over the frame. Area is given in 0–1 screen units. */
export const Particles: React.FC<{
  kind: Kind;
  count: number;
  seed?: string;
  area?: {x: number; y: number; w: number; h: number};
  opacity?: number;
}> = ({kind, count, seed = kind, area = {x: 0, y: 0, w: 1, h: 1}, opacity = 1}) => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();
  const p = presets[kind];
  const left = area.x * width;
  const top = area.y * height;
  const w = area.w * width;
  const h = area.h * height;
  return (
    <AbsoluteFill style={{pointerEvents: 'none', opacity, mixBlendMode: 'screen'}}>
      {new Array(count).fill(0).map((_, i) => {
        const r = (k: string) => random(`${seed}-${i}-${k}`);
        const size = p.size[0] + r('s') * (p.size[1] - p.size[0]);
        const speed = p.speed[0] + r('v') * (p.speed[1] - p.speed[0]);
        const x0 = r('x') * w;
        const y0 = r('y') * h;
        const y = (((y0 + frame * speed) % h) + h) % h;
        const x = x0 + Math.sin(frame * 0.02 * (1 + r('f')) + r('p') * 6.28) * 18 * p.drift;
        const o = p.opacity[0] + r('o') * (p.opacity[1] - p.opacity[0]);
        const twinkle = kind === 'embers' || kind === 'dust' ? 0.6 + 0.4 * Math.sin(frame * 0.15 + r('t') * 6.28) : 1;
        const isRain = kind === 'rain';
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: left + x,
              top: top + y,
              width: isRain ? size : size,
              height: isRain ? size * 22 : size,
              borderRadius: isRain ? 1 : '50%',
              background: p.color,
              opacity: o * twinkle,
              boxShadow: kind === 'embers' ? `0 0 ${size * 3}px ${p.color}` : undefined,
              transform: isRain ? 'rotate(12deg)' : undefined,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
