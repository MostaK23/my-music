import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ArtistCard from '../components/ArtistCard'; // Импортируем компонент карточки
import { FaUserGraduate, FaGuitar, FaMicrophone } from 'react-icons/fa'; // Иконки для разнообразия

// Пример данных артистов (можно перенести в отдельный файл src/data/artists.js)
const sampleArtists = [
    {
        id: 111,
        name: "Chester Bennington",
        birthDate: "1976-03-20",
        birthPlace: "Финикс, Аризона, США",
        biographySummary: "Честер Чарльз Беннингтон был американским певцом, автором песен и актером. Наиболее известен как фронтмен и основной вокалист рок-группы Linkin Park...",
        imageUrl: "https://www.rollingstone.com/wp-content/uploads/2018/06/chester-bennington-linkin-park-obit-a53cd0a0-c57a-484e-b0f6-e52173634d93.jpg?w=910&h=511&crop=1",
        // Дополнительная информация для карточки
        roles: ['Вокалист', 'Автор песен'],
        influence: 'Влияние на ню-метал и альтернативный рок.'
    },
    {
        id: 1,
        name: "Freddie Mercury",
        birthDate: "1946-09-05",
        birthPlace: "Занзибар, Танганьика",
        biographySummary: "Фредди Меркьюри — британский певец, автор песен, пианист и бэк-вокалист группы Queen. Известен своим мощным голосом и харизматичным сценическим образом...",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Freddie_Mercury_%281975_Elektra_publicity_photo%29.jpg/250px-Freddie_Mercury_%281975_Elektra_publicity_photo%29.jpg",
        roles: ['Вокалист', 'Пианист'],
        influence: 'Считается одним из величайших фронтменов в истории рока.'
    },
    {
        id: 7,
        name: "Michael Jackson",
        birthDate: "1958-08-29",
        birthPlace: "Гэри, Индиана, США",
        biographySummary: "Майкл Джексон — американский певец, танцор, автор песен, продюсер и предприниматель. Один из самых успешных и влиятельных исполнителей в истории музыки...",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTM1NjExNjg1OV5BMl5BanBnXkFtZTcwMTQ0NzIwMw@@._V1_FMjpg_UX1000_.jpg",
        roles: ['Певец', 'Танцор', 'Автор песен'],
        influence: 'Король поп-музыки, революционер в музыкальных видео и танце.'
    },
    {
        id: 1111, // Пример нового артиста
        name: "Jimi Hendrix",
        birthDate: "1942-11-27",
        birthPlace: "Сиэтл, Вашингтон, США",
        biographySummary: "Джими Хендрикс — американский гитарист, певец и автор песен. Широко признан одним из самых влиятельных гитаристов в истории рок-музыки...",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jimi_Hendrix_in_1968.jpg/1280px-Jimi_Hendrix_in_1968.jpg",
        roles: ['Гитарист', 'Вокалист', 'Автор песен'],
        influence: 'Инноватор в игре на электрогитаре, пионер психоделического рока.'
    },
    // Добавьте больше артистов по аналогии
];

function ArtistListPage() {
    const [artists, setArtists] = useState(sampleArtists);

    return (
        <div>
            <Container className="mb-5">
                <h2 className="my-4 text-center">Знакомьтесь с легендами</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {artists.map(artist => (
                        <Col key={artist.id}>
                            <ArtistCard artist={artist} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ArtistListPage;