// src/data/artistData.js

// Предполагаемый ID группы Queen = 1, Linkin Park = 11

const artistData = {
    // --- Freddie Mercury ---
    1: { // ID для Freddie Mercury (например, совпадает с ID группы Queen, если он единственный артист)
        id: 1,
        name: "Freddie Mercury",
        birthDate: "1946-09-05",
        birthPlace: "Стоунтаун, Занзибар", // Сегодня Занзибар, Танзания
        biographySummary: "Фредди Меркьюри — британский певец, автор песен, пианист и бэк-вокалист группы Queen. Известен своим мощным голосом, широким вокальным диапазоном и харизматичным сценическим образом. Является одним из самых влиятельных фронтменов в истории рок-музыки.",
        lifeStages: [
            { year: 1946, event: "Рождение Фарруха Булсары в Стоунтауне, Занзибар." },
            { year: 1964, event: "Семья эмигрировала в Англию из-за революции на Занзибаре." },
            { year: 1970, event: "Присоединение к группе Smile, которая вскоре была переименована в Queen." },
            { year: 1973, event: "Выпуск дебютного альбома Queen." },
            { year: 1985, event: "Выступление на Live Aid, которое стало одним из самых запоминающихся в истории." },
            { year: 1991, event: "Смерть от СПИДа." }
        ],
        interestingFacts: [
            "У него было четыре передних верхних зуба, которые он не хотел исправлять, считая их частью своей внешности.",
            "Свободно говорил на нескольких языках, включая английский, суахили и персидский.",
            "Быстро рисовал, несмотря на то, что получил диплом по графическому дизайну."
        ],
        bands: [
            { bandId: 1, bandName: "Queen", joined: 1970, left: 1991, role: "Вокал, Пианино" }
        ],
        discography: [ // Указываем ID альбомов Queen
            { albumId: 1, albumTitle: "Queen", band: "Queen", role: "Вокал, Пианино" },
            { albumId: 2, albumTitle: "A Night at the Opera", band: "Queen", role: "Вокал, Пианино" },
            { albumId: 3, albumTitle: "A Day at the Races", band: "Queen", role: "Вокал, Пианино" },
            { albumId: 5, albumTitle: "The Works", band: "Queen", role: "Вокал, Пианино" },
            { albumId: 10, albumTitle: "Mr. Bad Guy", band: "Freddie Mercury (Solo)", role: "Вокал, Пианино" }
        ],
        influences: [
            { type: "influenced_by", name: "Elvis Presley", artistId: 20 },
            { type: "influenced_by", name: "Liza Minnelli", artistId: 21 },
            { type: "influenced", name: "Lady Gaga", artistId: 22 },
            { type: "influenced", name: "Muse", artistId: 23 }
        ],
        socialLinks: [
            // Freddie Mercury не имел официальных соцсетей в современном понимании
            { platform: "Queen Official", url: "/bands/1" } // Ссылка на страницу группы Queen
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Queen_in_1977.jpg",
        birthPlaceCoords: [-6.1877, 39.2019],
    },

    // --- Michael Jackson ---
    7: {
        id: 7,
        name: "Michael Jackson",
        birthDate: "1958-08-29",
        birthPlace: "Гэри, Индиана, США",
        biographySummary: "Майкл Джексон — американский певец, танцор, автор песен, продюсер и предприниматель. Известен как «Король поп-музыки», один из самых значительных культурных феноменов XX и XXI веков. Революционизировал жанры поп, рок и R&B.",
        lifeStages: [
            { year: 1958, event: "Рождение в Гэри, Индиана." },
            { year: 1964, event: "Начало музыкальной карьеры в составе группы The Jackson 5." },
            { year: 1979, event: "Выпуск сольного альбома 'Off the Wall', начало сольной карьеры." },
            { year: 1982, event: "Выпуск альбома 'Thriller' — самого продаваемого альбома всех времен." },
            { year: 1987, event: "Выпуск альбома 'Bad'." },
            { year: 2009, event: "Смерть в Лос-Анджелесе." }
        ],
        interestingFacts: [
            "Его танец 'лунная походка' (moonwalk) стал мировым феноменом.",
            "Он был обладателем 13 премий Грэмми.",
            "Жил в своем поместье 'Neverland Ranch'."
        ],
        bands: [
            { bandId: 3, bandName: "The Jackson 5", joined: 1964, left: 1984, role: "Вокал, ударные" }
        ],
        discography: [
            { albumId: 11, albumTitle: "Got to Be There", band: "Michael Jackson (Solo)", role: "Вокал" },
            { albumId: 12, albumTitle: "Ben", band: "Michael Jackson (Solo)", role: "Вокал" },
            { albumId: 13, albumTitle: "Off the Wall", band: "Michael Jackson (Solo)", role: "Вокал, Автор" },
            { albumId: 14, albumTitle: "Thriller", band: "Michael Jackson (Solo)", role: "Вокал, Автор" },
            { albumId: 15, albumTitle: "Bad", band: "Michael Jackson (Solo)", role: "Вокал, Автор" },
            { albumId: 16, albumTitle: "Dangerous", band: "Michael Jackson (Solo)", role: "Вокал, Автор" },
            { albumId: 17, albumTitle: "HIStory: Past, Present and Future, Book I", band: "Michael Jackson (Solo)", role: "Вокал, Автор" }
        ],
        influences: [
            { type: "influenced_by", name: "James Brown", artistId: 25 },
            { type: "influenced_by", name: "Jackie Wilson", artistId: 26 },
            { type: "influenced", name: "Justin Timberlake", artistId: 27 },
            { type: "influenced", name: "Usher", artistId: 28 }
        ],
        socialLinks: [
            { platform: "Official Website", url: "/bands/7" } // Ссылка на страницу артиста/группы
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Michael_Jackson_HIStory_Tour_%281997%29.jpg/1280px-Michael_Jackson_HIStory_Tour_%281997%29.jpg",
        birthPlaceCoords: [41.5800, -87.3450],
    },

    // --- Jimi Hendrix ---
    1111: { // ID для Jimi Hendrix
        id: 1111,
        name: "Jimi Hendrix",
        birthDate: "1942-11-27",
        birthPlace: "Сиэтл, Вашингтон, США",
        biographySummary: "Джими Хендрикс — американский гитарист, певец и автор песен. Широко признан одним из самых влиятельных и выдающихся гитаристов в истории рок-музыки. Его виртуозная игра, инновационное использование гитарных эффектов и сценическая подача изменили звучание электрогитары.",
        lifeStages: [
            { year: 1942, event: "Рождение Джеймса Маршалла Хендрикса в Сиэтле." },
            { year: 1959, event: "Покупка своей первой гитары." },
            { year: 1961, event: "Служба в армии, начало профессиональной музыкальной карьеры." },
            { year: 1966, event: "Переезд в Лондон, формирование группы The Jimi Hendrix Experience." },
            { year: 1967, event: "Выступление на Monterey Pop Festival, которое принесло ему мировую известность." },
            { year: 1970, event: "Смерть в Лондоне." }
        ],
        interestingFacts: [
            "Он был левшой, но часто играл на гитаре, настроенной для правшей, переворачивая ее.",
            "Известен своим поджиганием гитары на сцене.",
            "Имел огромный набор гитарных эффектов, которые активно использовал."
        ],
        bands: [
            { bandId: 1111, bandName: "The Jimi Hendrix Experience", joined: 1966, left: 1969, role: "Вокал, Гитара" },
            { bandId: 1112, bandName: "Band of Gypsys", joined: 1969, left: 1970, role: "Гитара, Вокал" }
        ],
        discography: [
            { albumId: 21, albumTitle: "Are You Experienced", band: "The Jimi Hendrix Experience", role: "Гитара, Вокал" },
            { albumId: 22, albumTitle: "Axis: Bold as Love", band: "The Jimi Hendrix Experience", role: "Гитара, Вокал" },
            { albumId: 23, albumTitle: "Electric Ladyland", band: "The Jimi Hendrix Experience", role: "Гитара, Вокал" },
            { albumId: 24, albumTitle: "Band of Gypsys", band: "Band of Gypsys", role: "Гитара, Вокал" }
        ],
        influences: [
            { type: "influenced_by", name: "Chuck Berry", artistId: 30 },
            { type: "influenced_by", name: "Muddy Waters", artistId: 31 },
            { type: "influenced", name: "Eric Clapton", artistId: 32 },
            { type: "influenced", name: "Stevie Ray Vaughan", artistId: 33 }
        ],
        socialLinks: [
            { platform: "Official Website", url: "/artists/1111" } // Ссылка на страницу артиста
        ],
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jimi_Hendrix_in_1968.jpg/1280px-Jimi_Hendrix_in_1968.jpg",
        birthPlaceCoords: [47.6062, -122.3321],
    },

    // --- Linkin Park (для примера, если нужно) ---
    111: {
        id: 111,
        name: "Chester Bennington",
        birthDate: "1976-03-20",
        birthPlace: "Финикс, Аризона, США",
        biographySummary: "Честер Чарльз Беннингтон был американским певцом, автором песен и актером. Наиболее известен как фронтмен и основной вокалист рок-группы Linkin Park, а также как лидер проекта Dead by Sunrise.",
        lifeStages: [
            { year: 1976, event: "Рождение в Финиксе, Аризона." },
            { year: 1993, event: "Присоединение к группе Grey Daze." },
            { year: 1999, event: "Присоединение к группе Xero (будущая Linkin Park)." },
            { year: 2000, event: "Выпуск дебютного альбома Linkin Park 'Hybrid Theory'." },
            { year: 2005, event: "Создание сайд-проекта Dead by Sunrise." },
            { year: 2017, event: "Трагический уход из жизни." }
        ],
        interestingFacts: [
            "До Linkin Park работал в кофейне.",
            "Его первым инструментом было пианино.",
            "Озвучивал персонажа в фильме 'Адреналин'."
        ],
        bands: [
            { bandName: "Linkin Park", joined: 1999, left: 2017, role: "Вокалист" },
            { bandName: "Grey Daze", joined: 1993, left: 1998, role: "Вокалист" },
            { bandName: "Dead by Sunrise", joined: 2005, left: 2012, role: "Вокалист" }
        ],
        discography: [
            { albumId: 4, albumTitle: "Hybrid Theory", band: "Linkin Park", role: "Вокал" },
            { albumId: 5, albumTitle: "Meteora", band: "Linkin Park", role: "Вокал" },
            { albumId: 6, albumTitle: "Minutes to Midnight", band: "Linkin Park", role: "Вокал" },
            { albumId: 9, albumTitle: "Pause the Insanity", band: "Grey Daze", role: "Вокал" },
            { albumId: 10, albumTitle: "Out of the Shadows", band: "Dead by Sunrise", role: "Вокал" }
        ],
        influences: [
            { type: "influenced", name: "Imagine Dragons", artistId: 12 },
            { type: "influenced", name: "Twenty One Pilots", artistId: 13 },
            { type: "influenced_by", name: "Depeche Mode", artistId: 14 },
            { type: "influenced_by", name: "Nine Inch Nails", artistId: 15 }
        ],
        socialLinks: [
            { platform: "Instagram", url: "https://www.instagram.com/chesterbe/" },
            { platform: "Twitter", url: "https://twitter.com/chesterbe" }
        ],
        imageUrl: "https://www.rollingstone.com/wp-content/uploads/2018/06/chester-bennington-linkin-park-obit-a53cd0a0-c57a-484e-b0f6-e52173634d93.jpg?w=910&h=511&crop=1",
        birthPlaceCoords: [33.4484, -112.0740],
    },

    // --- Добавьте сюда других артистов ---
};

export default artistData;