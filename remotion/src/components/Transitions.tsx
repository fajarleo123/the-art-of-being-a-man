import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

/**
 * Channel signature transition: the current picture turns away like a book page,
 * revealing what is underneath. Wrap the OUTGOING scene with it; render the
 * incoming scene below it.
 */
export const PageTurnOut: React.FC<{
  children: React.ReactNode;
  startAt: number;
  length?: number;
}> = ({children, startAt, length = 26}) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [startAt, startAt + length], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });
  if (t >= 1) return null;
  const angle = -175 * t;
  const shade = Math.sin(t * Math.PI) * 0.55;
  return (
    <AbsoluteFill style={{perspective: 2400}}>
      <AbsoluteFill
        style={{
          transformOrigin: 'left center',
          transform: `rotateY(${angle}deg)`,
          backfaceVisibility: 'hidden',
          boxShadow: t > 0 ? `0 0 ${60 * shade}px rgba(0,0,0,${shade})` : undefined,
        }}
      >
        {children}
        <AbsoluteFill style={{background: `linear-gradient(90deg, rgba(0,0,0,0) 40%, rgba(0,0,0,${shade}) 100%)`}} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/** Opacity cross-fade for the incoming scene. */
export const FadeIn: React.FC<{children: React.ReactNode; length?: number}> = ({children, length = 20}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, length], [0, 1], {extrapolateRight: 'clamp'});
  return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
};

/**
 * "Ink bleed": the incoming scene spreads out from a point like ink on paper.
 * Used for flashbacks and for moving between the modern world and the past.
 */
export const InkReveal: React.FC<{children: React.ReactNode; length?: number; x?: number; y?: number}> = ({
  children,
  length = 30,
  x = 50,
  y = 50,
}) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [0, length], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.quad),
  });
  if (t >= 1) return <AbsoluteFill>{children}</AbsoluteFill>;
  const r = t * 130;
  const mask = `radial-gradient(circle at ${x}% ${y}%, black ${r * 0.8}%, transparent ${r}%)`;
  return (
    <AbsoluteFill style={{WebkitMaskImage: mask, maskImage: mask}}>
      <AbsoluteFill style={{filter: `url(#ink-edge)`}}>{children}</AbsoluteFill>
      <svg width="0" height="0" style={{position: 'absolute'}}>
        <filter id="ink-edge">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves={3} seed={3} />
          <feDisplacementMap in="SourceGraphic" scale={(1 - t) * 40} />
        </filter>
      </svg>
    </AbsoluteFill>
  );
};
