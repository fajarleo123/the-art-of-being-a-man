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

## Tugas Claude setelah rekaman (otomatis)
1. Simpan file asli di `voice-over/NNN-nama-tokoh/audio/` dengan nama yang benar.
2. Pindahkan teks narasi per adegan ke `remotion/src/episodes/epNNN/narration.json` (cek kata per kata dengan naskah yang dikunci).
3. Jalankan alat suara:
   ```bash
   node scripts/voice.mjs NNN-nama-tokoh src/episodes/epNNN/narration.json src/episodes/epNNN/timing.json 1.11 0.65
   ```
   Alat ini merapikan suara (tempo, jeda, kehangatan, volume −16 LUFS), mendeteksi jeda, dan menaruh setiap batas kalimat & adegan **tepat di jeda**.
4. Kembalikan jeda dramatis (`[jeda panjang]` di naskah) lewat `holdAfter` di file episode.
5. Render; durasi video **mengikuti rekaman**.

**Catatan dari episode 001:** suara Google AI Studio membaca ±120 kata/menit (lebih pelan dari target 130). Tempo 1.11 mengembalikannya ke ±130 tanpa terdengar terburu-buru.

## QC
- [ ] Suara sama di semua bab; nama asing diucapkan benar.
- [ ] Tidak ada kata terlewat/berulang; tanda baca tidak ikut dibacakan.
- [ ] Tempo pelan (±130 kata/menit); jeda terasa.
- [ ] Ketentuan penggunaan komersial alat sudah dicek.

## ✋ Gerbang
Kirim bab hook (Bab 0) dulu untuk disetujui sebelum membuat semua bab.
