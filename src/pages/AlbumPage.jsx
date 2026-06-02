import { Container, Row, Col, Image, ListGroup, Breadcrumb, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header'; // Используем тот же хедер

function AlbumPage() {
    const { albumId } = useParams();
    // TODO: Загрузка информации об альбоме по albumId

    // Пример данных альбома (заглушка)
    const albumData = {
        id: 4, // ID соответствует "Hybrid Theory"
        title: "Hybrid Theory",
        releaseYear: 2000,
        coverUrl: "https://upload.wikimedia.org/wikipedia/ru/e/e8/Linkin_Park_%E2%80%94_Hybrid_Theory.jpg",
        bandId: 11, // ID группы Linkin Park
        bandName: "Linkin Park",
        songs: [
            { id: 401, title: "Papercut", duration: "3:05" },
            { id: 402, title: "One Step Closer", duration: "2:37" },
            { id: 403, title: "With You", duration: "3:23" },
            { id: 404, title: "Points of Authority", duration: "3:20" },
            { id: 405, title: "Crawling", duration: "3:29" },
            { id: 406, title: "Runaway", duration: "3:44" },
            { id: 407, title: "By Myself", duration: "3:10" },
            { id: 408, title: "In the End", duration: "3:36" },
            { id: 409, title: "A Place for My Head", duration: "3:04" },
            { id: 410, title: "Forgotten", duration: "3:14" },
            { id: 411, title: "Eldorado", duration: "3:12" }, // Примечание: правильное название - "From the Inside"
            { id: 412, title: "Pushing Me Away", duration: "3:11" } // Примечание: правильное название - "My December" (инструментал)
            // Важно: На реальных альбомах трек-листы могут иметь особенности (например, бонус-треки, разные издания).
            // Для примера используем стандартные треки.
            // Имена треков "Eldorado" и "Pushing Me Away" в данном примере являются условными,
            // так как они не соответствуют реальному треклисту Hybrid Theory.
            // Правильные треки: "Forgotten" и "Little Things" (или "My December" как бонус).
        ]
    };

    return (
        <div>
            <Container className="my-5">
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Главная</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/bands/1' }}>Linkin Park</Breadcrumb.Item> {/* TODO: Динамически */}
                    <Breadcrumb.Item active>{albumData.title}</Breadcrumb.Item>
                </Breadcrumb>

                <Row className="align-items-center mb-4">
                    <Col md={4} className="text-center mb-3 mb-md-0">
                        <Image src={albumData.coverUrl} alt={albumData.title} fluid rounded thumbnail width={300} />
                    </Col>
                    <Col md={8}>
                        <h1>{albumData.title}</h1>
                        <p className="lead text-muted">Выпущен: {albumData.releaseYear}</p>
                        {/* TODO: Добавить информацию об авторах, если нужно */}
                    </Col>
                </Row>

                <Card className="shadow-sm">
                    <Card.Body>
                        <Card.Title>Треклист</Card.Title>
                        <ListGroup variant="flush">
                            {albumData.songs.map((song, index) => (
                                <ListGroup.Item key={song.id} className="d-flex justify-content-between align-items-center">
                                    <span>{index + 1}. {song.title}</span>
                                    <span>{song.duration}</span> {/* Длительность песни */}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default AlbumPage;
