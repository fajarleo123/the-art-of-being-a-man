// Episode 001 — Giacomo Casanova: scenes S07–S37.
// Source: episodes/001-giacomo-casanova/storyboard.md (approved).
// Narration lines are copied from voice-over/001-giacomo-casanova/script.md (locked).
// S01–S06 (hook + title) live in HookPreview.tsx.
import React from 'react';
import {Easing} from 'remotion';
import {BookEnd} from '../../components/BookEnd';
import {GlassWriting} from '../../components/GlassWriting';
import {FULL} from '../../components/KenBurns';
import {MapRoute} from '../../components/MapRoute';
import {SceneSpec} from '../../engine/Timeline';
import {colors} from '../../theme';

const img = (name: string) => `001-giacomo-casanova/images/${name}`;
const I = {
  P02: img('P02-venesia-karnaval.png'),
  P03: img('P03-anak-di-jendela.png'),
  P04: img('P04-pria-topeng-cermin.png'),
  P05: img('P05-ruang-ganti-topeng.png'),
  P06: img('P06-makan-malam-berdua.png'),
  P07: img('P07-salon-casanova-pergi.png'),
  P08: img('P08-surat-surat-cinta.png'),
  P09: img('P09-ponsel-pintu-terbuka.png'),
  P10: img('P10-atap-piombi.png'),
  P11: img('P11-gondola-kabut.png'),
  P12: img('P12-tepi-thames.png'),
  P13: img('P13-pintu-tertutup-london.png'),
  P14: img('P14-berjalan-bersama-henriette.png'),
  P15: img('P15-jenewa-henriette-pergi.png'),
  P16: img('P16-jendela-jenewa-malam.png'),
  P17: img('P17-jenewa-sepuluh-tahun.png'),
  P18: img('P18-kastil-dux.png'),
  P19: img('P19-perpustakaan-dux.png'),
  P20: img('P20-pria-fajar-jendela.png'),
  C1: img('C1-closeup-menggores-kaca.png'),
  C2: img('C2-closeup-casanova-tua.png'),
};

const WARM = 'rgba(255,190,110,0.6)';
const HENRIETTE = 'Tu oublieras aussi Henriette';

const EuropeMap: React.FC<{durationInFrames: number}> = ({durationInFrames}) => (
  <MapRoute
    durationInFrames={durationInFrames}
    home={{name: 'VENESIA', lon: 12.33, lat: 45.44}}
    route={[
      {name: '', lon: 12.33, lat: 45.44},
      {name: 'Paris', lon: 2.35, lat: 48.86},
      {name: 'Amsterdam', lon: 4.9, lat: 52.37},
      {name: 'Stuttgart', lon: 9.18, lat: 48.78},
      {name: 'Jenewa', lon: 6.14, lat: 46.2},
      {name: 'London', lon: -0.12, lat: 51.5},
      {name: 'Berlin', lon: 13.4, lat: 52.52},
      {name: 'Riga', lon: 24.1, lat: 56.95},
      {name: 'Warsawa', lon: 21.01, lat: 52.23},
      {name: 'Wina', lon: 16.37, lat: 48.21},
      {name: 'Madrid', lon: -3.7, lat: 40.42},
      {name: 'Barcelona', lon: 2.17, lat: 41.39},
    ]}
  />
);

export const EP001_SCENES: SceneSpec[] = [
  // ── BAB 2 — ANAK YANG DITITIPKAN ──
  {
    id: 'S07',
    // 9 s in the storyboard + 1 s that overlaps the end of S06 (ink transition)
    dur: 10,
    image: I.P03,
    from: FULL,
    to: {x: 0.43, y: 0.56, scale: 1.12},
    sepia: 0.55,
    glows: [{x: 0.025, y: 0.2, radius: 60, intensity: 0.6}],
    particles: [{kind: 'dust', count: 25}],
    captions: [
      'Ia lahir di Venesia, dari sepasang aktor keliling. Ia dibesarkan neneknya.',
      'Menurut memoarnya, ia merasa dititipkan, lalu dilupakan.',
    ],
  },
  {
    id: 'S08',
    dur: 11,
    transitionIn: 'ink',
    image: I.P02,
    from: {x: 0.58, y: 0.42, scale: 1.45},
    to: {x: 0.62, y: 0.36, scale: 1.75},
    glows: [
      {x: 0.445, y: 0.31, radius: 70, flicker: 0.15},
      {x: 0.925, y: 0.13, radius: 80, flicker: 0.15},
    ],
    particles: [{kind: 'dust', count: 30}],
    captions: [
      'Mungkin sejak itulah ia belajar satu hal: membuat orang menyukainya.',
      'Tapi membuat orang datang… berbeda dengan membuat mereka tinggal.',
    ],
  },
  // ── BAB 3 — TOPENG ──
  {
    id: 'S09',
    dur: 10,
    transitionIn: 'fade',
    image: I.P04,
    from: FULL,
    to: {x: 0.68, y: 0.45, scale: 1.12},
    chapter: 'I · TOPENG',
    glows: [{x: 0.93, y: 0.58, radius: 160, intensity: 0.5}],
    captions: [
      'Musuh pertama: topeng.',
      'Kita mengenalnya. Pura-pura menyukai apa yang ia sukai. Pura-pura lebih mapan.',
      'Pura-pura tak pernah terluka. Semua demi terlihat menarik.',
    ],
  },
  {
    id: 'S10',
    dur: 12,
    transitionIn: 'dissolve',
    image: I.P05,
    from: {x: 0.22, y: 0.52, scale: 1.45},
    to: {x: 0.8, y: 0.5, scale: 1.45},
    easing: Easing.inOut(Easing.sin),
    glows: [
      {x: 0.04, y: 0.42, radius: 90},
      {x: 0.77, y: 0.5, radius: 70},
    ],
    particles: [{kind: 'dust', count: 30}],
    captions: [
      'Casanova hidup di Venesia, kota karnaval dan topeng. Dan ia memakai semuanya.',
      'Calon pendeta. Prajurit. Pemain biola.',
      'Bahkan "ahli ilmu gaib" bagi seorang senator.',
    ],
  },
  {
    id: 'S11',
    dur: 6,
    image: I.P05,
    from: {x: 0.645, y: 0.4, scale: 2.2},
    to: {x: 0.645, y: 0.4, scale: 2.3},
    glows: [{x: 0.77, y: 0.5, radius: 70}],
    captions: ['Setiap topeng membuatnya diterima. Tak satu pun membuatnya dikenal.'],
  },
  {
    id: 'S12',
    dur: 7,
    transitionIn: 'dissolve',
    image: I.P04,
    from: {x: 0.62, y: 0.4, scale: 1.55},
    to: {x: 0.62, y: 0.4, scale: 1.62},
    glows: [{x: 0.93, y: 0.58, radius: 160, intensity: 0.6}],
    captions: ['Wanita yang tepat tidak jatuh cinta pada topengmu. Ia ingin melihat wajah di baliknya.'],
  },
  // ── BAB 4 — HAUS AKAN YANG BARU ──
  {
    id: 'S13',
    dur: 10,
    transitionIn: 'fade',
    image: I.P06,
    from: FULL,
    to: {x: 0.45, y: 0.5, scale: 1.08},
    chapter: 'II · HAUS AKAN YANG BARU',
    glows: [
      {x: 0.585, y: 0.5, radius: 120, flicker: 0.15},
      {x: 0.4, y: 0.65, radius: 110, color: 'rgba(190,214,232,0.5)', intensity: 0.6, flicker: 0.03},
    ],
    particles: [{kind: 'rain', count: 40, area: {x: 0.22, y: 0.02, w: 0.75, h: 0.48}, opacity: 0.5}],
    captions: [
      'Musuh kedua: haus akan yang baru.',
      'Ketika hubungan mulai terasa biasa, ada suara yang berbisik: mungkin ada yang lebih baik di luar sana.',
    ],
  },
  {
    id: 'S14',
    dur: 10,
    transitionIn: 'dissolve',
    image: I.P07,
    from: {x: 0.55, y: 0.5, scale: 1.1},
    to: FULL,
    glows: [
      {x: 0.36, y: 0.55, radius: 110, flicker: 0.15},
      {x: 0.86, y: 0.1, radius: 70, flicker: 0.1},
    ],
    captions: [
      'Casanova selalu mendengarkan suara itu. Memoarnya mencatat sekitar seratus dua puluh nama.',
      'Dan ia selalu pergi, tepat ketika segalanya mulai menjadi biasa.',
    ],
  },
  {
    id: 'S15',
    dur: 8,
    transitionIn: 'dissolve',
    image: I.P08,
    from: FULL,
    brightness: {from: 0.7, to: 0.7},
    glows: [{x: 0.86, y: 0.3, radius: 150, flicker: 0.15}],
    quote: {
      text: 'Memanjakan segala yang menyenangkan indraku selalu menjadi urusan utama dalam hidupku.',
      source: '— Casanova, Histoire de ma vie',
    },
    captions: ['"Memanjakan segala yang menyenangkan indraku," tulisnya, "selalu menjadi urusan utama dalam hidupku."'],
  },
  {
    id: 'S16',
    dur: 7,
    image: I.P08,
    from: {x: 0.72, y: 0.45, scale: 1.5},
    to: {x: 0.74, y: 0.45, scale: 1.6},
    brightness: {from: 1, to: 0.45, start: 0.3, end: 0.9},
    glows: [{x: 0.86, y: 0.3, radius: 150, flicker: 0.15}],
    particles: [{kind: 'dust', count: 20}],
    captions: ['Ia mengenal ratusan awal yang indah. Tapi tak pernah tahu rasanya bertahan sampai akhir.'],
  },
  // ── BAB 5 — LARI ──
  {
    id: 'S17',
    dur: 7,
    transitionIn: 'fade',
    image: I.P09,
    from: FULL,
    to: {x: 0.35, y: 0.7, scale: 1.08},
    chapter: 'III · LARI',
    blur: {from: 0, to: 0},
    glows: [{x: 0.37, y: 0.84, radius: 140, color: 'rgba(190,214,232,0.5)', intensity: 0.7, flicker: 0.25, seed: 3}],
    captions: ['Musuh ketiga: lari.', 'Menghilang ketika ada masalah. Diam ketika seharusnya bicara.'],
  },
  {
    id: 'S18a',
    dur: 6,
    image: I.P10,
    from: {x: 0.35, y: 0.55, scale: 1.25},
    to: {x: 0.6, y: 0.5, scale: 1.25},
    place: 'Venesia, 1756',
    glows: [{x: 0.77, y: 0.08, radius: 120, color: 'rgba(240,220,170,0.5)', intensity: 0.6, flicker: 0.03}],
    captions: ['Tahun 1756, Casanova kabur dari penjara di bawah atap timah istana Doge.'],
  },
  {
    id: 'S18b',
    dur: 3,
    image: I.P11,
    from: FULL,
    to: {x: 0.5, y: 0.55, scale: 1.06},
    glows: [{x: 0.57, y: 0.58, radius: 70, flicker: 0.2}],
    captions: ['Di tengah malam, ia merayap melintasi atap, lalu menghilang dengan gondola.'],
  },
  {
    id: 'S19',
    dur: 12,
    transitionIn: 'dissolve',
    render: EuropeMap,
    captions: [
      'Pelarian itu luar biasa. Tapi setelahnya, ia tak bisa pulang ke Venesia selama delapan belas tahun.',
      'Dan ia terus berlari: dari utang, dari skandal, dari kota ke kota.',
    ],
  },
  {
    id: 'S20',
    dur: 7,
    transitionIn: 'dissolve',
    image: I.P11,
    from: FULL,
    wash: {color: colors.paperFaded, blend: 'screen', from: 0, to: 0.55, start: 0.2, end: 0.95},
    glows: [{x: 0.57, y: 0.58, radius: 70, flicker: 0.2}],
    captions: ['Pria yang selalu kabur… akhirnya tak punya tempat untuk pulang.'],
  },
  // ── BAB 6 — DITOLAK ──
  {
    id: 'S21',
    dur: 10,
    transitionIn: 'fade',
    image: I.P13,
    from: FULL,
    to: {x: 0.3, y: 0.45, scale: 1.12},
    place: 'London, 1763',
    glows: [
      {x: 0.66, y: 0.22, radius: 110, flicker: 0.12},
      {x: 0.72, y: 0.32, radius: 60, flicker: 0.12, seed: 7},
    ],
    captions: [
      'Lalu, di London, keadaan berbalik.',
      'Seorang wanita muda mempermainkannya, seperti ia dulu mempermainkan banyak hati.',
    ],
  },
  {
    id: 'S22',
    dur: 8,
    transitionIn: 'dissolve',
    image: I.P12,
    from: {x: 0.3, y: 0.55, scale: 1.5},
    to: {x: 0.3, y: 0.55, scale: 1.55},
    glows: [{x: 0.14, y: 0.08, radius: 90, flicker: 0.12}],
    captions: ['Menurut memoarnya, ia begitu hancur hingga berjalan ke tepi Sungai Thames, ingin mengakhiri segalanya.'],
  },
  {
    id: 'S23',
    dur: 7,
    image: I.P12,
    from: {x: 0.3, y: 0.55, scale: 1.55},
    to: FULL,
    wash: {color: colors.night, from: 0, to: 0.35, start: 0.3},
    glows: [{x: 0.14, y: 0.08, radius: 90, flicker: 0.12}],
    captions: ['Pria yang terbiasa pergi… akhirnya tahu rasanya ditinggalkan.'],
  },
  // ── BAB 7 — PUNCAK: HENRIETTE ──
  {
    id: 'S24',
    dur: 8,
    transitionIn: 'ink',
    image: I.P14,
    from: FULL,
    blur: {from: 14, to: 0, start: 0.1, end: 0.6},
    chapter: 'IV · HENRIETTE',
    particles: [{kind: 'dust', count: 35}],
    captions: [
      'Tapi luka terdalamnya tidak datang dari wanita yang menolaknya.',
      'Luka itu datang dari satu wanita yang pernah benar-benar ia cintai.',
    ],
  },
  {
    id: 'S25',
    dur: 9,
    image: I.P14,
    from: FULL,
    to: {x: 0.48, y: 0.5, scale: 1.12},
    particles: [{kind: 'dust', count: 45}],
    captions: [
      'Ia menyebutnya Henriette. Mereka bepergian bersama.',
      'Dan untuk pertama kalinya, pria yang selalu pergi… tidak ingin pergi.',
    ],
  },
  {
    id: 'S26',
    dur: 9,
    transitionIn: 'dissolve',
    image: I.P15,
    from: {x: 0.5, y: 0.52, scale: 1.12},
    to: FULL,
    place: 'Jenewa',
    glows: [
      {x: 0.24, y: 0.47, radius: 70, flicker: 0.12},
      {x: 0.26, y: 0.15, radius: 120, flicker: 0.08},
    ],
    captions: [
      'Sampai suatu hari, di Jenewa, justru Henriette yang pergi.',
      'Ia meminta Casanova untuk tidak mencarinya. Dan Casanova menurut.',
    ],
  },
  {
    id: 'S27',
    dur: 6,
    transitionIn: 'fade',
    image: I.P16,
    from: FULL,
    to: {x: 0.7, y: 0.35, scale: 1.25},
    glows: [{x: 0.16, y: 0.52, radius: 130, flicker: 0.15}],
    captions: ['Malam itu, dengan berlian di cincinnya, ia menggores kaca jendela kamarnya:'],
  },
  {
    id: 'S28',
    dur: 8,
    image: I.C1,
    from: FULL,
    glows: [{x: 0.035, y: 0.2, radius: 110, flicker: 0.15}],
    imageLayer: ({durationInFrames}) => (
      <GlassWriting text={HENRIETTE} x={0.74} y={0.36} size={44} mode="write" start={10} length={Math.round(durationInFrames * 0.55)} />
    ),
    captions: ['"Kau pun akan melupakan Henriette."'],
  },
  {
    id: 'S29',
    dur: 8,
    transitionIn: 'fade',
    image: I.P17,
    from: FULL,
    to: {x: 0.72, y: 0.33, scale: 1.18},
    place: 'Sepuluh tahun kemudian',
    particles: [{kind: 'dust', count: 45, area: {x: 0.3, y: 0, w: 0.5, h: 0.8}}],
    imageLayer: () => <GlassWriting text={HENRIETTE} x={0.74} y={0.29} size={20} rotate={-8} mode="glint" start={60} length={150} />,
    captions: ['Sepuluh tahun kemudian, ia kembali ke kamar yang sama.', 'Tulisan itu masih ada di kaca.'],
  },
  {
    id: 'S30',
    dur: 8,
    image: I.P17,
    from: {x: 0.74, y: 0.3, scale: 2.3},
    imageLayer: () => <GlassWriting text={HENRIETTE} x={0.74} y={0.29} size={20} rotate={-8} mode="glint" start={0} length={220} />,
    captions: ['Ia menulis bahwa ia akan lupa. Kaca itu membuktikan… ia tidak pernah lupa.'],
  },
  {
    id: 'S31',
    dur: 9,
    transitionIn: 'dissolve',
    image: I.P15,
    from: {x: 0.85, y: 0.8, scale: 3.2},
    to: {x: 0.85, y: 0.78, scale: 3.3},
    wash: {color: colors.night, from: 0.15, to: 0.3},
    captions: [
      'Banyak pria baru ingin bertahan ketika yang dicintainya sudah pergi.',
      'Jika kamu menemukannya, perjuangkan dia sekarang. Bukan nanti.',
    ],
  },
  // ── BAB 8 — PENUTUP ──
  {
    id: 'S32',
    dur: 6,
    transitionIn: 'fade',
    image: I.P18,
    from: FULL,
    to: {x: 0.72, y: 0.38, scale: 1.1},
    place: 'Bohemia, 1798',
    glows: [{x: 0.725, y: 0.36, radius: 60, color: 'rgba(255,200,120,0.8)', intensity: 0.8, flicker: 0.1}],
    particles: [{kind: 'snow', count: 120, opacity: 0.8}],
    captions: ['Tahun 1798, di sebuah kastil sunyi di Bohemia, seorang pustakawan tua wafat.'],
  },
  {
    id: 'S33',
    dur: 6,
    transitionIn: 'dissolve',
    image: I.P19,
    from: {x: 0.46, y: 0.57, scale: 1.7},
    to: {x: 0.44, y: 0.58, scale: 1.85},
    glows: [{x: 0.61, y: 0.5, radius: 160, flicker: 0.12, seed: 4}],
    particles: [{kind: 'dust', count: 25}],
    captions: ['Di masa tuanya, ia menulis ribuan halaman tentang wanita-wanita yang sudah lama pergi.'],
  },
  {
    id: 'S34',
    dur: 8,
    image: I.C2,
    from: FULL,
    to: {x: 0.6, y: 0.42, scale: 1.08},
    glows: [{x: 0.94, y: 0.62, radius: 220, flicker: 0.12, seed: 5}],
    captions: [
      'Ia menghabiskan hidupnya memikat wanita.',
      'Dan menghabiskan masa tuanya menulis tentang mereka… sendirian.',
    ],
  },
  {
    id: 'S35',
    dur: 7,
    transitionIn: 'flash',
    image: I.P20,
    from: {x: 0.3, y: 0.7, scale: 1.5},
    to: {x: 0.68, y: 0.45, scale: 1.25},
    particles: [{kind: 'dust', count: 40}],
    glows: [{x: 0.86, y: 0.48, radius: 260, color: 'rgba(255,200,130,0.5)', intensity: 0.6, flicker: 0.02}],
    captions: ['Pesona membuat wanita tertarik. Tapi hanya karakter yang membuat mereka bertahan.'],
  },
  {
    id: 'S36',
    dur: 7,
    image: I.P20,
    from: {x: 0.65, y: 0.48, scale: 1.25},
    to: FULL,
    moveEnd: 0.8,
    brightness: {from: 1, to: 1.12},
    particles: [{kind: 'dust', count: 40}],
    glows: [{x: 0.86, y: 0.48, radius: 300, color: 'rgba(255,200,130,0.5)', intensity: 0.75, flicker: 0.02}],
    captions: ['Jangan menjadi pria yang dikenang banyak wanita.', 'Jadilah pria yang membuat satu wanita tak ingin pergi.'],
  },
  {
    id: 'S37',
    dur: 6,
    transitionIn: 'page',
    render: ({durationInFrames}) => <BookEnd durationInFrames={durationInFrames} question="Memikat, atau membuatnya tetap tinggal?" />,
    captions: ['Menurutmu, mana yang lebih sulit: memikat seseorang, atau membuatnya tetap tinggal? Tulis di kolom komentar.'],
  },
];
