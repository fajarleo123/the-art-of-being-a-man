import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {colors, fonts} from '../theme';

const fade = (frame: number, from: number, to: number, len = 18) =>
  interpolate(frame, [from, from + len, to - len, to], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

/** Episode title card: Cinzel title + Cormorant subtitle, ink fade-in. */
export const TitleCard: React.FC<{title: string; subtitle?: string; from: number; to: number}> = ({
  title,
  subtitle,
  from,
  to,
}) => {
  const frame = useCurrentFrame();
  const o1 = fade(frame, from, to, 24);
  const o2 = fade(frame, from + 24, to, 24);
  const blur1 = interpolate(frame, [from, from + 24], [8, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: '0 220px', textAlign: 'center'}}>
      <div
        style={{
          fontFamily: fonts.title,
          fontWeight: 600,
          fontSize: 76,
          lineHeight: 1.15,
          color: colors.gold,
          letterSpacing: 2,
          opacity: o1,
          filter: `blur(${blur1}px)`,
          textShadow: '0 4px 24px rgba(0,0,0,0.85), 0 0 2px rgba(0,0,0,0.9)',
        }}
      >
        {title}
      </div>
      {subtitle ? (
        <div
          style={{
            marginTop: 28,
            fontFamily: fonts.body,
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 44,
            color: colors.paper,
            opacity: o2,
            textShadow: '0 3px 18px rgba(0,0,0,0.9)',
          }}
        >
          {subtitle}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

/** Small place/year label (Courier Prime), top-left. */
export const PlaceLabel: React.FC<{text: string; from: number; to: number}> = ({text, from, to}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: 'absolute',
        left: 110,
        top: 90,
        fontFamily: fonts.mono,
        fontSize: 30,
        letterSpacing: 3,
        color: colors.paperFaded,
        opacity: fade(frame, from, to),
        textShadow: '0 2px 10px rgba(0,0,0,0.9)',
      }}
    >
      {text}
    </div>
  );
};

/**
 * Narration line shown at the bottom.
 * In the silent preview it stands in for the voice-over; in final videos
 * the same component becomes the subtitles.
 */
export const Caption: React.FC<{text: string; from: number; to: number}> = ({text, from, to}) => {
  const frame = useCurrentFrame();
  const o = fade(frame, from, to, 10);
  if (o <= 0) return null;
  return (
    <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 70}}>
      <div
        style={{
          maxWidth: 1400,
          textAlign: 'center',
          fontFamily: fonts.body,
          fontWeight: 600,
          fontSize: 44,
          lineHeight: 1.25,
          color: colors.paper,
          opacity: o,
          padding: '10px 28px',
          background: 'linear-gradient(90deg, rgba(20,16,16,0) 0%, rgba(20,16,16,0.55) 15%, rgba(20,16,16,0.55) 85%, rgba(20,16,16,0) 100%)',
          textShadow: '0 2px 12px rgba(0,0,0,0.95)',
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};

export const PreviewBadge: React.FC<{label: string}> = ({label}) => (
  <div
    style={{
      position: 'absolute',
      right: 60,
      top: 46,
      fontFamily: fonts.mono,
      fontSize: 22,
      letterSpacing: 2,
      color: colors.paperFaded,
      opacity: 0.75,
      border: `1px solid ${colors.goldDim}`,
      padding: '6px 14px',
      background: 'rgba(20,16,16,0.45)',
    }}
  >
    {label}
  </div>
);
