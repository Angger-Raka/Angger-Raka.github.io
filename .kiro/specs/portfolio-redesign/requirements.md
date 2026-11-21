# Requirements: Redesign portfolio Angger Raka Sanjaya

Status: **draft v2** (21 Nov 2026). Jawaban Q1 sampai Q24 sudah dicatat. Pertanyaan lanjutan F1 sampai F14 menunggu jawaban (tabel di akhir file).
Repo: `Angger-Raka/Angger-Raka.github.io` (publik), GitHub Pages dari `main` root dengan build legacy (Jekyll), live di https://angger-raka.github.io/

## Latar belakang

Situs sekarang adalah template generik buatan bot (commit `e504dd5`): nama "John Doe", angka karangan, tiga proyek fiktif, tautan mati, dan Tailwind Play CDN. Lint Hallmark menghasilkan 43 FAIL, 10 REFLEX, 8 WARN (`design.md` bagian 3).

Redesign ini mengganti seluruh konten dengan data asli dan membangun ulang tampilan dengan dua skill:

- **Hallmark** (Nutlope/hallmark): tema, struktur halaman, build, dan lint di browser.
- **antislop** (miqdadbadjuber/anti-slop): filter slop untuk UI, copy, dan aksesibilitas, ditutup dengan Delivery Gate.

## Keputusan pemilik (21 Nov 2026)

| ID | Keputusan |
| --- | --- |
| Q1 | Data dari PDF profil LinkedIn (2 halaman) |
| Q2 | Nama yang tampil: Angger Raka Sanjaya |
| Q3 | Bagian: Pengalaman, Proyek, Keahlian, Pendidikan, Sertifikasi. "AI Enthusiast" tidak dipakai |
| Q4 | Teks LinkedIn boleh diringkas, dengan daftar perubahan |
| Q5 | Proyek: SIM Stembayo, flutter_boilerplate, flutter-kiro-skeleton, Rent-System, PlsFixTech |
| Q6 | Pekerjaan kantor yang boleh tampil saat ini: SIM Stembayo (tautan Google Play) |
| Q7 | Gambar: bingkai dummy dulu, diisi bila materi asli bisa dipakai |
| Q8 | Wordmark teks, favicon inisial, gambar preview tautan dari hero, tanpa CV |
| Q9 | Tanpa testimoni |
| Q10 | Open to work, juga terbuka untuk freelance |
| Q11 | Audiens utama klien bisnis, tetap terbaca untuk umum termasuk rekruter |
| Q12 | Satu bahasa: Bahasa Indonesia (bahasa profil LinkedIn) |
| Q13 | Kontak dari PDF: nomor HP, email, LinkedIn. Cara menampilkan nomor HP: F7 |
| Q14 | Tone technical; dial ENERGY 2 / RHYTHM 2 / MOTION 1 |
| Q15 | Tema Hallmark: Console (by request) |
| Q16 | Signature: layar asli aplikasi terbaik di layar pertama |
| Q17 | Satu mode warna mengikuti tema (Console, gelap) |
| Q18 | HTML, CSS, dan sedikit JavaScript; Tailwind CDN dihapus |
| Q19 | Halaman terpisah per proyek; proyek ditambah lewat folder dan beranda menghitungnya otomatis |
| Q20 | antislop mode DURING |
| Q21 | Review Hallmark oleh agent reviewer terpisah |
| Q22 | Skill tidak dipasang di repo; versi terpin di-clone setiap sesi |
| Q23 | Branch `feat/portfolio-redesign`, PR ke `main`, merge setelah disetujui; spec di-push ke branch itu |
| Q24 | Tanpa domain custom dan tanpa analytics |

Q18 dan Q19 saling bertabrakan: HTML statis murni tidak bisa membaca isi folder. Spec ini memakai Jekyll yang sudah dijalankan GitHub Pages pada repo ini, jadi tetap tanpa build step di sisi pemilik (`design.md` bagian 7). Menunggu konfirmasi F9.

## Ruang lingkup

Termasuk: beranda; satu halaman per proyek di `/proyek/<slug>/`; mekanisme proyek berbasis folder; `DESIGN.md`; panduan menambah proyek di `README.md`; konfigurasi Jekyll untuk GitHub Pages.

Tidak termasuk: blog, CMS, form kontak, data GitHub yang diambil live, analytics, domain custom, CV, testimoni, mode terang, versi bahasa Inggris, perubahan profil LinkedIn atau README profil GitHub.

## Glosarium

- **Fakta**: setiap nama, jabatan, perusahaan, tanggal, angka, tautan, atau klaim yang tampil di situs.
- **Sumber**: `LI` (PDF profil LinkedIn, diterima 21 Nov 2026), `PS` (listing Google Play SIM Stembayo, diambil 21 Nov 2026), `GH` (repo publik GitHub milik pemilik), `U` (pernyataan pemilik di chat).
- **Inventaris konten**: `content.md` di folder spec ini.
- **Folder proyek**: `proyek/<slug>/`, berisi `index.md` dan gambar proyek itu.
- **Bingkai dummy**: bingkai kosong pada rasio layar asli, tempat screenshot nanti dipasang.
- **Pemilik**: Angger Raka Sanjaya.

## Requirement 1: Konten berasal dari data asli

**User story:** Sebagai pemilik, saya ingin isi situs berasal dari profil dan karya saya sendiri, supaya akurat dan dipercaya klien.

1. Situs HARUS hanya menampilkan fakta yang tercatat di inventaris konten dengan sumber `LI`, `PS`, `GH`, atau `U`.
2. JIKA sebuah fakta tidak punya sumber, MAKA fakta itu TIDAK BOLEH tampil (antislop R-17, R-36, R-38; Hallmark Floor 8).
3. Situs TIDAK BOLEH memuat sisa template lama: "John Doe", angka 3+/20+/15/2, proyek E-Commerce App, Finance Tracker, Smart Notes, dan `mailto:hello@johndoe.com`.
4. KETIKA teks LinkedIn diringkas, faktanya HARUS tetap sama, dan setiap kalimat yang berubah HARUS dicatat sebelum dan sesudah (Q4).
5. Nomor HP HANYA boleh tampil dalam bentuk yang dipilih di F7. Sampai saat itu, nomor HP TIDAK BOLEH ditulis di file mana pun di repo publik ini.
6. Tidak ada bagian testimoni (Q9, R-18).
7. Gambar di situs TIDAK BOLEH memuat data pribadi orang lain: nama, nomor induk, nomor telepon, lokasi, atau wajah.
8. Karya yang dibangun di atas template atau kode pihak lain HARUS menyebutnya di halaman proyeknya, dan gambar milik template TIDAK BOLEH ditampilkan sebagai karya pemilik.
9. Durasi hasil hitungan LinkedIn ("1 tahun 5 bulan") TIDAK BOLEH tampil; yang tampil hanya rentang tanggal.
10. Inventaris konten HARUS disetujui pemilik sebelum build dimulai.

## Requirement 2: Beranda untuk satu tugas, yaitu dihubungi

**User story:** Sebagai klien bisnis atau rekruter, saya ingin cepat tahu apa yang sudah Angger bangun dan cara menghubunginya.

1. Beranda HARUS punya 6 sampai 9 bagian termasuk hero dan footer: hero, proyek, pengalaman, keahlian, pendidikan dan pelatihan, kontak dan footer.
2. Hero HARUS berisi headline maksimal 7 kata (50 karakter), satu kalimat maksimal 12 kata, dan 1 sampai 2 aksi, semuanya terlihat di 1280x800 tanpa scroll (Hallmark Floor 12).
3. Aksi kontak HARUS ada di nav dan muncul lagi setelah bagian proyek (anatomi Hallmark untuk tugas "hire").
4. Setiap jendela setinggi 900px pada lebar 1440px HARUS memuat sekitar 80 kata atau kurang, dan total kata yang terlihat di satu halaman maksimal 450 (Hallmark Floor 13).
5. Daftar proyek HARUS dibaca dari folder proyek (Requirement 4).
6. Setiap entri pengalaman HARUS menyebut jabatan, perusahaan, dan periode; jenis kerja dan lokasi ditampilkan bila datanya ada.
7. Setiap item navigasi HARUS menuju bagian atau halaman yang ada (R-24, R-26).
8. Rentang tanggal HARUS ditulis tanpa em dash maupun en dash, misalnya "Juli 2025 sampai sekarang" (R-02, Hallmark 19).
9. Status ketersediaan HARUS memakai kalimat yang disetujui di F8.

## Requirement 3: Halaman per proyek

**User story:** Sebagai calon klien, saya ingin membuka satu proyek dan melihat apa yang dibangun, untuk siapa, dan statusnya.

1. Setiap proyek HARUS punya halaman sendiri di `/proyek/<slug>/` (Q19).
2. Halaman proyek HARUS menampilkan nama, ringkasan maksimal 12 kata, konteks, tahun, peran, status, stack, tautan asli (repo atau Google Play) bila ada, layar atau bingkai dummy, dan cerita singkat.
3. Batas Hallmark berlaku per halaman: hero seperti Requirement 2.2, sekitar 80 kata per layar, 450 kata per halaman, dan maksimal 5 bingkai kosong per halaman, tidak pernah 4 atau lebih dalam satu baris (Hallmark 68).
4. Setiap halaman proyek HARUS punya tautan kembali ke daftar proyek dan aksi kontak.
5. Bingkai dummy HARUS berupa bingkai kosong pada rasio layar asli, tanpa UI palsu (Hallmark 84, antislop R-38).

## Requirement 4: Proyek berbasis folder

**User story:** Sebagai pemilik, saya ingin menambah proyek cukup dengan menambah folder, tanpa mengedit beranda.

1. Satu proyek HARUS berupa satu folder `proyek/<slug>/` berisi `index.md` (front matter dan cerita) beserta gambarnya.
2. KETIKA folder proyek baru di-push ke `main`, beranda HARUS menampilkan proyek itu dan memperbarui jumlah serta rentang tahun proyek, tanpa beranda diedit.
3. Urutan proyek HARUS mengikuti field `order`.
4. `proyek/_template/` TIDAK BOLEH terbit; folder ini disalin untuk membuat proyek baru.
5. KETIKA sebuah proyek berisi `published: false`, proyek itu TIDAK BOLEH tampil atau dihitung.
6. Proyek dengan `featured: true` HARUS menjadi isi hero beranda.
7. KETIKA file gambar dicantumkan di front matter dan ada di folder, gambar itu HARUS menggantikan bingkai dummy. KETIKA file itu tidak ada, bingkai dummy HARUS tetap tampil tanpa ikon gambar rusak.
8. `README.md` HARUS menjelaskan, dalam Bahasa Indonesia, cara menambah, menyembunyikan, dan mengurutkan proyek serta memasang screenshot.

## Requirement 5: Arah visual dipilih pemilik dan dikunci

1. Tema HARUS Console (by request) dengan colourway graphite, dan dicatat di stamp CSS (Q15).
2. Tone technical, dial ENERGY 2 / RHYTHM 2 / MOTION 1, dan baris Design Read HARUS ditulis di `DESIGN.md` (Q14).
3. Setelah scaffold Hallmark, sistem HARUS dikunci ke `DESIGN.md` dan dipakai bersama oleh semua halaman; setiap keputusan besar HARUS punya alasan satu baris (R-31).
4. Semua warna dan font HARUS lewat token (Hallmark Floor 1). Amber berarti orang, posisi saat ini, atau satu aksi utama; biru dingin berarti data terukur; ok dan bad hanya untuk status (tema Console, R-29).
5. Halaman TIDAK BOLEH memakai: eyebrow atau pill di atas judul, label huruf kapital berjarak, satu kata berwarna di dalam judul, emoji sebagai ikon, gradien, bayangan, glow, ubin logo teknologi, label level keahlian, gerak reveal, parallax, atau hover lift.
6. Signature HARUS berupa layar asli SIM Stembayo di layar pertama beranda (Q16). Selama layar bersih belum ada, posisinya diisi bingkai dummy dan dicatat sebagai materi yang kurang.
7. Screenshot aplikasi HARUS tampil dalam warna aslinya, tanpa perlakuan duotone tema (Hallmark imagery bagian 4: hasil tangkapan produk tidak diretus).
8. Situs memakai satu mode gelap, dan alasannya HARUS ditulis di `DESIGN.md` (Q17, R-21).

## Requirement 6: Aksesibilitas

1. Semua teks HARUS memenuhi kontras WCAG AA: 4.5:1 untuk teks normal, 3:1 untuk teks besar (R-25).
2. Semua elemen interaktif HARUS bisa dioperasikan keyboard dan punya `:focus-visible` yang langsung tampil, dengan cincin fokus berkontras minimal 3:1 (R-32, Hallmark Floor 6).
3. Tombol menu mobile HARUS punya nama aksesibel dan `aria-expanded`, dan menunya bisa ditutup dengan Escape.
4. Setiap halaman HARUS punya `lang="id"`, `<title>` unik, meta description, landmark (`header`, `nav`, `main`, `footer`), satu `h1`, dan tidak melompati level heading (R-39, F21, F23).
5. Setiap gambar HARUS punya `alt`; ikon dekoratif memakai `aria-hidden="true"`.
6. KETIKA `prefers-reduced-motion: reduce` aktif, semua gerak non-esensial HARUS berhenti (Hallmark Floor 7, R-39).
7. Konten HARUS tetap terlihat saat JavaScript mati (Hallmark Floor 7).
8. Meta viewport TIDAK BOLEH memblokir zoom.

## Requirement 7: Responsif

1. TIDAK BOLEH ada overflow horizontal pada lebar 320 sampai 1920px (R-03); `html` dan `body` memakai `overflow-x: clip` (Hallmark Floor 4).
2. Target sentuh minimal 44px (R-03).
3. Container dibatasi lebarnya dan berada di tengah; di 1920px yang melebar hanya margin samping (Hallmark Floor 14).
4. Konten yang tampil di desktop HARUS juga tersedia di ponsel (Hallmark F25).

## Requirement 8: Teknis, performa, dan deploy

1. Situs HARUS dibangun oleh Jekyll bawaan GitHub Pages (build legacy dari `main` root), tanpa build step di sisi pemilik dan tanpa GitHub Actions (F9).
2. Tailwind Play CDN HARUS dihapus, dan tidak boleh ada script pihak ketiga yang memblokir render di `<head>` (R-40).
3. Setiap `<img>` HARUS punya `width` dan `height` atau `aspect-ratio`; gambar hero tidak memakai `loading="lazy"` dan memakai `fetchpriority="high"`; gambar lain lazy (R-40).
4. Font HARUS memakai `font-display: swap` dan hanya memuat bobot yang dipakai.
5. File kerja TIDAK BOLEH terbit: `.kiro/`, `.hallmark/`, `DESIGN.md`, `README.md`, `Gemfile`, dan `proyek/_template/`. Ini HARUS diperiksa pada hasil build `_site/`.
6. `_config.yml` HARUS memakai `theme: null` agar tema bawaan GitHub Pages tidak ikut terbit.
7. Angka performa (Lighthouse, Web Vitals) HANYA boleh dilaporkan bila benar-benar diukur (R-40).

## Requirement 9: Bahasa

1. Seluruh teks memakai Bahasa Indonesia dengan `lang="id"` (Q12). Istilah teknis berbahasa Inggris seperti Flutter, Clean Architecture, dan BLoC boleh dipakai.

## Requirement 10: Verifikasi sebelum dianggap selesai

1. `sloplint` Hallmark dengan `--render` HARUS dijalankan pada setiap halaman hasil build (beranda dan semua halaman proyek) dan berakhir dengan 0 FAIL; setiap REFLEX diperbaiki atau di-waive dengan alasan tertulis di stamp.
2. Review hero (beranda dan template halaman proyek) dan review akhir Hallmark HARUS dijalankan oleh agent reviewer terpisah (Q21).
3. Delivery Gate antislop HARUS dilaporkan PASS/FAIL per item dengan bukti. Laporan yang masih memuat FAIL tidak boleh dikirim.
4. Setiap elemen interaktif di setiap halaman HARUS diklik satu per satu pada lebar 375px dan 1440px, tanpa error di console, dan hasilnya dicatat per elemen (R-35).
5. Mekanisme folder HARUS diuji: folder uji menaikkan jumlah proyek, dan `published: false` menyembunyikannya. Uji ini dijalankan di sandbox dan tidak di-commit.
6. Perbandingan sebelum dan sesudah HARUS diberikan kepada pemilik.

## Requirement 11: Proses kerja dan keamanan perubahan

1. Pekerjaan dilakukan di branch `feat/portfolio-redesign` dan masuk lewat PR ke `main`. Merge, yang berarti deploy, hanya setelah pemilik setuju (Q23).
2. Tidak ada file yang dihapus tanpa rencana file yang disetujui pemilik.
3. Versi kedua skill dipin ke commit tertentu (`design.md` 4.4) dan tidak disalin ke repo (Q22).
4. PDF LinkedIn tidak di-commit.

## Pertanyaan lanjutan

★ = perlu jawaban karena menyangkut izin, privasi, atau perubahan teknis. Yang lain boleh dijawab "pakai saran".

| ID | Topik | Saran | Memengaruhi |
| --- | --- | --- | --- |
| F1 ★ | Screenshot SIM Stembayo | Grafik Play Store tidak dipakai; pemilik mengirim 3 sampai 4 screenshot dari akun demo setelah SktechID mengizinkan; merge menunggu screenshot ini | R1.7, R5.6 |
| F2 | Peran dan fitur di SIM Stembayo | Hanya fakta LinkedIn dan Play Store, tanpa mengklaim fitur tertentu | R3.2 |
| F3 | PlsFixTech: bagian yang dibangun di atas template TOKOTO | Tampil dengan keterangan template, tanpa gambar | R1.8 |
| F4 | Rent System: nama bidang dan hasil LKS 2023 DIY, screenshot | "Proyek LKS 2023 DIY" tanpa hasil, tanpa gambar | R3.2 |
| F5 | Gamatechno: jenis kerja, yang dibangun, stack | Hanya jabatan, perusahaan, periode | R2.6 |
| F6 | Program dan status di UT; jurusan dan tahun SMK | UT tampil tanpa nama program sampai dikonfirmasi | R1.1 |
| F7 ★ | Cara menampilkan nomor HP; GitHub di kontak | Tombol WhatsApp sebagai aksi utama, email kedua, LinkedIn dan GitHub di kontak | R1.5, R2.3 |
| F8 ★ | Kalimat status yang juga terlihat oleh kantor sekarang | "Terbuka untuk proyek freelance dan posisi full-time." | R2.9 |
| F9 ★ | Jekyll bawaan GitHub Pages untuk proyek berbasis folder | Ya | R4, R8.1 |
| F10 | Fokus hero dan letak Asah | Hero fokus aplikasi Flutter untuk bisnis; Asah di Pendidikan dan pelatihan | R2.2 |
| F11 | Proyek web, Vue.js/Nuxt.js, atau Odoo untuk UMKM | Bila tidak ada, cukup disebut di keahlian | R1.1 |
| F12 | Daftar keahlian dan tautan sertifikat | Daftar usulan di `content.md`; sertifikat tanpa tautan | R2 |
| F13 | Urutan proyek, proyek tambahan, label flutter-kiro-skeleton | Urutan di `content.md`; tanpa tambahan; label "Sedang dikerjakan" | R4.3 |
| F14 | Foto diri | Tidak ada | R5 |
