import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Katalog App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as="div">
            <Link to="/">Anasayfa</Link>
          </Nav.Link>
          <Nav.Link as="div">
            <Link to="/categories/all">Ürünler</Link>
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link as="div">
            <Link to="/categories/favorite">🤍 Favorites</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
    <hr />
  </>
);

export default Menu;
