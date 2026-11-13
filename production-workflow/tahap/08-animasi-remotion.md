# Tahap 8 — Animasi (Remotion)

> ⏳ **Status SOP:** rencana. Remotion **belum dipasang**; dibangun sekali
> saat episode 001 mencapai tahap ini, lalu dipakai ulang untuk semua episode.

**Hasil:** proyek di `remotion/` + data adegan per episode.

## Konsep: dibangun sekali, dipakai berulang
Komponen standar (dibuat satu kali):

| Komponen | Fungsi |
|---|---|
| `ParallaxScene` | Menyusun layer `bg/mid/char/fg/fx` dengan kecepatan 0.2× / 0.5× / 1.0× / 1.5× / 1.2–2.0× |
| `CameraMove` | push-in, pull-out, pan, tilt dengan *easing* (persentase dari storyboard) |
| `PaperTexture` + `FilmGrain` + `Vignette` | Lapisan kertas tua di atas semua frame |
| `PageTurn` | Transisi halaman buku (pembuka/penutup) |
| `InkBleed` | Transisi tinta menyebar |
| `ChapterTitle` | Judul bab (Cinzel, emas antik) |
| `QuoteCard` | Kutipan + rujukan, tampil ≥4 dtk |
| `Particles` | Debu, salju, bara, abu, hujan tinta |

**Per episode** cukup membuat **satu file data** (mis. `remotion/src/episodes/NNN.ts`)
yang diterjemahkan dari storyboard: daftar adegan, durasi, file gambar, gerak
kamera, efek, transisi, dan file audio.

## Langkah per episode
1. Ubah storyboard → file data episode.
2. Sesuaikan durasi dengan rekaman voice-over.
3. Pratinjau, periksa sinkronisasi narasi ↔ gambar.

## Aturan
- Warna diambil dari `master-style/color-palette.md` (disalin ke satu file tema).
- Remotion gratis untuk individu & tim kecil; render dilakukan **lokal / di sesi
  cloud Claude**, tanpa layanan cloud berbayar.

## ✋ Gerbang
Kirim pratinjau 1 bab (hook) sebelum merakit semuanya.
