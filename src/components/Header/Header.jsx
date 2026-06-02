import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Используем Link для навигации

const Header = ({ title }) => {
  return (
    <>
      <title>{title}</title>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">{title}</Navbar.Brand> {/* Ссылка на главную */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Ссылка на список артистов/групп */}
              <Nav.Link as={Link} to="/artists">
                Артисты
              </Nav.Link>
              <Nav.Link as={Link} to="/bands">
                Группы
              </Nav.Link>
              <Nav.Link as={Link} to="/albums">
                Альбомы
              </Nav.Link>
              {/* Можно добавить ссылку на главную, если она не совпадает с title */}
              {/* <Nav.Link as={Link} to="/">Главная</Nav.Link> */}
            </Nav>
            {/* Сюда можно добавить элементы, которые должны быть справа, например, поиск */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;