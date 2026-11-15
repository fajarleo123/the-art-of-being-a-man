// Episode 001 (Casanova): Hook S01–S05 + title S06, following
// episodes/001-giacomo-casanova/storyboard.md. Silent preview with
// temporary on-screen narration until the voice-over arrives.
import React from 'react';
import {AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {FULL, KenBurns} from '../../components/KenBurns';
import {Notifications, BubbleSpec} from '../../components/Notifications';
import {FadeEdges, FilmGrain, Flash, Glow, PaperTexture, Vignette, Wash} from '../../components/Overlays';
import {Particles} from '../../components/Particles';
import {Caption, PreviewBadge, TitleCard} from '../../components/Text';
import {PageTurnOut} from '../../components/Transitions';
import {colors} from '../../theme';

const img = (name: string) => `001-giacomo-casanova/images/${name}`;
const P01 = img('P01-kamar-ponsel-malam.png');
const P19 = img('P19-perpustakaan-dux.png');
const P02 = img('P02-venesia-karnaval.png');

const s = (sec: number) => Math.round(sec * 30);

// Scene timing (storyboard durations, 30 fps)
export const T = {
  S01: {from: 0, dur: s(7)},
  S02: {from: s(7), dur: s(8)},
  S03: {from: s(15), dur: s(7)},
  S04: {from: s(22), dur: s(7)},
  S05: {from: s(29), dur: s(6)},
  S06: {from: s(35), dur: s(10)},
};
export const HOOK_PREVIEW_DURATION = T.S06.from + T.S06.dur;
const PAGE_TURN = 26;

// The phone screen in P01 (image coordinates)
const PHONE = {x: 0.785, y: 0.51};

/** Phone glow attached to the picture. */
const PhoneGlow: React.FC<{intensity: number}> = ({intensity}) => (
  <Glow x={PHONE.x} y={PHONE.y} radius={260} color="rgba(190,214,232,0.55)" intensity={intensity} flicker={0.04} />
);

// Message bubbles: three waves, one per narration line (S02), screen space.
const bubbleWaves: BubbleSpec[] = [
  {x: 0.06, y: 0.24, appearAt: 12},
  {x: 0.12, y: 0.36, w: 260, appearAt: 22},
  {x: 0.03, y: 0.48, w: 340, appearAt: 80},
  {x: 0.15, y: 0.58, w: 240, appearAt: 88},
  {x: 0.05, y: 0.13, w: 280, appearAt: 96},
  {x: 0.09, y: 0.69, w: 300, appearAt: 155},
  {x: 0.21, y: 0.17, w: 240, appearAt: 162},
  {x: 0.22, y: 0.45, w: 220, appearAt: 169},
  {x: 0.02, y: 0.6, w: 250, appearAt: 176},
];

const S01: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <KenBurns src={P01} from={FULL} to={{x: 0.72, y: 0.52, scale: 1.12}} durationInFrames={T.S01.dur}>
        <PhoneGlow intensity={0.8} />
      </KenBurns>
      <FadeEdges durationInFrames={T.S01.dur} fadeIn={45} />
      <Caption text="Hari ini, seorang pria bisa mengenal ratusan wanita hanya dari layar di tangannya." from={10} to={T.S01.dur - 8} />
      {frame < 0 ? null : null}
    </AbsoluteFill>
  );
};

const S02: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame, [0, T.S02.dur], [0.8, 1.25], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill>
      <KenBurns src={P01} from={{x: 0.72, y: 0.5, scale: 1.7}} to={{x: 0.72, y: 0.5, scale: 1.78}} durationInFrames={T.S02.dur}>
        <PhoneGlow intensity={glow} />
      </KenBurns>
      <Notifications bubbles={bubbleWaves} />
      <Caption text="Banyak yang membalas pesannya." from={8} to={72} />
      <Caption text="Banyak yang tertawa pada leluconnya." from={76} to={148} />
      <Caption text="Banyak yang tertarik pada pesonanya." from={152} to={T.S02.dur - 4} />
    </AbsoluteFill>
  );
};

const S03: React.FC = () => {
  const frame = useCurrentFrame();
  const dark = interpolate(frame, [20, 170], [0, 0.55], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const glow = interpolate(frame, [0, 150, T.S03.dur], [1.2, 0.5, 1.6], {extrapolateRight: 'clamp'});
  // the same bubbles, smaller, disappearing one by one
  const fading = bubbleWaves.map((b, i) => ({
    ...b,
    appearAt: -30,
    vanishAt: 25 + i * 13,
  }));
  return (
    <AbsoluteFill>
      <KenBurns
        src={P01}
        from={{x: 0.6, y: 0.5, scale: 1.1}}
        to={FULL}
        durationInFrames={T.S03.dur - 20}
        filter={`brightness(${1 - dark * 0.6})`}
      >
        <PhoneGlow intensity={glow} />
      </KenBurns>
      <Notifications bubbles={fading} scale={0.75} />
      <Wash color={colors.night} opacity={dark} />
      <Caption text="Tapi ketika malam datang… tak satu pun tinggal." from={6} to={140} />
      {/* match cut: phone light becomes candle light */}
      <Flash color="#F3D9A4" peakAt={T.S03.dur} length={14} />
    </AbsoluteFill>
  );
};

// Candle in P19 (image coordinates)
const CANDLE = {x: 0.61, y: 0.5};
const CandleGlow: React.FC = () => (
  <Glow x={CANDLE.x} y={CANDLE.y} radius={180} color="rgba(255,190,110,0.6)" intensity={0.75} flicker={0.12} seed={4} />
);

const S04: React.FC = () => (
  <AbsoluteFill>
    <KenBurns
      src={P19}
      from={{x: CANDLE.x, y: CANDLE.y, scale: 3.2}}
      to={{x: 0.55, y: 0.56, scale: 1.6}}
      durationInFrames={T.S04.dur}
      easing={Easing.out(Easing.cubic)}
    >
      <CandleGlow />
    </KenBurns>
    <Particles kind="dust" count={40} seed="s04" />
    <Flash color="#F3D9A4" peakAt={0} length={14} />
    <Caption text="Hampir tiga ratus tahun lalu, ada seorang pria yang mungkin paling memikat di seluruh Eropa." from={10} to={T.S04.dur - 6} />
  </AbsoluteFill>
);

const S05: React.FC = () => (
  <AbsoluteFill>
    <KenBurns src={P19} from={{x: 0.55, y: 0.56, scale: 1.6}} to={FULL} durationInFrames={T.S05.dur - PAGE_TURN} easing={Easing.inOut(Easing.cubic)}>
      <CandleGlow />
      {/* snow beyond the window */}
    </KenBurns>
    <Particles kind="snow" count={60} seed="s05" area={{x: 0.13, y: 0.04, w: 0.11, h: 0.6}} opacity={0.5} />
    <Particles kind="dust" count={30} seed="s05d" />
    <Caption text="Dan ia menghabiskan akhir hidupnya… sendirian." from={10} to={T.S05.dur - PAGE_TURN} />
    <Vignette strength={0.75} />
  </AbsoluteFill>
);

// Lanterns in P02 (image coordinates)
const S06: React.FC = () => {
  const frame = useCurrentFrame();
  const dim = interpolate(frame, [30, 70], [0, 0.4], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill>
      <KenBurns src={P02} from={{x: 0.44, y: 0.52, scale: 1.15}} to={{x: 0.58, y: 0.46, scale: 1.15}} durationInFrames={T.S06.dur} easing={Easing.linear}>
        <Glow x={0.445} y={0.31} radius={70} color="rgba(255,196,110,0.7)" intensity={0.8} flicker={0.15} seed={2} />
        <Glow x={0.925} y={0.13} radius={80} color="rgba(255,196,110,0.7)" intensity={0.8} flicker={0.15} seed={9} />
        <Glow x={0.027} y={0.47} radius={60} color="rgba(255,196,110,0.7)" intensity={0.7} flicker={0.15} seed={5} />
      </KenBurns>
      <Particles kind="dust" count={35} seed="s06" />
      <Wash color={colors.charcoal} opacity={dim} blend="normal" />
      <TitleCard
        title="Pria Paling Memikat di Eropa yang Akhirnya Sendirian"
        subtitle="Pelajaran tentang Pesona dan Karakter"
        from={45}
        to={T.S06.dur - 10}
      />
      <Caption text="Namanya Giacomo Casanova." from={14} to={110} />
      <Caption text="Dan ini kisah tentang apa yang tidak bisa dibeli oleh pesona." from={118} to={T.S06.dur - 24} />
      <FadeEdges durationInFrames={T.S06.dur} fadeOut={24} />
    </AbsoluteFill>
  );
};

export const HookPreview: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#000'}}>
    <Sequence from={T.S01.from} durationInFrames={T.S01.dur} name="S01">
      <S01 />
    </Sequence>
    <Sequence from={T.S02.from} durationInFrames={T.S02.dur} name="S02">
      <S02 />
    </Sequence>
    <Sequence from={T.S03.from} durationInFrames={T.S03.dur} name="S03">
      <S03 />
    </Sequence>
    <Sequence from={T.S04.from} durationInFrames={T.S04.dur} name="S04">
      <S04 />
    </Sequence>
    {/* S06 starts under S05 while the page turns */}
    <Sequence from={T.S06.from - PAGE_TURN} durationInFrames={T.S06.dur + PAGE_TURN} name="S06">
      <Sequence from={PAGE_TURN} durationInFrames={T.S06.dur} layout="none">
        <S06 />
      </Sequence>
    </Sequence>
    <Sequence from={T.S06.from - PAGE_TURN} durationInFrames={PAGE_TURN} name="S06-under">
      <KenBurns src={P02} from={{x: 0.44, y: 0.52, scale: 1.15}} durationInFrames={PAGE_TURN} />
    </Sequence>
    <Sequence from={T.S05.from} durationInFrames={T.S05.dur} name="S05">
      <PageTurnOut startAt={T.S05.dur - PAGE_TURN} length={PAGE_TURN}>
        <S05 />
      </PageTurnOut>
    </Sequence>
    {/* channel-wide finishing layers */}
    <PaperTexture />
    <FilmGrain />
    <Vignette />
    <PreviewBadge label="PRATINJAU · TANPA SUARA" />
  </AbsoluteFill>
);
