// src/pages/AlbumListPage.js
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AlbumListPage = () => {
    // Здесь будет массив альбомов из базы данных
    const allAlbums = [
        { id: 1, title: "A Night at the Opera", band: "Queen", cover: "..." },
        { id: 4, title: "Hybrid Theory", band: "Linkin Park", cover: "..." }
    ];

    return (
        <Container>
            <h2>Все альбомы</h2>
            <Row xs={1} md={3} lg={4} className="g-4">
                {allAlbums.map(album => (
                    <Col key={album.id}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{album.title}</Card.Title>
                                <Card.Text>{album.band}</Card.Text>
                                <Link to={`/albums/${album.id}`} className="btn btn-primary">Слушать</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AlbumListPage;