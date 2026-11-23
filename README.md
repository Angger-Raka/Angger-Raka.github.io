# angger-raka.github.io

Portfolio Angger Raka Sanjaya, live di https://angger-raka.github.io/. Situs dibangun otomatis oleh Jekyll bawaan GitHub Pages setiap kali `main` berubah; tidak ada langkah build manual.

## Menambah proyek

Setiap proyek adalah satu folder di `proyek/`. Beranda membaca semua folder itu, lalu menampilkan dan menghitung proyeknya sendiri.

1. Buat folder `proyek/<nama-proyek>/` (huruf kecil, pakai tanda hubung), lalu salin isi `proyek/_template/index.md` ke `proyek/<nama-proyek>/index.md`.
   Lewat GitHub web: **Add file**, **Create new file**, ketik `proyek/<nama-proyek>/index.md`, lalu tempel isi template.
2. Isi front matter (bagian di antara dua baris `---`) dan ceritanya. Batas yang menjaga tampilan:
   - `title` paling banyak 7 kata, `summary` paling banyak 12 kata, cerita sekitar 60 kata.
   - Tulis `based_on` bila memakai template atau kode orang lain, dan `design` bila desain UI dibuat orang lain.
3. Hapus baris `published: false`.
4. Commit ke `main`. Setelah GitHub Pages selesai membangun, proyek baru muncul di beranda dan jumlah proyek ikut bertambah.

Menyembunyikan proyek tanpa menghapusnya: tambahkan `published: false`. Mengubah urutan: ubah angka `order` (angka kecil tampil lebih dulu). Proyek di hero beranda adalah yang memakai `featured: true`; pakai di satu proyek saja.

## Memasang screenshot

1. Unggah gambar ke folder proyeknya. Lebar 1080 px atau lebih, tanpa bingkai ponsel, dan tanpa data pribadi orang lain (nama, nomor induk, nomor telepon, lokasi, wajah).
2. Tulis di `screens` dengan ukuran pikselnya:

   ```yaml
   screens:
     - file: beranda.webp
       w: 1080
       h: 2340
       alt: Beranda aplikasi dengan daftar tugas hari ini
   ```

3. Dua layar pertama tampil di hero halaman proyek. Layar ketiga dan seterusnya tampil di bagian "Layar aplikasi" dan boleh diberi `caption`. Proyek tanpa layar menampilkan `code` (misalnya struktur folder dari repo) atau bingkai kosong.

## Data profil

Pengalaman, pendidikan, keahlian, dan kontak ada di `_data/profil.yml`. Sistem desainnya terkunci di `DESIGN.md`. Spec dan sumber setiap fakta ada di `.kiro/specs/portfolio-redesign/`.

## Pratinjau lokal (opsional)

Butuh Ruby. `bundle install`, lalu `bundle exec jekyll serve`, lalu buka http://localhost:4000.
