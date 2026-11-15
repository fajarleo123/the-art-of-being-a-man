// Episode 001 — full 5-minute video (silent preview until the voice-over arrives).
import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {FilmGrain, PaperTexture, Vignette} from '../../components/Overlays';
import {PreviewBadge} from '../../components/Text';
import {InkReveal} from '../../components/Transitions';
import {Timeline, timelineLength} from '../../engine/Timeline';
import {HookContent, HOOK_PREVIEW_DURATION} from './HookPreview';
import {EP001_SCENES} from './scenes';

const INK = 30; // S06 → S07 ink transition (S07 data includes these frames)
const REST_START = HOOK_PREVIEW_DURATION - INK;

export const EP001_DURATION = REST_START + timelineLength(EP001_SCENES);

export const Ep001Full: React.FC<{preview?: boolean}> = ({preview = true}) => (
  <AbsoluteFill style={{backgroundColor: '#000'}}>
    <Sequence durationInFrames={HOOK_PREVIEW_DURATION} name="Hook S01–S06">
      <HookContent endFade={false} />
    </Sequence>
    <Sequence from={REST_START} name="S07–S37">
      <InkReveal length={INK} x={40} y={55}>
        <Timeline scenes={EP001_SCENES} />
      </InkReveal>
    </Sequence>
    {/* channel-wide finishing layers */}
    <PaperTexture />
    <FilmGrain />
    <Vignette />
    {preview ? <PreviewBadge label="PRATINJAU · TANPA SUARA" /> : null}
  </AbsoluteFill>
);
