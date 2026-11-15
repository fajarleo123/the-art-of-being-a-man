// Generic scene engine: turns a list of scene descriptions (from a storyboard)
// into a timeline. Reused by every episode.
import React from 'react';
import {AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {ChapterTitle, QuoteCard} from '../components/Cards';
import {FULL, KenBurns, View} from '../components/KenBurns';
import {FadeEdges, Flash, Glow, Wash} from '../components/Overlays';
import {Particles} from '../components/Particles';
import {Caption, PlaceLabel} from '../components/Text';
import {FadeIn, InkReveal, PageTurnOut} from '../components/Transitions';

export type TransitionIn = 'cut' | 'dissolve' | 'ink' | 'fade' | 'flash' | 'page';

export type GlowSpec = {x: number; y: number; radius: number; color?: string; intensity?: number; flicker?: number; seed?: number};
export type ParticleSpec = {kind: 'dust' | 'snow' | 'embers' | 'rain'; count: number; area?: {x: number; y: number; w: number; h: number}; opacity?: number};
export type Ramp = {from: number; to: number; start?: number; end?: number};

export type SceneSpec = {
  id: string;
  /** Duration in seconds (from the storyboard; replaced by voice-over timing later). */
  dur: number;
  /** Picture path relative to public/, or omitted when `render` draws everything. */
  image?: string;
  from?: View;
  to?: View;
  /** Fraction of the scene (0–1) at which the camera move ends; default 1. */
  moveEnd?: number;
  easing?: (t: number) => number;
  transitionIn?: TransitionIn;
  /** Brightness ramp (1 = unchanged). */
  brightness?: Ramp;
  /** Gaussian blur ramp in px (e.g. blur → sharp). */
  blur?: Ramp;
  sepia?: number;
  /** Color wash over the picture (opacity ramp). */
  wash?: {color: string; blend?: React.CSSProperties['mixBlendMode']} & Ramp;
  glows?: GlowSpec[];
  particles?: ParticleSpec[];
  chapter?: string;
  place?: string;
  quote?: {text: string; source: string};
  /** Narration lines (temporary on-screen text until the voice-over exists). */
  captions?: string[];
  /** Extra drawing attached to the picture (image space). */
  imageLayer?: React.FC<{durationInFrames: number}>;
  /** Extra drawing on top of the screen (screen space). */
  screenLayer?: React.FC<{durationInFrames: number}>;
  /** Replaces the picture entirely (map, book…). */
  render?: React.FC<{durationInFrames: number}>;
};

const FPS = 30;
export const OVERLAP: Record<TransitionIn, number> = {cut: 0, dissolve: 18, ink: 30, fade: 0, flash: 0, page: 26};
const FADE = 14;

const ramp = (frame: number, r: Ramp | undefined, dur: number, fallback: number) => {
  if (!r) return fallback;
  const s = (r.start ?? 0) * dur;
  const e = (r.end ?? 1) * dur;
  return interpolate(frame, [s, Math.max(s + 1, e)], [r.from, r.to], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
};

/** Spread narration lines over the scene, proportionally to their word count. */
const captionWindows = (lines: string[], dur: number) => {
  const words = lines.map((l) => l.split(/\s+/).length);
  const total = words.reduce((a, b) => a + b, 0);
  const usable = dur - 16;
  let t = 8;
  return lines.map((text, i) => {
    const len = (words[i] / total) * usable;
    const w = {text, from: Math.round(t), to: Math.round(t + len - 4)};
    t += len;
    return w;
  });
};

const SceneView: React.FC<{scene: SceneSpec; durationInFrames: number; nextTransition?: TransitionIn}> = ({
  scene,
  durationInFrames: dur,
  nextTransition,
}) => {
  const frame = useCurrentFrame();
  const bright = ramp(frame, scene.brightness, dur, 1);
  const blur = ramp(frame, scene.blur, dur, 0);
  const filter = `brightness(${bright}) blur(${blur}px)${scene.sepia ? ` sepia(${scene.sepia})` : ''}`;
  const washO = scene.wash ? ramp(frame, scene.wash, dur, 0) : 0;
  const ImageLayer = scene.imageLayer;
  const ScreenLayer = scene.screenLayer;
  const Render = scene.render;
  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      {Render ? (
        <Render durationInFrames={dur} />
      ) : scene.image ? (
        <KenBurns
          src={scene.image}
          from={scene.from ?? FULL}
          to={scene.to}
          durationInFrames={Math.round(dur * (scene.moveEnd ?? 1))}
          easing={scene.easing ?? Easing.inOut(Easing.cubic)}
          filter={filter}
        >
          {scene.glows?.map((g, i) => (
            <Glow
              key={i}
              x={g.x}
              y={g.y}
              radius={g.radius}
              color={g.color ?? 'rgba(255,190,110,0.6)'}
              intensity={g.intensity ?? 0.7}
              flicker={g.flicker ?? 0.1}
              seed={g.seed ?? i + 1}
            />
          ))}
          {ImageLayer ? <ImageLayer durationInFrames={dur} /> : null}
        </KenBurns>
      ) : null}
      {scene.particles?.map((p, i) => (
        <Particles key={i} kind={p.kind} count={p.count} area={p.area} opacity={p.opacity} seed={`${scene.id}-${i}`} />
      ))}
      {scene.wash ? <Wash color={scene.wash.color} opacity={washO} blend={scene.wash.blend} /> : null}
      {ScreenLayer ? <ScreenLayer durationInFrames={dur} /> : null}
      {scene.place ? <PlaceLabel text={scene.place} from={scene.chapter ? 70 : 6} to={(scene.chapter ? 70 : 6) + 100} /> : null}
      {scene.quote ? <QuoteCard text={scene.quote.text} source={scene.quote.source} from={6} to={dur - 4} /> : null}
      {scene.chapter ? <ChapterTitle text={scene.chapter} /> : null}
      {scene.captions && !scene.quote
        ? captionWindows(scene.captions, dur).map((c, i) => <Caption key={i} text={c.text} from={c.from} to={c.to} />)
        : null}
      {scene.transitionIn === 'flash' ? <Flash color="#F3D9A4" peakAt={0} length={14} /> : null}
      {nextTransition === 'flash' ? <Flash color="#F3D9A4" peakAt={dur} length={14} /> : null}
      <FadeEdges durationInFrames={dur} fadeIn={scene.transitionIn === 'fade' ? FADE : 0} fadeOut={nextTransition === 'fade' ? FADE : 0} />
    </AbsoluteFill>
  );
};

/** Total length in frames of a list of scenes. */
export const timelineLength = (scenes: SceneSpec[]) => scenes.reduce((a, s) => a + Math.round(s.dur * FPS), 0);

/**
 * Lays scenes end to end. Overlapping transitions (dissolve, ink, page) start the
 * incoming scene slightly early, so the total length stays the sum of durations.
 */
export const Timeline: React.FC<{scenes: SceneSpec[]}> = ({scenes}) => {
  let cursor = 0;
  const items = scenes.map((scene, i) => {
    const dur = Math.round(scene.dur * FPS);
    const start = cursor;
    cursor += dur;
    const tIn = scene.transitionIn ?? 'cut';
    const ov = i === 0 ? 0 : OVERLAP[tIn];
    const next = scenes[i + 1]?.transitionIn;
    return {scene, start, dur, tIn, ov, next, i};
  });
  return (
    <AbsoluteFill>
      {items.map(({scene, start, dur, tIn, ov, next, i}) => {
        const view = <SceneView scene={scene} durationInFrames={dur + ov} nextTransition={next} />;
        let content: React.ReactNode = view;
        if (ov > 0 && tIn === 'dissolve') content = <FadeIn length={ov}>{view}</FadeIn>;
        if (ov > 0 && tIn === 'ink') content = <InkReveal length={ov}>{view}</InkReveal>;
        // page turn: the OUTGOING scene turns away on top of this one
        const turnsAway = next === 'page';
        if (turnsAway) content = <PageTurnOut startAt={dur + ov - OVERLAP.page}>{content}</PageTurnOut>;
        return (
          <Sequence
            key={scene.id}
            from={start - ov}
            durationInFrames={dur + ov}
            name={scene.id}
            style={{zIndex: turnsAway ? 1000 - i + 500 : i}}
          >
            {content}
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

export const sec = (s: number) => Math.round(s * FPS);
