import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary header" >
      <Container>
        <Navbar.Brand href="#home" className='navbrand'><h3 style={{color :'rgba(178, 121, 216, 0.959) '}}>PORTFOLIO</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navlink" href="/">Home</Nav.Link>
            <Nav.Link href="/about" className="navlink">About</Nav.Link>
            <Nav.Link href="/projects" className="navlink">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;