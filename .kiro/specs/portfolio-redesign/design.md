# Design: Redesign portfolio Angger Raka Sanjaya

Status: **draft v2** (21 Nov 2026). Jawaban Q1 sampai Q24 sudah masuk. Hal yang menunggu jawaban ditandai F1 sampai F14 (`requirements.md`). Rincian per fakta ada di `content.md`.

## 1. Ringkasan

- Beranda dan satu halaman per proyek, berisi data asli dari PDF LinkedIn, listing Google Play, dan repo GitHub.
- Proyek disimpan per folder di `proyek/<slug>/`. Jekyll bawaan GitHub Pages membaca folder itu setiap kali `main` di-push, sehingga beranda menghitung dan menampilkan proyek tanpa diedit. Mekanismenya sudah diuji (7.6).
- Tampilan memakai tema Hallmark Console (colourway graphite), tone technical, satu mode gelap.
- Hallmark membangun dan me-lint; antislop menjadi filter dan Delivery Gate. Kedua laporan wajib ada.

## 2. Data

### 2.1 Sumber

| Kode | Sumber | Diambil |
| --- | --- | --- |
| LI | PDF profil LinkedIn, 2 halaman, dikirim pemilik | 21 Nov 2026 |
| PS | Listing Google Play `id.sch.stembayo.sim` | 21 Nov 2026 |
| GH | Repo publik github.com/Angger-Raka: README, `pubspec.yaml`, `.csproj`, `App.config`, `docs/brief` | 21 Nov 2026 |
| U | Jawaban pemilik di chat | 21 Nov 2026 |

### 2.2 Isi PDF LinkedIn

| Bagian | Isi | Dipakai untuk |
| --- | --- | --- |
| Nama | "Angger Raka sanjaya"; tampil sebagai Angger Raka Sanjaya (Q2) | Wordmark, title |
| Headline | Mobile & Full-Stack Developer (Flutter, Dart, Vue.js) \| Data Science Enthusiast \| Building Scalable Apps & Digital Solutions | Bahan hero, diringkas (F10) |
| Lokasi | Yogyakarta dan Sekitarnya | Hero, kontak |
| Kontak | Nomor HP (tidak ditulis di repo), email Gmail, URL LinkedIn | Kontak (F7) |
| Ringkasan | Mahasiswa SI di Universitas Terbuka; mobile dan full-stack developer; jalur Data Science di Asah by Dicoding; Clean Architecture dan BLoC di Flutter; Vue.js/Nuxt.js; sistem web dan Odoo ERP untuk UMKM; terbuka untuk kolaborasi | Faktanya dibagi ke bagian lain; tidak tampil sebagai paragraf |
| Pengalaman | SktechID (Juli 2025 sampai sekarang), Asah by Dicoding (Agustus 2026 sampai sekarang), Gamatechno (Mei 2023 sampai Agustus 2024) | Pengalaman, pelatihan |
| Pendidikan | Universitas Terbuka (Juli 2024), SMK Negeri 2 Depok Sleman (2019 sampai Mei 2024) | Pendidikan |
| Sertifikasi | 4 kelas, tanpa penerbit dan tanggal | Pelatihan |
| Keahlian teratas | Analytical Skills, Data Cleaning, Visualisasi Data (PDF hanya memuat 3 teratas) | Keahlian (F12) |

### 2.3 Konflik dan celah

| Temuan | Sumber | Tindak lanjut |
| --- | --- | --- |
| Program kuliah: ringkasan menyebut Sistem Informasi, bagian pendidikan menyebut Information Technology | LI | F6 |
| UT hanya bertanggal "Juli 2024"; kemungkinan tanggal mulai, masih kuliah | LI | F6 |
| SMK tanpa jurusan | LI | F6 |
| Gamatechno tanpa deskripsi, jenis kerja, dan lokasi; periodenya beririsan dengan masa SMK | LI | F5 |
| SktechID tanpa lokasi (halaman LinkedIn perusahaan menyebut Sleman, DIY) | LI | Tampil tanpa lokasi kecuali dikonfirmasi |
| Asah adalah program belajar, tapi tercatat sebagai pengalaman kerja | LI | F10 |
| Vue.js/Nuxt.js dan Odoo ERP untuk UMKM disebut di ringkasan, tanpa proyek atau pengalaman yang menunjukkannya | LI | F11 |
| Tidak ada pengalaman tercatat antara Agustus 2024 dan Juli 2025 | LI | F11 |
| Keahlian teratas berorientasi data, padahal audiens utama klien bisnis yang mencari aplikasi | LI, U | F12 |
| Durasi hasil hitungan LinkedIn ("1 tahun 5 bulan") akan basi | LI | Hanya rentang tanggal yang tampil |
| Ringkasan menampilkan "&amp;" alih-alih "&" | LI | Catatan untuk profil LinkedIn, bukan untuk situs |

### 2.4 Proyek

| Proyek | Fakta utama | Materi visual | Celah |
| --- | --- | --- | --- |
| SIM Stembayo | Aplikasi resmi SMK Negeri 2 Depok Sleman untuk siswa, wali murid, guru, dan admin: presensi harian dan Prakerin, jurnal Prakerin, pengumuman, data siswa; versi 1.3 menambah offline sync presensi dan pengajuan PKL; publisher di Google Play: SktechID (PS). Dibangun dengan Flutter, SOLID, dan Clean Architecture, dibawa sampai rilis di Google Play (LI) | 4 grafik promosi Play Store, memuat data pribadi (2.5) | F1, F2 |
| flutter_boilerplate | Clean Architecture, BLoC, flavor dev/staging/production, lokalisasi Inggris dan Indonesia, GetIt, Dio dengan retry, GoRouter, Firebase; repo dibuat Nov 2025 (GH) | Tidak ada screenshot; struktur `lib/` asli bisa tampil sebagai teks | |
| Rent System | Aplikasi desktop admin rental mobil: C#, Windows Forms, .NET Framework 4.7.2, Krypton Toolkit, SQL Server lewat typed DataSet; login, kelola mobil, pelanggan, pengguna, jenis identitas, katalog, riwayat transaksi; LKS 2023 DIY (GH) | Tidak ada screenshot | F4 |
| PlsFixTech | README menyebutnya Simple Private Chat: chat realtime untuk komunikasi bisnis dengan klien, login dengan verifikasi email; Firebase Auth, Firestore, Realtime Database, Storage, Provider, GetX; dibangun di atas template UI e-commerce TOKOTO; Nov 2022 sampai Jan 2023 (GH) | Gambar README adalah thumbnail tutorial template | F3 |
| flutter-kiro-skeleton | Skeleton Flutter (Clean Architecture, BLoC) dengan toolkit Kiro dan rencana dua aplikasi contoh (Orbit, Tally) untuk Kiroween 2026 kategori Skeleton Crew; batas submission 4 Des 2026 pukul 14.00 waktu Pasifik; sedang dikerjakan (GH) | Belum ada | F13 |

### 2.5 Audit materi visual

| Materi | Isi | Keputusan |
| --- | --- | --- |
| 4 grafik Play Store SIM Stembayo | Komposisi promosi buatan publisher: judul, latar biru, mockup ponsel. Layarnya memuat nama siswa, NIS, kelas, nama orang tua, nomor WA, dan foto wajah di riwayat presensi | Tidak dipakai (R1.7). Diganti screenshot bersih dari akun demo, dengan izin SktechID (F1) |
| `PlsFixTech/assets/images/1.png` sampai `7.png` | Thumbnail seri tutorial template TOKOTO ("Ep 1 Onboard Screen" sampai "Ep 7 Profile Screen") | Tidak dipakai: bukan layar aplikasi pemilik (R1.8, antislop R-38) |
| `PlsFixTech/assets/images/IMG_20230107_*.jpg` | Foto laptop | Tidak dipakai |
| `Rent-System/CarRentAdmin/Images/` | Foto mobil (asal tidak diketahui) dan `Profile.jpg` | Tidak dipakai |

Setiap layar yang belum ada diisi bingkai dummy (Q7): bingkai kosong pada rasio layar asli, tanpa UI palsu. Membangun tiruan layar aplikasi yang sudah ada akan melanggar Hallmark 84 dan antislop R-38.

## 3. Audit situs saat ini (baseline)

Dijalankan pada salinan `index.html` di `/tmp` (repo tidak disentuh):

```
node sloplint.mjs index.html --genre editorial --render --before
```

Hasil: **43 FAIL, 10 REFLEX, 8 WARN**. Rekaman wiring: 8 tautan, 0 field, 0 handler, 4 hook script.

| Temuan | Hallmark | antislop |
| --- | --- | --- |
| Nama placeholder "John Doe" | 19 (FAIL) | R-38 |
| Angka karangan 3+, 20+, 15, 2 (dibaca manual) | Floor 8 | R-17, R-36 |
| Pill "Halo, Selamat Datang!" dengan emoji di atas H1 | 30a (FAIL), Floor 9 | R-09 |
| Gradien indigo ke ungu pada placeholder proyek | 2a (FAIL) | R-01 |
| `transition-all` di 17 elemen | 10a (FAIL) | |
| Gerak tanpa `prefers-reduced-motion`; `.fade-in` tersembunyi tanpa JS | 27, 62 (FAIL) | R-39 |
| 13 SVG tanpa `aria-hidden`/`aria-label`; tombol menu tanpa nama aksesibel | 33 (FAIL) | R-39 |
| Tidak ada `overflow-x: clip`; font dan warna literal | 34, 48 (FAIL) | |
| Cincin fokus 1.07:1; teks berkontras 3.35:1 | 26a, 40 (FAIL) | R-25, R-32 |
| 98 kata dalam satu layar | 58 (FAIL) | |
| Ubin ikon sama besar; bounce; hero berhenti di 714px dari 900px; judul bagian 36px di bawah hero 60px; tiga gambar kosong | REFLEX 3, 12, 44c, 78, 81 | R-14, R-19 |
| Nav kaca dan orb blur; 40 kelas palet bawaan; 4 bobot font; h2 langsung ke h4; tanpa meta description | WARN 29, 74, F19, F21, F23 | R-10, R-13, R-29 |
| Script Tailwind Play CDN di `<head>` (dibaca manual) | | R-40 |
| Tautan mati: 3 "Detail Projek" dan 2 ikon sosial ke `#`, LinkedIn ke beranda linkedin.com (dibaca manual) | | R-24, R-26 |
| Setiap bagian: judul tengah, garis bawah, grid kartu seragam (dibaca manual) | F15 | R-05 |

Tidak ada konten lama yang dibawa. Yang dipertahankan hanya mekanismenya: navigasi ke bagian, menu mobile (dibangun ulang dengan benar), dan atribut `lang`.

## 4. Dua skill dalam satu alur

### 4.1 Peran

- **Hallmark**: tema, draw anatomi halaman, scaffold token, hero lebih dulu, lint statis dan render di delapan lebar layar, review konteks baru, stamp, dan log.
- **antislop**: 40 aturan dalam tiga tier, Design Read dengan tiga dial, kewajiban bertanya sebelum membuat aset (R-23), dan Delivery Gate PASS/FAIL dengan bukti termasuk click-through (R-35). Skill yang dipakai: `antislop`, `antislop-ui`, `antislop-copywriting`, `antislop-human`, `antislop-layoutmobile`, dan `antislop-code` untuk komentar kode.

### 4.2 Urutan kerja

Hallmark dipakai sebagai **build baru**, bukan verb `redesign`, karena verb itu mempertahankan konten lama yang seluruhnya placeholder. Halaman lama tetap direkam sebagai baseline.

1. antislop berjalan dalam mode DURING (Q20). Mode dipilih lewat jawaban atas pertanyaan mode, jadi tidak perlu diumumkan ulang.
2. Pre-flight Hallmark menulis `.hallmark/preflight.json`.
3. Pertanyaan Step 1 Hallmark dan konfirmasi aset antislop R-23 sudah terjawab lewat Q1 sampai Q24 dan F1 sampai F14.
4. Inventaris disusun dari `content.md`; tugas = `hire`.
5. Tema Console (by request), lalu `theme.mjs draw --job hire --material <product|words> --theme console`.
6. Picks block Hallmark untuk beranda dan template halaman proyek dikirim ke pemilik.
7. `theme.mjs scaffold console --dir assets/css` menulis `tokens.css` dan `base.css`. Sistem dikunci ke `DESIGN.md` (data Hallmark, Design Read, dial, alasan per keputusan). Semua halaman memakai sistem yang sama dan hanya berbeda bentuk (Hallmark `redesign.md`, aturan banyak halaman).
8. Kerangka Jekyll: config, layout, include, data profil, template proyek.
9. Nav dan hero beranda, `jekyll build`, `sloplint _site/index.html --render --stage hero`, review hero oleh agent reviewer, perbaikan.
10. Bagian beranda lainnya, layout proyek, lima folder proyek, lalu hero halaman proyek dengan langkah yang sama seperti nomor 9.
11. Sweep semua halaman hasil build, gate yang dinilai manual, review akhir oleh agent reviewer.
12. Delivery Gate antislop, empat blok, dengan click-through semua halaman. Ada FAIL berarti kembali ke nomor 11.
13. Serah terima: perbandingan sebelum dan sesudah, daftar kalimat yang diubah, daftar bingkai dummy, PR.

### 4.3 Konflik dan aturan prioritas

Prinsip: aturan yang lebih ketat menang; konflik yang menyangkut selera diputuskan pemilik.

| Topik | Hallmark | antislop | Keputusan |
| --- | --- | --- | --- |
| Sumber arah | Tema dipilih, atau `design.md` terkunci | Wajib `DESIGN.md` atau arahan eksplisit (R-37) | Console dipilih pemilik, dikunci ke `DESIGN.md` setelah scaffold |
| Mode warna | Tidak membuat dua mode tanpa diminta | Toggle wajib kecuali ada alasan kuat (R-21) | Satu mode gelap (Q17). Alasan: arah yang dipilih pemilik (R-37), material Console memang gelap, dan screenshot aplikasi yang terang paling jelas di atas graphite |
| Jumlah kata | Sekitar 80 per layar, maksimal 450 per halaman (Floor) | Tidak ada batas angka | Hallmark, per halaman |
| Tanda pisah | Em dash dan en dash dilarang (19) | Em dash dilarang (R-02) | Keduanya; rentang tanggal memakai "sampai" |
| Label dan eyebrow | Dilarang (Floor 9) | Boleh dengan alasan (R-06, R-09) | Hallmark |
| Gerak | Hanya `transform` dan `opacity`; Console tanpa reveal, parallax, atau hover lift | Sesuai dial MOTION (R-19) | MOTION 1: hanya perubahan state |
| Perlakuan gambar | Console memberi duotone pada setiap gambar di slot; imagery bagian 4: tangkapan produk tidak diretus | Tidak dibahas | Screenshot tampil dalam warna asli (5.5) |
| Placeholder | Tanpa label placeholder yang terlihat; slot memakai `data-alt` | Placeholder harus jujur, tidak menyamar sebagai final (R-23, R-38) | Bingkai yang jelas kosong, tanpa UI palsu; daftarnya ada di serah terima dan `README.md` |
| Review | Reviewer konteks baru | Delivery Gate tidak bisa didelegasikan | Review Hallmark oleh agent reviewer (Q21); Delivery Gate saya jalankan sendiri |
| Laporan akhir | Stamp, Picks block, handoff | PASS/FAIL dengan bukti | Keduanya |
| Fakta | Floor 8 | R-17, R-18, R-36, R-38 | Fakta tanpa sumber tidak tampil |
| Banyak halaman | Sistem dikunci; halaman berbagi tema, tipe, dan aksen, berbeda bentuk | Navigasi hanya ke tujuan yang ada (R-24) | Keduanya |
| State data | Tidak dibahas | Empty, loading, error untuk UI yang memuat data (R-27) | Tidak berlaku: semua data ditulis saat build, tanpa fetch di browser. Alasan dicatat di Delivery Gate |

### 4.4 Versi yang dipin

Keduanya berlisensi MIT. Dicek ulang 21 Nov 2026: HEAD upstream kedua repo masih sama dengan pin.

| Skill | Versi | Commit |
| --- | --- | --- |
| Hallmark | 2.0.0 | `04977e15f3dfd6ee4b74c887dac3eb52665d6c92` (2026-11-11) |
| antislop | 3.2.32 | `7f6a03df2931c12cb244dc4ab14ee4866b0ac2ba` (2026-11-21) |

Skill tidak disalin ke repo (Q22). Setiap sesi kerja, keduanya di-clone ke `/tmp/skill-refs` pada commit di atas.

### 4.5 Tooling di sandbox

- `/tmp` terhapus antar sesi (terjadi 21 Nov 2026), jadi semua tooling di bawah disiapkan ulang lewat task 1.2.
- Node 22; Ruby 3.4.10 lewat mise; `gcc` dan `make` tersedia.
- Gem dipasang di `GEM_HOME=/tmp/gems` karena `/root` tidak bisa ditulis. Sudah terpasang dan diuji: `jekyll` 3.10.0 dan `github-pages` 233. GitHub Pages saat ini memakai `github-pages` 232 ([pages.github.com/versions](https://pages.github.com/versions/)), jadi build final memakai 232.
- Render Hallmark: `puppeteer-core` di `/tmp/hallmark-tools` dengan wrapper untuk `chrome-headless-shell` milik Playwright (`--no-sandbox`). Diuji di sesi pertama dan menghasilkan 5 screenshot.
- `theme.mjs scaffold console` sudah dicoba di `/tmp`: menghasilkan `tokens.css` dan `base.css`. `base.css` memberi duotone pada semua gambar di slot (lihat 5.5).
- Kontras: `antislop-human/contrast-check.py` (Python 3.11). Click-through: Playwright.

## 5. Arah visual: Console

### 5.1 Tone dan dial

- Tone: technical (Q14).
- Dial: ENERGY 2 / RHYTHM 2 / MOTION 1. Console berposisi restrained dan tidak memakai reveal, jadi MOTION 1. RHYTHM 2 karena beranda memadukan trail, panel, dan daftar.
- Baris Design Read untuk `DESIGN.md`:

> Reading this as: portfolio dan halaman proyek seorang Flutter developer untuk klien bisnis dan rekruter, dalam bahasa visual Hallmark Console (graphite), dial ENERGY 2 / RHYTHM 2 / MOTION 1.

### 5.2 Material tema

Diringkas dari `references/themes/console.md`:

- Dasar graphite dalam tiga tingkat terang, tinta pucat, panel garis rambut 1px dengan radius 10px (kontrol 6px). Tanpa bayangan, glow, tekstur, atau gradien.
- Huruf: Host Grotesk 400 dan 500 untuk teks dan judul (judul 500, tidak pernah 700); Atkinson Hyperlegible Mono untuk nilai terukur seperti tanggal, versi, dan id.
- Dua makna warna: amber untuk orang, langkah saat ini, dan satu aksi utama; biru dingin untuk data dan versi. Ok dan bad hanya untuk status.
- Gerak: nilai berubah saat sumbernya berubah; tanpa reveal, parallax, atau hover lift.
- Larangan tema: menukar makna warna, kartu melayang berbayang, sinyal ketiga atau foto berwarna, huruf mono pada label/judul/tombol, dan halaman yang isinya hanya panel kecil.

### 5.3 Range tema untuk portfolio ini

| Range Console | Dipakai untuk |
| --- | --- |
| Trails | Pengalaman: satu baris per posisi pada garis vertikal; jabatan (amber untuk posisi saat ini), periode (biru dingin, mono), dan apa yang dibangun (tinta) |
| Panels | Daftar proyek di beranda: satu permukaan dibagi garis 1px, SIM Stembayo sebagai panel utama |
| Readings | Fakta terukur di halaman proyek (versi, tahun, platform) dalam huruf mono, hanya yang bersumber |
| Diffs | Tidak dipakai, kecuali ada perbandingan nyata dari pemilik |

### 5.4 Signature

- Layar asli SIM Stembayo di hero beranda (Q16), di dalam panel garis rambut bersama fakta singkatnya: untuk siapa, dan tersedia di Google Play.
- Grafik promosi Play Store tidak bisa dipakai (2.5). Sampai screenshot bersih ada, hero memakai bingkai dummy, dan stamp mencatat bahwa signature masih menunggu materi.
- Usulan (F1): build boleh berjalan dengan bingkai dummy, tetapi merge menunggu screenshot ini, karena signature adalah keputusan pemilik.

### 5.5 Screenshot dalam warna asli

- `base.css` dari scaffold Console membuat semua gambar di slot menjadi duotone graphite.
- Untuk slot bertanda `data-kind="product"`, filter itu dimatikan sehingga screenshot tampil dalam warna aslinya. Dasarnya: Hallmark imagery bagian 4 melarang meretus apa yang ditampilkan produk, dan pengunjung perlu melihat aplikasi yang sebenarnya.
- Akibatnya warna aplikasi ikut tampil (SIM Stembayo memakai biru). Warna itu hanya ada di dalam screenshot dan tidak dipakai di UI situs.
- Keputusan ini dicatat di stamp dan `DESIGN.md`.

### 5.6 Pratinjau draw

| Materi | Seed | Bentuk | Hero | Nav | Footer |
| --- | --- | --- | --- | --- | --- |
| product | `0c3301` | Feature Stack | Index | floating pill | letter close |
| words | `58bcdd` | Index-First | Banner | slab | colophon block |

- Draw diacak setiap build. Draw final diambil di task 2.1 sesuai materi yang ada saat itu, lalu dicatat di Picks block.
- Feature Stack butuh 3 sampai 6 tangkapan layar per bagian. Selama layar masih dummy, bentuk ini ditolak karena akan menjadi deretan bingkai kosong (Hallmark 68).

## 6. Struktur halaman

### 6.1 Beranda

Total sekitar 410 dari batas 450 kata.

| # | Bagian | Isi | Kata |
| --- | --- | --- | --- |
| 1 | Nav | Wordmark, Proyek, Pengalaman, Kontak, satu aksi kontak (F7) | ~8 |
| 2 | Hero | Headline maksimal 7 kata, kalimat maksimal 12 kata, status (F8), 2 aksi, layar SIM Stembayo | ≤ 30 |
| 3 | Proyek (`#proyek`) | Judul otomatis, misalnya "5 proyek, 2022 sampai 2026"; satu panel per proyek: nama, ringkasan, konteks, tahun, stack, tautan ke halamannya | ≤ 140 |
| 4 | Pengalaman (`#pengalaman`) | Trail: SktechID dan Gamatechno (dan Asah bila F10 memilih pengalaman) | ≤ 70 |
| 5 | Keahlian (`#keahlian`) | Kelompok teks, setiap kelompok bertaut ke buktinya | ≤ 60 |
| 6 | Pendidikan dan pelatihan (`#pendidikan`) | UT, SMK, Asah, 4 sertifikat | ≤ 60 |
| 7 | Kontak dan footer (`#kontak`) | WhatsApp, email, LinkedIn, GitHub, lokasi; penutup | ≤ 40 |

### 6.2 Halaman proyek (`/proyek/<slug>/`)

| # | Bagian | Isi | Kata |
| --- | --- | --- | --- |
| 1 | Nav | Sama dengan beranda; "Proyek" menuju `/#proyek` | ~8 |
| 2 | Hero | Nama proyek, ringkasan maksimal 12 kata, aksi utama (Google Play atau GitHub) dan kontak, layar utama atau bingkai dummy | ≤ 25 |
| 3 | Fakta | Panel: peran, konteks, tahun, status, platform, stack, dasar template bila ada | ≤ 40 |
| 4 | Cerita | Isi Markdown dari `index.md` | ≤ 150 |
| 5 | Layar | 2 sampai 4 layar, hanya bila `screens` berisi 2 atau lebih | ≤ 20 |
| 6 | Proyek lain dan kontak | Tautan ke proyek sebelum dan berikutnya, aksi kontak | ≤ 30 |
| 7 | Footer | Sama dengan beranda | ≤ 20 |

Untuk proyek tanpa layar, hero menampilkan bingkai dummy atau, bila diisi, blok `code` berisi teks asli dari repo (misalnya struktur folder `lib/` flutter_boilerplate).

## 7. Desain teknis

### 7.1 Mekanisme proyek berbasis folder

| Opsi | Cara kerja | Kelebihan | Kekurangan |
| --- | --- | --- | --- |
| **A. Jekyll bawaan GitHub Pages (dipilih)** | GitHub Pages sudah menjalankan Jekyll pada setiap push ke `main` (build legacy). Beranda membaca semua halaman ber-layout `project` | Tanpa Actions dan tanpa build step bagi pemilik; konten terlihat tanpa JavaScript; proyek ditulis dalam Markdown | Template memakai Liquid; pratinjau lokal butuh Ruby |
| B. Daftar manual | Setiap proyek baru ditambah satu baris di `index.html` | Paling sederhana | Tidak otomatis, berlawanan dengan Q19 |
| C. GitHub Actions dengan generator Node | Script membaca folder saat build di Actions | Fleksibel | Menambah tooling dan workflow; Pages pindah ke build Actions |
| D. JavaScript membaca GitHub API | Browser meminta daftar folder ke api.github.com saat halaman dibuka | Tanpa build | Daftar kosong tanpa JavaScript (Hallmark Floor 7), batas 60 request per jam per IP tanpa login, lebih lambat |

### 7.2 Rencana file

```
Angger-Raka.github.io/
├── _config.yml                    create: lang, url, theme null, exclude
├── _data/profil.yml               create: identitas, kontak, pengalaman, pendidikan, sertifikat, keahlian
├── _layouts/base.html             create: <html lang="id">, head, nav, footer
├── _layouts/project.html          create: halaman proyek
├── _includes/                     create: nav, footer, kontak, panel proyek, bingkai layar
├── index.html                     edit: diganti penuh, isinya Liquid
├── proyek/
│   ├── _template/index.md         create: contoh untuk disalin, tidak terbit
│   ├── sim-stembayo/index.md      create (+ screenshot saat tersedia)
│   ├── flutter-boilerplate/index.md
│   ├── rent-system/index.md
│   ├── plsfixtech/index.md
│   └── flutter-kiro-skeleton/index.md
├── assets/css/tokens.css          create: scaffold Hallmark
├── assets/css/base.css            create: scaffold Hallmark
├── assets/css/site.css            create: stamp Hallmark di baris pertama
├── assets/js/site.js              create: menu mobile, script slot; dimuat dengan defer
├── assets/img/                    create: favicon.svg, og.png
├── Gemfile                        create: github-pages 232, untuk pratinjau lokal
├── .gitignore                     create: _site/, Gemfile.lock, cache Jekyll
├── README.md                      create: cara menambah proyek (tidak terbit)
├── DESIGN.md                      create: sistem terkunci (tidak terbit)
├── .hallmark/                     create: preflight, log, rekaman (tidak terbit)
└── .kiro/specs/portfolio-redesign/   spec ini (tidak terbit)
```

Dihapus: tidak ada. Isi `index.html` lama diganti.

### 7.3 Front matter proyek

Contoh `proyek/sim-stembayo/index.md`:

```yaml
---
layout: project
title: SIM Stembayo
order: 1
featured: true
year: 2025
summary: Aplikasi resmi SMK Negeri 2 Depok Sleman untuk presensi dan PKL.
context: Kerja di PT Solusi Karya Technology Indonesia
role: Mobile Application Developer
status: Rilis di Google Play
stack: [Flutter, Clean Architecture, SOLID]
links:
  - label: Buka di Google Play
    url: https://play.google.com/store/apps/details?id=id.sch.stembayo.sim
screens:
  - file: beranda.webp
    alt: Beranda siswa di SIM Stembayo
---
Cerita proyek dalam Markdown, paling banyak sekitar 150 kata.
```

| Field | Wajib | Isi |
| --- | --- | --- |
| `layout` | ya | selalu `project` |
| `title` | ya | nama proyek, maksimal 7 kata |
| `order` | ya | urutan di beranda; angka kecil di atas |
| `year` | ya | tahun mulai, 4 digit |
| `summary` | ya | satu kalimat, maksimal 12 kata |
| `context` | ya | Kerja, Pribadi, Lomba, Hackathon, atau Kursus, dengan nama tempatnya |
| `role` | ya | peran pemilik |
| `status` | ya | misalnya Rilis di Google Play, Selesai, Sedang dikerjakan |
| `stack` | ya | daftar teknologi |
| `links` | tidak | daftar `label` dan `url` |
| `screens` | tidak | daftar `file` dan `alt`; file di folder yang sama |
| `code` | tidak | teks asli dari repo (misalnya struktur folder) untuk proyek tanpa layar |
| `based_on` | tidak | template atau kode pihak lain yang dipakai (R1.8) |
| `featured` | tidak | `true` untuk proyek di hero beranda, satu saja |
| `published` | tidak | `false` untuk menyembunyikan |

### 7.4 Logika beranda

```liquid
{% assign projects = site.pages | where: "layout", "project" | sort: "order" %}
{% assign years = projects | map: "year" | sort %}
<h2>{{ projects.size }} proyek, {{ years.first }} sampai {{ years.last }}</h2>
```

Bila tahun pertama sama dengan tahun terakhir, yang tampil satu tahun saja. Proyek hero diambil dari `featured: true`.

### 7.5 Menambah proyek

Isi `README.md`:

1. Salin `proyek/_template/` menjadi `proyek/<nama-proyek>/` (huruf kecil, tanda hubung). Lewat GitHub web: **Add file**, **Create new file**, ketik `proyek/<nama-proyek>/index.md`, lalu tempel isi template.
2. Isi front matter dan cerita di `index.md`.
3. Unggah screenshot ke folder yang sama, lalu tulis nama filenya di `screens`.
4. Commit ke `main`. GitHub Pages membangun ulang situs, dan beranda menampilkan proyek baru beserta jumlah dan rentang tahunnya.
5. Untuk menyembunyikan proyek, isi `published: false`. Untuk mengubah urutan, ubah `order`.

### 7.6 Hasil uji

Diuji 21 Nov 2026 di `/tmp/jekyll-poc`, di luar repo.

| Uji | Hasil |
| --- | --- |
| Dua folder proyek dengan `order` 1 dan 2 | Beranda: "2 proyek, 2023 sampai 2026", urut sesuai `order` |
| Folder baru ditambah tanpa mengedit beranda | "3 proyek", proyek baru muncul di daftar |
| `proyek/_template/` | Tidak terbit |
| `published: false` | Tidak terbit dan tidak dihitung |
| `DESIGN.md`, `README.md`, `Gemfile`, `.kiro/` | Tidak terbit |
| Gambar di folder proyek | Ikut terbit di URL proyek |
| Build dengan `github-pages` 233 lewat Bundler (konfigurasi GitHub Pages) | Hasil sama. Tanpa `theme: null`, tema bawaan menambah `assets/css/style.css`; dengan `theme: null` file itu tidak ada |

Belum diuji: `featured`, dan build dengan `github-pages` 232 (task 1.2).

### 7.7 Konfigurasi

```yaml
title: Angger Raka Sanjaya
lang: id
url: https://angger-raka.github.io
theme: null
exclude: [DESIGN.md, README.md, Gemfile, Gemfile.lock, vendor]
```

## 8. Aturan copy

- Bahasa Indonesia; istilah teknis Inggris boleh. Suara Console: hemat dan tepat, nilai disertai satuan dan waktunya.
- Tanpa em dash dan en dash. Rentang tanggal: "Juli 2025 sampai sekarang". Durasi tidak ditulis.
- Tanpa kata kosong: seamless, robust, cutting-edge, next-generation, AI-powered, scalable, end-to-end, solusi digital, inovatif, terdepan, terbaik, luar biasa.
- Tanpa sapaan template dan tanpa emoji.
- Aksi spesifik: "Chat di WhatsApp", "Kirim email", "Buka di Google Play", "Lihat kode di GitHub" (R-15).
- Angka hanya bila bersumber. Jumlah proyek dihitung dari folder.
- Tautan Google Play tanpa parameter pelacak (`pcampaignid`).
- Draf hero dan daftar kalimat yang diubah ada di `content.md`.

## 9. Verifikasi

| Pemeriksaan | Alat | Lulus bila | Bukti disimpan di |
| --- | --- | --- | --- |
| Build | `bundle exec jekyll build` dengan `github-pages` 232 | Tanpa error; file kerja tidak ada di `_site/` | Log build dan daftar file `_site/` di PR |
| Gate statis dan render | `sloplint _site/index.html _site/proyek --render` | 0 FAIL; REFLEX diperbaiki atau di-waive di stamp | Output lint di PR, stamp CSS |
| Hero | `--stage hero` untuk beranda dan satu halaman proyek, review agent reviewer | Temuan ditangani dan dinilai ulang | Baris `hero-review` di stamp |
| Review akhir | Agent reviewer | Kata pertama `ship`, atau semua temuan ditangani | Baris `finish-review` di stamp |
| Kontras | `contrast-check.py` dan render tier | Semua pasangan lulus AA | `delivery-gate.md` |
| Click-through | Playwright pada `_site/` yang disajikan lokal, 375 dan 1440 px | Setiap tautan dan kontrol melakukan aksinya, console bersih | `delivery-gate.md`, per elemen |
| Keyboard | Playwright: Tab, Enter, Escape | Urutan logis, fokus terlihat, menu tertutup dengan Escape | `delivery-gate.md` |
| Folder proyek | Folder uji dan `published: false` | Jumlah naik, lalu proyek tersembunyi | `delivery-gate.md` |
| Delivery Gate | Empat blok antislop | Semua PASS dengan bukti | `delivery-gate.md`, PR |
| Sebelum dan sesudah | `sloplint --before` dan screenshot | Tersedia untuk pemilik | `.hallmark/` |
| Situs live | Buka beranda dan satu halaman proyek setelah merge | Tampil tanpa error | Catatan di PR |

## 10. Risiko

| Risiko | Mitigasi |
| --- | --- |
| Screenshot memuat data pribadi | Grafik Play Store tidak dipakai; setiap screenshot diperiksa sebelum commit (R1.7) |
| Screenshot SIM Stembayo belum ada saat build selesai | Bingkai dummy; merge menunggu sesuai jawaban F1 |
| Karya berbasis template terbaca sebagai karya penuh | Field `based_on` tampil di halaman proyek (R1.8) |
| GitHub Pages hanya membangun `main`, jadi branch tidak bisa dipratinjau online | Build lokal dengan gem yang sama; screenshot di PR |
| Versi GitHub Pages berubah | `github-pages` 232 dipin di `Gemfile`; versi dicek ulang saat build |
| Proyek baru ditambah tanpa lint | Template dengan batas kata di komentar; layout menangani field kosong dan gambar yang tidak ada |
| Batas kata tidak muat isi LinkedIn | Ringkas dengan daftar perubahan; detail pindah ke halaman proyek |
| Data pekerjaan kantor tampil tanpa izin | Hanya SIM Stembayo (Q6); Gamatechno tanpa proyek sampai F5 |
| Skill berubah di tengah jalan | Commit dipin (4.4) |
| `/tmp` terhapus antar sesi | Task 1.2 di setiap sesi |
