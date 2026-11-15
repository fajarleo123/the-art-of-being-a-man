import React from 'react';
import {Composition} from 'remotion';
import {HookPreview, HOOK_PREVIEW_DURATION} from './episodes/ep001/HookPreview';
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
  </>
);
