import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarComp = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Joshua Mendez
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Live
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Source Code Only
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Currently Working On
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/skills"}>
                Skill
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={"/contact-me"}>
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComp;
