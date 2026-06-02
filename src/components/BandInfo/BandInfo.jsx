import { Container, Row, Col, Image, ListGroup, Card, Button, Figure, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BandInfo({ band }) {
    return (
        <Container className="band-info-page my-5">
            <Row className="mb-4 align-items-center">
                <Col md={8}>
                    <h1>{band.name}</h1>
                    <p className="lead text-muted">
                        {band.formedYear ? `Основана: ${band.formedYear}` : ''}
                        {band.endedYear && band.formedYear !== band.endedYear ? ` - Расформирована: ${band.endedYear}` : ''}
                    </p>
                </Col>
            </Row>

            <Row>
                {/* Левая колонка: картинка, описание, основные этапы */}
                <Col lg={4} className="mb-4 mb-lg-0">
                    <Card className="shadow-sm">
                        <Card.Img variant="top" src={band.imageUrl || 'https://via.placeholder.com/400x300?text=Band+Image'} alt={band.name} />
                        <Card.Body>
                            <Card.Title>Описание</Card.Title>
                            <Card.Text>{band.description || 'Описание группы отсутствует.'}</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Основные этапы</Card.Title>
                            <ListGroup variant="flush">
                                {band.milestones && band.milestones.length > 0 ? (
                                    band.milestones.map((milestone, index) => (
                                        <ListGroup.Item key={index}>
                                            <strong>{milestone.year}:</strong> {milestone.event}
                                        </ListGroup.Item>
                                    ))
                                ) : (
                                    <ListGroup.Item>Основные этапы отсутствуют.</ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Правая колонка: участники, песни, альбомы */}
                <Col lg={8}>
                    {/* Участники группы */}
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title className="mb-3">Участники</Card.Title>
                            <Row xs={1} sm={2} md={3} lg={4} className="g-3">
                                {band.members && band.members.length > 0 ? (
                                    band.members.map(member => (
                                        <Col key={member.artistId} className="text-center">
                                            <Link to={`/artists/${member.artistId}`}>
                                                <Figure className="mb-0">
                                                    <Figure.Image
                                                        style={{ width: "100px", height: "100px" }}
                                                        // width={100}
                                                        // height={100}
                                                        alt={member.name}
                                                        src={member.imageUrl || 'https://placehold.co/100x100?text=Member'}
                                                        roundedCircle
                                                    />
                                                    <Figure.Caption>
                                                        <strong>{member.name}</strong>
                                                        <div className="text-muted small">{member.role}</div>
                                                    </Figure.Caption>
                                                </Figure>
                                            </Link>
                                        </Col>
                                    ))
                                ) : (
                                    <Col>
                                        <p>Информация об участниках отсутствует.</p>
                                    </Col>
                                )}
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Популярные песни */}
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title  className="mb-3">Популярные песни</Card.Title>
                            <ListGroup variant="flush">
                                {band.popularSongs && band.popularSongs.length > 0 ? (
                                    band.popularSongs.map(song => (
                                        <ListGroup.Item key={song.id} className="d-flex justify-content-between align-items-center">
                                            <span>{song.title}</span>
                                            <Button
                                                variant="warning"
                                                size="sm"
                                                className="play-button"
                                                aria-label={`Play ${song.title}`}
                                                disabled
                                            >
                                                ▶
                                            </Button>
                                        </ListGroup.Item>
                                    ))
                                ) : (
                                    <ListGroup.Item>Популярные песни отсутствуют.</ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Популярные альбомы */}
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title className="mb-3">Популярные альбомы</Card.Title>
                            <Row xs={1} md={2} lg={3} className="g-3">
                                {band.popularAlbums && band.popularAlbums.length > 0 ? (
                                    band.popularAlbums.map(album => (
                                        <Col key={album.id}>
                                            <div className="album-thumbnail">
                                                <Link to={`/albums/${album.id}`}>
                                                    <Image
                                                        src={album.coverUrl || 'https://via.placeholder.com/150x150?text=Album+Cover'}
                                                        alt={album.title}
                                                        thumbnail
                                                        className="album-cover-img"
                                                    />
                                                </Link>
                                                <div className="album-title mt-2 text-center">
                                                    <Link to={`/albums/${album.id}`} className="text-decoration-none text-reset">
                                                        {album.title}
                                                    </Link>
                                                    <div className="text-muted">{album.releaseYear}</div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                ) : (
                                    <Col>
                                        <p>Популярные альбомы отсутствуют.</p>
                                    </Col>
                                )}
                            </Row>
                        </Card.Body>
                    </Card>

                     {/* --- Секция Галереи --- */}
                    {band.gallery && band.gallery.length > 0 && (
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title>Галерея</Card.Title>
                                <Carousel controls={true} indicators={false} interval={null}>
                                    {band.gallery.map((imageUrl, index) => (
                                        <Carousel.Item key={index}>
                                            <Figure className="w-100 h-100">
                                                <Figure.Image
                                                    className="d-block carousel-image"
                                                    src={imageUrl}
                                                    alt={`Gallery image ${index + 1}`}
                                                    rounded
                                                />
                                            </Figure>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Card.Body>
                        </Card>
                    )}
                    {/* --- Конец секции Галереи --- */}
                    {band.videos && band.videos.length > 0 && (
                    <Card className="shadow-sm mt-4">
                        <Card.Body>
                            <Card.Title className="mb-4">Видео</Card.Title>
                            <Row xs={1} md={2} className="g-4">
                                {band.videos.map((video) => (
                                    <Col key={video.id}>
                                        <Card className="h-100 video-card">
                                            <div className="video-thumbnail-wrapper">
                                                <Card.Img variant="top" src={video.thumbnail} />
                                                {/* Кнопка Play поверх картинки */}
                                                <a 
                                                    href={`https://www.youtube.com/watch?v=${video.id}`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="play-icon-overlay"
                                                >
                                                    <div className="play-button-icon">▶</div>
                                                </a>
                                            </div>
                                            <Card.Body>
                                                <Card.Title className="h6">{video.title}</Card.Title>
                                                <Button 
                                                    variant="outline-danger" 
                                                    href={`https://www.youtube.com/watch?v=${video.id}`} 
                                                    target="_blank"
                                                    size="sm"
                                                >
                                                    Смотреть на YouTube
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                )}
                </Col>
            </Row>
        </Container>
    );
}

export default BandInfo;