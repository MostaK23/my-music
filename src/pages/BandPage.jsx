import { Link } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';
import BandInfo from '../components/BandInfo'; // Импортируем обновленный BandInfo
import linkinParkData from "../data/linkinParkData";

function BandPage() {
    const band = linkinParkData;

    return (
        <div>
            <Container className="band-page-container my-5"> {/* Добавлен класс для стилизации */}
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Главная</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/artists' }}>Артисты</Breadcrumb.Item> {/* Или "/bands" */}
                    <Breadcrumb.Item active>{band.name}</Breadcrumb.Item>
                </Breadcrumb>

                <BandInfo band={band} /> {/* BandInfo теперь содержит всю информацию, включая галерею */}

            </Container>
        </div>
    );
}

export default BandPage;