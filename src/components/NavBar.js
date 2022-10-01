import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CarritoWidget } from './CartWidget/CartWidget';
import { NavBrand } from './NavBrand/NavBrand';

export const BarraNav = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <NavBrand/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#cuidados">Cuidados</Nav.Link>
              <Nav.Link href="#productos">Productos</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Item><CarritoWidget/></Nav.Item> 
        </Container>
      </Navbar>
    );
}