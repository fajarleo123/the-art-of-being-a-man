import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

/**
 * Channel signature transition: the current picture turns away like a book page,
 * revealing what is underneath. Wrap the OUTGOING scene with it; render the
 * incoming scene below (earlier in the tree).
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
        <AbsoluteFill
          style={{
            background: `linear-gradient(90deg, rgba(0,0,0,0) 40%, rgba(0,0,0,${shade}) 100%)`,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/** Opacity cross-fade helper for the incoming scene. */
export const FadeIn: React.FC<{children: React.ReactNode; length?: number}> = ({children, length = 20}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, length], [0, 1], {extrapolateRight: 'clamp'});
  return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
};
