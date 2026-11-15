# Tahap 6 — Gambar AI

**Alat:** ChatGPT (dikerjakan pemilik proyek dari HP). Alat gratis lain boleh, selama hasilnya mengikuti `master-style/`.
**Bahan:** `episodes/NNN-nama-tokoh/image-prompts.md`
**Hasil:** `episodes/NNN-nama-tokoh/images/`

## Urutan kerja
1. **Gelombang 1: referensi.** Buat gambar `R` (dan close-up pertama `C1`). Kirim ke Claude untuk dicek → **gerbang ✋** → baru lanjut.
2. **Gelombang berikutnya** sesuai urutan di `image-prompts.md`.
3. Untuk setiap gambar:
   - Lampirkan gambar referensi yang tertulis di kolom **"Lampirkan"**.
   - Tempel prompt **utuh**.
   - Jika ada yang meleset, minta perbaikan singkat ("keep everything the same, but …").
4. Simpan dengan **nama file** dari kolom "Nama file".
5. Upload ke GitHub: Chrome → repository → `episodes/NNN-nama-tokoh/images/` → **Add file → Upload files** → **Commit changes**. (Aktifkan **Situs desktop** bila tombol tidak muncul.)
6. Kabari Claude.

## Tugas Claude setelah gambar masuk
- Mengecek setiap gambar terhadap kolom **"Cek wajib"** dan ciri siluet tokoh.
- Memotong ke 16:9 dan memperbesar (*upscale*) bila akan di-zoom.
- Mengoreksi warna (*color grading*) ke palet resmi bila menyimpang.
- Melaporkan gambar yang perlu dibuat ulang beserta saran perbaikan prompt.

## QC setiap gambar
- [ ] Lolos "Cek wajib" dan ciri siluet tokoh.
- [ ] Mode Poster: wajah tidak digambar detail; tokoh dikenali dari siluet & warna.
- [ ] Warna sesuai palet; satu aksen hangat; tanpa neon.
- [ ] Tanpa teks/huruf/logo/watermark; tangan dan jari wajar.
- [ ] Unsur penting di pita tengah (aman dipotong ke 16:9).

## Aturan
- Hanya alat **gratis** sampai pemilik proyek menyetujui yang berbayar.
- Catat alat yang dipakai di `assets/LICENSES.md`.

## ✋ Gerbang
Gelombang 1 (referensi) wajib disetujui sebelum gelombang lain dibuat.
