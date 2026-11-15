# Remotion — Mesin Animasi Video

> **Status:** 🟡 Episode 001 lengkap 37 adegan (pratinjau tanpa suara)
> Remotion 4.0.539 (gratis untuk individu & tim kecil). Render dilakukan di sesi cloud Claude, **tanpa AWS**.

## Isi Folder

```
remotion/
├── package.json            ← Daftar paket (versi dikunci)
├── remotion.config.ts      ← Pengaturan render (browser, kualitas)
├── scripts/sync-assets.mjs ← Menyalin gambar, suara, dan font ke public/
├── src/
│   ├── index.ts            ← Titik masuk
│   ├── Root.tsx            ← Daftar video (komposisi)
│   ├── theme.ts            ← Warna & font channel (dari master-style)
│   ├── components/         ← Komponen yang DIPAKAI ULANG di semua episode
│   │   ├── KenBurns.tsx        gerak kamera di dalam gambar (zoom, geser)
│   │   ├── Overlays.tsx        tekstur kertas, butiran film, vignette, cahaya, kilat, fade
│   │   ├── Particles.tsx       debu, salju, bara, hujan
│   │   ├── Text.tsx            kartu judul, label tempat/tahun, subtitle
│   │   ├── Transitions.tsx     halaman buku dibalik, fade
│   │   └── Notifications.tsx   gelembung pesan (tanpa tulisan)
│   │   ├── Cards.tsx           judul bab & kartu kutipan
│   │   ├── MapRoute.tsx        peta kuno dengan garis perjalanan tinta merah
│   │   ├── GlassWriting.tsx    tulisan tergores di kaca (muncul / berkilau)
│   │   └── BookEnd.tsx         buku penutup + pertanyaan untuk komentar
│   ├── engine/Timeline.tsx ← "Mesin adegan": daftar adegan (data) → video, termasuk transisi
│   └── episodes/ep001/     ← Episode 001: HookPreview.tsx (S01–S06), scenes.tsx (S07–S37 sebagai data), Full.tsx
└── public/, out/, node_modules/  ← dibuat otomatis, TIDAK disimpan di GitHub
```

## Perintah (dijalankan Claude)

```bash
npm install
```
```bash
npm run render:hook-001
```
```bash
npm run render:full-001
```

## Cara membuat episode baru
1. Salin `src/episodes/ep001/scenes.tsx` menjadi folder episode baru.
2. Isi satu objek per adegan dari storyboard: gambar, gerak kamera (`from`/`to`), transisi, cahaya, partikel, judul bab, label tempat, kutipan, narasi.
3. Daftarkan komposisinya di `src/Root.tsx`.

Hasil video ada di `remotion/out/` dan dikirim ke pemilik proyek lewat chat.

## Catatan Teknis
- Font dimuat dari `assets/fonts/` (file lokal), sehingga render tidak butuh internet.
- Browser render: Chromium headless bawaan sesi cloud (`/opt/pw-browsers/...`); bisa diganti lewat variabel `REMOTION_BROWSER`.
- Posisi efek (cahaya ponsel, lilin, lentera) ditulis dalam koordinat gambar 0–1, jadi ikut bergerak saat kamera zoom.
