---
title: SIM Stembayo
order: 1
featured: true
year: 2025
summary: Aplikasi resmi SMK Negeri 2 Depok Sleman untuk presensi dan PKL.
context: Kerja di PT Solusi Karya Technology Indonesia
client: SMK Negeri 2 Depok Sleman
role: Mobile developer utama
status: Rilis di Google Play
platform: Android
stack: [Flutter, Dart, Clean Architecture, SOLID]
links:
  - label: Buka di Google Play
    url: https://play.google.com/store/apps/details?id=id.sch.stembayo.sim
screens_note: Desain UI dibuat teman saya di Figma; frame-nya sama dengan aplikasi yang rilis. Foto orang disamarkan.
# Versi dan tanggal dari listing Google Play (21 Nov 2026); perbarui saat versi baru rilis.
version: "1.3"
version_date: 14 Agustus 2026
screens:
  - file: beranda.webp
    w: 375
    h: 768
    alt: Beranda siswa SIM Stembayo dengan menu izin, Prakerin, e-kartu, dan jadwal
  - file: riwayat-presensi.webp
    w: 473
    h: 969
    alt: Riwayat presensi sekolah dengan jam masuk, jam pulang, dan status kehadiran
  - file: presensi-sekolah.webp
    w: 387
    h: 979
    alt: Formulir presensi sekolah dengan peta area sekolah dan status di dalam area
    caption: Presensi sekolah berbasis lokasi
  - file: pengajuan-pkl.webp
    w: 375
    h: 768
    alt: Daftar pengajuan PKL beserta status verifikasinya
    caption: Pengajuan PKL dan statusnya
  - file: jurnal-harian-pkl.webp
    w: 473
    h: 969
    alt: Formulir jurnal harian PKL
    caption: Jurnal harian PKL
story_title: Dari awal sampai versi 1.3
reading:
  label: Versi
  value: "1.3"
  date: 14 Agustus 2026
  title: Presensi tetap tersimpan saat sinyal buruk
  lines:
    - Notifikasi status pengiriman presensi offline.
    - Banner status real-time di beranda dan formulir.
---
Saya memulai aplikasi ini dan melanjutkannya sampai sekarang; satu developer lain sempat ikut sebentar. Kodenya disusun dengan SOLID dan Clean Architecture.
