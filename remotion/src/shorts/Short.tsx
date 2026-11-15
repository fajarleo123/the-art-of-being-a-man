// Vertical Shorts (9:16) built from the long video's pictures and voice — reused by every episode.
// Layout "Halaman Buku Vertikal" (episodes/001-giacomo-casanova/shorts.md):
//   top: hook / label · middle: landscape picture in a gold frame (or full-bleed close-up)
//   bottom: word-by-word subtitles · footer: channel name.
import React from 'react';
import {AbsoluteFill, Audio, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {FULL, KenBurns, View} from '../components/KenBurns';
import {FilmGrain, Glow, PaperTexture, Vignette} from '../components/Overlays';
import {Particles} from '../components/Particles';
import {GlowSpec} from '../engine/Timeline';
import {colors, fonts} from '../theme';

const FPS = 30;
export const SHORT = {width: 1080, height: 1920};

export type ShortSegment = {
  /** voice file (public/) and the slice to play, in seconds */
  audio: string;
  from: number;
  to: number;
  /** subtitle lines with absolute times in the voice file (seconds) */
  lines: {text: string; start: number; end: number}[];
  image: string;
  view?: View;
  viewTo?: View;
  /** close-ups fill the whole screen instead of sitting in the frame */
  fullBleed?: boolean;
  glows?: GlowSpec[];
  imageLayer?: React.FC<{durationInFrames: number}>;
  /** drawing in SCREEN space on top of the picture (use for full-bleed close-ups) */
  screenLayer?: React.FC<{durationInFrames: number}>;
  /** extra silence after the segment (s) */
  hold?: number;
  label?: string;
};

export type ShortSpec = {
  hook: string;
  segments: ShortSegment[];
  endCard: {title: string; subtitle: string; seconds: number};
  music?: {src: string; volume: number; offset?: number};
};

const GAP = 0.3;
const segFrames = (s: ShortSegment) => Math.round((s.to - s.from + (s.hold ?? 0) + GAP) * FPS);
export const shortDuration = (spec: ShortSpec) =>
  spec.segments.reduce((a, s) => a + segFrames(s), 0) + Math.round(spec.endCard.seconds * FPS);

const FRAME = {top: 640, height: 608};

/** Word-by-word subtitle: the word being spoken lights up in gold. */
const WordCaption: React.FC<{lines: ShortSegment['lines']; offset: number}> = ({lines, offset}) => {
  const frame = useCurrentFrame();
  const t = frame / FPS + offset;
  const line = lines.find((l) => t >= l.start - 0.05 && t <= l.end + 0.2) ?? null;
  if (!line) return null;
  const words = line.text.split(/\s+/);
  const total = words.reduce((a, w) => a + w.length + 1, 0);
  const speak = Math.max(0.5, line.end - line.start - 0.3);
  let acc = 0;
  return (
    <div
      style={{
        position: 'absolute',
        top: FRAME.top + FRAME.height + 90,
        left: 70,
        right: 70,
        textAlign: 'center',
        fontFamily: fonts.body,
        fontWeight: 700,
        fontSize: 64,
        lineHeight: 1.22,
        textShadow: '0 3px 14px rgba(0,0,0,0.95)',
      }}
    >
      {words.map((w, i) => {
        const wStart = line.start + (acc / total) * speak;
        acc += w.length + 1;
        const active = t >= wStart;
        return (
          <span key={i} style={{color: active ? colors.gold : colors.paper, opacity: active ? 1 : 0.55}}>
            {w}{' '}
          </span>
        );
      })}
    </div>
  );
};

const TopText: React.FC<{text: string; big?: boolean; from: number; to: number}> = ({text, big, from, to}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [from, from + 8, to - 10, to], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <div
      style={{
        position: 'absolute',
        top: big ? 230 : 420,
        left: 70,
        right: 70,
        textAlign: 'center',
        opacity: o,
        fontFamily: big ? fonts.title : fonts.mono,
        fontWeight: big ? 600 : 400,
        fontSize: big ? 66 : 34,
        letterSpacing: big ? 2 : 3,
        lineHeight: 1.18,
        color: big ? colors.gold : colors.paperFaded,
        textShadow: '0 4px 20px rgba(0,0,0,0.95)',
      }}
    >
      {text}
    </div>
  );
};

const Segment: React.FC<{seg: ShortSegment; dur: number}> = ({seg, dur}) => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 8], [0, 1], {extrapolateRight: 'clamp'});
  const ImageLayer = seg.imageLayer;
  const ScreenLayer = seg.screenLayer;
  const picture = (
    <KenBurns src={seg.image} from={seg.view ?? FULL} to={seg.viewTo} durationInFrames={dur}>
      {seg.glows?.map((g, i) => (
        <Glow key={i} x={g.x} y={g.y} radius={g.radius} color={g.color ?? 'rgba(255,190,110,0.6)'} intensity={g.intensity ?? 0.7} flicker={g.flicker ?? 0.1} seed={i + 2} />
      ))}
      {ImageLayer ? <ImageLayer durationInFrames={dur} /> : null}
    </KenBurns>
  );
  return (
    <AbsoluteFill style={{opacity: fadeIn}}>
      {seg.fullBleed ? (
        <AbsoluteFill>
          {picture}
          <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(14,10,10,0.75) 0%, rgba(14,10,10,0) 28%, rgba(14,10,10,0) 55%, rgba(14,10,10,0.85) 80%)'}} />
        </AbsoluteFill>
      ) : (
        <div
          style={{
            position: 'absolute',
            top: FRAME.top,
            left: 0,
            width: SHORT.width,
            height: FRAME.height,
            overflow: 'hidden',
            borderTop: `3px solid ${colors.goldDim}`,
            borderBottom: `3px solid ${colors.goldDim}`,
            boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
          }}
        >
          {picture}
        </div>
      )}
      <Sequence layout="none">
        <Audio src={staticFile(seg.audio)} trimBefore={Math.round(seg.from * FPS)} durationInFrames={Math.round((seg.to - seg.from) * FPS)} />
      </Sequence>
      {ScreenLayer ? <ScreenLayer durationInFrames={dur} /> : null}
      <WordCaption lines={seg.lines} offset={seg.from} />
      {seg.label ? <TopText text={seg.label} from={0} to={dur} /> : null}
    </AbsoluteFill>
  );
};

export const Short: React.FC<{spec: ShortSpec}> = ({spec}) => {
  const frame = useCurrentFrame();
  let cursor = 0;
  const items = spec.segments.map((seg) => {
    const dur = segFrames(seg);
    const start = cursor;
    cursor += dur;
    return {seg, start, dur};
  });
  const endStart = cursor;
  const endDur = Math.round(spec.endCard.seconds * FPS);
  const total = endStart + endDur;
  const endO = interpolate(frame, [endStart, endStart + 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{backgroundColor: colors.charcoal}}>
      <AbsoluteFill style={{background: `radial-gradient(ellipse at 50% 45%, #2a1c14 0%, ${colors.charcoal} 75%)`}} />
      <Particles kind="dust" count={60} seed="short-bg" />
      {items.map(({seg, start, dur}, i) => (
        <Sequence key={i} from={start} durationInFrames={dur} name={`seg ${i + 1}`}>
          <Segment seg={seg} dur={dur} />
        </Sequence>
      ))}
      {/* hook: first 3 seconds, big */}
      <TopText text={spec.hook} big from={0} to={Math.round(3.2 * FPS)} />
      {/* end card */}
      <Sequence from={endStart} durationInFrames={endDur} name="end card">
        <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: '0 90px', textAlign: 'center', opacity: endO}}>
          <div style={{fontFamily: fonts.mono, fontSize: 32, letterSpacing: 3, color: colors.paperFaded, marginBottom: 30}}>{spec.endCard.subtitle}</div>
          <div style={{fontFamily: fonts.title, fontWeight: 600, fontSize: 64, lineHeight: 1.2, color: colors.gold, textShadow: '0 4px 24px rgba(0,0,0,0.9)'}}>
            {spec.endCard.title}
          </div>
        </AbsoluteFill>
      </Sequence>
      {spec.music ? (
        <Audio
          src={staticFile(spec.music.src)}
          trimBefore={Math.round((spec.music.offset ?? 0) * FPS)}
          volume={(f) =>
            spec.music!.volume *
            interpolate(f, [0, 30, total - 45, total], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})
          }
        />
      ) : null}
      <div style={{position: 'absolute', bottom: 120, width: '100%', textAlign: 'center', fontFamily: fonts.title, fontSize: 34, letterSpacing: 4, color: colors.goldDim}}>
        The Art of Being a Man
      </div>
      <PaperTexture opacity={0.14} />
      <FilmGrain opacity={0.07} />
      <Vignette strength={0.5} />
    </AbsoluteFill>
  );
};
