// src/components/ArtistCard.js
import { useState } from "react";
import { Card, Row, Col, Badge, Figure } from 'react-bootstrap'; // Импортировали Badge и Figure
import { Link } from 'react-router-dom';

function ArtistCard({ artist }) {
    const [imageUrl, setImageUrl] = useState(artist.imageUrl); 

    const formatDate = (dateString) => {
        if (!dateString) return 'Неизвестно';
        try {
            return new Date(dateString).toLocaleDateString('ru-RU');
        } catch (e) {
            return 'Некорректная дата';
        }
    };

    const truncatedBiography = artist.biographySummary?.substring(0, 100) + '...';

    return (
        <Card className="h-100 shadow-sm artist-card">
            <Row className="g-0">
                <Col md={4} className="d-flex align-items-center justify-content-center p-2">
                    {/* Используем Figure для более красивого отображения круглого фото */}
                    <Figure className="mb-0">
                        <Figure.Image
                            src={imageUrl}
                            alt={artist.name}
                            className="artist-card-image"
                            roundedCircle
                            fluid
                            onError={() => setImageUrl(`https://placehold.co/150?text=${artist.name}`)}
                        />
                        <Figure.Caption className="text-center mt-1">
                            {artist.name}
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col md={8}>
                    <Card.Body className="d-flex flex-column justify-content-between"> {/* Убрали padding-bottom */}
                        <div> {/* Блок для названия, даты и доп. информации */}
                            <Card.Title className="mb-2">
                                <Link to={`/artists/${artist.id}`} className="text-decoration-none text-primary artist-card-name">
                                    {artist.name}
                                </Link>
                            </Card.Title>
                            <Card.Text className="text-muted mb-2 artist-card-birth-info">
                                <strong>Родился:</strong> {formatDate(artist.birthDate)}
                            </Card.Text>

                            {/* Отображение дополнительной информации */}
                            {artist.roles && artist.roles.length > 0 && (
                                <div className="mb-2">
                                    <strong>Роли:</strong>
                                    {artist.roles.map((role, index) => (
                                        <Badge key={index} pill bg="info" className="me-1">{role}</Badge>
                                    ))}
                                </div>
                            )}
                            {artist.influence && (
                                <Card.Text className="artist-card-influence text-muted small">
                                    <strong>Влияние:</strong> {artist.influence}
                                </Card.Text>
                            )}

                            <Card.Text className="artist-card-bio">
                                {truncatedBiography}
                            </Card.Text>
                        </div>
                        <Link to={`/artists/${artist.id}`} className="btn btn-primary btn-sm mt-3"> {/* mt-3 для отступа */}
                            Подробнее
                        </Link>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default ArtistCard;
