import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {colors, fonts} from '../theme';

const fade = (frame: number, from: number, to: number, len = 15) =>
  interpolate(frame, [from, from + len, to - len, to], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

/** Chapter title ("I · TOPENG") over a darkened picture, shown at the start of a chapter. */
export const ChapterTitle: React.FC<{text: string; length?: number}> = ({text, length = 66}) => {
  const frame = useCurrentFrame();
  const o = fade(frame, 0, length, 14);
  const [num, ...rest] = text.split('·');
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', pointerEvents: 'none'}}>
      <AbsoluteFill style={{backgroundColor: 'rgba(14,10,10,0.72)', opacity: o}} />
      <div style={{textAlign: 'center', opacity: o, transform: `scale(${1 + frame * 0.0008})`}}>
        {rest.length ? (
          <div style={{fontFamily: fonts.title, fontSize: 40, color: colors.goldDim, letterSpacing: 10, marginBottom: 14}}>
            {num.trim()}
          </div>
        ) : null}
        <div
          style={{
            fontFamily: fonts.title,
            fontWeight: 600,
            fontSize: 84,
            color: colors.gold,
            letterSpacing: 6,
            textShadow: '0 4px 30px rgba(0,0,0,0.9)',
          }}
        >
          {(rest.length ? rest.join('·') : num).trim()}
        </div>
        <div style={{width: 260, height: 2, margin: '26px auto 0', background: `linear-gradient(90deg, transparent, ${colors.goldDim}, transparent)`}} />
      </div>
    </AbsoluteFill>
  );
};

/** Quotation shown in the dark space of a picture. Camera should be static (master-style). */
export const QuoteCard: React.FC<{text: string; source: string; from: number; to: number}> = ({text, source, from, to}) => {
  const frame = useCurrentFrame();
  const o = fade(frame, from, to, 24);
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: '0 260px', pointerEvents: 'none'}}>
      <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, rgba(14,10,10,0.75) 0%, rgba(14,10,10,0.35) 70%)', opacity: o}} />
      <div style={{opacity: o, textAlign: 'center'}}>
        <div style={{fontFamily: fonts.title, fontSize: 90, color: colors.goldDim, lineHeight: 0.6}}>“</div>
        <div
          style={{
            fontFamily: fonts.body,
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 58,
            lineHeight: 1.3,
            color: colors.paper,
            textShadow: '0 3px 20px rgba(0,0,0,0.95)',
          }}
        >
          {text}
        </div>
        <div style={{marginTop: 30, fontFamily: fonts.mono, fontSize: 26, letterSpacing: 2, color: colors.gold}}>{source}</div>
      </div>
    </AbsoluteFill>
  );
};
