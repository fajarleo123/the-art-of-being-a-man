import React from 'react';
import {Composition} from 'remotion';
import {HookPreview, HOOK_PREVIEW_DURATION} from './episodes/ep001/HookPreview';
import {Ep001Full, EP001_DURATION, EP001_SILENT_DURATION} from './episodes/ep001/Full';
import {VIDEO} from './theme';
import {Short, SHORT, shortDuration} from './shorts/Short';
import {SHORT_A, SHORT_B} from './episodes/ep001/shorts';
import {Thumbnail, ThumbSpec} from './thumbnail/Thumbnail';

const THUMB_1: ThumbSpec = {image: '001-giacomo-casanova/images/P16-jendela-jenewa-malam.png', focus: {x: 70, y: 45}, zoom: 1.15, text: 'Pesona tak cukup', label: 'CASANOVA', side: 'left'};
const THUMB_2: ThumbSpec = {image: '001-giacomo-casanova/images/C2-closeup-casanova-tua.png', focus: {x: 70, y: 45}, zoom: 1.1, text: 'Pesona tak cukup', label: 'CASANOVA', side: 'left'};

const ShortA: React.FC = () => <Short spec={SHORT_A} />;
const ShortB: React.FC = () => <Short spec={SHORT_B} />;

const Thumb1: React.FC = () => <Thumbnail spec={THUMB_1} />;
const Thumb2: React.FC = () => <Thumbnail spec={THUMB_2} />;

export const RemotionRoot: React.FC = () => (
  <>
    {/* Episode 001 — final video with voice-over */}
    <Composition
      id="Ep001-Full"
      component={Ep001Full}
      durationInFrames={EP001_DURATION}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
      defaultProps={{voice: true}}
    />
    {/* Episode 001 — Shorts (9:16) */}
    {/* specs contain React layers, which cannot travel through serialized props: bind them in wrappers */}
    <Composition id="Ep001-ShortA" component={ShortA} durationInFrames={shortDuration(SHORT_A)} fps={VIDEO.fps} width={SHORT.width} height={SHORT.height} />
    <Composition id="Ep001-ShortB" component={ShortB} durationInFrames={shortDuration(SHORT_B)} fps={VIDEO.fps} width={SHORT.width} height={SHORT.height} />
    {/* Episode 001 — thumbnails (stills) */}
    <Composition id="Ep001-Thumb1" component={Thumb1} durationInFrames={1} fps={VIDEO.fps} width={1280} height={720} />
    <Composition id="Ep001-Thumb2" component={Thumb2} durationInFrames={1} fps={VIDEO.fps} width={1280} height={720} />
    {/* Silent previews (storyboard timing) */}
    <Composition
      id="Ep001-SilentPreview"
      component={Ep001Full}
      durationInFrames={EP001_SILENT_DURATION}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
      defaultProps={{voice: false, badge: 'PRATINJAU · TANPA SUARA'}}
    />
    <Composition
      id="Ep001-HookPreview"
      component={HookPreview}
      durationInFrames={HOOK_PREVIEW_DURATION}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
  </>
);
