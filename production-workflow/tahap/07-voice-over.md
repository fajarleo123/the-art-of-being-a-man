# Tahap 7 — Voice-over

**Metode yang dipilih:** suara AI di **Google AI Studio** (*Generate speech*, satu pembicara).
**Hasil:** `voice-over/NNN-nama-tokoh/audio/NNN-bab-N-nama.wav` (**satu file per bab**, ±9 file)

## Kenapa per bab, bukan per adegan
Suara AI membaca setiap potongan secara terpisah, jadi potongan pendek (per adegan) membuat nada dan tempo tidak konsisten. Per bab lebih konsisten dan jumlah filenya sedikit. **Penyesuaian dengan adegan dilakukan Claude.**

## Tugas Claude sebelum rekaman
1. Membuat **`naskah-bersih-ai.md`** dari naskah yang dikunci:
   - Satu bagian per bab: **instruksi gaya** (bahasa Inggris, untuk kolom *Style instructions*) + **teks** (bahasa Indonesia).
   - `[jeda]` → elipsis (…); `[jeda panjang]` → baris kosong; tanda tebal & arahan dihapus.
   - Angka tahun ditulis dengan huruf (mis. "seribu tujuh ratus lima puluh enam").
   - Cara mengucapkan nama asing dicantumkan di instruksi gaya.
   - **Cek otomatis:** kata-kata harus sama persis dengan naskah yang dikunci.
   Contoh: `voice-over/001-giacomo-casanova/naskah-bersih-ai.md`

## Tugas pemilik proyek
1. Pakai **suara yang sama** untuk semua bab (catat nama suaranya; sebaiknya juga dipakai di semua episode agar channel punya "suara" tetap).
2. Buat, dengarkan, dan unduh tiap bab; ulangi bab yang salah ucap.
3. Upload ke `voice-over/NNN-nama-tokoh/audio/`.

## Tugas Claude setelah rekaman
1. Mengukur durasi setiap file.
2. Mendeteksi titik jeda dan memotong per adegan sesuai storyboard.
3. Memperbarui durasi adegan di storyboard; durasi video **mengikuti rekaman**.

## QC
- [ ] Suara sama di semua bab; nama asing diucapkan benar.
- [ ] Tidak ada kata terlewat/berulang; tanda baca tidak ikut dibacakan.
- [ ] Tempo pelan (±130 kata/menit); jeda terasa.
- [ ] Ketentuan penggunaan komersial alat sudah dicek.

## ✋ Gerbang
Kirim bab hook (Bab 0) dulu untuk disetujui sebelum membuat semua bab.
