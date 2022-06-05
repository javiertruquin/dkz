import { useState } from "react";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavEscritorio() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const showDropdownlanguage = (e) => {
    setShow2(!show2);
  };

  const hideDropdownlanguage = (e) => {
    setShow2(false);
  };

  return (
    <>
      <Navbar
        className="position-absolute container d-flex justify-content-between pt-4 mt-3"
        fixed="top"
        expand="lg"
        variant="dark"
      >
        <div>
          <Navbar.Brand href="/">
            <img
              className=""
              src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653772372/Home/logo-dkz-escritorio_phiruf.png"
              alt="DKZ-Logo"
              fluid="true"
            />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle className="" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <div className="navbar-fixed my-2">
              <Nav className="my-2 mx-xxl-5 mx-4">
                <Nav.Link
                  className="text-white mx-xxl-3 mx-2"
                  as={Link}
                  to="/conocenos"
                >
                  Somos DKZ
                </Nav.Link>
                {/* <Nav.Link
                                    className="text-white mx-xxl-3 mx-2"
                                    as={Link}
                                    to="/servicios"
                                >
                                    Servicios
                                </Nav.Link> */}
                <NavDropdown
                  className="mx-3 text-white tamaño-letra-opciones sin-sub"
                  title="Servicios"
                  id="basic-nav-dropdown"
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <NavDropdown.Item as={Link} to="/servicios">
                    Servicios{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/servicios">
                    Servicio 1{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/servicios">
                    Servicio 2
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/servicios">
                    Servicio 3
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/servicios">
                    Servicio 4
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/servicios">
                    Servicio 5
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  className="text-white mx-xxl-3 mx-2"
                  as={Link}
                  to="/prensa"
                >
                  Prensa
                </Nav.Link>
                <Nav.Link
                  className="text-white mx-xxl-3 mx-2 text-nowrap"
                  as={Link}
                  to="/mindblown"
                >
                  Mind Blown
                </Nav.Link>
                <Nav.Link
                  className="text-white mx-xxl-3 mx-2"
                  as={Link}
                  to="/contactanos"
                >
                  Contactanos
                </Nav.Link>
                {/* <div className="mx-3 text-white tamaño-letra-opciones">
                  <Form.Select
                    className="color-select-2 text-white border-0 text-center"
                    aria-label="Default select example "
                  >
                    <option className="color-select text-white" value="1">
                      Español
                    </option>
                    <option className="color-select text-white" value="2">
                      English
                    </option>
                    <option className="color-select text-white" value="3">
                      Portugues
                    </option>
                    <option className="color-select text-white" value="4">
                      Italiano
                    </option>
                  </Form.Select>
                </div> */}
                <NavDropdown
                  title="Español"
                  id="basic-nav-dropdown"
                  show={show2}
                  onMouseEnter={showDropdownlanguage}
                  onMouseLeave={hideDropdownlanguage}
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
