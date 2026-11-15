import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {fonts} from '../theme';

/**
 * Words scratched into window glass. Drawn in IMAGE space (put inside KenBurns)
 * so it stays on the pane while the camera moves.
 * - mode "write": letters appear one by one (S28)
 * - mode "glint": the words are already there and catch the light (S29–S30)
 */
export const GlassWriting: React.FC<{
  text: string;
  x: number;
  y: number;
  size: number;
  rotate?: number;
  mode: 'write' | 'glint';
  start?: number;
  length?: number;
}> = ({text, x, y, size, rotate = -4, mode, start = 0, length = 120}) => {
  const frame = useCurrentFrame();
  const shown =
    mode === 'write'
      ? Math.floor(interpolate(frame, [start, start + length], [0, text.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}))
      : text.length;
  const glint = mode === 'glint' ? interpolate(frame, [start, start + length], [-30, 130], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : -100;
  const appear = mode === 'glint' ? interpolate(frame, [start, start + 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 1;
  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          left: `${x * 100}%`,
          top: `${y * 100}%`,
          transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          whiteSpace: 'nowrap',
          fontFamily: fonts.body,
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: size,
          letterSpacing: 1,
          color: 'rgba(245,238,225,0.88)',
          opacity: appear,
          textShadow: '0 0 1px rgba(255,255,255,0.9), 0 0 6px rgba(200,220,235,0.45)',
          WebkitMaskImage:
            mode === 'glint'
              ? `linear-gradient(100deg, rgba(0,0,0,0.55) ${glint - 25}%, black ${glint}%, rgba(0,0,0,0.55) ${glint + 25}%)`
              : undefined,
        }}
      >
        {text.slice(0, shown)}
      </div>
    </AbsoluteFill>
  );
};
