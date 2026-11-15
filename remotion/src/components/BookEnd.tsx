import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {colors, fonts} from '../theme';
import {Glow} from './Overlays';
import {Particles} from './Particles';

/** Closing card: a closed leather book with the channel name, plus an optional question. */
export const BookEnd: React.FC<{question?: string; durationInFrames: number}> = ({question, durationInFrames}) => {
  const frame = useCurrentFrame();
  const o1 = interpolate(frame, [6, 30], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const o2 = interpolate(frame, [30, 56], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const out = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{backgroundColor: colors.charcoal, opacity: out}}>
      <AbsoluteFill style={{background: `radial-gradient(ellipse at 50% 60%, #2a1c14 0%, ${colors.charcoal} 70%)`}} />
      {/* table */}
      <AbsoluteFill style={{top: '62%', background: 'linear-gradient(180deg, #2b1a10 0%, #140c08 100%)'}} />
      {/* book */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '52%',
          width: 760,
          height: 500,
          transform: 'translate(-50%, -50%) perspective(1600px) rotateX(48deg)',
          borderRadius: 10,
          background: `linear-gradient(135deg, ${colors.burgundy} 0%, ${colors.burgundyDeep} 100%)`,
          boxShadow: '0 40px 80px rgba(0,0,0,0.8), inset 0 0 60px rgba(0,0,0,0.6)',
          border: `3px solid ${colors.goldDim}`,
        }}
      >
        <div style={{position: 'absolute', inset: 26, border: `2px solid ${colors.goldDim}`, borderRadius: 6}} />
      </div>
      <Glow x={0.82} y={0.42} radius={420} color="rgba(255,190,110,0.35)" intensity={0.8} flicker={0.1} seed={6} />
      <Particles kind="dust" count={40} seed="book" />
      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', top: -160}}>
        <div
          style={{
            fontFamily: fonts.title,
            fontWeight: 600,
            fontSize: 70,
            letterSpacing: 6,
            color: colors.gold,
            opacity: o1,
            textShadow: '0 4px 24px rgba(0,0,0,0.9)',
          }}
        >
          The Art of Being a Man
        </div>
      </AbsoluteFill>
      {question ? (
        <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 230}}>
          <div style={{fontFamily: fonts.body, fontStyle: 'italic', fontSize: 48, color: colors.paper, opacity: o2, textShadow: '0 3px 16px rgba(0,0,0,0.9)'}}>
            {question}
          </div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
