// Episode 001 — full video. With `voice` (default) the scenes follow the voice-over
// timing from timing.json (created by scripts/voice.mjs); without it, storyboard timing is used.
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {FilmGrain, PaperTexture, Vignette} from '../../components/Overlays';
import {PreviewBadge} from '../../components/Text';
import {applyVoice, VoiceTiming} from '../../engine/applyVoice';
import {SceneSpec, Timeline, timelineLength} from '../../engine/Timeline';
import {HOOK_SCENES} from './hookScenes';
import {EP001_SCENES} from './scenes';
import timing from './timing.json';
import voiceOptions from './voice-options.json';

// S07 carries one extra second in the storyboard version for the S06→S07 ink overlap;
// with voice timing the overlap is handled by the engine, so drop it there.
const storyboardScenes: SceneSpec[] = [
  ...HOOK_SCENES,
  ...EP001_SCENES.map((s) => (s.id === 'S07' ? {...s, dur: s.dur - 1} : s)),
];

// "[jeda panjang]" holds & chapter tails live in voice-options.json (also read by scripts/mix.mjs)
export const EP001_VOICED: SceneSpec[] = applyVoice(storyboardScenes, timing as VoiceTiming, voiceOptions);
export const EP001_STORYBOARD = storyboardScenes;

export const EP001_DURATION = timelineLength(EP001_VOICED);
export const EP001_SILENT_DURATION = timelineLength(EP001_STORYBOARD);

export const Ep001Full: React.FC<{voice?: boolean; badge?: string}> = ({voice = true, badge}) => (
  <AbsoluteFill style={{backgroundColor: '#000'}}>
    <Timeline scenes={voice ? EP001_VOICED : EP001_STORYBOARD} />
    {/* channel-wide finishing layers */}
    <PaperTexture />
    <FilmGrain />
    <Vignette />
    {badge ? <PreviewBadge label={badge} /> : null}
  </AbsoluteFill>
);
