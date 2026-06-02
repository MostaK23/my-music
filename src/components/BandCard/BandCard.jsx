import { Card, Nav } from 'react-bootstrap';
import "./BandCard.css";
import { Link } from "react-router-dom";

const BandCard = ({ band }) => {
  const origin = window.location.origin;

  return (
    <Card className="h-100 shadow-sm band-card">
      {band.imageUrl && <Card.Img variant="top" src={band.imageUrl} className="band-card-image"/>}
      <Card.Body>
        <Card.Title className="text-primary">{band.name}</Card.Title>
        <Card.Text>
          {band.summary.substring(0, 150)}...
        </Card.Text>
        <Card.Link>
          <Nav.Link as={Link} to={`/bands/${band.id}`}>
            Подробнее
          </Nav.Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BandCard;