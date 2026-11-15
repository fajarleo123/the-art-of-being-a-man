# Tahap 5 — Storyboard

**Hasil:** `episodes/NNN-nama-tokoh/storyboard.md` (dari `templates/storyboard.md`).
**Contoh lengkap:** `episodes/004-marcus-aurelius/storyboard.md`

## Langkah
1. Tentukan **daftar gambar** (target ±25–30): `R` referensi tokoh, `P` Mode Poster, `C` close-up (maks. 4).
   - Satu gambar lebar boleh dipakai untuk **maksimal 5–6 adegan** dengan potongan/arah gerak berbeda.
   - Judul, kutipan, peta, api, abu, buku, dan efek cuaca dibuat dengan **KODE**, bukan gambar AI.
2. Gambar yang sering dipakai (mis. lokasi utama tokoh) dibuat **lebar dengan area yang terpisah jelas** agar mudah dipotong.
3. Tetapkan **Motif Berulang**: benda/gambar yang muncul lagi untuk menyambung cerita (minimal: tebing Pria Tanpa Zaman di hook & penutup).
4. Pecah naskah menjadi **35–40 adegan**.
   - Durasi = (jumlah kata ÷ 2,2) + jeda. Total harus 5:00.
   - Montase boleh memakai potongan 3–4 dtk (tandai sebagai pengecualian).
5. Untuk **setiap adegan** tulis: nomor & waktu · durasi · narasi (salin persis) · **gambar + potongan** · visual · kamera · efek kode · audio · transisi.
6. Tambahkan **peta pemakaian gambar**, daftar teks di layar, dan **cek kesinambungan**.
7. Buat **`image-prompts.md`**: prompt **lengkap tanpa kode** (blok gaya + token + deskripsi + `[HINDARI]`), dikelompokkan per **gelombang** (referensi dulu, lalu gambar yang paling sering dipakai). Setiap gambar mencantumkan: dipakai di adegan mana, gambar yang harus dilampirkan, nama file, dan cek wajib.
   Contoh: `episodes/004-marcus-aurelius/image-prompts.md`

## Aturan kamera & animasi (dari `master-style/animation-rules.md`)
- Satu gerakan kamera utama per adegan; selalu dengan *easing*.
- Kutipan penting → **kamera statis**, teks tampil ≥4 dtk.
- Setiap adegan memiliki minimal satu efek lingkungan (`fx`).
- Transisi: *fade* ke hitam = ganti bab; *cross-dissolve* = dalam satu bab; *ink bleed* = kilas balik/pindah dunia; **halaman buku** = pembuka & penutup.

## Kriteria lolos
- [ ] Narasi di storyboard **sama persis** dengan naskah yang disetujui.
- [ ] Total durasi tepat; 35–40 adegan.
- [ ] Semua checklist kesinambungan tercentang.

## ✋ Gerbang
Minta persetujuan storyboard.
