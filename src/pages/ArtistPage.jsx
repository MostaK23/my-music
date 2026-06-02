import {
    Container, Row, Col, Card, ListGroup, Image, Badge, Breadcrumb
} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Map from "../components/Map/Map";
import 'leaflet/dist/leaflet.css';
import { FaInstagram, FaTwitter } from 'react-icons/fa'; // Для иконок соцсетей
import artistData from "../data/artistData";

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
                              <Map place={artist.birthPlaceCoords}/>
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
