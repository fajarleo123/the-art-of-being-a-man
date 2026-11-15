# Remotion — Mesin Animasi Video

> **Status:** 🟡 Dibangun (uji coba hook episode 001)
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
│   └── episodes/ep001/     ← Adegan khusus episode 001
└── public/, out/, node_modules/  ← dibuat otomatis, TIDAK disimpan di GitHub
```

## Perintah (dijalankan Claude)

```bash
npm install
```
```bash
npm run render:hook-001
```

Hasil video ada di `remotion/out/` dan dikirim ke pemilik proyek lewat chat.

## Catatan Teknis
- Font dimuat dari `assets/fonts/` (file lokal), sehingga render tidak butuh internet.
- Browser render: Chromium headless bawaan sesi cloud (`/opt/pw-browsers/...`); bisa diganti lewat variabel `REMOTION_BROWSER`.
- Posisi efek (cahaya ponsel, lilin, lentera) ditulis dalam koordinat gambar 0–1, jadi ikut bergerak saat kamera zoom.
