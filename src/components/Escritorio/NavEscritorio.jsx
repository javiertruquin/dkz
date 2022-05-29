import { Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavEscritorio() {
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
                    <Navbar.Toggle
                        className=""
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse className="" id="basic-navbar-nav">
                        <div className="navbar-fixed my-2">
                            <Nav className="my-2 mx-xxl-5 mx-4">
                                <Nav.Link
                                    className="text-white mx-xxl-3 mx-2"
                                    as={Link}
                                    to="/conocenos"
                                >
                                    Conocenos
                                </Nav.Link>
                                <Nav.Link
                                    className="text-white mx-xxl-3 mx-2"
                                    as={Link}
                                    to="/servicios"
                                >
                                    Servicios
                                </Nav.Link>
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
                                <div className="mx-3 text-white tamaño-letra-opciones">
                                    <Form.Select
                                        className="color-select-2 text-white border-0 text-center"
                                        aria-label="Default select example "
                                    >
                                        <option
                                            className="color-select text-white"
                                            value="1"
                                        >
                                            Español
                                        </option>
                                        <option
                                            className="color-select text-white"
                                            value="2"
                                        >
                                            English
                                        </option>
                                        <option
                                            className="color-select text-white"
                                            value="3"
                                        >
                                            Portugues
                                        </option>
                                        <option
                                            className="color-select text-white"
                                            value="4"
                                        >
                                            Italiano
                                        </option>
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
