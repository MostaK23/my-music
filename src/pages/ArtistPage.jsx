import {
    Container, Row, Col, Card, ListGroup, Image, Badge, Breadcrumb
} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Map from "../components/Map/Map";
import 'leaflet/dist/leaflet.css';
import { FaInstagram, FaTwitter } from 'react-icons/fa'; // Для иконок соцсетей

// Предполагаемый объект artistData
// import artistData from '../data/artistData'; // Укажите ваш путь к данным
// Для примера, данные прямо здесь:
const artistData = {
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrv66SEZJLI3n8vxh6TOovlYLdg6uHZhBAw&s"
    }
};

function ArtistPage() {
    const { artistId } = useParams();
    const artist = artistData[artistId];
    const phoenixCoords = [33.4484, -112.0740]; // Пример координат

    // Иконки для соцсетей (нужно установить react-icons: npm install react-icons)
    const socialIconMap = {
        Instagram: FaInstagram,
        Twitter: FaTwitter,
        // Добавьте другие платформы
    };

    if (!artist) {
        return (
            <Container className="text-center my-5">
                <p>Информация об артисте не найдена.</p>
            </Container>
        );
    }

    return (
        <Container className="artist-page my-5">
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Главная</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/artists' }}>Артисты</Breadcrumb.Item>
                <Breadcrumb.Item active>{artist.name}</Breadcrumb.Item>
            </Breadcrumb>

            <Row>
                {/* Левая колонка: Фото, Основная инфо, Карта */}
                <Col md={4}>
                    <Card className="shadow-sm artist-profile-card">
                        <Image src={artist.imageUrl} fluid rounded />
                        <Card.Body>
                            <h3>{artist.name}</h3>
                            <p className="text-muted"><strong>Дата рождения:</strong> {artist.birthDate}</p>
                            <p className="text-muted"><strong>Место рождения:</strong> {artist.birthPlace}</p>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3 shadow-sm map-card">
                        <Card.Body>
                            <Card.Title>Место рождения на карте</Card.Title>
                            <div className="map-wrapper" style={{ height: "300px", width: "100%" }}>
                              <Map place={phoenixCoords}/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Правая колонка: Биография, Группы, Дискография, Этапы жизни, Факты, Соцсети, Влияние */}
                <Col md={8}>
                    <h2>Биография</h2>
                    <p className="text-muted">{artist.biographySummary}</p>

                    <h3 className="mt-4">Участие в группах</h3>
                    <ListGroup variant="flush" className="mb-4">
                        {artist.bands.map((band, idx) => (
                            <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Link to={`/bands/${band.bandId || 'unknown'}`} className="text-decoration-none text-primary"> {/* TODO: band.bandId */}
                                        <strong>{band.bandName}</strong>
                                    </Link>
                                    <Badge bg="info">{band.role}</Badge>
                                </div>
                                <span className="text-muted">{band.joined} — {band.left || 'н.в.'}</span>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <h3 className="mt-4">Этапы жизни</h3>
                    <ListGroup variant="flush" className="mb-4">
                        {artist.lifeStages.map((stage, idx) => (
                            <ListGroup.Item key={idx}>
                                <strong>{stage.year}:</strong> {stage.event}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <h3 className="mt-4">Дискография</h3>
                    <ListGroup variant="flush" className="mb-4">
                        {artist.discography.map((item, idx) => {
                            return (
                                <ListGroup.Item key={idx} className="d-flex justify-content-between">
                                    <div>
                                        <Link to={`/albums/${item.albumId}`} className="text-decoration-none text-primary">
                                            <strong>{item.albumTitle}</strong>
                                        </Link>
                                        <span className="text-muted"> ({item.band})</span>
                                    </div>
                                    <span className="text-muted">{item.role}</span>
                                </ListGroup.Item>
                            );
                        })}
                    </ListGroup>

                    <h3 className="mt-4">Влияние</h3>
                    <p className="text-muted">
                        {artist.influences.map((influence, idx) => {
                            let text = '';
                            if (influence.type === 'influenced') {
                                text = `Повлиял на ${influence.name}`;
                            } else if (influence.type === 'influenced_by') {
                                text = `Испытал влияние от ${influence.name}`;
                            }
                            return (
                                <span key={idx}>
                                    {text}
                                    {idx < artist.influences.length - 1 && ', '}
                                </span>
                            );
                        })}
                    </p>

                    <h3 className="mt-4">Интересные факты</h3>
                    <ul className="text-muted">
                        {artist.interestingFacts.map((fact, idx) => (
                            <li key={idx}>{fact}</li>
                        ))}
                    </ul>

                    <h3 className="mt-4">Социальные сети</h3>
                    <div className="social-links d-flex gap-3">
                        {artist.socialLinks.map((link, idx) => {
                            const Icon = socialIconMap[link.platform];
                            return (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link-icon">
                                    {Icon ? <Icon size={24} /> : link.platform}
                                </a>
                            );
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ArtistPage;
