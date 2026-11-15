import React from 'react';
import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

/**
 * A point of view inside an image.
 * x, y: the point of the image (0–1) that sits in the middle of the screen.
 * scale: zoom (1 = whole image fills the frame).
 */
export type View = {x: number; y: number; scale: number};

export const FULL: View = {x: 0.5, y: 0.5, scale: 1};

// Keep the image covering the frame: the visible window may not leave the image.
const clampView = (v: View): View => {
  const s = Math.max(1, v.scale);
  const half = 0.5 / s;
  return {
    scale: s,
    x: Math.min(1 - half, Math.max(half, v.x)),
    y: Math.min(1 - half, Math.max(half, v.y)),
  };
};

/**
 * Slow camera move inside one picture (push-in, pull-out, pan).
 * `children` are drawn in IMAGE space (use % positions of the picture),
 * so glows and effects stay attached to the picture while the camera moves.
 */
export const KenBurns: React.FC<{
  src: string;
  from: View;
  to?: View;
  durationInFrames: number;
  /** Frame (inside the scene) where the move starts. */
  startAt?: number;
  /** CSS filter, e.g. 'brightness(0.8) saturate(0.9)'. */
  filter?: string;
  easing?: (t: number) => number;
  children?: React.ReactNode;
}> = ({src, from, to, durationInFrames, startAt = 0, filter, easing, children}) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [startAt, durationInFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easing ?? Easing.inOut(Easing.cubic),
  });
  const end = to ?? from;
  const v = clampView({
    x: from.x + (end.x - from.x) * t,
    y: from.y + (end.y - from.y) * t,
    scale: from.scale + (end.scale - from.scale) * t,
  });
  return (
    <AbsoluteFill style={{overflow: 'hidden', backgroundColor: '#000'}}>
      <AbsoluteFill
        style={{
          transformOrigin: `${v.x * 100}% ${v.y * 100}%`,
          transform: `translate(${(0.5 - v.x) * 100}%, ${(0.5 - v.y) * 100}%) scale(${v.scale})`,
        }}
      >
        <Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover', filter}} />
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
