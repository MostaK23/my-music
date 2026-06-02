import BandInfo from "../components/BandInfo/BandInfo";

const linkinParkData = {
    id: 11, // Уникальный ID для Linkin Park
    name: "Linkin Park",
    formedYear: 1996,
    endedYear: null, // Группа активна
    description: "Linkin Park — американская рок-группа, образованная в Агар-Хиллс, Калифорния, в 1996 году. Группа известна своим уникальным смешением рок-музыки с элементами альтернативного рока, ню-метала, альтернативного металла и электроники. Их тексты часто затрагивают темы гнева, разочарования, идентичности и личных проблем.",
    imageUrl: "https://images2.alphacoders.com/542/thumb-1920-542031.jpg", // Пример URL изображения
    milestones: [
        { year: 1996, event: "Основание группы под названием Xero." },
        { year: 2000, event: "Выпуск дебютного альбома 'Hybrid Theory'." },
        { year: 2003, event: "Выпуск второго успешного альбома 'Meteora'." },
        { year: 2004, event: "Группа получает премию Грэмми за песню 'Crawling'." },
        { year: 2017, event: "Трагическая гибель вокалиста Честера Беннингтона." },
        { year: 2024, event: "Выпуск альбома 'From Zero'." } // Пример будущего события
    ],
    popularSongs: [
        { id: 1101, title: "In the End", url: "url_lp_1" },
        { id: 1102, title: "Numb", url: "url_lp_2" },
        { id: 1103, title: "Crawling", url: "url_lp_3" },
        { id: 1104, title: "Faint", url: "url_lp_4" },
        { id: 1105, title: "What I've Done", url: "url_lp_5" }
    ],
    popularAlbums: [
        { id: 4, title: "Hybrid Theory", releaseYear: 2000, coverUrl: "https://upload.wikimedia.org/wikipedia/ru/e/e8/Linkin_Park_%E2%80%94_Hybrid_Theory.jpg" },
        { id: 5, title: "Meteora", releaseYear: 2003, coverUrl: "https://upload.wikimedia.org/wikipedia/ru/b/bf/Meteora.jpg" },
        { id: 6, title: "Minutes to Midnight", releaseYear: 2007, coverUrl: "https://upload.wikimedia.org/wikipedia/ru/6/63/Minutes-to-midnight.jpg" },
        { id: 7, title: "A Thousand Suns", releaseYear: 2010, coverUrl: "https://linkinpedia.com/w/images/f/fd/Studio-A_Thousand_Suns_Cover_clean.jpg" },
        { id: 8, title: "From Zero", releaseYear: 2024, coverUrl: "https://upload.wikimedia.org/wikipedia/ru/4/4b/FromZeroArtwork.jpg" } // Заглушка для будущего альбома
    ],
    members: [ // Новое поле members
        { artistId: 111, name: "Chester Bennington", role: "Вокал", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrv66SEZJLI3n8vxh6TOovlYLdg6uHZhBAw&s" },
        { artistId: 112, name: "Mike Shinoda", role: "Рэп, Вокал, Клавишные", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/70/Mike_Shinoda_World_Expo_2008.jpg" },
        { artistId: 113, name: "Brad Delson", role: "Гитара", imageUrl: "https://m.media-amazon.com/images/M/MV5BNzQ4YjYyNGQtMTI2NC00MWUzLTljNTMtYmVhYjYwZDYzYzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        { artistId: 114, name: "Dave Farrell", role: "Бас-гитара", imageUrl: "https://cdn.mos.cms.futurecdn.net/C9auQvGCfvvFunNMso3Xuh.jpg" },
        { artistId: 115, name: "Joe Hahn", role: "DJ, Клавишные", imageUrl: "https://m.media-amazon.com/images/M/MV5BYTBiM2I3MGMtNzU4OS00Nzc0LTg2NzctOGFkNWIxNzc1YmRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        { artistId: 116, name: "Rob Bourdon", role: "Ударные", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6YC3AioCIVsBMMq0Qi40naKhXHDnS6jeTw&s" }
    ]
};

const BandPage = () => {
  return (
    <div>
      <BandInfo band={linkinParkData}/>
    </div>
  );
};

export default BandPage;