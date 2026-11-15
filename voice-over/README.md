# Voice-Over

Tempat naskah narasi dan file rekaman suara.

## Struktur

```
voice-over/
└── 004-marcus-aurelius/
    ├── script.md       ← Naskah narasi final
    ├── naskah-bersih-ai.md  ← Teks siap tempel untuk suara AI (per bab)
    └── audio/          ← File suara (.wav / .mp3), satu per bab
```

## Panduan Narasi

- **Nada**: dalam, tenang, berwibawa — seperti kakek bijak bercerita di depan perapian.
- **Tempo**: lambat (±130 kata per menit), banyak jeda.
- **Bahasa**: kalimat pendek dan kuat. Hindari istilah modern/slang.
- Tandai jeda di naskah dengan `[jeda]` dan penekanan dengan **tebal**.

## Format Audio

- WAV 48 kHz / 24-bit untuk master, MP3 untuk draf.
- Nama file: satu file per bab, mis. `001-bab-0-hook.wav`, `001-bab-1-judul.wav`, dst. (lihat `production-workflow/tahap/07-voice-over.md`)
