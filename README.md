# The Art of Being a Man

Studio produksi video **storytelling sinematik** tentang pelajaran hidup seorang pria,
diambil dari kisah tokoh-tokoh besar masa lalu.

Setiap episode mengangkat satu tokoh sejarah, satu momen penting dalam hidupnya,
dan satu pelajaran yang bisa diterapkan pria masa kini.

---

## Gaya Visual (Ringkas)

**Vintage Storybook + Dark Cinematic Animation**

- Ilustrasi semi-realistis bergaya buku cerita klasik Eropa
- Tekstur watercolor, tinta, dan kertas antik
- Warna burgundy gelap, cokelat, krem, dan emas antik
- Animasi 2.5D parallax, kamera bergerak perlahan, cahaya dramatis

Detail lengkap ada di folder `master-style/`.

---

## Struktur Folder

```
the-art-of-being-a-man/
├── README.md                  ← File ini (gambaran umum proyek)
├── CLAUDE.md                  ← Instruksi tetap untuk Claude
├── production-workflow/       ← SOP produksi + template episode baru
├── master-style/              ← "Kitab aturan" gaya visual seluruh channel
│   ├── visual-guide.md        ← Aturan ilustrasi, komposisi, tekstur
│   ├── animation-rules.md     ← Aturan gerak kamera, parallax, transisi
│   └── color-palette.md       ← Daftar warna resmi + kode HEX
├── episodes/                  ← Satu folder per episode
│   └── 001-marcus-aurelius/   ← Episode pertama
├── character-library/         ← Lembar karakter tokoh (agar konsisten)
├── remotion/                  ← (Nanti) kode animasi video
├── voice-over/                ← Naskah narasi & file suara
├── assets/                    ← Bahan visual & audio bersama
└── dashboard/                 ← (Nanti) panel untuk memantau produksi
```

### Fungsi setiap folder

| Folder | Fungsi | Status |
|---|---|---|
| `production-workflow/` | **SOP produksi permanen**: 10 tahap dari brief sampai render, gerbang persetujuan, formula episode 5 menit, dan template dokumen. Episode baru cukup dimulai dengan nama tokoh + tema. | ✅ Siap |
| `master-style/` | Panduan gaya yang **wajib diikuti** semua episode, supaya channel punya identitas visual yang konsisten. | ✅ Siap |
| `episodes/` | Tempat kerja per episode: konsep, naskah, daftar adegan (storyboard). Format nama: `NNN-nama-tokoh`. | ✅ Episode 001 dimulai |
| `character-library/` | Deskripsi fisik, pakaian, dan ekspresi tiap tokoh. Dipakai ulang jika tokoh muncul di beberapa episode. | 📄 Template siap |
| `remotion/` | Nanti berisi proyek [Remotion](https://www.remotion.dev/) (membuat video dengan kode). **Belum dipasang.** | ⏳ Menunggu |
| `voice-over/` | Naskah narasi final dan file rekaman suara per episode. | 📄 Panduan siap |
| `assets/` | Bahan yang dipakai bersama: tekstur kertas, musik, efek suara, font, overlay. | 📄 Panduan siap |
| `dashboard/` | Nanti berisi halaman sederhana untuk melihat progres semua episode. **Belum dibuat.** | ⏳ Menunggu |

---

## Alur Kerja Produksi (Rencana)

1. **Riset & Konsep** → tulis di `episodes/NNN-nama/README.md`
2. **Naskah** → narasi di `voice-over/`
3. **Karakter** → lembar karakter di `character-library/`
4. **Ilustrasi** → simpan gambar per lapisan (layer) di folder episode
5. **Animasi** → dirakit di `remotion/`
6. **Suara & Musik** → dari `voice-over/` dan `assets/`
7. **Render & Publikasi**

---

## Aturan Proyek

- Tidak ada deployment ke cloud (AWS, dll.) tanpa persetujuan.
- Tidak memakai layanan berbayar tanpa persetujuan.
- Setiap tahap baru harus disetujui pemilik proyek terlebih dahulu.
