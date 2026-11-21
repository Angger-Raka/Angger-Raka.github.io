# Tasks: Redesign portfolio Angger Raka Sanjaya

Status: **draft v2** (21 Nov 2026). Fase 0 harus selesai sebelum Fase 2. Angka dalam kurung merujuk ke `requirements.md`.

## Fase 0: Keputusan dan data

- [x] 0.1 Jawaban Q1 sampai Q24 dan PDF LinkedIn diterima; spec diperbarui.
- [x] 0.2 Analisis data: PDF, listing Google Play, repo proyek, materi visual; draf `content.md`.
- [ ] 0.3 Pemilik menjawab F1 sampai F14; `content.md` dan spec diperbarui.
- [ ] 0.4 Pemilik mengirim materi: screenshot bersih SIM Stembayo (F1) dan materi opsional (F3, F4).
- [ ] 0.5 Pemilik menyetujui `content.md`, termasuk draf hero dan daftar kalimat yang diubah. (R1.10)

## Fase 1: Persiapan

- [x] 1.1 Branch `feat/portfolio-redesign` dibuat dari `main`, dan spec di-push. (R11.1)
- [ ] 1.2 Siapkan ulang tooling di `/tmp`, yang terhapus antar sesi: clone kedua skill pada commit terpin; gem di `GEM_HOME=/tmp/gems` dengan `github-pages` 232; `puppeteer-core` dan wrapper `chrome-headless-shell`; uji `jekyll build` dan `sloplint --render`. (R10, R11.3)
- [ ] 1.3 Rekam baseline dengan `sloplint index.html --render --before` pada `index.html` lama. (R10.6)
- [ ] 1.4 Pre-flight Hallmark (`.hallmark/preflight.json`).

## Fase 2: Arah visual

- [ ] 2.1 `theme.mjs draw --job hire --material <product|words> --theme console`, sesuai materi yang ada. (R5.1)
- [ ] 2.2 Picks block untuk beranda dan template halaman proyek, disetujui pemilik. (R5)
- [ ] 2.3 `theme.mjs scaffold console --dir assets/css` untuk `tokens.css` dan `base.css`, lalu matikan duotone pada slot `data-kind="product"`. (R5.4, R5.7)
- [ ] 2.4 Kunci sistem ke `DESIGN.md`: data Hallmark, Design Read, dial, alasan satu baris per keputusan, dan alasan satu mode gelap. Disetujui pemilik. (R5.2, R5.3, R5.8)

## Fase 3: Kerangka Jekyll

- [ ] 3.1 `_config.yml` (lang, url, `theme: null`, exclude), `.gitignore` (`_site/`, `Gemfile.lock`, cache), dan `Gemfile` dengan `github-pages` 232. (R8.1, R8.5, R8.6)
- [ ] 3.2 `_data/profil.yml` dari `content.md` yang sudah disetujui. (R1)
- [ ] 3.3 `_layouts/base.html` dan `_includes/` (nav, footer, kontak, panel proyek, bingkai layar); stamp Hallmark di baris pertama `assets/css/site.css`. (R6.4)
- [ ] 3.4 `_layouts/project.html` dan `proyek/_template/index.md` dengan komentar batas kata. (R3, R4.4)
- [ ] 3.5 `README.md`: cara menambah, menyembunyikan, dan mengurutkan proyek serta memasang screenshot. (R4.8)

## Fase 4: Halaman

- [ ] 4.1 Nav dan hero beranda; `jekyll build`; `sloplint --render --stage hero`; review hero oleh agent reviewer; perbaikan. (R2.2, R10.2)
- [ ] 4.2 Bagian proyek (dari folder), pengalaman, keahlian, pendidikan dan pelatihan, kontak dan footer. (R2)
- [ ] 4.3 Lima folder proyek dengan front matter dan cerita dari `content.md`. (R3, R4)
- [ ] 4.4 Hero halaman proyek: `--stage hero` dan review hero pada satu halaman proyek. (R10.2)
- [ ] 4.5 `assets/js/site.js`: menu mobile dengan `aria-expanded` dan Escape, script slot Hallmark; konten tetap terlihat tanpa JavaScript. (R6.3, R6.7)
- [ ] 4.6 Gambar: WebP dengan ukuran tetap, favicon inisial, gambar OG dari hero. (R8.3)
- [ ] 4.7 Catat build di log Hallmark (`theme.mjs log`).

## Fase 5: Sweep dan gerbang kualitas

- [ ] 5.1 `sloplint` dengan `--render` pada `_site/index.html` dan `_site/proyek/*/index.html` sampai 0 FAIL. (R10.1)
- [ ] 5.2 Gate manual (`gates.md` bagian 5) dari screenshot; WARN dikonfirmasi atau ditolak dengan catatan.
- [ ] 5.3 Review akhir oleh agent reviewer; tindak lanjut sesuai kata pertamanya. (R10.2)
- [ ] 5.4 Pemeriksaan kontras dengan `contrast-check.py`. (R6.1)
- [ ] 5.5 Click-through Playwright pada `_site/` yang disajikan lokal, di 375 dan 1440 px, semua halaman; uji keyboard; console bersih. (R10.4)
- [ ] 5.6 Uji folder: folder uji menaikkan jumlah proyek, `published: false` menyembunyikannya, dan file kerja tidak ada di `_site/`. (R4, R8.5, R10.5)
- [ ] 5.7 Tulis `delivery-gate.md`: empat blok antislop, PASS/FAIL dengan bukti. Ada FAIL berarti kembali ke 5.1. (R10.3)
- [ ] 5.8 Perbandingan sebelum dan sesudah, daftar kalimat yang diubah, dan daftar bingkai dummy yang tersisa. (R10.6)

## Fase 6: Rilis

- [ ] 6.1 Push dan buka PR ke `main` berisi Picks block, ringkasan Delivery Gate, dan screenshot. (R11.1)
- [ ] 6.2 Revisi berdasarkan masukan pemilik; ulangi 5.1 dan 5.5 untuk setiap perubahan.
- [ ] 6.3 Merge hanya setelah pemilik setuju; cek https://angger-raka.github.io/ dan satu halaman proyek setelah deploy. (R11.1)
