import { Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavEscritorio() {
  return (
    <>
      <Navbar
        className="position-absolute container d-flex"
        fixed="top"
        expand="lg"
        variant="dark"
      >
        <div className="container-fluid d-flex ">
          <div className="mx-5 mt-4 d-flex justify-content-start">
            <Navbar.Brand href="/">
              <div>
                <img
                  className="navbar-fixed-logo"
                  src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/logo-dkz_1_sntx9w.png"
                  alt="DKZ-Logo"
                  fluid="true"
                />
              </div>
            </Navbar.Brand>
          </div>

          <Navbar.Toggle className="me-5" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="ms-auto" id="basic-navbar-nav">
            <div className="navbar-fixed my-2 d-flex justify-content-around">
              <Nav className="">
                <Nav.Link className="mx-2 my-2" as={Link} to="/conocenos">
                  Conócenos
                </Nav.Link>
                <Nav.Link className="mx-2 my-2" as={Link} to="/servicios">
                  Servicios
                </Nav.Link>
                <Nav.Link className="mx-2 my-2" as={Link} to="/prensa">
                  Prensa
                </Nav.Link>
                <Nav.Link className="mx-2 my-2" as={Link} to="/mindblown">
                  Mind Blown
                </Nav.Link>
                <Nav.Link className="mx-2 my-2" as={Link} to="/contactanos">
                  Contactanos
                </Nav.Link>
              <div className="mx-2 color-select text-white ">
                <Form.Select className="color-select-2 text-white border-0" aria-label="Default select example ">
                  <option className="color-select text-white" value="1">Español</option>
                  <option className="color-select text-white" value="2">English</option>
                </Form.Select>
              </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
