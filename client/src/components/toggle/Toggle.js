import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./toggle.css";


function OffcanvasExample() {
  
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar  key={expand} bg="dark" expand={expand} className="navbar">
          <Container fluid>
            <Navbar.Brand className="logo text-white ms-5 p-5" href="#">Restaurante Minerva</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}className="text-white" bg-dark>
                  Restaurante Minerva                  

                </Offcanvas.Title>
                <i class="bi bi-instagram"></i>

              </Offcanvas.Header>
              <Offcanvas.Body className='expansion' >
                <Nav className="justify-content-end flex-grow-1 pe-3" bg="dark">
                  <Nav.Link className="ms-5 text-white"  href="#action1">Inicio</Nav.Link>
                  <Nav.Link className="ms-5 text-white" href="#action2">Reservar</Nav.Link>
                  <Nav.Link className="ms-5 text-white" href="#action2">Nosotros</Nav.Link>
                  <Nav.Link className="ms-5 text-white" href="#action2">Contacto</Nav.Link>
                  
                </Nav>
          
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;