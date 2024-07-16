import icon from '../../Images/icon.png';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbarr() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className={`${styles.navbar} bg-none`}>
          <Container fluid>
            <Navbar.Brand href="#">

            <Link to={'/'} className={`d-flex me-md-5 text-light ${styles.linkStyling}`}>
            <img src={icon} /> <h1> World Tour</h1>
            </Link>
              
            </Navbar.Brand>
            <Navbar.Toggle  className='bg-light' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className={`${styles.offcanvas_width} te`}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end  flex-grow-1 pe-5">
                  <Nav.Link className={styles.nav_link}>
                    <Link to={'/products'} className={` me-md-5 ${styles.linkStyling} border-md-bottom`}>
                      Products
                    </Link>
                  </Nav.Link>

                  <Nav.Link  className={styles.nav_link}>
                    <Link to={'/pricing'} className={`me-md-5 ${styles.linkStyling}`}>
                      Pricing
                    </Link>
                  </Nav.Link>


                  <Nav.Link href="#action2">
                  <Link to={'/login'} className={`me-md-5 ${styles.loginBtn}`}>
                      Login
                    </Link>
                  </Nav.Link>
                </Nav>
               
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarr;

//   <ul className={`navbar-nav w-100 justify-content-end px-3 ${styles.navAlignment}`}>


