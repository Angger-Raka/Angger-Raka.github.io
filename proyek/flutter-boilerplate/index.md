---
title: flutter_boilerplate
order: 2
year: 2025
summary: Boilerplate Flutter siap produksi dengan Clean Architecture dan BLoC.
context: Pribadi
platform: Android, iOS
stack: [Flutter, flutter_bloc, get_it, go_router, dio, dartz, equatable, Firebase]
links:
  - label: Lihat kode di GitHub
    url: https://github.com/Angger-Raka/flutter_boilerplate
story_title: Tiga lapisan dengan BLoC dan GetIt
code_caption: Struktur folder lib/ di repo
code: |
  lib/
    core/
      common/
      config/
      constants/
      error/
      network/
      services/
      theme/
      usecases/
      widgets/
    features/
      auth/
      home/
      settings/
    l10n/
    app.dart
    locator.dart
    main.dart
    router.dart
---
Kodenya dibagi tiga lapisan, data, domain, dan presentation, dengan BLoC untuk state dan GetIt untuk dependency injection.

Sudah tersedia flavor dev, staging, dan production, lokalisasi Inggris dan Indonesia, serta tema terang dan gelap.
