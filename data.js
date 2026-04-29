const portfolioData = {
    "navbar": {
        "logo": "JohnDoe.",
        "links": [
            { "title": "Beranda", "href": "#home" },
            { "title": "Tentang", "href": "#about" },
            { "title": "Keahlian", "href": "#skills" },
            { "title": "Portofolio", "href": "#projects" }
        ],
        "cta": { "title": "Hubungi Saya", "href": "#contact" }
    },
    "hero": {
        "greeting": "👋 Halo, Selamat Datang!",
        "name": "Saya John Doe,",
        "role": "Mobile Developer",
        "description": "Spesialis dalam membangun aplikasi lintas platform yang performant dan indah menggunakan Flutter. Mengubah ide brilian Anda menjadi aplikasi mobile yang nyata.",
        "primaryButton": { "text": "Lihat Karya Saya", "href": "#projects" },
        "secondaryButton": { "text": "Hubungi Saya", "href": "#contact" },
        "techIcons": [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
        ]
    },
    "about": {
        "title": "Tentang",
        "titleHighlight": "Saya",
        "cardTitle": "Kisah Perjalanan Saya",
        "paragraphs": [
            "Berawal dari ketertarikan pada desain antarmuka, saya menemukan *passion* saya dalam pengembangan aplikasi mobile. Selama 3+ tahun terakhir, saya fokus mendalami ekosistem Flutter.",
            "Saya percaya bahwa aplikasi tidak hanya harus fungsional, tetapi juga memberikan pengalaman yang menyenangkan bagi penggunanya (UI/UX yang mulus)."
        ],
        "stats": [
            { "number": "3+", "text": "Tahun Pengalaman" },
            { "number": "20+", "text": "Proyek Selesai" },
            { "number": "15", "text": "Klien Puas" },
            { "number": "2", "text": "Aplikasi di Store" }
        ]
    },
    "skills": {
        "title": "Keahlian &",
        "titleHighlight": "Teknologi",
        "subtitle": "Alat dan teknologi yang saya gunakan setiap hari untuk membangun aplikasi berkualitas.",
        "items": [
            {
                "name": "Flutter",
                "level": "Advanced",
                "bgColor": "bg-blue-50",
                "hoverBgColor": "group-hover:bg-blue-100",
                "icon": "<img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg\" class=\"w-10 h-10\" alt=\"Flutter\" />"
            },
            {
                "name": "Dart",
                "level": "Advanced",
                "bgColor": "bg-blue-50",
                "hoverBgColor": "group-hover:bg-blue-100",
                "icon": "<img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg\" class=\"w-10 h-10\" alt=\"Dart\" />"
            },
            {
                "name": "Firebase",
                "level": "Intermediate",
                "bgColor": "bg-orange-50",
                "hoverBgColor": "group-hover:bg-orange-100",
                "icon": "<img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg\" class=\"w-10 h-10\" alt=\"Firebase\" />"
            },
            {
                "name": "SQLite",
                "level": "Intermediate",
                "bgColor": "bg-blue-50",
                "hoverBgColor": "group-hover:bg-blue-100",
                "icon": "<img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg\" class=\"w-10 h-10\" alt=\"SQLite\" />"
            },
            {
                "name": "Figma (UI/UX)",
                "level": "Intermediate",
                "bgColor": "bg-purple-50",
                "hoverBgColor": "group-hover:bg-purple-100",
                "icon": "<img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg\" class=\"w-10 h-10\" alt=\"Figma\" />"
            },
            {
                "name": "Git / GitHub",
                "level": "Advanced",
                "bgColor": "bg-gray-100",
                "hoverBgColor": "group-hover:bg-gray-200",
                "icon": "<svg class=\"w-10 h-10 text-gray-700\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z\"/></svg>"
            },
            {
                "name": "RESTful APIs",
                "level": "Advanced",
                "bgColor": "bg-green-50",
                "hoverBgColor": "group-hover:bg-green-100",
                "icon": "<svg class=\"w-10 h-10 text-green-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4\"></path></svg>"
            },
            {
                "name": "State Mgmt",
                "level": "(Provider, Bloc)",
                "bgColor": "bg-indigo-50",
                "hoverBgColor": "group-hover:bg-indigo-100",
                "icon": "<svg class=\"w-10 h-10 text-indigo-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\"></path></svg>"
            }
        ]
    },
    "projects": {
        "title": "Karya &",
        "titleHighlight": "Portofolio",
        "subtitle": "Beberapa aplikasi mobile yang telah saya kembangkan.",
        "items": [
            {
                "title": "E-Commerce App",
                "description": "Aplikasi belanja online lengkap dengan fitur keranjang, pembayaran dengan gateway pihak ketiga, dan pelacakan pesanan real-time.",
                "tags": [
                    { "name": "Flutter", "colorClass": "bg-blue-50 text-blue-600" },
                    { "name": "Firebase", "colorClass": "bg-orange-50 text-orange-600" }
                ],
                "link": "#",
                "themeColors": { "gradientFrom": "from-blue-100", "gradientTo": "to-blue-200", "iconColor": "text-blue-300", "hoverOverlay": "bg-blue-600/80", "textColor": "text-blue-600" },
                "icon": "<svg class=\"w-20 h-20 text-blue-300 relative z-10 group-hover:scale-110 transition-transform duration-300\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z\"></path></svg>"
            },
            {
                "title": "Finance Tracker",
                "description": "Aplikasi manajemen keuangan pribadi dengan grafik interaktif untuk melacak pengeluaran dan pemasukan bulanan pengguna.",
                "tags": [
                    { "name": "Flutter", "colorClass": "bg-blue-50 text-blue-600" },
                    { "name": "REST API", "colorClass": "bg-purple-50 text-purple-600" }
                ],
                "link": "#",
                "themeColors": { "gradientFrom": "from-green-100", "gradientTo": "to-teal-100", "iconColor": "text-teal-300", "hoverOverlay": "bg-teal-600/80", "textColor": "text-teal-600" },
                "icon": "<svg class=\"w-20 h-20 text-teal-300 relative z-10 group-hover:scale-110 transition-transform duration-300\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"></path></svg>"
            },
            {
                "title": "Smart Notes",
                "description": "Aplikasi pencatatan modern dengan kemampuan sinkronisasi offline-first menggunakan SQLite, mendukung markdown dan kategorisasi.",
                "tags": [
                    { "name": "Flutter", "colorClass": "bg-blue-50 text-blue-600" },
                    { "name": "SQLite", "colorClass": "bg-blue-50 text-blue-600" }
                ],
                "link": "#",
                "themeColors": { "gradientFrom": "from-indigo-100", "gradientTo": "to-purple-100", "iconColor": "text-indigo-300", "hoverOverlay": "bg-indigo-600/80", "textColor": "text-indigo-600" },
                "icon": "<svg class=\"w-20 h-20 text-indigo-300 relative z-10 group-hover:scale-110 transition-transform duration-300\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\"></path></svg>"
            }
        ]
    },
    "contact": {
        "title": "Punya Proyek Menarik?",
        "subtitle": "Saya selalu terbuka untuk mendiskusikan pekerjaan pengembangan produk, ide proyek, atau peluang kerja sama lainnya. Mari kita ciptakan sesuatu yang luar biasa bersama!",
        "email": { "address": "hello@johndoe.com", "text": "Kirim Email" },
        "linkedin": { "url": "https://linkedin.com", "text": "LinkedIn" }
    },
    "footer": {
        "text": "John Doe. Dibuat dengan 💙 & Tailwind CSS.",
        "socials": [
            { "icon": "<svg class=\"w-6 h-6\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z\"/></svg>", "url": "#" },
            { "icon": "<svg class=\"w-6 h-6\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"/></svg>", "url": "#" }
        ]
    }
};
