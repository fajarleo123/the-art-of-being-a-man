# Tahap 6 — Gambar AI

> ⏳ **Status SOP:** kerangka awal. Alat AI belum dipilih; akan dilengkapi saat
> tahap ini pertama kali dijalankan (episode 001).

**Hasil:** `episodes/NNN-nama-tokoh/scenes/SNN/…png`

## Urutan kerja
1. **Lembar karakter dulu.** Buat turnaround + lembar ekspresi setiap tokoh. Pilih hasil terbaik → simpan di `character-library/nama-tokoh/` → jadikan **gambar referensi**.
2. **Gambar lokasi tetap** (`[LOK-…]`) tanpa tokoh → jadikan referensi set.
3. Buat gambar adegan sesuai prompt storyboard, dengan referensi karakter & lokasi.
4. **Pisahkan layer** untuk efek 2.5D:
   - `bg`: buat ulang adegan **tanpa tokoh** (prompt: *"empty scene, no people"*), atau isi bagian yang tertutup tokoh (*inpainting*).
   - `char`: buat tokoh di **latar polos**, lalu hapus latarnya (alat penghapus latar gratis/open-source).
   - `fg` / `fx`: elemen depan (bingkai, asap, salju) di latar polos atau dibuat langsung oleh Remotion.
   - Jika layer tidak memungkinkan: simpan `SNN-full.png`; Remotion memakai *push-in* sederhana.

## Spesifikasi
- Ukuran minimal **3840×2160** (2× resolusi video) agar bisa di-zoom; jika alat tidak mampu, perbesar (*upscale*) dengan alat gratis.
- PNG; layer `char`, `fg`, dan `fx` dengan latar transparan.

## QC setiap gambar
- [ ] Lolos daftar **"Wajib Konsisten"** karakter.
- [ ] Warna sesuai palet; tanpa warna neon.
- [ ] Tanpa teks/logo/watermark acak; tangan dan jari wajar.
- [ ] Terasa seperti ilustrasi di atas kertas tua, bukan digital mulus.

## Aturan
- Hanya alat **gratis** sampai pemilik proyek menyetujui yang berbayar.
- Catat alat & lisensi di `assets/LICENSES.md`.

## ✋ Gerbang
Kirim lembar karakter dulu untuk disetujui, baru buat semua adegan.
