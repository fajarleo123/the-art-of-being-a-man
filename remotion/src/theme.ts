// Channel palette & fonts, copied from master-style/color-palette.md
// and master-style/visual-guide.md (section 9).
// Fonts are loaded from local files (assets/fonts, synced to public/fonts)
// so rendering never depends on internet access.
import {continueRender, delayRender, staticFile} from 'remotion';

export const colors = {
  burgundy: '#4A0E1A',
  burgundyDeep: '#2B0A10',
  leather: '#5C3A21',
  ink: '#2E1F14',
  paper: '#E8DCC4',
  paperFaded: '#C9B79C',
  gold: '#B08D57',
  goldDim: '#8A6D3B',
  charcoal: '#141010',
  night: '#1F2A36',
  olive: '#3F4A2E',
  rust: '#7A2E1C',
} as const;

const faces: {family: string; file: string; style?: string; weight?: string}[] = [
  {family: 'Cinzel', file: 'Cinzel-latin.woff2', weight: '400 900'},
  {family: 'Cormorant Garamond', file: 'CormorantGaramond-latin.woff2', weight: '300 700'},
  {family: 'Cormorant Garamond', file: 'CormorantGaramond-Italic-latin.woff2', style: 'italic', weight: '300 700'},
  {family: 'Courier Prime', file: 'CourierPrime-latin.woff2', weight: '400'},
];

if (typeof document !== 'undefined') {
  const handle = delayRender('Loading channel fonts');
  Promise.all(
    faces.map((f) => {
      const face = new FontFace(f.family, `url(${staticFile(`fonts/${f.file}`)}) format('woff2')`, {
        style: f.style ?? 'normal',
        weight: f.weight ?? '400',
      });
      return face.load().then((loaded) => {
        document.fonts.add(loaded);
      });
    }),
  )
    .catch((err) => console.error('Font loading failed', err))
    .finally(() => continueRender(handle));
}

export const fonts = {
  title: "'Cinzel', serif",
  body: "'Cormorant Garamond', serif",
  mono: "'Courier Prime', monospace",
};

export const VIDEO = {width: 1920, height: 1080, fps: 30} as const;
