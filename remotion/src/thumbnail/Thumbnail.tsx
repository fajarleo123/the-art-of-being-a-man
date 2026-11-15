// YouTube thumbnail (1280×720), rendered as a still. Reused by every episode.
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {PaperTexture, Vignette} from '../components/Overlays';
import {colors, fonts} from '../theme';

export type ThumbSpec = {
  image: string;
  /** which part of the picture to show (object-position, %) */
  focus: {x: number; y: number};
  zoom?: number;
  text: string;
  label: string;
  /** side where the text sits */
  side: 'left' | 'right';
};

export const Thumbnail: React.FC<{spec: ThumbSpec}> = ({spec}) => {
  const z = spec.zoom ?? 1;
  const textSide = spec.side;
  return (
    <AbsoluteFill style={{backgroundColor: colors.charcoal}}>
      <AbsoluteFill style={{overflow: 'hidden'}}>
        <Img
          src={staticFile(spec.image)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: `${spec.focus.x}% ${spec.focus.y}%`,
            transform: `scale(${z})`,
            transformOrigin: `${spec.focus.x}% ${spec.focus.y}%`,
            filter: 'contrast(1.08) saturate(1.05)',
          }}
        />
      </AbsoluteFill>
      {/* dark side for the text */}
      <AbsoluteFill
        style={{
          background:
            textSide === 'left'
              ? 'linear-gradient(90deg, rgba(20,10,10,0.92) 0%, rgba(43,10,16,0.75) 38%, rgba(0,0,0,0) 62%)'
              : 'linear-gradient(270deg, rgba(20,10,10,0.92) 0%, rgba(43,10,16,0.75) 38%, rgba(0,0,0,0) 62%)',
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: textSide === 'left' ? 'flex-start' : 'flex-end',
          padding: '0 60px',
        }}
      >
        <div style={{width: 600, textAlign: textSide === 'left' ? 'left' : 'right'}}>
          <div style={{fontFamily: fonts.mono, fontSize: 30, letterSpacing: 6, color: colors.paperFaded, marginBottom: 14}}>{spec.label}</div>
          <div
            style={{
              fontFamily: fonts.title,
              fontWeight: 700,
              fontSize: 112,
              lineHeight: 0.98,
              color: '#E2B86A',
              textTransform: 'uppercase',
              WebkitTextStroke: '2px #2B0A10',
              textShadow: '0 6px 0 #2B0A10, 0 10px 40px rgba(0,0,0,0.95)',
            }}
          >
            {spec.text}
          </div>
          <div
            style={{
              marginTop: 22,
              height: 6,
              width: 220,
              marginLeft: textSide === 'left' ? 0 : 'auto',
              background: colors.burgundy,
              boxShadow: '0 0 0 2px #E2B86A',
            }}
          />
        </div>
      </AbsoluteFill>
      <PaperTexture opacity={0.12} />
      <Vignette strength={0.55} />
    </AbsoluteFill>
  );
};
