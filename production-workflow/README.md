# SOP Produksi — The Art of Being a Man

> **Prosedur standar untuk membuat setiap episode.**
> Episode 001 (Marcus Aurelius) adalah contoh lengkap yang mengikuti SOP ini.

---

## 🚀 Cara Memulai Episode Baru

Pemilik proyek **cukup mengirim satu pesan**:

```
Episode baru: <nama tokoh>
Tema: <tema / pelajaran utama>
```

Contoh:

```
Episode baru: Miyamoto Musashi
Tema: Disiplin dan Jalan Hidup Seorang Pria
```

Setelah itu, Claude mengikuti tahap-tahap di bawah secara berurutan.
**Setiap tahap berhenti di gerbang persetujuan ✋**, dan tahap berikutnya
baru dimulai setelah pemilik proyek menyetujui.

---

## 🗺️ Peta Tahapan

| # | Tahap | Hasil (file) | Panduan | Template |
|---|---|---|---|---|
| 0 | **Brief** | `episodes/NNN-tokoh/README.md` | [tahap/00-brief.md](tahap/00-brief.md) | [templates/episode-brief.md](templates/episode-brief.md) |
| 1 | **Riset** | `episodes/NNN-tokoh/research.md` | [tahap/01-riset.md](tahap/01-riset.md) | [templates/research.md](templates/research.md) |
| 2 | **Kerangka** | `episodes/NNN-tokoh/script-outline.md` | [tahap/02-kerangka.md](tahap/02-kerangka.md) | [templates/script-outline.md](templates/script-outline.md) |
| 3 | **Naskah narasi** | `voice-over/NNN-tokoh/script.md` | [tahap/03-naskah.md](tahap/03-naskah.md) | [templates/script.md](templates/script.md) |
| 4 | **Desain karakter** | `episodes/NNN-tokoh/character-design.md` | [tahap/04-desain-karakter.md](tahap/04-desain-karakter.md) | [templates/character-design.md](templates/character-design.md) |
| 5 | **Storyboard + paket prompt** | `episodes/NNN-tokoh/storyboard.md` + `image-prompts.md` | [tahap/05-storyboard.md](tahap/05-storyboard.md) | [templates/storyboard.md](templates/storyboard.md) |
| 6 | **Gambar AI** | `episodes/NNN-tokoh/images/` | [tahap/06-gambar-ai.md](tahap/06-gambar-ai.md) | — |
| 7 | **Voice-over** | `voice-over/NNN-tokoh/audio/` | [tahap/07-voice-over.md](tahap/07-voice-over.md) | — |
| 8 | **Animasi (Remotion)** | `remotion/` | [tahap/08-animasi-remotion.md](tahap/08-animasi-remotion.md) | — |
| 9 | **Render & publikasi** | file MP4 + thumbnail + deskripsi | [tahap/09-render-publikasi.md](tahap/09-render-publikasi.md) | — |

Tahap 0–5 adalah **perencanaan** (hanya dokumen). Tahap 6–9 adalah
**produksi** (gambar, suara, video).

```
Brief → Riset → Kerangka → Naskah → Karakter → Storyboard ─┬→ Gambar AI ──┬→ Animasi → Render
                                                            └→ Voice-over ─┘
```

Gambar AI dan voice-over boleh dikerjakan bersamaan setelah storyboard disetujui.

---

## ✋ Gerbang Persetujuan

Di akhir setiap tahap, Claude wajib:
1. Menyimpan file dan mengirimnya ke GitHub.
2. Menjelaskan hasilnya secara singkat dalam bahasa sederhana.
3. Menuliskan **keputusan yang perlu diambil** (jika ada).
4. **Berhenti dan menunggu** persetujuan sebelum lanjut.

Status di bagian atas setiap dokumen:
- 🟡 **Draf** — menunggu persetujuan
- ✅ **Disetujui** — sudah dikunci; perubahan berikutnya harus diminta pemilik proyek

> **Aturan kunci:** dokumen yang sudah ✅ disetujui **tidak boleh diubah**
> oleh tahap berikutnya. Contoh: storyboard tidak boleh mengubah kalimat naskah.

---

## 🎬 Formula Episode (Standar 5 Menit)

Semua episode memakai kerangka yang sama. Yang berganti hanya tokoh, kisah, dan "musuh batin"-nya.

| # | Bab | Durasi | Isi |
|---|---|---|---|
| 0 | **Hook** | ±35 dtk | Pergulatan pria modern (memakai **Pria Tanpa Zaman**) → perkenalan tokoh tanpa menyebut nama |
| 1 | **Judul** | ±10 dtk | Nama tokoh + kartu judul (transisi halaman buku) |
| 2 | **Prinsip inti** | ±25 dtk | Siapa tokoh ini + satu gagasan kunci yang membingkai seluruh video |
| 3–5 | **Tiga pelajaran / musuh batin** | ±35–40 dtk masing-masing | Pola: *Pergulatan modern → Kisah nyata → Kutipan/prinsip → Penerapan* |
| 6 | **Puncak** ⭐ | ±75 dtk | Kisah paling dramatis dan paling terdokumentasi dari hidup tokoh |
| 7 | **Penutup** | ±45 dtk | Akhir hidup / warisan → ironi sejarah (jika ada) → kalimat pamungkas → kembali ke Pria Tanpa Zaman |

**Hitungan dasar:** ±130 kata per menit → **±550–650 kata** narasi untuk 5 menit,
**35–40 adegan** dengan rata-rata ±8 detik, memakai **±25–30 gambar AI**
(gambar dipakai ulang untuk beberapa adegan; judul, kutipan, peta, dan efek dibuat dengan kode).

---

## 📁 Struktur Folder per Episode

```
episodes/NNN-nama-tokoh/
├── README.md              ← Brief & checklist (tahap 0)
├── research.md            ← Riset (tahap 1)
├── script-outline.md      ← Kerangka (tahap 2)
├── character-design.md    ← Desain karakter (tahap 4)
├── storyboard.md          ← Storyboard: adegan → gambar (tahap 5)
├── image-prompts.md       ← Paket prompt siap tempel (tahap 5)
└── images/                ← Gambar hasil AI (tahap 6)
    ├── R1-marcus-referensi.png
    ├── P01-tebing-badai.png
    ├── C1-closeup-duka.png
    └── ...

voice-over/NNN-nama-tokoh/
├── script.md              ← Naskah narasi (tahap 3)
└── audio/                 ← Rekaman (tahap 7)
    └── NNN-scene-01.wav ...
```

## 🏷️ Konvensi Penamaan

| Hal | Format | Contoh |
|---|---|---|
| Folder episode | `NNN-nama-tokoh` (huruf kecil, tanda hubung) | `002-miyamoto-musashi` |
| Nomor adegan | `S` + 2 digit | `S07` |
| Potongan dalam adegan | nomor adegan + huruf | `S02a`, `S02b` |
| Gambar referensi tokoh | `R` + nomor + nama | `R1-marcus-referensi.png` |
| Gambar Mode Poster | `P` + 2 digit + nama | `P09-tenda-menulis.png` |
| Gambar Close-up | `C` + nomor + nama | `C1-closeup-duka.png` |
| Layer (hanya adegan kunci) | kode gambar + layer | `P09-bg.png`, `P09-char.png` |
| File audio | `NNN-scene-NN.wav` | `002-scene-07.wav` |
| Karakter berulang | `character-library/nama-tokoh/` | `character-library/pria-tanpa-zaman/` |

---

## 🧭 Prinsip Tetap Channel

1. **Pelajaran hidup, bukan biografi.** Sejarah adalah cermin bagi pria hari ini. Porsi isi: **±60% pelajaran** (±60% di antaranya lewat sudut asmara & hubungan), **±40% kisah**. Judul & hook selalu bersudut asmara/daya tarik. Setiap episode membahas **satu pilar** dari `brand/pilar-pria-sejati.md` (teladan atau peringatan), dan mematuhi **Garis Batas** di dokumen itu.
2. **Jujur pada sejarah.** Setiap fakta diberi label (✅ / 📜 / ⚠️); mitos tidak disajikan sebagai fakta.
3. **Narasi dewasa, filosofis, emosional, sinematik.** Bahasa Indonesia, tanpa klise motivasi.
4. **Gaya visual tetap.** Selalu mengikuti `master-style/`.
5. **Tanpa kekerasan grafis.** Kematian dan kekerasan disampaikan lewat simbol.
6. **Tanpa jualan di episode 001–005.** Hanya ajakan subscribe/komentar. Ajakan halus ke e-book baru boleh mulai episode 006.
7. **Gratis dulu.** Tidak ada layanan berbayar atau cloud (AWS, dll.) tanpa persetujuan pemilik proyek.

---

## 🔁 Aset yang Dipakai Ulang di Setiap Episode

| Aset | Lokasi | Catatan |
|---|---|---|
| Gaya, gerak, warna | `master-style/` | Tidak berubah antar episode |
| Blok `[GAYA-POSTER]`, `[GAYA-CLOSEUP]`, `[HINDARI]` | `master-style/visual-guide.md` bagian 10 | Dipakai di semua prompt |
| Pria Tanpa Zaman | `episodes/001-marcus-aurelius/character-design.md` bagian 0b (`[POSTER PRIA]`) | **Karakter tetap channel**; dipakai di hook & penutup setiap episode |
| Transisi halaman buku, kartu judul, kartu kutipan | `remotion/` | Dibangun sekali di tahap 8, dipakai ulang |
| Musik tema, logo | `assets/` | Dibuat sekali |
