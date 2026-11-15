import React from 'react';
import {AbsoluteFill, interpolate, random, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../theme';

/** One message bubble: shape only, no readable text (master-style rule). */
const Bubble: React.FC<{x: number; y: number; w: number; scale: number; opacity: number; seed: string}> = ({
  x,
  y,
  w,
  scale,
  opacity,
  seed,
}) => {
  const l1 = 0.55 + random(seed + 'a') * 0.35;
  const l2 = 0.3 + random(seed + 'b') * 0.35;
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: 64,
        transform: `scale(${scale})`,
        transformOrigin: 'right center',
        opacity,
        borderRadius: 18,
        background: 'rgba(232,220,196,0.92)',
        boxShadow: '0 6px 24px rgba(0,0,0,0.55), 0 0 18px rgba(232,220,196,0.25)',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '0 16px',
      }}
    >
      <div style={{width: 34, height: 34, borderRadius: '50%', background: colors.goldDim, flexShrink: 0}} />
      <div style={{flex: 1}}>
        <div style={{height: 9, width: `${l1 * 100}%`, borderRadius: 5, background: 'rgba(46,31,20,0.55)'}} />
        <div style={{height: 9, width: `${l2 * 100}%`, borderRadius: 5, marginTop: 9, background: 'rgba(46,31,20,0.35)'}} />
      </div>
    </div>
  );
};

export type BubbleSpec = {x: number; y: number; w?: number; appearAt: number; vanishAt?: number};

/** Message bubbles that pop in (spring) and fade out one by one. Positions in 0–1 screen units. */
export const Notifications: React.FC<{bubbles: BubbleSpec[]; scale?: number}> = ({bubbles, scale = 1}) => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();
  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      {bubbles.map((b, i) => {
        const pop = spring({frame: frame - b.appearAt, fps, config: {damping: 14, stiffness: 140}});
        const out = b.vanishAt
          ? interpolate(frame, [b.vanishAt, b.vanishAt + 14], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
          : 1;
        if (frame < b.appearAt) return null;
        const floatY = Math.sin((frame + i * 13) * 0.05) * 4;
        return (
          <Bubble
            key={i}
            seed={`bubble-${i}`}
            x={b.x * width}
            y={b.y * height + floatY - (1 - out) * 30}
            w={(b.w ?? 300) * scale}
            scale={pop * scale}
            opacity={Math.min(1, pop) * out}
          />
        );
      })}
    </AbsoluteFill>
  );
};
