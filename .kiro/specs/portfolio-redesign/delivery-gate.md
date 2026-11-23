# Delivery Gate (antislop 3.2.32, mode DURING)

Diperiksa 21 Nov 2026 pada hasil build `bundle exec jekyll build` dengan `github-pages` 232 (Jekyll 3.10.0, sama dengan GitHub Pages): beranda dan lima halaman proyek. Setiap PASS disertai bukti.

## Ringkasan Hallmark

- `sloplint _site --genre modern-minimal --render`: **clean, 0 FAIL, 0 REFLEX, 0 WARN** di 9 file (6 halaman, 3 stylesheet). Baseline halaman lama: 43 FAIL, 10 REFLEX, 8 WARN.
- Satu waiver: 84 (layar adalah frame Figma; aplikasi berjalan memuat data siswa dan tidak bisa diakses dari sini). Satu dismissal tercatat untuk gate 58 (jendela berisi daftar baris, bukan prosa).
- Review hero oleh agent terpisah: `fix`, 5 temuan, 4 diselesaikan, 1 dipertahankan (headline yang disetujui pemilik).
- Review akhir oleh agent terpisah: `fix`, 7 temuan, 7 diselesaikan (rincian di bagian akhir).

## Blok 1: Hard Gate (semua harus "tidak")

| Aturan | Hasil | Bukti |
| --- | --- | --- |
| R-02 em dash | PASS | `grep` em dash dan en dash pada semua HTML hasil build: tidak ada |
| R-03 mobile | PASS | Click-through di 320, 375, dan 1440 px pada 6 halaman: `scrollWidth` tidak pernah melebihi lebar layar; semua tautan non-inline setinggi 44px atau lebih; render sloplint di 320 dan 375 px tanpa FAIL |
| R-17 angka tanpa sumber | PASS | Angka yang tampil: jumlah proyek (dihitung dari folder), tahun dan periode (LinkedIn, repo), versi 1.3 dan 14 Agustus 2026 (listing Google Play) |
| R-18 testimoni | PASS | Tidak ada bagian testimoni (Q9) |
| R-23 aset tanpa konfirmasi | PASS | Wordmark teks, favicon inisial, gambar OG dari hero (Q8); layar SIM Stembayo dari pemilik (F1, G2); struktur folder dari repo pemilik (Q7); tanpa foto diri (F14) |
| R-24 navigasi | PASS | Proyek, Pengalaman, Kontak menuju `#proyek`, `#pengalaman`, `#kontak`; ketiganya ada, `#kontak` di setiap halaman |
| R-25 kontras | PASS | Pengukuran per elemen teks di 6 halaman: terendah 6.88:1 (`Rilis di Google Play`, label panel); render tier sloplint tanpa temuan kontras |
| R-26 kontrol mati | PASS | Semua tautan internal diklik dan mendarat di halaman atau anchor yang ada; tautan luar dicek: GitHub (5 URL) 200, Google Play 200, wa.me 200, LinkedIn 999 (LinkedIn memblokir bot; URL dari pemilik) |
| R-27 state UI | PASS (tidak berlaku) | Tidak ada data yang diambil saat runtime; satu-satunya state runtime adalah screenshot yang hilang, dan diuji: bingkai kosong tetap tampil tanpa ikon gambar rusak |
| R-28 FAQ | PASS | Tidak ada FAQ |
| R-32 keyboard | PASS | Tab pertama memunculkan "Langsung ke isi", Enter memindahkan ke `#main`; urutan Tab mengikuti urutan visual; setiap fokus menampilkan cincin 2px; tidak ada dialog |
| R-33 patch script | PASS | Semua gaya ada di `assets/css`; tidak ada script patch di repo. Catatan: penggantian nama kelas `hero-*` menjadi `stage-*` dilakukan sekali dengan `sed` saat pengembangan, hasilnya ada di source |
| R-34 tema rusak | PASS (tidak berlaku) | Satu mode gelap, tanpa toggle (Q17) |
| R-35 dijalankan dan diklik | PASS | Build Jekyll sukses; click-through per elemen di bawah; console bersih di semua halaman dan lebar |
| R-36 klaim palsu | PASS | Tidak ada klaim keamanan, kepatuhan, atau performa; "siap produksi" berasal dari README flutter_boilerplate milik pemilik |
| R-37 arah desain | PASS | Tema Console dipilih pemilik (Q15), dikunci di `DESIGN.md` dengan Design Read dan dial |
| R-38 konten karangan | PASS | Setiap fakta tercatat dengan sumber di `content.md` (LI, PS, GH, U) |
| R-39 semantik | PASS | `<html lang="id">`, title unik per halaman, landmark header/nav/main/footer, satu `h1`, level heading tidak melompat; semua kontrol adalah `<a href>` bertext; `cursor: pointer`; semua gambar ber-`alt`; gerak hanya transisi state dan berhenti saat reduced motion; viewport tidak memblokir zoom |
| R-40 mekanisme performa | PASS | Setiap `<img>` punya `width`, `height`, dan `aspect-ratio`; dua layar hero `fetchpriority="high"` tanpa lazy, sisanya `loading="lazy"`; tidak ada script pihak ketiga di `<head>` (hanya stylesheet Google Fonts); tidak ada angka performa yang dilaporkan karena tidak diukur |

### Click-through per elemen

Diklik di 1440, 375, dan 320 px. Tautan internal dibuka dan diperiksa halaman atau anchor tujuannya; tautan luar dicek alamat dan responsnya.

| Halaman | Elemen | Hasil |
| --- | --- | --- |
| Semua | Langsung ke isi | Muncul pada Tab pertama, Enter ke `#main` |
| Semua | Wordmark "Angger Raka Sanjaya" | Ke beranda |
| Semua | Proyek, Pengalaman | Ke `#proyek` dan `#pengalaman` (trail "Dari SMK sampai Google Play") di beranda |
| Semua | Kontak | Ke `#kontak` di halaman yang sama |
| Semua | Chat di WhatsApp (nav, hero beranda, band kontak) | `https://wa.me/628895316055` dengan pesan awal; 200 |
| Semua | Kirim email, Email | `mailto:anggerrakasanjayapamungkas@gmail.com` |
| Semua | LinkedIn, GitHub (band kontak dan footer) | URL profil pemilik; GitHub 200, LinkedIn 999 untuk bot |
| Beranda | SIM Stembayo (kepala panel hero) | Ke `proyek/sim-stembayo/` |
| Beranda | Lima baris proyek (seluruh baris bisa diklik) | Ke halaman proyek masing-masing |
| Beranda | SIM Stembayo (baris pengalaman SktechID) | Ke `proyek/sim-stembayo/` |
| Halaman proyek | Buka di Google Play / Lihat kode di GitHub | URL listing dan repo; 200 |
| Halaman proyek | Diskusikan proyek | Ke `#kontak` |
| Halaman proyek | Empat tautan Proyek lain | Ke halaman proyek lain |

## Blok 2: Purpose-Gate (semua harus "tidak")

| Aturan | Hasil | Bukti |
| --- | --- | --- |
| R-01 gradien, glow | PASS | Tidak ada gradien atau glow di UI; satu-satunya gradien adalah warna dasar slot kosong dari `base.css` Hallmark, dengan tujuan sebagai bingkai yang menunggu gambar |
| R-04 ikon | PASS | Tidak ada ikon |
| R-06 tipografi | PASS | Mono hanya untuk nilai terukur (tanggal, tahun, versi, struktur folder); tanpa label kapital berjarak; alasan Host Grotesk tertulis di `DESIGN.md` |
| R-07 pola latar | PASS | Tidak ada |
| R-08 panah | PASS | Tidak ada |
| R-09 badge | PASS | Chip hanya untuk status nyata ("Rilis di Google Play", "Sedang dikerjakan"); tidak ada pill di atas `h1` |
| R-10 glassmorphism | PASS | Tidak ada blur |
| R-12 bayangan | PASS | Tidak ada bayangan |
| R-13 glow | PASS | Tidak ada |
| R-14 kartu seragam | PASS | Proyek berupa indeks baris dengan satu baris utama yang lebih besar, bukan kartu |
| R-19 animasi | PASS | Hanya transisi warna dan tekan 1px, sesuai MOTION 1 |
| R-22 ilustrasi | PASS | Tidak ada |

## Blok 3: Liveliness (semua harus "ya")

| Pertanyaan | Hasil | Bukti |
| --- | --- | --- |
| Dial ditetapkan | YA | ENERGY 2 / RHYTHM 2 / MOTION 1 di `DESIGN.md` |
| Hasil sesuai dial | YA | Komposisi berganti antar section (Stage, Index, Trail, Table, Band) dengan material yang sama; gerak hanya state |
| Satu titik fokus per layar | YA | Hero: headline dan panel layar; proyek: baris SIM Stembayo; halaman SIM: angka versi 1.3 |
| Whitespace struktural | YA | Jarak section 120, 144, 176px menurut massa |
| Satu aksen disengaja | YA | Amber pada aksi utama dan posisi saat ini; nav memakai tombol outline |
| Motif identitas | YA | Panel garis rambut dengan nilai terukur dalam huruf mono, seperti catatan instrumen |
| Design Read sebelum build | YA | Ditulis di `design.md` 5.1 dan `DESIGN.md` |

## Blok 4: Craftsmanship dan Quality Locks (semua harus "tidak")

| Aturan | Hasil | Bukti |
| --- | --- | --- |
| C-1 keputusan default | PASS | Alasan per keputusan di `DESIGN.md` |
| C-2 elemen tanpa fungsi | PASS | Click-through di atas |
| C-3 section pengisi template | PASS | Setiap section memuat data pemilik: proyek, riwayat kerja dan pendidikan, keahlian, kontak |
| C-4 rusak di state, breakpoint, atau tanpa mouse | PASS | 320 sampai 1920 px, keyboard, gambar hilang |
| C-5 klaim palsu | PASS | Lihat R-17, R-36, R-38 |
| R-05 layout template | PASS | Tanpa hero plus tiga kartu, logo bar, bento, terminal palsu (blok kode berisi struktur folder asli tanpa bingkai jendela), footer empat kolom |
| R-11 radius seragam | PASS | 10px panel, 6px kontrol, 4px chip |
| R-15 CTA generik | PASS | Chat di WhatsApp, Kirim email, Buka di Google Play, Lihat kode di GitHub, Diskusikan proyek |
| R-16 buzzword | PASS | `grep` seamless, robust, scalable, end-to-end, solusi digital, inovatif, terdepan, terbaik, dan lainnya: tidak ada |
| R-20 identitas | PASS | Layar aplikasi asli pemilik, struktur folder dari repo, suara catatan instrumen tema Console |
| R-21 mode gelap | PASS | Alasan tertulis di `DESIGN.md`; satu mode adalah pilihan pemilik (Q17) |
| R-29 palet | PASS | Netral graphite, amber, biru dingin |
| R-30 klon produk populer | PASS | Tema Hallmark Console dengan konten pemilik |
| R-31 alasan tertulis | PASS | Tabel alasan di `DESIGN.md` |

## Uji tambahan

- Folder proyek (salinan di `/tmp`, tidak di-commit): menambah `proyek/uji-folder/` mengubah judul beranda menjadi "6 proyek, 2022 sampai 2026"; `published: false` mengembalikannya ke "5 proyek"; screenshot yang filenya tidak ada menyisakan bingkai kosong 259x560 tanpa gambar rusak. `proyek/_template/` tidak terbit.
- File kerja tidak terbit: `_site/` tidak memuat `DESIGN.md`, `README.md`, `Gemfile`, `.kiro/`, `.hallmark/`, atau `proyek/_template/`.

## Review hero dan review akhir

Keduanya dijalankan oleh agent reviewer terpisah yang tidak ikut membangun (Q21), memakai prompt `review-hero.md` dan `review-finish.md` dari Hallmark.

| Review | Temuan | Penyelesaian |
| --- | --- | --- |
| Hero 1 | Headline bisa dipakai developer mana pun | Dipertahankan: headline disetujui pemilik kata per kata; alternatif reviewer ("SIM Stembayo, dari Figma sampai Google Play.") ditawarkan ke pemilik |
| Hero 2 | Panel halaman proyek tidak menyebut peran pemilik | Kaki panel Untuk, Peran saya, Versi di beranda dan halaman proyek |
| Hero 3 | Tidak ada nilai terukur dalam huruf mono | Sel Versi "1.3, 14 Agustus 2026" dalam mono biru dingin |
| Hero 4 | Dua isian amber di layar pertama | Tombol nav memakai outline |
| Hero 5 | Status bar iOS di frame Figma | Dipotong dari kelima frame |
| Akhir 1 | Struktur folder tidak tampil dalam huruf mono; garis penghubung kosong | `font-family: inherit` pada `code`, penghubung diganti indentasi, ukuran huruf mengikuti jumlah baris |
| Akhir 2 | Pengalaman kerja tipis (gate 77) | Kerja, kuliah, dan pelatihan digabung menjadi satu trail bertanggal lima baris |
| Akhir 3 | Judul section generik | "Dari SMK sampai Google Play", "Flutter, Odoo, C#, dan Python", "Diskusi proyek lewat WhatsApp atau email", dan judul cerita per proyek |
| Akhir 4 | Cerita mengulang tabel fakta | Cerita hanya menyebut yang dibangun; konteks, tahun, dan stack di tabel |
| Akhir 5 | Angka 1.3 tanpa tanggal; poin pertama mengulang judul | Tanggal di bawah 1.3; poin itu dihapus |
| Akhir 6 | Layar di "Layar aplikasi" beda lebar dan tinggi | Satu lebar (375 px) dan satu tinggi potong; satu kolom di 375 px |
| Akhir 7 | Sel kaki panel dan caption berakhir satu kata | Untuk dan Peran saya berdampingan di atas baris Versi; `text-wrap: pretty` pada caption |
| Akhir (sebelum) | Halaman lama menampilkan stack di setiap kartu | Baris indeks sekarang menampilkan dua item stack pertama untuk semua proyek |

Setelah semua perbaikan: sloplint clean, click-through tanpa masalah di 1440, 375, dan 320 px, kontras terendah 6.88:1.
