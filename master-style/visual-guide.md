# Panduan Visual — The Art of Being a Man

> **Versi 2 — Gaya Campuran** (menggantikan versi 1 "semi-realistis penuh")
> Dokumen ini adalah **acuan utama** untuk semua gambar. Setiap gambar baru
> harus dicek terhadap aturan di sini sebelum dipakai.

## 1. Identitas Gaya

**Vintage Storybook Poster + Dark Cinematic**

Bayangkan halaman-halaman buku cerita klasik yang dicetak seperti poster
tua: bentuk tegas, warna terbatas, tinta, butiran cetak, kertas yang menua,
lalu diterangi seperti adegan film yang gelap dan sunyi.

Channel memakai **dua mode gambar**:

| Mode | Porsi | Kapan dipakai | Ciri |
|---|---|---|---|
| **Mode Poster** *(utama)* | ±90% adegan | Hampir semua adegan | Tokoh **kecil**, dilihat **dari belakang/samping**, **wajah tidak terlihat**; lingkungan luas; bentuk datar dan tegas |
| **Mode Close-up** | 2–4 adegan per episode | Momen emosional puncak | Wajah tokoh terlihat jelas, lebih detail dan semi-realistis, tetapi **palet, garis, dan tekstur tetap sama** dengan Mode Poster |

> **Kenapa campuran?** Tokoh tanpa wajah membuat gambar AI jauh lebih mudah
> konsisten dan hemat. Close-up disimpan hanya untuk momen yang membutuhkan
> emosi wajah.

## 2. Mode Poster (Utama)

### Gaya
- **Garis tinta tegas** dan percaya diri; arsiran tinta halus untuk bayangan.
- **Bidang warna datar** (sedikit gradasi), **4–5 warna per gambar**.
- **Butiran cetak** (*print grain*) dan tekstur kertas tua di seluruh gambar.
- **Siluet kuat**: setiap tokoh harus dikenali dari bentuknya saja.

### Tokoh
- Ukuran tokoh **kecil sampai sedang** (±10–30% tinggi gambar).
- Dilihat **dari belakang, samping, atau sebagai siluet**. Wajah tidak digambar detail.
- Tokoh dikenali dari **ciri siluet & warna** (lihat `character-design.md`):
  Marcus = **jubah burgundy** + rambut ikal abu-abu; Cassius = **jubah merah karat** + kilau zirah perunggu; Pria Tanpa Zaman = **mantel panjang gelap**.

### Komposisi
- **Ruang negatif luas** (langit, kabut, dinding, air), untuk kesan sunyi dan merenung, sekaligus tempat teks.
- **Satu aksen warna hangat** di setiap gambar (jubah burgundy, cahaya lampu, matahari emas) yang menarik mata.
- Gunakan **rule of thirds**; tokoh jarang tepat di tengah.
- Gambar dibuat **lebar dan kaya detail** agar bisa dipakai untuk beberapa adegan lewat zoom dan geser kamera (lihat `animation-rules.md`).

## 3. Mode Close-up

- Wajah **semi-realistis**: kerutan, mata, janggut terlihat; arsiran tinta untuk bayangan.
- **Tetap** memakai garis tinta tegas, palet terbatas, dan butiran cetak seperti Mode Poster, agar tidak terasa seperti gambar dari film lain.
- Cahaya dramatis satu sumber; wajah setengah terang, setengah gelap.
- Maksimal **4 close-up per episode**.

## 4. Pencahayaan (Kedua Mode)

- Sumber cahaya tunggal yang jelas: lilin, lampu minyak, obor, api, jendela, matahari terbit/terbenam.
- Kontras tinggi: area gelap luas + satu area cahaya hangat.
- Cahaya bernuansa **emas hangat**; bayangan bernuansa **biru malam, arang, atau burgundy tua**.
- Hindari cahaya putih datar dan warna neon.

## 5. Format & Ukuran

- Video utama: **16:9 (1920×1080)**. Shorts: **9:16 (1080×1920)**.
- Gambar AI dibuat **lanskap** (mis. 1536×1024 di ChatGPT), lalu dipotong ke 16:9.
  → Letakkan unsur penting di **pita tengah** gambar agar aman saat dipotong.
- Gambar yang akan di-zoom diperbesar (*upscale*) ke ±3840 px lebar sebelum dianimasikan.

## 6. Layer

- Mode Poster umumnya cukup **satu gambar utuh** (`full`). Gerak kamera, efek cuaca, cahaya, dan partikel ditambahkan dengan kode di Remotion.
- Pemisahan layer (`bg`, `mid`, `char`, `fg`, `fx`) hanya untuk **adegan kunci** yang butuh efek parallax kuat.

## 7. Yang Dibuat dengan Kode (Bukan Gambar AI)

Untuk menghemat gambar, unsur berikut **selalu dibuat di Remotion**:
- Kartu judul episode, judul bab, kartu kutipan, logo
- Peta sederhana dengan tinta menyebar
- Api, bara, abu, asap, salju, hujan, debu, kabut, kilat
- Perubahan warna (mis. emas → karat), lampu padam, cahaya menguat/meredup
- Tekstur kertas, butiran film, vignette

## 8. Yang Harus Dihindari

- ❌ Kartun anak-anak, chibi, anime, Pixar/3D
- ❌ Tokoh fantasi: zirah emas berkilau, mahkota, efek sihir
- ❌ Foto-realistis atau tampilan digital yang terlalu mulus
- ❌ Warna cerah/jenuh (neon, biru elektrik, hijau terang)
- ❌ Teks/huruf di dalam gambar AI (teks selalu ditambahkan dengan kode)
- ❌ Kekerasan grafis

## 9. Tipografi (Ditambahkan dengan Kode)

| Penggunaan | Font (gratis) | Warna |
|---|---|---|
| Judul episode & judul bab | *Cinzel* | Emas antik |
| Kutipan & teks narasi di layar | *Cormorant Garamond* / *EB Garamond* | Krem kertas |
| Keterangan kecil (tempat, tahun) | *Courier Prime* (gaya mesin tik) | Krem pudar |

## 10. Blok Gaya untuk Prompt AI

Tempel blok ini di awal setiap prompt. Versi lengkap yang sudah digabung per
gambar ada di `image-prompts.md` setiap episode.

**`[GAYA-POSTER]`**
```
Vintage mid-century storybook poster illustration, flat graphic shapes with bold confident ink outlines and fine ink hatching, limited muted color palette of deep burgundy, dark charcoal, faded midnight blue, warm cream and antique gold, subtle risograph print grain and aged paper texture, strong silhouettes, small figures seen from behind or in profile with no visible facial detail, vast atmospheric environment with large negative space, one dramatic warm light source, quiet melancholic cinematic mood, historically accurate details, wide landscape composition with the main subject in the central band.
```

**`[GAYA-CLOSEUP]`**
```
Close-up portrait in a vintage storybook poster illustration style, bold confident ink outlines and fine ink hatching for shadows, limited muted color palette of deep burgundy, dark charcoal, faded midnight blue, warm cream and antique gold, a detailed semi-realistic adult face with visible wrinkles and texture, subtle risograph print grain and aged paper texture, one dramatic warm light source with half the face in deep shadow, quiet cinematic mood, wide landscape composition.
```

**`[HINDARI]`** (tempel di akhir prompt; ChatGPT tidak punya kolom *negative prompt*)
```
Avoid: children's cartoon style, anime, chibi, 3D render, photorealistic photo, fantasy armor, crowns, glowing magic effects, neon or oversaturated colors, any text, letters, logos or watermarks, gore.
```
