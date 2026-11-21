# Design: angger-raka.github.io

Sistem desain yang terkunci. Beranda dan setiap halaman proyek memakainya bersama, dan halaman hanya berbeda bentuk. Ubah dengan sengaja; file ini adalah aturannya. File ini tidak ikut terbit (`_config.yml` exclude).

## Sistem

- Genre: modern-minimal
- Tema: Hallmark Console (by request), colourway graphite
- Axes: dark/grotesk-sans/chromatic-amber, posture restrained
- Beranda: Index-First dengan hero Stage. Halaman proyek: hero Stage, fakta dan cerita, sorotan versi (bila ada), layar, proyek lain, kontak.
- Nav: floating pill, sticky. Footer: colophon block.
- Versi skill: Hallmark 2.0.0 (`04977e1`), antislop 3.2.32 (`7f6a03d`)

## Design Read (antislop)

> Reading this as: portfolio dan halaman proyek seorang Flutter developer untuk klien bisnis dan rekruter, dalam bahasa visual Hallmark Console (graphite), dial ENERGY 2 / RHYTHM 2 / MOTION 1.

## Token

`assets/css/tokens.css` adalah sumber kebenaran; jangan menulis warna atau font literal di luar file itu. Peran utamanya:

| Peran | Token | Dipakai untuk |
| --- | --- | --- |
| Dasar | `--color-paper`, `--color-paper-2`, `--color-paper-3` | Halaman, panel, well (kode dan layar) |
| Tinta | `--color-ink`, `--color-ink-2`, `--color-muted` | Judul, lead, teks pendukung |
| Garis | `--color-rule`, `--color-rule-2` | Garis rambut; garis pembuka set dan tulang trail |
| Amber | `--color-accent`, `--color-accent-ink`, `--color-accent-soft` | Orang, posisi saat ini, satu aksi utama |
| Biru dingin | `--color-cool`, `--color-cool-soft` | Nilai terukur: tanggal, tahun, versi |
| Huruf | `--font-display` (Host Grotesk), `--font-outlier` (Atkinson Hyperlegible Mono) | Teks dan judul; nilai terukur |
| Bentuk | `--radius-card` 10px, `--radius-pill` 6px, `--rule-hair` 1px | Panel, kontrol, garis |

Skala spasi, tipe, durasi, dan easing berasal dari scaffold Hallmark di `tokens.css`.

## Aturan

- **Warna:** amber hanya untuk orang, posisi saat ini, dan tombol primer (Chat di WhatsApp). Biru dingin hanya untuk data terukur. Makna keduanya tidak ditukar. Tidak ada sinyal ketiga di UI situs.
- **Huruf:** Host Grotesk 400 dan 500; judul 500, tidak pernah 700. Mono hanya untuk nilai terukur dan struktur folder, tidak untuk label, judul, atau tombol.
- **Permukaan:** panel garis rambut, tanpa bayangan, glow, gradien, atau tekstur. Paling banyak dua band per halaman.
- **Kontrol:** primer amber penuh, sekunder garis `--color-rule-2` di atas `--color-paper-2`, tinggi 48px (nav 44px), delapan state. Chip hanya untuk status.
- **Gerak:** hanya perubahan state; tanpa reveal, parallax, atau hover lift. `prefers-reduced-motion` dihormati.
- **Gambar:** screenshot produk tampil dalam warna asli (`data-kind="product"`), tanpa bingkai ponsel, tidak lebih lebar dari lebar pikselnya. Foto orang di screenshot disamarkan atau diganti. Proyek tanpa screenshot menampilkan struktur folder asli dari repo.
- **Mode warna:** satu mode gelap. Alasan (antislop R-21): arah yang dipilih pemilik adalah Console, material Console memang gelap, dan layar aplikasi yang terang paling jelas di atas graphite.
- **Copy:** Bahasa Indonesia; tanpa em dash dan en dash; rentang tanggal memakai "sampai"; headline paling banyak 7 kata, kalimat hero dan ringkasan proyek paling banyak 12 kata, sekitar 80 kata per layar; tanpa angka tanpa sumber, testimoni, atau logo klien.

## Alasan keputusan (antislop R-31)

| Keputusan | Alasan |
| --- | --- |
| Graphite, amber, biru dingin | Material Console: amber menandai orang dan aksi, biru menandai data, sehingga layar aplikasi tetap pusat perhatian |
| Host Grotesk untuk semua teks | Huruf tema Console; netral dan jelas untuk tone technical, cukup satu keluarga |
| Mono hanya untuk nilai terukur | Memisahkan data (tanggal, versi, tahun) dari teks yang dibaca |
| Hero Stage dengan dua layar | Signature pilihan pemilik (Q16): layar asli SIM Stembayo |
| Indeks proyek, bukan grid kartu | Karya adalah isi utama halaman hire; daftar yang bisa dipindai lebih jujur daripada kartu seragam (R-05, R-14) |
| Trail untuk pengalaman | Range Console; riwayat kerja dibaca seperti log |
| Tabel untuk keahlian | Kelompok teks tanpa logo atau level, karena level yang dinilai sendiri adalah klaim tanpa bukti (C-5) |
| Spasi section 120, 144, 176px | Skala Hallmark, dipilih menurut massa tiap section |
| Tanpa ikon dan ilustrasi | Tidak ada ikon yang menambah informasi; gambar hanya materi asli (R-04, R-22, R-23) |

## Exports

- `assets/css/tokens.css`: token tema Console dan skala bersama
- `assets/css/base.css`: keputusan Floor Hallmark
- `assets/css/site.css`: stamp Hallmark di baris pertama, lalu gaya halaman
