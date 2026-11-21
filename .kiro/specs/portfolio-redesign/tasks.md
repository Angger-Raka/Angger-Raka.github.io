# Tasks: Redesign portfolio Angger Raka Sanjaya

Status: **build** (21 Nov 2026). Angka dalam kurung merujuk ke `requirements.md`.

## Fase 0: Keputusan dan data

- [x] 0.1 Jawaban Q1 sampai Q24 dan PDF LinkedIn diterima; spec diperbarui.
- [x] 0.2 Analisis data: PDF, listing Google Play, repo proyek, materi visual; draf `content.md`.
- [x] 0.3 Pemilik menjawab F1 sampai F14; `content.md` dan spec diperbarui.
- [x] 0.4 Materi diterima: layar SIM Stembayo (dua kiriman) dan daftar keahlian LinkedIn.
- [x] 0.5 Pemilik menjawab G1 sampai G10.
- [x] 0.6 Layar SIM Stembayo disiapkan: tiga foto orang disamarkan, dikonversi ke WebP lossless, ukurannya dicatat di front matter. (R1.7, R8.3)
- [x] 0.7 `content.md` disetujui (G10); perubahan saat build dicatat di bagian akhirnya. (R1.10, R1.4)

## Fase 1: Persiapan

- [x] 1.1 Branch `feat/portfolio-redesign` dibuat dari `main`, dan spec di-push. (R11.1)
- [x] 1.2 Tooling disiapkan ulang di `/tmp`: kedua skill pada commit terpin; `github-pages` 232; `puppeteer-core` dan wrapper `chrome-headless-shell`; Pillow. (R10, R11.3)
- [x] 1.3 Baseline direkam: `.hallmark/before.json` dan `.hallmark/before.txt` (43 FAIL, 10 REFLEX, 8 WARN). (R10.6)
- [ ] 1.4 Pre-flight Hallmark: dilewati, karena isinya sudah tercakup di spec (proyek baru tanpa sistem desain, font, atau framework yang perlu dipertahankan).

## Fase 2: Arah visual

- [x] 2.1 Draw `27b481` (Bento Grid, hero Poster, nav floating pill, footer colophon block). Bentuk ditukar ke Index-First, hero ditukar ke Stage, dengan alasan di stamp. (R5.1)
- [ ] 2.2 Picks block disetujui pemilik: lewat review PR, bersama hasil build.
- [x] 2.3 `theme.mjs scaffold console --dir assets/css`; duotone dimatikan untuk slot `data-kind="product"`. (R5.4, R5.7)
- [x] 2.4 Sistem dikunci ke `DESIGN.md`; persetujuan pemilik lewat review PR. (R5.2, R5.3, R5.8)

## Fase 3: Kerangka Jekyll

- [x] 3.1 `_config.yml`, `.gitignore`, `Gemfile` dengan `github-pages` 232. (R8.1, R8.5, R8.6)
- [x] 3.2 `_data/profil.yml`. (R1)
- [x] 3.3 `_layouts/base.html` dan `_includes/` (root, nav, footer, kontak, screen, code-panel); stamp di baris pertama `assets/css/site.css`. Semua tautan internal relatif terhadap halaman (`_includes/root.html`). (R6.4)
- [x] 3.4 `_layouts/project.html` dan `proyek/_template/index.md`. (R3, R4.4)
- [x] 3.5 `README.md`. (R4.8)

## Fase 4: Halaman

- [x] 4.1 Beranda: hero, proyek, pengalaman, keahlian, pendidikan dan pelatihan, kontak, footer. (R2)
- [x] 4.2 Lima folder proyek. (R3, R4)
- [x] 4.3 Gambar: favicon inisial, gambar OG 1200x630 dari hero. (R8.3)
- [x] 4.4 Log Hallmark (`.hallmark/log.json`).
- [x] 4.5 Review hero oleh agent reviewer (`fix`, 5 temuan, 4 diselesaikan, 1 dipertahankan). (R10.2)

## Fase 5: Sweep dan gerbang kualitas

- [x] 5.1 `sloplint --render` pada semua halaman `_site/`: clean, 0 FAIL, 0 REFLEX, 0 WARN. (R10.1)
- [x] 5.2 Review akhir oleh agent reviewer (`fix`, 7 temuan, 7 diselesaikan). (R10.2)
- [x] 5.3 Kontras: teks terendah 6.88:1 di semua halaman. (R6.1)
- [x] 5.4 Click-through puppeteer di 1440, 375, dan 320 px pada 6 halaman; semua tautan internal diklik; keyboard; console bersih. (R10.4)
- [x] 5.5 Uji folder di salinan `/tmp`: 6 proyek dengan folder uji, 5 dengan `published: false`; gambar yang hilang menyisakan bingkai kosong. (R4, R10.5)
- [x] 5.6 `delivery-gate.md`: semua blok PASS dengan bukti. (R10.3)
- [x] 5.7 Perbandingan sebelum dan sesudah di `screens/`. (R10.6)

## Fase 6: Rilis

- [x] 6.1 Branch di-push. PR ke `main` dibuka pemilik lewat https://github.com/Angger-Raka/Angger-Raka.github.io/compare/main...feat/portfolio-redesign?expand=1 (pembuatan PR dari sandbox diblokir kebijakan Kiro). (R11.1)
- [ ] 6.2 Revisi; ulangi 5.1 dan 5.4 untuk setiap perubahan.
- [ ] 6.3 Merge setelah pemilik setuju; cek situs live. (R11.1)
