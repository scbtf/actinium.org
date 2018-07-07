

$(function() {

  var t = {
    nav_language: {
      en: "Language",
      fr: " ",
      es: "Idioma",
      it: " ",
      rs: "Jezik",
      ru: "Язык"
    },
    nav_language_english: {
      en: "English",
      fr: " ",
      es: "Inglés",
      it: " ",
      rs: "Engleski",
      ru: "Английский"
    },
    nav_language_french: {
      en: "French",
      fr: " ",
      es: "Francés",
      it: " ",
      rs: " ",
      ru: "Французский"
    },
    nav_language_spanish: {
      en: "Spanish",
      fr: " ",
      es: "Español",
      it: " ",
      rs: "Španski",
      ru: "Испанский"
    },
    nav_language_italian: {
      en: "Italian",
      fr: " ",
      es: "Italiano",
      it: " ",
      rs: " ",
      ru: "Итальянский"
    },
    nav_language_serbian: {
      en: "Serbian",
      fr: " ",
      es: "Serbio",
      it: " ",
      rs: "Srpski",
      ru: "Сербский"
    },
    nav_language_russian: {
      en: "Russian",
      fr: " ",
      es: "Ruso",
      it: " ",
      rs: "",
      ru: "Русский"
    },
    nav_home: {
      en: "Home",
      fr: " ",
      es: "Inicio",
      it: " ",
      rs: "Početna",
      ru: "Главная"
    },
    nav_wallets: {
      en: "Wallets",
      fr: " ",
      es: "Carteras",
      it: " ",
      rs: "Novčanici",
      ru: "Кошельки"
    },
    nav_roadmap: {
      en: "Roadmap",
      fr: " ",
      es: "Hoja de ruta",
      it: " ",
      rs: "Planovi za budućnost",
      ru: "План развития"
    },
    nav_exchanges: {
      en: "Exchanges",
      fr: " ",
      es: "Casas de intercambio",
      it: " ",
      rs: "Menjačnice",
      ru: "Биржи"
    },
    nav_team: {
      en: "Team",
      fr: " ",
      es: "Equipo",
      it: " ",
      rs: "Tim",
      ru: "Команда"
    },
    nav_community: {
      en: "Community",
      fr: " ",
      es: "Comunidad",
      it: " ",
      rs: "Zajednica",
      ru: "Сообщество"
    },
    price_block: {
      en: "Price",
      fr: " ",
      es: "Precio",
      it: " ",
      rs: "Cena",
      ru: "Цена"
    },
    section_logo_text: {
      en: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#No ICO&nbsp;&nbsp;&nbsp;&nbsp;#No Premine&nbsp;&nbsp;&nbsp;&nbsp;#No Airdrops&nbsp;&nbsp;&nbsp;&nbsp;#Fair Launch",
      fr: " ",
      es: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#Sin ICO&nbsp;&nbsp;&nbsp;&nbsp;#Sin Preminado&nbsp;&nbsp;&nbsp;&nbsp;#Sin Airdrops&nbsp;&nbsp;&nbsp;&nbsp;#Lanzamiento justo",
      it: " ",
      rs: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#Nema ICO&nbsp;&nbsp;&nbsp;&nbsp;#Nema Premine-a&nbsp;&nbsp;&nbsp;&nbsp;#Nema Airdropova&nbsp;&nbsp;&nbsp;&nbsp;#Fer pokretanje",
      ru: "#POW&nbsp;&nbsp;&nbsp;&nbsp;#SCRYPT&nbsp;&nbsp;&nbsp;&nbsp;#Без ICO&nbsp;&nbsp;&nbsp;&nbsp;#Без Премайна&nbsp;&nbsp;&nbsp;&nbsp;#Без Airdrops&nbsp;&nbsp;&nbsp;&nbsp;#Честный Запуск"
    },
    marketcap_block: {
      en: "Market Cap",
      fr: " ",
      es: "Capitalización de mercado",
      it: " ",
      rs: "Ukupna kapitalizacija",
      ru: "Рыночная капитализация"
    },
    currentsupply_block: {
      en: "Current supply",
      fr: " ",
      es: "Suministro actual",
      it: " ",
      rs: "Trenutni broj novčića",
      ru: "Текущее обеспечение"
    },
    hashrate_block: {
      en: "Hashrate",
      fr: " ",
      es: "Tasa de hash",
      it: " ",
      rs: "Hashrate",
      ru: "Хешрейт"
    },
    about: {
      en: "About",
      fr: " ",
      es: "Acerca de",
      it: " ",
      rs: "O nama",
      ru: "О нас"
    },
    about_desc_1: {
      en: "Actinium is more than a crypto currency.<br><br>Actinium is a <b>decentralized currency built on blockchain technology</b> that aims to help bring crypto into every customer’s pocket, every store, and be extraordinarily safe and easy to use.<br><br>This can be achieved because <b>Actinium is a Lightning Network supported coin</b> that will allow <b>instant transactions with near-zero fees, atomic swaps, and many of the numerous other 2nd Layer solutions.</b>",
      fr: " ",
      es: "Actinium es más que una criptomoneda.<br><br>Actinium es una <b>moneda descentralizada basada en la tecnología blockchain</b> que tiene como objetivo ayudar a llevar las criptomonedas al bolsillo de cada cliente, a cada tienda y ser extraordinariamente seguro y fácil de usar.<br><br>Esto se puede lograr porque <b>Actinium es una moneda admitida por Lightning Network</b> que permitirá <b>transacciones instantáneas con tarifas casi nulas, swaps atómicos y muchas de las numerosas soluciones de 2ª capa.</b>",
      it: " ",
      rs: "Aktinijum je mnogo više od kriptovalute.<br><br>Aktinijum je <b>decentralizovana valuta, izgradjena na blokčejn tehnologiji</b> koja za cilj ima da učini kripto dostupnim svakom pojedincu, svakoj prodavnici, kao i da pruži sigurnost i lakoću, prilikom korišćenja.<br><br>Ovo je moguće iz prostog razloga,<b>Aktinijum je novčić koji podržava Lightning Network</b>, protokol koji omogućava instant transakcije, uz izuzetno niske provizije, Atomic Swaps, kao i mnoga druga rešenja, drugog sloja.</b>",
      ru: "Actinium - это больше чем просто криптовалюта.<br><br>Actinium - это <b>децентрализованная валюта построенная на технологии блокчейн</b>, которая призвана помочь привнести криптовалюту в повседневную жизнь потребителей, в каждый магазин, оставаясь чрезвычайно безопасной и простой в использовании.<br><br>Это достижимо благодаря тому, что <b>Actinium - это монета, которая поддерживается Lightning Network</b>, что позволит <b>использовать мгновенные платежи с практически нулевой комиссией, атомарные транзакции, и множество других решений второго слоя.</b>"
    },
    about_desc_2: {
      en: "Actinium is completely decentralized without premine and is not an ICO. <b>It has proper mining support, mobile wallets, and hardware wallet integration.</b><br><br>Actinium has all the needed features already activated to achieve Lightning Network compatibility.<br><br>Actinium will not remain a blockchain-only cryptocurrency. <b>The inevitable progress will deliver competing solutions to many problems on different layers.</b>",
      fr: " ",
      es: "Actinium está completamente descentralizado sin preminado y no es una ICO. <b>Tiene soporte de minería adecuado, carteras móviles e integración de carteras de hardware.</b><br><br>Actinium tiene todas las características necesarias ya activadas para lograr la compatibilidad de Lightning Network.<br><br>Actinium no seguirá siendo una criptomoneda de blockchain. <b>El progreso inevitable ofrecerá soluciones competitivas para muchos problemas en diferentes capas.</b>",
      it: " ",
      rs: "Aktinijum je kompletno decentralizovan, bez premine-a i bez ICO-a. <b>Potpuno je podržan od strane rudara, poseduje mobilni i hardverski novčanik.</b><br><br>Sve odlike Aktiniujma su kompatibilne sa Lightning Network-om.<br><br>Aktinijum neće ostati samo blokčejn valuta. <b>Nezaustavljivi napredak donosi konkurentna rešenja za mnoge probleme Drugog nivoa.</b>",
      ru: "Actinium полностью децентрализован, не имеет премайна, а также не является ICO. <b>Проект отличается достойной майнинговой поддержкой, наличием мобильных кошельков и интеграцией с холодным кошельком.</b><br><br>Actinium уже обладает всеми необходимыми свойствами для достижения совместимости с Lightning Network.<br><br>Actinium не будет исключительно блокчейн криптовалютой. <b>Неизбежный прогресс привнесёт конкурентоспособные решения для многих проблем на различных слоях.</b>"
    },
    wallets: {
      en: "Wallets",
      fr: " ",
      es: "Carteras",
      it: " ",
      rs: "Novčanici",
      ru: "Кошельки"
    },
    wallets_desc: {
      en: "Download Actinium for any platform",
      fr: " ",
      es: "Descarga Actinium para cualquier plataforma",
      it: " ",
      rs: "Preuzmite Aktinijum novčanik za bilo koju platformu",
      ru: "Загрузите Actinium для любой платформы"
    },
    pools: {
      en: "Mining pools",
      fr: " ",
      es: "Piscinas de minado",
      it: " ",
      rs: "Mining Pools",
      ru: "Майнинговые пулы"
    },
    pools_desc: {
      en: "Select a pool and start mining",
      fr: " ",
      es: "Selecciona una piscina y comienza a minar",
      it: " ",
      rs: "Odaberite pool i počnite da rudarite",
      ru: "Выберите пул и начните майнить"
    },
    official_button: {
      en: "Official",
      fr: " ",
      es: "Oficial",
      it: " ",
      rs: "Zvanično",
      ru: "Официальный"
    },
    explorer_button: {
      en: "Explorer",
      fr: " ",
      es: "Explorador",
      it: " ",
      rs: "Explorer",
      ru: "Обозреватель"
    },
    miners: {
      en: "Miners",
      fr: " ",
      es: "Mineros",
      it: " ",
      rs: "Rudari",
      ru: "Майнеры"
    },
    miners_desc: {
      en: "Download a miner for your GPU architecture",
      fr: " ",
      es: "Descargue el minero según la arquitectura de su GPU",
      it: " ",
      rs: "Preuzmite majner za svoje GPU",
      ru: "Загрузите майнер для Вашего GPU"
    },
    how_to_gpu_amd_01: {
      en: "Create a .bat file inside the miner directory and add this parameters:",
      fr: " ",
      es: "Crea un archivo .bat dentro del directorio del minero y añade estos parámetros:",
      it: " ",
      rs: "Napravite .bat fajl unutar majner foldera i dodajte ove parametre:",
      ru: "Создайте файл .bat в папке майнера со следующими параметрами:"
    },
    how_to_gpu_amd_02: {
      en: "You can download sgMiner for AMD GPU in the next link:",
      fr: " ",
      es: "Puedes descargar sgMiner para GPUs AMD en el siguiente enlace:",
      it: " ",
      rs: "Možete preuzeti sgMiner za AMD grafičke kartice na sledećem linku:",
      ru: "Вы можете загрузить sgMiner для AMD GPU по следующей ссылке:"
    },
    how_to_gpu_nvidia_01: {
      en: "Create a .bat file inside the miner directory and add this parameters:",
      fr: " ",
      es: "Crea un archivo .bat dentro del directorio del minero y añade estos parámetros:",
      it: " ",
      rs: "Napravite .bat fajl unutar majner foldera i dodajte ove parametre:",
      ru: "Создайте файл .bat в папке майнера со следующими параметрами:"
    },
    how_to_gpu_nvidia_02: {
      en: "You can download sgMiner for NVIDIA GPU in the next link:",
      fr: " ",
      es: "Puedes descargar sgMiner para GPUs NVIDIA en el siguiente enlace:",
      it: " ",
      rs: "Možete preuzeti sgMiner za NVIDIA grafičke kartice na sledećem linku:",
      ru: "Вы можете загрузить sgMiner для NVIDIA GPU по следующей ссылке:"
    },
    how_to_code_miner: {
      en: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u YOURADDRESS -p c=ACM -I 10",
      fr: " ",
      es: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u TUDIRECCIÓN -p c=ACM -I 10",
      it: " ",
      rs: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u YOURADDRESS -p c=ACM -I 10",
      ru: "sgminer -o stratum+tcp://goldmine.actinium.org:14334 -u YOURADDRESS -p c=ACM -I 10"
    },
    other_links: {
      en: "Other links",
      fr: " ",
      es: "Otros enlaces",
      it: " ",
      rs: "Ostali linkovi",
      ru: "Прочие ссылки"
    },
    other_links_desc: {
      en: "Discover more about Actinium",
      fr: " ",
      es: "Descubre más sobre Actinium",
      it: " ",
      rs: "Otkrijte još o Aktinijumu",
      ru: "Узнайте больше об Actinium"
    },
    desktop_wallets: {
      en: "Desktop Wallets",
      fr: " ",
      es: "Carteras de escritorio",
      it: " ",
      rs: "Desktop novčanici",
      ru: "Desktop Кошельки"
    },
    finish_q1: {
      en: "Finished Q1 2018",
      fr: " ",
      es: "Finalizado Q1 2018 ",
      it: " ",
      rs: "Završeno u Q1 2018",
      ru: "Завершено в Q1 2018"
    },
    progress: {
      en: "Progress...",
      fr: " ",
      es: "Progreso...",
      it: " ",
      rs: "Napredak...",
      ru: "Прогресс..."
    },
    smartphone_wallets: {
      en: "Smartphone Wallets",
      fr: " ",
      es: "Carteras para móvil",
      it: " ",
      rs: "Smartphone novčanici",
      ru: "Кошельки для смартфонов"
    },
    going_q2: {
      en: "On going Q2 2018",
      fr: " ",
      es: "Estimado para Q2 2018",
      it: " ",
      rs: "Planirano u Q2 2018",
      ru: "Планируется в Q2 2018"
    },
    going_q3: {
      en: "On going Q3 2018",
      fr: " ",
      es: "Estimado para Q3 2018",
      it: " ",
      rs: "Planirano u Q3 2018",
      ru: "Планируется в Q3 2018"
    },
    ledger_nano: {
      en: "Ledger Nano",
      fr: " ",
      es: "Ledger Nano",
      it: " ",
      rs: "Ledger Nano",
      ru: "Ledger Nano"
    },
    ledger_nano_progress: {
      en: "Ledger Nano progress...",
      fr: " ",
      es: "Desarrollo para Ledger Nano...",
      it: " ",
      rs: "Ledger Nano napredak..",
      ru: "Ledger Nano прогресс..."
    },
    ledger_nano_screenshot: {
      en: "Take a look!",
      fr: " ",
      es: "¡Échale un vistazo!",
      it: " ",
      rs: "Pogledajte!",
      ru: "Посмотреть!"
    },
    lightning_network: {
      en: "Lightning Network",
      fr: " ",
      es: "Lightning Network",
      it: " ",
      rs: "Lightning Network",
      ru: "Lightning Network"
    },
    testing: {
      en: "Testing!",
      fr: " ",
      es: "¡En pruebas!",
      it: " ",
      rs: "Test faza",
      ru: "Тестируется!"
    },
    exchanges: {
      en: "Exchanges",
      fr: " ",
      es: "Casas de intercambio",
      it: " ",
      rs: "Menjačnice",
      ru: "Биржи"
    },
    exchanges_desc: {
      en: "Trade your Actinium",
      fr: " ",
      es: "Intercambia tus Actinium",
      it: " ",
      rs: "Trgujte Aktinijumom",
      ru: "Начните торговать Actinium"
    },
    team: {
      en: "Team",
      fr: " ",
      es: "Equipo",
      it: " ",
      rs: "Tim",
      ru: "Команда"
    },
    team_desc: {
      en: "Unlike many other altcoins <b>we are not anonymous.</b><br><br>We think that investors have a right to know the people representing the coin. Yes, the standard excuse is very often <i>'But Satoshi never revealed himself'</i>.<br><br>However, unlike us, who are building things based on Bitcoin's original code, Satoshi created something extraordinary and he/she/they had every right to remain hidden.",
      fr: " ",
      es: "A diferencia de muchas otras altcoins, <b>no somos anónimos.</b><br><br>Creemos que los inversores tienen derecho a conocer a las personas que representan la moneda. Sí, la excusa estándar es muy a menudo <i>'Pero Satoshi nunca se reveló a sí mismo'.</i><br><br>Sin embargo, a diferencia de nosotros, que estamos construyendo cosas basadas en el código original de Bitcoin, Satoshi creó algo extraordinario y él/ella/ellos tenían todo el derecho a permanecer ocultos.",
      it: " ",
      rs: "Za razliku od mnogih drugih altcoin-a<b>mi se ne krijemo.</b><br><br>Naše je mišljenje da investitori imaju pravo da znaju ko su ljudi koji stoje iza novčića. Da, najčešći izgovor je <i>'Ali Satoshi nikad nije otkrio svoj identitet'</i>.<br><br>Za razliku od nas, koji gradimo na Bitkoinovom originalnom kodu, Satoshi je napravio nešto zaista izuzetno, i on/ona/oni imaju svako pravo da ostanu anonimni.",
      ru: "В отличие от других альткоинов <b>мы не анонимны.</b><br><br>Мы считаем, что инвесторы вправе знать людей представляющих монету. Действительно, очень часто стандартным оправданием является: <i>'Но ведь Сатоши никогда себя не раскрывал'</i>.<br><br>Тем не менее, в отличие от нас, кто строит на базе оригинального кода Биткоина, Сатоши создал нечто экстраординарное и поэтому он/она/они имел полное право оставаться в тени."
    },
    harris_sub: {
      en: "Founder - Software developer",
      fr: " ",
      es: "Fundador - Desarrollador de software",
      it: " ",
      rs: "Osnivač - Softver developer",
      ru: "Основатель - Разработчик ПО"
    },
    harris_desc: {
      en: "Software Developer 🤖",
      fr: " ",
      es: "Desarrollador de software 🤖",
      it: " ",
      rs: "Softver Developer 🤖",
      ru: "Разработчик ПО 🤖"
    },
    pablo_sub: {
      en: "Web Designer",
      fr: " ",
      es: "Diseñador Web",
      it: " ",
      rs: "Web Dizajner",
      ru: "Веб-дизайнер"
    },
    pablo_desc: {
      en: "I came here when this was still an experiment. Fan of 360º photography and cats lover (I have 12)... 😹",
      fr: " ",
      es: "Llegué aquí cuando todo esto era aún un experimento. Fan de la fotografía en 360º y amante de los gatos (Tengo 12)... 😹",
      it: " ",
      rs: "Pridružio sam se zajednici još u fazi eksperimenta. Zaljubljenik u 360º fotografije, kao i u mačke(Imam ih 12)...😹",
      ru: "Я присоединился к проекту когда он еще был на этапе эксперимента. Являюсь фанатом фотографий в 360º и любителем котиков (У меня их 12)...😹"
    },
    milosnes_sub: {
      en: "Community Leader",
      fr: " ",
      es: "Líder de la comunidad",
      it: " ",
      rs: " ",
      ru: "Лидер Сообщества"
    },
    milosnes_desc: {
      en: " ",
      fr: " ",
      es: " ",
      it: " ",
      rs: " ",
      ru: " "
    },
    copyright: {
      en: "Copyrights &copy; 2018 All Rights Reserved by The Actinium Project.",
      fr: " ",
      es: "Copyrights &copy; 2018 Todos los Derechos Reservados por El Proyecto Actinium.",
      it: " ",
      rs: "Copyrights &copy; 2018 Sva prava zadržava Aktinijum Projekat.",
      ru: "Copyrights &copy; 2018 Все права защищены проектом Actinium."
    },

    "JUST THE END, DONT TOUCH AFTER THIS": {
      es: "Dont touch after this"
    }
  };
  var _t = $('body').translate({lang: "en", t: t});
  var str = _t.g("translate");
  console.log(str);


  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

    console.log(lang);
    ev.preventDefault();
  });



});
