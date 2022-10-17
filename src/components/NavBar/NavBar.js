import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CarritoWidget } from '../CartWidget/CartWidget';
import { NavBrand } from '../NavBrand/NavBrand';
import { Link } from 'react-router-dom';

export const BarraNav = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <NavBrand/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to ="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to ="/cuidados">Cuidados</Nav.Link>
              <Nav.Link as={Link} to ="/productos">Productos</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Item><CarritoWidget/></Nav.Item> 
        </Container>
      </Navbar>
    );
}