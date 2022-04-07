import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Katalog App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as="div">
            <Link to="/">Anasayfa</Link>
          </Nav.Link>
          <Nav.Link as="div">
            <Link to="/category">Ürünler</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Menu;
