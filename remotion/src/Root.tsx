import React from 'react';
import {Composition} from 'remotion';
import {HookPreview, HOOK_PREVIEW_DURATION} from './episodes/ep001/HookPreview';
import {Ep001Full, EP001_DURATION} from './episodes/ep001/Full';
import {VIDEO} from './theme';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="Ep001-HookPreview"
      component={HookPreview}
      durationInFrames={HOOK_PREVIEW_DURATION}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
    <Composition
      id="Ep001-Full"
      component={Ep001Full}
      durationInFrames={EP001_DURATION}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
      defaultProps={{preview: true}}
    />
  </>
);
