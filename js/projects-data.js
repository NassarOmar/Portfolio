// Auto-synced from data/projects.json
const PROJECTS_DATA = [
  {
    "id": "ar-mystic-puzzle-box",
    "title": "AR Mystic Puzzle Box",
    "completedDate": "2026-04-02",
    "description": {
      "en": "Interactive 3D AR puzzle game where players place a mechanical magic chest on any real surface and solve interconnected puzzles — rotating gears, directional arrows — to unlock it. Built with AR Foundation, URP, light estimation, real-time shadows, and depth occlusion for cinematic realism.",
      "ar": "لعبة ألغاز تفاعلية ثلاثية الأبعاد بالواقع المعزز AR — يضع اللاعب صندوق ألغاز ميكانيكي على أي سطح حقيقي ويحل ألغازاً مترابطة (تروس، أسهم) لفتحه. مبنية بـ AR Foundation و URP مع تقدير الإضاءة والظلال الحية وحجب العمق.",
      "it": "Gioco puzzle 3D in realtà aumentata: il giocatore posiziona un forziere magico meccanico su qualsiasi superficie reale e risolve enigmi collegati per aprirlo. Sviluppato con AR Foundation, URP, stima della luce, ombre in tempo reale e occlusione."
    },
    "cover": "assets/images/AR Mystic Puzzle Box/icon-cover.png",
    "gallery": [],
    "video": null,
    "links": [],
    "tags": ["Unity", "AR Foundation", "URP", "C#", "Mobile"]
  },
  {
    "id": "sky-bop",
    "title": "Sky Bop",
    "completedDate": "2025-03-10",
    "description": {
      "en": "Fast-paced arcade game — pop balloons before they reach the top while avoiding red obstacles. Features Firebase global leaderboard, rewarded ads for extra lives, in-game economy with skins shop, and progressive difficulty scaling.",
      "ar": "لعبة Arcade سريعة — فرقعة البالونات قبل وصولها للأعلى مع تجنب العقبات الحمراء. تتضمن لوحة صدارة Firebase عالمية، إعلانات مكافأة للإحياء، متجر Skins، وصعوبة متصاعدة.",
      "it": "Arcade veloce — scoppia i palloncini prima che salgano evitando ostacoli rossi. Include classifica Firebase, annunci rewarded, negozio skin e difficoltà progressiva."
    },
    "cover": "assets/images/Sky Bop/icon-cover.png",
    "gallery": [
      "assets/images/Sky Bop/Screenshot 2025-03-11 031122.png",
      "assets/images/Sky Bop/Screenshot 2025-03-11 031131.png",
      "assets/images/Sky Bop/Screenshot 2025-03-11 031146.png",
      "assets/images/Sky Bop/Screenshot 2025-03-11 031204.png"
    ],
    "video": null,
    "links": [],
    "tags": ["Unity", "Firebase", "C#", "Mobile Ads", "Arcade"]
  },
  {
    "id": "walkie-voice-room",
    "title": "Walkie Voice Room",
    "completedDate": "2025-06-25",
    "description": {
      "en": "Online walkie-talkie simulator built with Unity and Photon PUN 2. Create private encrypted voice rooms for up to 10 users — ideal for gaming sessions and friends. Features live speaker indicators and join/leave audio cues.",
      "ar": "محاكي لاسلكي صوتي عبر الإنترنت مبني بـ Unity و Photon PUN 2. غرف صوتية خاصة مشفرة حتى 10 مستخدمين — مثالي لجلسات الألعاب. مؤشرات للمتحدث الحالي وتنبيهات دخول وخروج.",
      "it": "Simulatore walkie-talkie online con Unity e Photon PUN 2. Stanze vocali private crittografate fino a 10 utenti, ideali per sessioni di gioco. Indicatori del parlante attivo e segnali audio."
    },
    "cover": "assets/images/Unity Wireless Emulator/icon-cover.png",
    "gallery": [],
    "video": null,
    "links": [
      {
        "url": "https://zix68.itch.io/wireless-set",
        "label": { "en": "Try on itch.io", "ar": "معاينة على itch.io", "it": "Prova su itch.io" }
      }
    ],
    "tags": ["Unity", "Photon PUN 2", "C#", "Networking", "Voice Chat"]
  },
  {
    "id": "truth-or-dare",
    "title": "Truth or Dare — Party Game",
    "completedDate": "2024-12-23",
    "description": {
      "en": "Arabic party game with 350+ questions and 170+ fun challenges across 5 themed packs. Custom question editor, 7 visual themes, player customization, round scoring, and share-with-friends rewards. Built for families, friends, and couples.",
      "ar": "لعبة جماعية عربية: 350+ سؤال و 170+ تحدي في 5 مجموعات. محرر أسئلة مخصص، 7 ثيمات، تخصيص اللاعبين، نظام نقاط، ومشاركة مع الأصدقاء. للعائلات والأصدقاء والأزواج.",
      "it": "Gioco di società arabo con oltre 350 domande e 170 sfide in 5 pacchetti. Editor personalizzato, 7 temi, punteggio a round e condivisione con amici."
    },
    "cover": "assets/images/Questions Or challenges/icon-cover.png",
    "gallery": [
      "assets/images/Questions Or challenges/1.png",
      "assets/images/Questions Or challenges/2.png",
      "assets/images/Questions Or challenges/3.png",
      "assets/images/Questions Or challenges/4.png",
      "assets/images/Questions Or challenges/5.png",
      "assets/images/Questions Or challenges/6.png",
      "assets/images/Questions Or challenges/7.png",
      "assets/images/Questions Or challenges/8.png",
      "assets/images/Questions Or challenges/22.png"
    ],
    "video": null,
    "links": [
      {
        "url": "https://zix68.itch.io/truth-or-dare",
        "label": { "en": "Try on itch.io", "ar": "معاينة على itch.io", "it": "Prova su itch.io" }
      }
    ],
    "tags": ["Unity", "C#", "Party Game", "UI/UX", "Mobile"]
  },
  {
    "id": "quality-trip",
    "title": "Quality Trip",
    "completedDate": "2024-11-12",
    "description": {
      "en": "Educational top-view game for children aged 11+ about quality institutions (ISO, ILAC, ICE…). Features 8 miniature environments, trilingual support (Arabic, English, Chinese), coin system, and releases on Google Play and App Store.",
      "ar": "لعبة تعليمية بمنظور علوي للأطفال 11+ عن مؤسسات الجودة (ISO, ILAC, ICE…). 8 بيئات مصغرة، 3 لغات (عربي، إنجليزي، صيني)، نظام عملات، منشورة على Google Play و App Store.",
      "it": "Gioco educativo top-view per bambini 11+ sulle istituzioni di qualità. 8 ambienti, trilingue (arabo, inglese, cinese), su Google Play e App Store."
    },
    "cover": "assets/images/Quality trip/icon-cover.png",
    "gallery": [
      "assets/images/Quality trip/Screenshot 2024-09-29 181343.png",
      "assets/images/Quality trip/Screenshot 2024-09-29 181555.png",
      "assets/images/Quality trip/Screenshot 2024-09-29 181623.png",
      "assets/images/Quality trip/Screenshot 2024-09-29 181633.png",
      "assets/images/Quality trip/Screenshot 2024-09-29 181730.png",
      "assets/images/Quality trip/Screenshot 2024-09-29 181746.png",
      "assets/images/Quality trip/Screenshot 2024-09-29 181804.png"
    ],
    "video": null,
    "links": [
      {
        "url": "https://zix68.itch.io/quali-trip",
        "label": { "en": "Try on itch.io", "ar": "معاينة على itch.io", "it": "Prova su itch.io" }
      }
    ],
    "tags": ["Unity", "C#", "Educational", "iOS", "Android", "Localization"]
  },
  {
    "id": "zombie-killer-runner",
    "title": "Zombie Killer Runner",
    "completedDate": "2024-03-04",
    "description": {
      "en": "3-lane endless runner inspired by Subway Surfers — dodge obstacles and zombies, battle a dragon boss, collect coins, unlock characters and weapons, transform into animals, and monetize with ads. Built entirely from scratch in Unity.",
      "ar": "Runner لانهائي بثلاث مسارات مستوحى من Subway Surfers — تفادِ العوائق والزombies، قاتل تنيناً، اجمع عملات، افتح شخصيات وأسلحة، تحول لحيوانات، مع إعلانات. مبني من الصفر بـ Unity.",
      "it": "Endless runner a 3 corsie — evita ostacoli e zombie, combatti un drago, raccogli monete, sblocca personaggi e armi. Sviluppato da zero in Unity."
    },
    "cover": "assets/images/Zombie killer runner/icon-cover.png",
    "gallery": [
      "assets/images/Zombie killer runner/tutto3.png"
    ],
    "video": null,
    "links": [
      {
        "url": "https://zix68.itch.io/zombie-killer-runner",
        "label": { "en": "Try on itch.io", "ar": "معاينة على itch.io", "it": "Prova su itch.io" }
      }
    ],
    "tags": ["Unity", "C#", "Runner", "Android", "Unity Ads"]
  },
  {
    "id": "drifting-way",
    "title": "Drifting Way",
    "completedDate": "2023-12-19",
    "description": {
      "en": "High-speed car runner with drifting mechanics — dodge traffic, collect coins, and survive as long as possible while difficulty and speed ramp up. Different cars with unique acceleration and drift stats.",
      "ar": "Runner سيارات بسرعة وحماس — drift mechanics، تفادِ السيارات والشاحنات، اجمع عملات، وابقَ أطول وقت ممكن مع تصاعد الصعوبة. سيارات مختلفة بخصائص فريدة.",
      "it": "Runner automobilistico ad alta velocità con drift — evita il traffico, raccogli monete e sopravvivi il più a lungo possibile con difficoltà crescente."
    },
    "cover": "assets/images/Drifting Way/icon-cover.png",
    "gallery": [
      "assets/images/Drifting Way/01.png",
      "assets/images/Drifting Way/02.png",
      "assets/images/Drifting Way/03.png",
      "assets/images/Drifting Way/04.png",
      "assets/images/Drifting Way/05.png"
    ],
    "video": null,
    "links": [],
    "tags": ["Unity", "C#", "Racing", "Runner", "Mobile"]
  },
  {
    "id": "eye-shot",
    "title": "Eye Shot",
    "completedDate": "2023-12-15",
    "description": {
      "en": "2D pixel-art shooter — upgrade weapons and skills to fight escalating enemy waves. Features AI enemies, shop system, inventory, coin economy, and mobile joystick controls. Art and code built from scratch.",
      "ar": "Shooter ثنائي الأبعاد بأسلوب pixel art — طور أسلحتك ومهاراتك لمحاربة موجات أعداء متصاعدة. AI للأعداء، متجر، inventory، عملات، وتحكم joystick للجوال.",
      "it": "Shooter 2D pixel art — potenzia armi e abilità contro ondate nemiche crescenti. IA nemica, negozio, inventario e controlli mobile."
    },
    "cover": "assets/images/Eye shot/icon-cover.png",
    "gallery": [
      "assets/images/Eye shot/0..png",
      "assets/images/Eye shot/Screenshot 2023-09-30 110822.png",
      "assets/images/Eye shot/Screenshot 2023-12-15 181703.png",
      "assets/images/Eye shot/Screenshot 2023-12-19 130931.png",
      "assets/images/Eye shot/Screenshot 2023-12-19 131306.png"
    ],
    "video": null,
    "links": [
      {
        "url": "https://zix68.itch.io/eye-shot",
        "label": { "en": "Try on itch.io", "ar": "معاينة على itch.io", "it": "Prova su itch.io" }
      }
    ],
    "tags": ["Unity", "C#", "2D", "Pixel Art", "AI", "Mobile"]
  },
  {
    "id": "tubbytubbies",
    "title": "Tubbytubbies",
    "completedDate": "2023-08-06",
    "description": {
      "en": "Mobile horror game — wake up in a haunted house, solve puzzles, find keys, and escape the Tubbytubbies while tense music and jump scares keep you on edge. Built with Unity for Android.",
      "ar": "لعبة رعب للجوال — تستيقظ في بيت مسكون، حل الألغاز، ابحث عن المفاتيح، واهرب من Tubbytubbies مع موسيقى مشوقة ومفاجآت مرعبة. Unity على Android.",
      "it": "Horror mobile — svegliati in una casa infestata, risolvi enigmi, trova chiavi e fuggi dai Tubbytubbies. Unity per Android."
    },
    "cover": "assets/images/Tubbytubbies/icon-cover.png",
    "gallery": [
      "assets/images/Tubbytubbies/Screenshot 2023-08-06 113655.png",
      "assets/images/Tubbytubbies/Screenshot 2023-08-06 113813.png",
      "assets/images/Tubbytubbies/Screenshot 2023-12-15 175725.png",
      "assets/images/Tubbytubbies/Screenshot 2023-12-15 175739.png"
    ],
    "video": null,
    "links": [
      {
        "url": "https://zix68.itch.io/tubbytubbies",
        "label": { "en": "Try on itch.io", "ar": "معاينة على itch.io", "it": "Prova su itch.io" }
      }
    ],
    "tags": ["Unity", "C#", "Horror", "Puzzle", "Android"]
  },
  {
    "id": "trip-hotel",
    "title": "Trip Hotel",
    "completedDate": "2023-02-06",
    "description": {
      "en": "3D horror adventure in a haunted hotel — search for keys and escape the monster while atmospheric music and hidden surprises build constant tension. Features 3D level design, AI enemy, and optimized lighting.",
      "ar": "مغامرة رعب ثلاثية الأبعاد في فندق مسكون — ابحث عن المفاتيح واهرب من الوحش مع موسيقى جوية ومفاجآت. تصميم مستويات 3D، AI للعدو، وإضاءة محسّنة.",
      "it": "Avventura horror 3D in un hotel infestato — trova le chiavi e fuga dal mostro. Level design 3D, IA nemica e illuminazione ottimizzata."
    },
    "cover": "assets/images/Trip-hotel/icon-cover.png",
    "gallery": [
      "assets/images/Trip-hotel/Screenshot 2023-12-15 173341.png",
      "assets/images/Trip-hotel/Screenshot 2023-12-15 173358.png",
      "assets/images/Trip-hotel/Screenshot 2023-12-15 173502.png"
    ],
    "video": null,
    "links": [
      {
        "url": "https://zix68.itch.io/trip-hotel",
        "label": { "en": "Try on itch.io", "ar": "معاينة على itch.io", "it": "Prova su itch.io" }
      }
    ],
    "tags": ["Unity", "C#", "Horror", "3D", "Level Design", "AI"]
  }
]

