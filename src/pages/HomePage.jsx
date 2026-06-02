import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    // В реальном проекте эти данные придут через API
    const artistOfTheMonth = {
        id: 11,
        name: "Linkin Park",
        description: "Легенды ню-метала, которые переосмыслили звучание целого поколения. Узнайте историю их пути от Xero до наших дней.",
        imageUrl: "https://images2.alphacoders.com/542/thumb-1920-542031.jpg"
    };

    const latestReleases = [
        { id: 8, title: "From Zero", artist: "Linkin Park", cover: "https://placehold.co/150", year: 2024 },
        { id: 2, title: "Queen Greatest Hits", artist: "Queen", cover: "https://placehold.co/150", year: 1981 },
        { id: 9, title: "New Horizons", artist: "Artist Name", cover: "https://placehold.co/150", year: 2024 }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section text-white py-5 mb-5 text-center">
                <Container>
                    <h1 className="display-3 fw-bold">Музыкальная Энциклопедия</h1>
                    <p className="lead mb-4">Биография, дискография и истории, стоящие за каждой нотой.</p>
                    <Button variant="light" size="lg" as={Link} to="/artists">Начать исследование</Button>
                </Container>
            </div>

            <Container className="mb-5">
                {/* Artist of the Month */}
                <Row className="mb-5 align-items-center">
                    <Col lg={6}>
                        <img src={artistOfTheMonth.imageUrl} alt={artistOfTheMonth.name} className="img-fluid rounded shadow" />
                    </Col>
                    <Col lg={6} className="mt-4 mt-lg-0">
                        <Badge bg="warning" className="mb-2">Артист месяца</Badge>
                        <h2>{artistOfTheMonth.name}</h2>
                        <p className="text-muted">{artistOfTheMonth.description}</p>
                        <Button variant="primary" as={Link} to={`/bands/${artistOfTheMonth.id}`}>Подробнее</Button>
                    </Col>
                </Row>

                {/* Latest Releases */}
                <h3 className="mb-4">Последние релизы</h3>
                <Row className="g-4">
                    {latestReleases.map(album => (
                        <Col key={album.id} md={4}>
                            <Card className="h-100 shadow-sm album-card">
                                <Card.Img variant="top" src={album.cover} />
                                <Card.Body>
                                    <Card.Title>{album.title}</Card.Title>
                                    <Card.Text className="text-muted">{album.artist} • {album.year}</Card.Text>
                                    <Link to={`/albums/${album.id}`} className="btn btn-outline-primary btn-sm">Слушать</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Newsletter or Call to Action */}
            <div className="bg-light py-5 text-center">
                <Container>
                    <h3>Хотите знать больше о музыке?</h3>
                    <p>Подпишитесь на обновления, чтобы узнавать об интересных фактах из жизни артистов первыми!</p>
                    <Button variant="secondary">Подписаться</Button>
                </Container>
            </div>
        </div>
    );
}

export default HomePage;