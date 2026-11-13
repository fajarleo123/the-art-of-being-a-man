# Storyboard — Episode 001: Marcus Aurelius

> **Pria yang Berhasil Menguasai Dirinya Sendiri**
> *Pelajaran Pengendalian Diri dari Marcus Aurelius*
>
> **Status:** 🟡 Draf 1 — menunggu persetujuan
> **Durasi:** 5:00 · **Adegan:** 40 · **Rasio:** 16:9 (1920×1080) · **30 fps**
> **Acuan:** `voice-over/001-marcus-aurelius/script.md` (narasi) ·
> `character-design.md` (karakter & token) · `master-style/` (gaya, gerak, warna)

---

## Cara Membaca Storyboard Ini

Setiap adegan berisi:

| Bagian | Isi |
|---|---|
| **Narasi** | Kalimat dari naskah final (tidak diubah) |
| **Visual** | Apa yang terlihat di layar |
| **Prompt** | Prompt gambar AI. Ganti kode dalam `[KURUNG]` dengan teks di bagian *Kamus Prompt* |
| **Kamera** | Gerakan kamera sesuai `animation-rules.md` |
| **Animasi** | Gerakan per layer: `bg` · `mid` · `char` · `fg` · `fx` |
| **Audio** | Musik, efek suara, hening |
| **→** | Transisi ke adegan berikutnya |

**Tentang durasi:** durasi dihitung dari jumlah kata naskah (±130 kata/menit)
ditambah jeda. Setelah voice-over direkam, durasi akhir **mengikuti panjang
rekaman**. Angka di sini adalah target awal.

**Pengecualian tempo:** beberapa sisipan montase (S02, S14) memakai potongan
3–4 detik, lebih cepat dari aturan 5–12 detik, untuk menciptakan rasa
tertekan. Ini disengaja dan sudah direncanakan di kerangka.

---

## Kamus Prompt

Tempel teks di bawah ini menggantikan kodenya.

| Kode | Isi |
|---|---|
| `[GAYA]` | Blok gaya di `character-design.md` bagian 4 |
| `[TOKEN MARCUS]` | Token Marcus (Varian B, ±54 tahun) di `character-design.md` |
| `[TOKEN MARCUS-A]` | Token Marcus, tetapi ganti *"early 50s"* → *"about 40"*, *"salt-and-pepper hair"* → *"dark brown hair with slight grey at the temples"*, *"greyish beard"* → *"dark brown beard"*; hapus *"tired shadows beneath"* |
| `[TOKEN MARCUS-C]` | Token Marcus, tetapi ganti *"early 50s"* → *"late 50s"*, rambut & janggut → *"almost entirely grey"*, tambahkan *"gaunt hollow cheeks, very thin"* |
| `[TOKEN CASSIUS]` | Token Avidius Cassius di `character-design.md` |
| `[TOKEN PRIA]` | Token Pria Tanpa Zaman di `character-design.md` |
| `[NEG]` | Negative prompt di `character-design.md` bagian 4 |

### Lokasi Tetap (agar setiap set terlihat sama)

| Kode | Lokasi | Deskripsi prompt |
|---|---|---|
| `[LOK-TEBING]` | Tebing badai (hook & penutup) | *a rocky cliff edge above a dark sea, vast open sky* |
| `[LOK-TENDA]` | Tenda Marcus, kamp Danube | *inside a Roman military command tent of heavy brown leather and canvas, a rough wooden table with wax tablets, a stylus and a clay oil lamp, an iron brazier in the corner, a folded camp bed, the tent flap open to snowy night* |
| `[LOK-KAMP]` | Kamp legiun, tepi Danube | *a Roman legionary winter camp on the bank of the frozen Danube river, rows of leather tents, wooden palisade, campfires, snow-covered pine forest* |
| `[LOK-AULA]` | Aula istana Roma | *a vast dim marble hall of the Roman imperial palace, tall columns, bronze statues of past emperors in shadow* |
| `[LOK-FORUM]` | Forum Trajan | *the Forum of Trajan in Rome, colonnades, crowds of Roman citizens, overcast sky* |
| `[LOK-ANTIOKHIA]` | Istana gubernur, Suriah | *a stone balcony of a Roman governor's palace in Antioch, Syria, palm trees and flat rooftops below, warm dusk* |
| `[LOK-KAMAR]` | Kamar gelap modern | *a small dark modern bedroom at night, plain walls, a bed and a small bedside table* |

### Motif Berulang (benang merah visual)

| Motif | Muncul di | Makna |
|---|---|---|
| Tebing & badai | S01 → **S39** (badai reda) | Perang batin → kedamaian |
| Cermin retak | S02a → S09 | Ego |
| Lilin hampir padam | S02c → S19 | Ketakutan |
| Memikul batu | S02d → **S18** (kini berjalan tegak) | Tekanan → kekuatan memikul |
| Lampu minyak di meja Marcus | S04, S11, S16, S38 (padam) | Kesadaran diri yang terus menyala |
| Api anglo (*brazier*) | S24 → **S32** | Amarah → pengampunan |
| Jubah berkibar | S03 (*match cut*), S39 | Pria modern = Marcus = kita |

---

## Ringkasan Adegan

| Bab | Adegan | Waktu | Durasi |
|---|---|---|---|
| 0 · Hook | S01–S04 | 0:00–0:35 | 35 dtk |
| 1 · Judul | S05 | 0:35–0:45 | 10 dtk |
| 2 · Benteng di dalam diri | S06–S08 | 0:45–1:10 | 25 dtk |
| 3 · Ego | S09–S13 | 1:10–1:45 | 35 dtk |
| 4 · Tekanan | S14–S18 | 1:45–2:25 | 40 dtk |
| 5 · Ketakutan | S19–S23 | 2:25–3:00 | 35 dtk |
| 6 · Amarah ⭐ | S24–S34 | 3:00–4:15 | 75 dtk |
| 7 · Penutup | S35–S40 | 4:15–5:00 | 45 dtk |
| | **40 adegan** | | **5:00** |

---

# BAB 0 — HOOK

### S01 · 0:00–0:08 · 8 dtk
**Narasi:** "Ada perang yang tidak pernah tercatat dalam buku sejarah. `[jeda]` Perang itu terjadi di dalam dada seorang pria."
**Visual:** Layar hitam membuka perlahan ke Pria Tanpa Zaman dilihat dari belakang, sendirian di tepi tebing saat badai malam. Sosoknya kecil di bawah langit yang luas.
**Prompt:**
```
[GAYA] [TOKEN PRIA], seen from behind, standing alone at [LOK-TEBING] during a violent storm at night, long coat whipping in the wind, swirling midnight blue and deep burgundy clouds, ink rain streaks, distant faint lightning, tiny figure in a vast sky, 16:9 wide shot
```
**Kamera:** *Slow push-in* 8% dari lebar ke sedang, berakhir di punggung dan dada sang pria.
**Animasi:** `bg` awan bergerak pelan · `char` mantel berkibar, bahu naik-turun bernapas · `fx` hujan tinta miring, kilat redup sekali di detik ke-5.
**Audio:** Hening → angin menderu naik → detak jantung pelan mulai di "dalam dada".
**→** Potong langsung (*hard cut*) mengikuti detak jantung.

### S02 · 0:08–0:22 · 14 dtk — *Montase empat musuh*
**Narasi:** "Saat egonya terluka. `[jeda]` Saat amarah naik ke tenggorokan. `[jeda]` Saat ketakutan tentang hari esok tak membiarkannya tidur. `[jeda]` Saat beban hidup terus bertambah, dan tak seorang pun tahu betapa beratnya. `[jeda panjang]`"

| Potongan | Durasi | Visual | Prompt |
|---|---|---|---|
| **S02a** Ego | 3 dtk | Pantulan pria di cermin retak; wajah terpecah dan gelap | `[GAYA] close-up of a cracked antique mirror reflecting [TOKEN PRIA], reflection fractured and obscured by shadow, face unreadable, candlelight, 16:9` |
| **S02b** Amarah | 3 dtk | Kepalan tangan gemetar, urat menonjol | `[GAYA] extreme close-up of a man's clenched trembling fist, veins visible, dark coat sleeve, harsh side light, deep shadows, 16:9` |
| **S02c** Ketakutan | 3,5 dtk | Pria duduk di tepi ranjang, kepala di tangan; lilin hampir padam | `[GAYA] [TOKEN PRIA] sitting on the edge of a bed in [LOK-KAMAR], head in his hands, a single candle almost burnt out, long shadows on the wall, 16:9` |
| **S02d** Tekanan | 4,5 dtk | Pria berjalan membungkuk memikul batu raksasa di lanskap berkabut | `[GAYA] [TOKEN PRIA] walking slowly bent forward, carrying a huge boulder on his shoulders, misty empty landscape, surreal symbolic illustration, 16:9` |

**Kamera:** Tiap potongan statis dengan *micro push-in* 3%. S02d: *pan* lambat ke kanan mengikuti langkahnya.
**Animasi:** a: retakan cermin menjalar 1 garis · b: tangan bergetar halus · c: api lilin berkedip, hampir mati · d: kabut bergerak, langkah berat (badan naik-turun).
**Audio:** Detak jantung makin cepat; tiap potongan diberi aksen bunyi rendah (*low hit*). Setelah S02d: **hening total** selama jeda panjang.
**→** Dari S02d, *dissolve* ke siluet di tebing (persiapan *match cut*).

### S03 · 0:22–0:29 · 7 dtk — *Match cut*
**Narasi:** "Hampir dua ribu tahun lalu, seorang pria memimpin pasukan terkuat di dunia. Kata-katanya adalah hukum."
**Visual:** Ujung mantel pria yang berkibar memenuhi layar → **berubah menjadi jubah burgundy Romawi**. Kamera mundur memperlihatkan kamp legiun bersalju di tepi Danube, dengan ribuan obor.
**Prompt:**
```
[GAYA] [LOK-KAMP] at night seen from a hill, thousands of torches and campfires, legion standards silhouetted, snow falling, a lone figure in a deep burgundy Roman cloak standing on the hill in the foreground seen from behind, epic yet somber, 16:9 wide shot
```
**Kamera:** Mulai *extreme close-up* kain jubah → *slow pull-out* 15% menjadi lebar.
**Animasi:** `fg` kain jubah berkibar (pengganti mantel) · `mid` asap api unggun naik · `bg` salju turun · `fx` bara obor berkelip.
**Audio:** Cello rendah masuk (tema channel). Tiupan *cornu* (terompet Romawi) samar dari kejauhan.
**→** *Dissolve* ke dalam tenda.

### S04 · 0:29–0:35 · 6 dtk
**Narasi:** "`[jeda]` Tetapi musuh yang paling ia takuti… adalah **dirinya sendiri**."
**Visual:** Pertama kali wajah Marcus terlihat. Ia menulis di tablet lilin, wajah setengah terang oleh lampu minyak, mata lelah menatap tulisannya sendiri.
**Prompt:**
```
[GAYA] [TOKEN MARCUS], close-up, sitting at the wooden table in [LOK-TENDA], writing with a stylus on a wax tablet, lit only by a small clay oil lamp, half his face in warm gold light and half in deep shadow, calm but burdened expression, his breath visible in the cold air, 16:9
```
**Kamera:** *Slow push-in* 6% ke wajah, berhenti tepat di kata "dirinya sendiri".
**Animasi:** `char` tangan menulis pelan, kedip mata sekali · `fx` api lampu berkedip, napas mengepul, debu melayang di berkas cahaya.
**Audio:** Musik turun → **hening** di "dirinya sendiri". Suara goresan stilus terdengar jelas.
**→** **Halaman buku dibalik** (transisi khas channel).

---

# BAB 1 — JUDUL

### S05 · 0:35–0:45 · 10 dtk
**Narasi:** "Namanya Marcus Aurelius. Kaisar Roma. `[jeda]` Dan ini kisah tentang kemenangan yang paling sulit di dunia."
**Visual:** Buku tua terbuka. Di halaman kiri: ilustrasi tinta profil Marcus. Di halaman kanan: judul **"Pria yang Berhasil Menguasai Dirinya Sendiri"** (Cinzel, emas antik) dan subjudul **"Pelajaran Pengendalian Diri dari Marcus Aurelius"** (Cormorant, krem tua). Logo kecil channel di bawah.
**Prompt (ilustrasi halaman kiri):**
```
[GAYA] a profile portrait of [TOKEN MARCUS] drawn as a classic ink engraving on an aged book page, decorative thin antique gold border, cream paper, no text
```
**Kamera:** *Top-down* sedikit miring, *slow push-in* 4%.
**Animasi:** Halaman berhenti membalik · judul muncul dengan *fade-in* tinta (1 dtk) · subjudul menyusul 1 dtk kemudian · `fx` debu dan butiran film.
**Audio:** Suara halaman dibalik → tema musik utama channel.
**→** *Ink bleed* (tinta menyebar) masuk ke palet kilas balik sepia.

---

# BAB 2 — BENTENG DI DALAM DIRI

### S06 · 0:45–0:54 · 9 dtk
**Narasi:** "Sejak muda, Marcus dipersiapkan untuk berkuasa. Namun pelajaran terpentingnya justru datang dari ajaran Epictetus, seorang **mantan budak**."
**Visual:** *Palet sepia (kilas balik).* Di meja batu, sebuah gulungan naskah Yunani terbuka. Di sampingnya tergeletak **rantai besi yang patah**. Cahaya jendela jatuh di atas keduanya.
**Prompt:**
```
[GAYA] sepia-toned flashback, an open ancient Greek papyrus scroll with handwritten text lying on a stone table, beside it a broken rusted iron slave chain, soft window light from the side falling across both, quiet and reverent mood, 16:9
```
**Kamera:** *Slow pan* kiri→kanan dari gulungan ke rantai patah, mendarat di rantai tepat di "mantan budak".
**Animasi:** `fx` debu di berkas cahaya · ujung gulungan bergerak sedikit tertiup angin.
**Audio:** Musik lembut (piano + cello). Bunyi rantai pelan saat kamera tiba.
**→** *Cross-dissolve*.

### S07 · 0:54–0:59 · 5 dtk
**Narasi:** "`[jeda]` Dunia bisa merampas segalanya darimu, kecuali **caramu menanggapinya**."
**Visual:** Simbol: **benteng batu kecil** berdiri tenang di atas karang, dikelilingi badai dan ombak. Di jendela benteng, satu cahaya emas menyala.
**Prompt:**
```
[GAYA] a small solitary stone fortress on a rock in the middle of a raging sea storm, waves crashing around it, one warm golden light glowing in its window, symbolic illustration of an inner citadel, 16:9
```
**Kamera:** Statis dengan *micro push-in* 3%.
**Animasi:** `bg` awan berputar · `mid` ombak menghantam lalu surut · `fx` cipratan air · cahaya jendela **tetap stabil** (kontras dengan badai).
**Audio:** Badai teredam; musik tetap tenang.
**→** *Cross-dissolve* ke tablet lilin.

### S08 · 0:59–1:10 · 11 dtk
**Narasi:** "Di tengah perang, Marcus menuliskan pelajaran itu dalam jurnal pribadinya. Bukan untuk dibaca orang lain. Hanya untuk dirinya sendiri. Hari ini, kita mengenalnya sebagai *Meditations*."
**Visual:** *Kembali ke palet normal.* Close-up meja di tenda: tablet lilin bertulisan Yunani, stilus, lampu minyak. Di akhir adegan, kata **"MEDITATIONS"** muncul di atas kertas seperti ditulis tinta emas.
**Prompt:**
```
[GAYA] close-up of [LOK-TENDA] table: several wooden wax tablets covered in handwritten ancient Greek, a bronze stylus, a clay oil lamp glowing, a weathered hand resting on a tablet, snow visible through the tent opening, intimate night mood, 16:9
```
**Kamera:** *Slow tilt* turun dari lampu ke tablet, lalu statis untuk judul.
**Animasi:** `char` tangan Marcus perlahan menutup tablet · `fx` api lampu berkedip · teks "MEDITATIONS" muncul dengan *fade-in* tinta di detik ke-8.
**Audio:** Angin di luar tenda. Goresan stilus.
**→** *Fade* ke hitam (pergantian babak).

---

# BAB 3 — MUSUH PERTAMA: EGO

### S09 · 1:10–1:18 · 8 dtk
**Narasi:** "Musuh pertama: **ego**. Kebutuhan untuk selalu terlihat benar. Gengsi yang membuat kita sulit berkata, 'aku salah.'"
**Visual:** Teks bab **"I · EGO"** muncul dalam tinta emas di atas hitam, lalu menghilang. Lalu Pria Tanpa Zaman berdiri tegak kaku di depan cermin retak besar (kini dilihat dari sudut lebih lebar daripada S02a), dada dibusungkan.
**Prompt:**
```
[GAYA] [TOKEN PRIA] standing stiffly with chest pushed out in front of a tall cracked antique mirror in a dark room, his reflection broken into fragments, face hidden in shadow, candlelight from the side, 16:9 medium-wide shot
```
**Kamera:** Statis untuk judul (2 dtk) → *slow push-in* 5% ke cermin.
**Animasi:** Judul *fade in/out* · `char` napas · `fx` satu retakan baru menjalar di cermin pada kata "aku salah".
**Audio:** Dentum rendah pada judul bab. Bunyi kaca retak halus.
**→** *Cross-dissolve* ke aula istana.

### S10 · 1:18–1:25 · 7 dtk
**Narasi:** "Ketika Marcus naik takhta, ia bisa berkuasa sendirian. Tetapi ia justru **membagi takhtanya** dengan saudara angkatnya."
**Visual:** Aula marmer. Marcus (usia ±40) berdiri di depan **dua kursi kekuasaan** (*sella curulis*) yang sejajar, dengan tangan terbuka mempersilakan seorang pria lain (Lucius Verus, figur latar terlihat dari samping-belakang dan setengah dalam bayangan).
**Prompt:**
```
[GAYA] [TOKEN MARCUS-A] wearing a cream tunic and a neat burgundy cloak in [LOK-AULA], standing beside two identical ivory Roman curule chairs placed side by side, gesturing with an open palm to invite another Roman man (seen from behind, half in shadow) to take the second chair, dignified and humble, 16:9
```
**Kamera:** *Slow pull-out* 8% hingga kedua kursi terlihat utuh dan seimbang.
**Animasi:** `char` gerakan tangan mempersilakan · `bg` berkas cahaya dari jendela tinggi bergeser perlahan · `fx` debu melayang.
**Audio:** Gema aula, musik khidmat.
**→** *Cross-dissolve* ke tenda (Marcus lebih tua).

### S11 · 1:25–1:34 · 9 dtk
**Narasi:** "Ia adalah satu-satunya orang di dunia yang tak perlu meminta izin kepada siapa pun. Dan di jurnalnya, ia menulis peringatan untuk dirinya sendiri:"
**Visual:** Marcus (±54) sendirian di tenda malam, menulis. Bayangannya di dinding tenda terlihat **besar dan agung** (melambangkan kekuasaan), sementara sosok aslinya kecil dan membungkuk.
**Prompt:**
```
[GAYA] [TOKEN MARCUS] writing alone at night in [LOK-TENDA], the oil lamp casting a huge majestic shadow of him on the tent wall behind, while he himself sits small and slightly hunched, contrast between power and humility, 16:9 medium shot
```
**Kamera:** *Slow pan* dari bayangan besar di dinding turun ke Marcus yang asli.
**Animasi:** Bayangan bergoyang mengikuti nyala api · `char` menulis.
**Audio:** Musik tipis, angin.
**→** Potong ke kartu kutipan.

### S12 · 1:34–1:39 · 5 dtk — *Kartu kutipan*
**Narasi:** "'Berhati-hatilah, agar engkau tidak menjadi Caesar.'"
**Visual:** Close-up tablet lilin. Kutipan muncul di layar dalam huruf Cormorant krem, dengan atribusi *— Meditations 6.30*.
**Prompt:**
```
[GAYA] extreme close-up of a wax tablet with freshly inscribed ancient Greek letters, warm oil lamp light, shallow depth of field, empty dark space on the right side for text, 16:9
```
**Kamera:** **Statis** (aturan: kutipan penting = kamera diam).
**Animasi:** Teks kutipan *fade-in* 1 dtk, tampil ≥4 dtk · `fx` api lampu berkedip.
**Audio:** Hening; hanya api.
**→** *Cross-dissolve*.

### S13 · 1:39–1:45 · 6 dtk
**Narasi:** "`[jeda]` Kekuatan sejati… tidak perlu diumumkan."
**Visual:** Aula istana yang dipenuhi patung perunggu kaisar raksasa. Di bawahnya, sosok kecil Marcus berjalan pelan **menjauh** dari kamera, tanpa pengawal.
**Prompt:**
```
[GAYA] [LOK-AULA] with towering bronze emperor statues on both sides, a small lone figure of [TOKEN MARCUS] seen from behind walking away down the hall without guards, long shadows, quiet humility, 16:9 wide shot
```
**Kamera:** Statis, lebar.
**Animasi:** `char` berjalan menjauh pelan · `bg` berkas cahaya.
**Audio:** Langkah kaki bergema, musik menutup bab.
**→** *Fade* ke hitam.

---

# BAB 4 — MUSUH KEDUA: TEKANAN

### S14 · 1:45–1:56 · 11 dtk — *Montase krisis*
**Narasi:** "Musuh kedua: **tekanan**. Wabah menewaskan jutaan orang. Perang meletus di perbatasan. Musuh menembus hingga ke tanah Italia. Dan kas negara kosong."

| Potongan | Durasi | Visual | Prompt |
|---|---|---|---|
| **S14a** Judul + wabah | 4 dtk | Judul **"II · TEKANAN"**, lalu jalan kota Romawi sunyi berkabut, pintu-pintu tertutup, sosok berjubah membawa lentera | `[GAYA] a deserted Roman city street during a plague, thick fog, shuttered doors, a lone cloaked figure carrying a lantern, eerie silence, 16:9` |
| **S14b** Perang & invasi | 4 dtk | Prajurit suku Jermanik menyeberangi sungai beku; menara jaga Romawi terbakar di kejauhan | `[GAYA] Germanic tribal warriors with round shields crossing a frozen river at dusk, a Roman wooden watchtower burning in the distance, smoke and embers, tense, 16:9` |
| **S14c** Kas kosong | 3 dtk | Ruang harta: peti kayu besar terbuka dan **kosong**, beberapa koin tersisa | `[GAYA] a Roman treasury vault with large open wooden chests, almost empty, only a few scattered gold coins, a single shaft of light, 16:9` |

**Kamera:** Judul statis → setiap potongan *push-in* 4% cepat (tempo montase).
**Animasi:** a: kabut bergerak, lentera bergoyang · b: bara dan asap naik, prajurit bergerak sedikit · c: debu berputar dalam berkas cahaya.
**Audio:** Drum perang rendah membangun ketegangan; lonceng jauh di potongan a; berhenti mendadak di c.
**→** Potong ke Forum.

### S15 · 1:56–2:05 · 9 dtk
**Narasi:** "Ia bisa saja menaikkan pajak rakyatnya. Tetapi menurut catatan kuno, ia justru **melelang harta istananya sendiri**. Bahkan gaun sutra istrinya."
**Visual:** Forum Trajan. Meja panjang penuh perhiasan emas, piala, dan **gaun sutra keunguan**. Warga Romawi berkerumun menawar. Seorang petugas lelang mengangkat gaun sutra.
**Prompt:**
```
[GAYA] [LOK-FORUM], a public auction of imperial palace treasures: long tables with gold jewelry, silver cups, ornate furniture, an auctioneer holding up a fine purple silk gown before a crowd of Roman citizens, overcast soft light, 16:9 wide shot
```
**Kamera:** *Slow pan* kanan menyusuri meja, berhenti di gaun sutra.
**Animasi:** `mid` kerumunan bergerak halus · `char` petugas mengangkat gaun · `fx` kain sutra berkibar tertiup angin.
**Audio:** Riuh kerumunan teredam, musik melambat.
**→** *Cross-dissolve* ke fajar di tenda.

### S16 · 2:05–2:12 · 7 dtk
**Narasi:** "Bertahun-tahun ia tinggal di tenda perang, dengan tubuh yang sakit. Dan ia menasihati dirinya sendiri:"
**Visual:** Fajar biru dingin. Marcus duduk di tepi dipan sempit, satu tangan menekan dada, napas mengepul. Ekspresi **letih di fajar**.
**Prompt:**
```
[GAYA] [TOKEN MARCUS] sitting on the edge of a narrow camp bed in [LOK-TENDA] at cold blue dawn, one hand pressed to his chest, exhausted eyes half-closed, breath visible in the freezing air, a thin line of pale dawn light through the tent flap, 16:9
```
**Kamera:** *Slow push-in* 5%.
**Animasi:** `char` napas berat, perlahan mengangkat kepala · `fx` uap napas, cahaya fajar perlahan menguat.
**Audio:** Burung pagi samar, angin dingin, *cornu* jauh membangunkan kamp.
**→** Potong ke kartu kutipan.

### S17 · 2:12–2:20 · 8 dtk — *Kartu kutipan*
**Narasi:** "'Ketika engkau berat untuk bangun, katakan pada dirimu: aku bangun untuk melakukan pekerjaan seorang manusia.'"
**Visual:** Marcus berdiri di ambang tenda, siluet melawan cahaya fajar emas di atas kamp bersalju. Teks kutipan + *— Meditations 5.1*.
**Prompt:**
```
[GAYA] [TOKEN MARCUS] standing in the open tent entrance seen from behind as a silhouette, looking out over [LOK-KAMP] at golden sunrise, snow glowing, empty space at the top of the frame for text, hopeful yet solemn, 16:9
```
**Kamera:** **Statis**.
**Animasi:** Teks *fade-in* · `bg` matahari naik sangat pelan · `fx` asap api unggun pagi.
**Audio:** Musik naik lembut, harapan.
**→** *Cross-dissolve*.

### S18 · 2:20–2:25 · 5 dtk — *Callback*
**Narasi:** "`[jeda]` Tekanan tidak pernah hilang. **Kitalah** yang harus menjadi cukup kuat untuk memikulnya."
**Visual:** Pria Tanpa Zaman **masih memikul batu yang sama** seperti S02d, tetapi kini **berjalan tegak** dengan langkah mantap. Kabut mulai tersibak.
**Prompt:**
```
[GAYA] [TOKEN PRIA] walking upright with steady steps, still carrying the same huge boulder on his shoulders but now with a straight back, mist beginning to clear, faint golden light ahead, 16:9
```
**Kamera:** *Pan* lambat ke kanan (sama arah dengan S02d, untuk kesinambungan).
**Animasi:** Langkah mantap · `fx` kabut menipis.
**Audio:** Musik menutup bab dengan nada mantap.
**→** *Fade* ke hitam.

---

# BAB 5 — MUSUH KETIGA: KETAKUTAN

### S19 · 2:25–2:33 · 8 dtk
**Narasi:** "Musuh ketiga: **ketakutan**. Takut gagal. Takut kehilangan. Kecemasan yang datang di jam tiga pagi."
**Visual:** Judul **"III · KETAKUTAN"**. Lalu kamar gelap dari S02c, dari sudut yang lebih dekat: pria duduk di tepi ranjang, kepala di tangan. Sebuah jam di dinding menunjukkan **pukul 03.00**.
**Prompt:**
```
[GAYA] [TOKEN PRIA] sitting on the edge of a bed in [LOK-KAMAR], head in his hands, a simple wall clock showing three o'clock, a candle nearly burnt out on the bedside table, heavy darkness, closer medium shot, 16:9
```
**Kamera:** Judul statis → *slow push-in* 5%.
**Animasi:** `fx` api lilin hampir padam, berkedip tak stabil · `char` bahu naik-turun · jarum detik jam bergerak.
**Audio:** Detak jam yang keras, napas berat, dengung rendah.
**→** *Ink bleed* ke dunia Marcus.

### S20 · 2:33–2:41 · 8 dtk
**Narasi:** "Marcus hidup dikelilingi kematian. Sebagian besar anaknya meninggal saat masih kecil. Dan ia menangisi mereka. `[jeda]`"
**Visual:** Sudut ruangan Romawi yang remang. Di lantai, sebuah **mainan kuda kayu kecil**. Di latar, Marcus duduk dalam bayangan, kepala tertunduk.
**Prompt:**
```
[GAYA] a small worn wooden toy horse on a Roman tiled floor in the foreground, in the dim background [TOKEN MARCUS] sits in shadow with his head bowed in grief, a single candle, deep burgundy shadows, quiet mourning, shallow depth of field, 16:9
```
**Kamera:** *Rack focus*: mainan (tajam) → Marcus (tajam), dengan *push-in* 3%.
**Animasi:** `fx` api lilin · `char` bahu bergetar sangat halus.
**Audio:** Piano solo yang sangat pelan. Tidak ada efek lain.
**→** *Cross-dissolve*.

### S21 · 2:41–2:46 · 5 dtk
**Narasi:** "Karena kendali diri bukan berarti tidak merasakan apa-apa."
**Visual:** Close-up wajah Marcus, **mata basah**, air mata tertahan, rahang mengeras. Ekspresi **duka tertahan**.
**Prompt:**
```
[GAYA] extreme close-up of [TOKEN MARCUS] with restrained grief, eyes wet with unshed tears, jaw tight, candlelight on one side of his face, deep shadow on the other, 16:9
```
**Kamera:** Statis.
**Animasi:** `char` kedip pelan; satu kilau air di mata · `fx` cahaya lilin bergoyang di wajah.
**Audio:** Piano berlanjut.
**→** *Cross-dissolve*.

### S22 · 2:46–2:52 · 6 dtk
**Narasi:** "Ia merasakan semuanya. Tetapi ia tidak membiarkan rasa takut **memegang kemudi**."
**Visual:** Marcus berdiri di depan jendela pada malam berbintang, punggung tegak, menatap langit. Mulai tenang.
**Prompt:**
```
[GAYA] [TOKEN MARCUS] standing by an arched window at night looking up at a vast starry sky, seen from a three-quarter back view, back straight, calm returning to his posture, cool midnight blue light with warm candlelight behind him, 16:9
```
**Kamera:** *Slow pull-out* 6%.
**Animasi:** `bg` bintang berkelip halus · `char` menarik napas panjang, bahu turun.
**Audio:** Musik bergeser dari duka ke tenang.
**→** *Cross-dissolve*.

### S23 · 2:52–3:00 · 8 dtk — *Kartu kutipan*
**Narasi:** "'Yang menyakitimu bukan hal itu sendiri,' tulisnya, 'melainkan penilaianmu atasnya.'"
**Visual:** Simbol: di dinding tenda tampak **bayangan monster raksasa**, tetapi kamera mengungkap bayangan itu berasal dari **benda kecil** (patung kayu kecil) di depan lampu minyak. Kutipan + *— Meditations 8.47*.
**Prompt:**
```
[GAYA] inside [LOK-TENDA], a huge menacing monster-like shadow cast on the tent wall, revealed to come from a tiny carved wooden figurine placed in front of a clay oil lamp on the table, symbolic illustration that fear is larger than reality, 16:9
```
**Kamera:** Mulai di bayangan raksasa → *slow pan* ke benda kecil → **statis** saat teks kutipan muncul.
**Animasi:** Bayangan bergoyang mengikuti api · teks *fade-in*.
**Audio:** Musik tenang; satu nada lembut saat sumber bayangan terungkap.
**→** *Fade* ke hitam.

---

# BAB 6 — MUSUH KEEMPAT: AMARAH ⭐ PUNCAK

### S24 · 3:00–3:04 · 4 dtk
**Narasi:** "Musuh terakhir. Dan yang paling berbahaya: **amarah**."
**Visual:** Judul **"IV · AMARAH"** muncul di atas nyala api anglo yang membesar dalam kegelapan.
**Prompt:**
```
[GAYA] close-up of flames rising from an iron Roman brazier in total darkness, embers flying, deep red and gold fire, dark negative space for a title, 16:9
```
**Kamera:** Statis.
**Animasi:** `fx` api bergolak, bara naik · judul *fade-in*.
**Audio:** Api menderu; dentum rendah pada judul.
**→** *Ink bleed* merah ke Suriah.

### S25 · 3:04–3:14 · 10 dtk
**Narasi:** "Tahun 175. Kabar palsu tentang kematian Marcus menyebar. Avidius Cassius, jenderal terbaiknya, orang yang ia percayai, mengangkat dirinya menjadi kaisar. `[jeda]`"
**Visual:** Teks kecil **"Suriah, 175 M"** di pojok. Cassius di balkon istana gubernur saat senja, mengangkat gulungan bersegel merah di hadapan prajurit berobor. Ekspresi **ambisi/tekad**, sudut kamera rendah. Di akhir, tinta merah menyebar di atas peta kekaisaran dari Suriah ke arah timur.
**Prompt:**
```
[GAYA] [TOKEN CASSIUS] standing on [LOK-ANTIOKHIA], holding up an unrolled scroll with a red wax seal, chin raised with ambitious resolve, Roman soldiers with torches cheering below, golden-burgundy dusk sky, low-angle shot, 16:9
```
**Prompt sisipan (peta, 2 dtk terakhir):**
```
[GAYA] an antique hand-drawn map of the Roman Empire on aged parchment, red ink spreading from Syria across the eastern provinces, 16:9
```
**Kamera:** *Low angle*, *slow push-in* 6% ke Cassius → potong ke peta statis.
**Animasi:** `char` jubah merah karat berkibar · `mid` obor bergoyang · `fx` tinta merah menyebar di peta.
**Audio:** Sorak prajurit di kejauhan, drum rendah. Di peta: hening tegang.
**→** Potong ke tenda Marcus.

### S26 · 3:14–3:21 · 7 dtk
**Narasi:** "Marcus memimpin pasukan terkuat di dunia. Ia bisa memburu sang pengkhianat. Ia bisa menghukum semua pendukungnya."
**Visual:** Di tenda, Marcus duduk dengan **kepalan tangan di atas meja**, surat kabar pemberontakan di depannya. Mata menatap api anglo. Ekspresi **amarah yang ditahan**.
**Prompt:**
```
[GAYA] [TOKEN MARCUS] seated in [LOK-TENDA], a clenched fist resting on the table beside an opened letter with a broken red seal, jaw clenched, eyes fixed on the brazier fire, firelight reflected in his eyes, suppressed anger, 16:9 medium close-up
```
**Kamera:** *Slow push-in* 8% ke mata (lebih cepat dari biasanya untuk menambah tekanan).
**Animasi:** `char` kepalan tangan mengencang · `fx` api anglo bergolak, pantulan api di mata.
**Audio:** Detak jantung kembali (callback hook), api menderu, musik menegang.
**→** *Cross-dissolve* ke legiun.

### S27 · 3:21–3:29 · 8 dtk
**Narasi:** "Tetapi di hadapan pasukannya, ia tidak menyulut kebencian. Ia berkata bahwa ia berharap bisa **memaafkan**."
**Visual:** Malam di kamp. Marcus berdiri di panggung kayu di depan barisan legiun berobor, satu tangan terangkat dengan telapak terbuka (gestur patung berkudanya). Ia memakai zirah perunggu polos di balik jubah (pengecualian di desain karakter).
**Prompt:**
```
[GAYA] [TOKEN MARCUS] wearing a plain dull bronze cuirass under his burgundy cloak, standing on a wooden platform addressing rows of Roman legionaries holding torches in [LOK-KAMP] at night, one hand raised with an open palm, calm and dignified, 16:9 wide shot
```
**Kamera:** Mulai sedang → *slow pull-out* 12% memperlihatkan ratusan obor.
**Animasi:** `mid` obor bergoyang · `char` tangan terangkat perlahan · `fx` salju turun, napas prajurit mengepul.
**Audio:** Ketegangan musik **mereda**; hanya suara api obor dan angin.
**→** *Fade* singkat ke hitam (perpindahan waktu: beberapa bulan).

### S28 · 3:29–3:35 · 6 dtk
**Narasi:** "Beberapa bulan kemudian, Cassius dibunuh oleh perwiranya sendiri. Kepalanya dibawa kepada Marcus. `[jeda]`"
**Visual:** Tangan seorang perwira (tanpa wajah) meletakkan **kotak kayu tertutup** di atas meja Marcus. Kotak **tidak pernah dibuka**.
**Prompt:**
```
[GAYA] close-up of a Roman officer's gloved hands placing a closed plain wooden box on the table in [LOK-TENDA], the oil lamp nearby, ominous stillness, the box remains closed, 16:9
```
**Kamera:** Statis, sudut setinggi meja.
**Animasi:** Tangan meletakkan kotak lalu menarik diri · `fx` api lampu bergetar saat kotak diletakkan.
**Audio:** Bunyi kayu berat di atas meja → hening.
**→** Potong.

### S29 · 3:35–3:39 · 4 dtk
**Narasi:** "Ia menolak melihatnya."
**Visual:** Marcus **memalingkan wajah** ke samping-bawah, mata terpejam, satu tangan terangkat sedikit menolak.
**Prompt:**
```
[GAYA] [TOKEN MARCUS] turning his face away to the side and down with eyes closed, one hand slightly raised in refusal, the closed wooden box blurred in the foreground, warm lamp light, 16:9 close-up
```
**Kamera:** Statis.
**Animasi:** `char` kepala menoleh perlahan (1,5 dtk), mata terpejam.
**Audio:** Hening total.
**→** *Cross-dissolve*.

### S30 · 3:39–3:44 · 5 dtk
**Narasi:** "Lalu ditemukan surat-surat dari mereka yang mendukung pemberontakan itu."
**Visual:** Sebuah peti kayu kecil dibuka: penuh **gulungan surat dengan segel lilin merah**.
**Prompt:**
```
[GAYA] a small open wooden chest filled with dozens of rolled letters sealed with red wax, seen from above on the table in [LOK-TENDA], warm lamp light, 16:9
```
**Kamera:** *Top-down*, *slow push-in* 4%.
**Animasi:** Tutup peti terbuka · `fx` debu naik.
**Audio:** Engsel kayu berderit; musik tipis dan tegang.
**→** Potong.

### S31 · 3:44–3:51 · 7 dtk
**Narasi:** "Ia memegang di tangannya nama-nama semua orang yang telah mengkhianatinya. `[jeda panjang]`"
**Visual:** Close-up **tangan Marcus yang kurus** menggenggam seikat surat. Di belakangnya, api anglo menunggu.
**Prompt:**
```
[GAYA] close-up of an older man's thin hands holding a bundle of sealed letters with red wax seals, an iron brazier burning softly out of focus in the background, deep burgundy shadows, tense stillness, 16:9
```
**Kamera:** Statis, *rack focus* perlahan dari surat ke api di latar.
**Animasi:** Jari mengencang sedikit, lalu mengendur · `fx` api.
**Audio:** **Hening panjang**, hanya derak api.
**→** Potong ke gerak lambat.

### S32 · 3:51–4:00 · 9 dtk ⭐ *Money shot*
**Narasi:** "Dan ia **membakarnya**. Tanpa membaca. Agar ia tidak terdorong membenci siapa pun. `[jeda]`"
**Visual:** **Gerak lambat:** surat-surat jatuh ke anglo; kertas menggulung, segel lilin meleleh, **percikan emas naik** ke kegelapan. Wajah Marcus diterangi api, ekspresi **tekad yang damai**.
**Prompt (api):**
```
[GAYA] slow motion, a bundle of sealed letters falling into an iron brazier fire, papers curling and blackening, red wax seals melting, golden sparks and embers rising into darkness, dramatic and beautiful, 16:9
```
**Prompt (wajah):**
```
[GAYA] [TOKEN MARCUS] watching letters burn in a brazier, calm peaceful resolve, firelight reflected in his eyes, shoulders relaxed, golden sparks rising in front of his face, 16:9 close-up
```
**Kamera:** Shot api (5 dtk) statis → potong ke wajah, *slow push-in* 4% (4 dtk).
**Animasi:** `fx` partikel bara naik (sistem partikel), kertas menggulung (animasi bertahap), cahaya api berkedip di wajah · `char` napas panjang, bahu turun.
**Audio:** **Hening musik.** Hanya derak api, lalu musik paling emosional masuk perlahan pada "Agar ia tidak terdorong membenci siapa pun."
**→** *Cross-dissolve* ke kartu kutipan.

### S33 · 4:00–4:07 · 7 dtk — *Kartu kutipan*
**Narasi:** "'Balas dendam terbaik,' tulisnya, 'adalah tidak menjadi seperti orang yang menyakitimu.'"
**Visual:** Bara terakhir melayang di udara gelap; abu kertas berjatuhan seperti salju. Kutipan + *— Meditations 6.6*.
**Prompt:**
```
[GAYA] glowing embers and grey paper ash floating and falling slowly like snow through dark air, faint warm glow from below, large dark negative space for text, 16:9
```
**Kamera:** **Statis**.
**Animasi:** `fx` abu turun perlahan, bara meredup · teks *fade-in*.
**Audio:** Musik emosional berlanjut.
**→** *Cross-dissolve*.

### S34 · 4:07–4:15 · 8 dtk
**Narasi:** "Siapa pun bisa membalas. Hanya sedikit pria yang mampu menahan diri, justru ketika ia **mampu menghancurkan**."
**Visual:** Marcus berdiri sendirian di luar tenda di bawah salju, menatap kamp yang tenang. Sosok kecil di tengah lanskap luas. Ia tetap berdiri.
**Prompt:**
```
[GAYA] [TOKEN MARCUS] standing alone outside his tent in falling snow, seen from a three-quarter back view, looking over the quiet [LOK-KAMP] at night, small figure in a vast landscape, dignified solitude, 16:9 wide shot
```
**Kamera:** *Slow pull-out* 10%.
**Animasi:** `bg` salju turun · `char` jubah bergerak tertiup angin · `fx` asap api unggun.
**Audio:** Musik mencapai puncak lalu turun pelan.
**→** *Fade* ke hitam (pergantian babak).

---

# BAB 7 — PENUTUP

### S35 · 4:15–4:21 · 6 dtk
**Narasi:** "Tahun 180, Marcus wafat di medan perang. Menurut catatan sejarah, kata-kata terakhirnya:"
**Visual:** Senja. Marcus (±58, Varian C) berbaring di dipan di tenda. Di ambang tenda, siluet seorang perwira jaga menunggu.
**Prompt:**
```
[GAYA] [TOKEN MARCUS-C] lying on a camp bed in [LOK-TENDA] at sunset, peaceful face with a very faint smile, eyes looking toward the tent entrance where a Roman officer stands as a silhouette against orange light, quiet and tender, 16:9
```
**Kamera:** *Slow push-in* 4%.
**Animasi:** `char` napas sangat pelan · `fx` cahaya senja bergeser, debu melayang.
**Audio:** Tema utama dimainkan pelan oleh cello solo.
**→** *Cross-dissolve*.

### S36 · 4:21–4:27 · 6 dtk
**Narasi:** "'Pergilah kepada matahari yang terbit. Aku sudah terbenam.' `[jeda]`"
**Visual:** Matahari besar terbenam di atas Sungai Danube, gradasi burgundy ke emas antik. Tanpa tokoh.
**Prompt:**
```
[GAYA] a large sun setting over the wide Danube river, sky graded from deep burgundy to antique gold, silhouettes of pine forest and a distant Roman fort on the bank, calm water reflecting the light, elegiac mood, 16:9 wide shot
```
**Kamera:** **Statis** (kalimat penting).
**Animasi:** `bg` matahari turun sangat pelan · `mid` air beriak · `fx` burung terbang menjauh.
**Audio:** Cello solo, angin lembut.
**→** *Cross-dissolve*.

### S37 · 4:27–4:37 · 10 dtk
**Narasi:** "Ia mewariskan kekaisaran kepada putranya, Commodus, yang kemudian menjadi kaisar yang kejam. Mahkota bisa diwariskan. **Karakter tidak.** `[jeda]`"
**Visual:** Simbol ironi sejarah: **karangan daun salam emas** dan cincin stempel kekaisaran di atas bantal ungu. Perlahan, emasnya **berubah menjadi besi berkarat** (merujuk catatan Cassius Dio: "dari emas menjadi besi dan karat"). Commodus tidak digambarkan.
**Prompt (awal):**
```
[GAYA] a golden Roman laurel wreath and an imperial signet ring resting on a faded purple cushion, dim light, still life, 16:9
```
**Prompt (akhir):**
```
[GAYA] the same Roman laurel wreath and signet ring on a faded purple cushion, now turned to dark corroded iron covered in rust, flakes of rust on the cushion, cold dim light, still life, 16:9
```
**Kamera:** **Statis**. Transformasi terjadi lewat *cross-dissolve* lambat (4 dtk) antara dua gambar.
**Animasi:** Dissolve emas → karat · `fx` serpihan karat jatuh.
**Audio:** Nada musik turun menjadi minor; bunyi logam berderit samar.
**→** *Cross-dissolve* ke tenda kosong.

### S38 · 4:37–4:46 · 9 dtk
**Narasi:** "Ego. Tekanan. Ketakutan. Amarah. Musuh-musuh itu tak pernah benar-benar pergi. Bahkan seorang kaisar harus melawannya lagi, setiap pagi. `[jeda panjang]`"
**Visual:** Tenda Marcus **kosong**. Tablet lilin tertutup di meja. Lampu minyak **padam**, menyisakan asap tipis yang naik. Saat empat kata disebut, empat **kilasan cepat** (masing-masing ±0,5 dtk) dari S02a–d muncul samar seperti gema.
**Prompt:**
```
[GAYA] an empty [LOK-TENDA] at dawn, the wax tablets closed and stacked on the table, the clay oil lamp just extinguished with a thin wisp of smoke rising, the camp bed empty, pale cold light through the tent flap, quiet absence, 16:9
```
**Kamera:** *Slow pull-out* 6%.
**Animasi:** `fx` asap tipis naik dan meliuk · kilasan S02a–d di-*overlay* dengan opasitas 30%.
**Audio:** Detak jantung dari hook kembali sangat pelan, lalu hilang. Hening sejenak.
**→** ***Match cut*** asap → awan di tebing.

### S39 · 4:46–4:56 · 10 dtk
**Narasi:** "Seperti yang ia tulis untuk dirinya sendiri: Jangan buang waktu lagi berdebat tentang seperti apa pria yang baik itu. `[jeda]` **Jadilah dia.**"
**Visual:** Tebing yang sama dengan S01, tetapi **badai telah reda**. Pria Tanpa Zaman berdiri **tegak**, bahu lepas, kepala terangkat menatap cakrawala. Awan tersibak, cahaya fajar emas menerobos. Mantelnya berkibar pelan (gema jubah Marcus). Teks *— Meditations 10.16* kecil di bawah.
**Prompt:**
```
[GAYA] [TOKEN PRIA] standing upright at [LOK-TEBING] after the storm, shoulders relaxed, head raised toward the horizon, clouds parting, warm golden dawn light breaking through, calm sea below, long coat moving gently in the breeze, peaceful and resolute, 16:9 wide shot
```
**Kamera:** *Slow pull-out* 10%, berhenti **statis** tepat di "Jadilah dia."
**Animasi:** `bg` awan tersibak, cahaya menguat · `char` mantel bergerak lembut · `fx` burung camar jauh, kilau cahaya di laut.
**Audio:** Tema utama penuh (cello + piano), lalu **hening satu detik** sebelum "Jadilah dia."
**→** **Halaman buku ditutup** (transisi khas channel).

### S40 · 4:56–5:00 · 4 dtk
**Narasi:** *(tanpa narasi)*
**Visual:** Buku tua tertutup di atas meja kayu. Di sampulnya, judul channel **"The Art of Being a Man"** dalam huruf emas timbul.
**Prompt:**
```
[GAYA] a closed old leather-bound book on a dark wooden table, embossed antique gold title area on the cover (leave blank for text), soft candlelight, dust in the air, 16:9
```
**Kamera:** Statis.
**Animasi:** Logo/judul channel *fade-in* · `fx` debu, api lilin.
**Audio:** Nada penutup tema → hening.
**→** Selesai.

---

## Daftar Gambar yang Dibutuhkan

| Jenis | Jumlah | Catatan |
|---|---|---|
| Gambar adegan utama | 40 | Satu per adegan |
| Potongan tambahan | 10 | S02 (3 tambahan), S14 (2), S25 (peta), S32 (wajah), S37 (versi karat) |
| **Total** | **±50 gambar** | Dibuat setelah tahap "Gambar AI" disetujui |

## Daftar Teks di Layar

| Adegan | Teks | Font |
|---|---|---|
| S05 | Judul + subjudul episode | Cinzel / Cormorant |
| S08 | MEDITATIONS | Cinzel |
| S09, S14, S19, S24 | I · EGO · II · TEKANAN · III · KETAKUTAN · IV · AMARAH | Cinzel |
| S12, S17, S23, S33, S39 | Kutipan + nomor *Meditations* | Cormorant / EB Garamond |
| S25 | Suriah, 175 M | Cormorant |
| S40 | The Art of Being a Man | Cinzel |

## Cek Kesinambungan

- [x] Narasi di setiap adegan sama persis dengan `script.md` (tidak ada kalimat diubah).
- [x] Total durasi = 5:00; 40 adegan.
- [x] Varian usia Marcus: A (S10), B (mayoritas), C (S35).
- [x] Kepala Cassius tidak pernah diperlihatkan (S28–S29: kotak tertutup).
- [x] Commodus tidak digambarkan; diwakili simbol emas → karat (S37).
- [x] Hook dan penutup memakai lokasi yang sama (`[LOK-TEBING]`): badai → reda.
- [x] Setiap kutipan tampil dengan kamera statis ≥4 detik.
- [x] Setiap adegan memiliki minimal satu efek lingkungan (`fx`).
