import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarReact() {
    return (
        <>
            <Navbar
                className="position-absolute "
                fixed="top"
                expand="lg"
                variant="dark"
            >
                <div className="container-fluid pe-0">
                    <div className="d-sm-none d-block">
                        <Navbar.Brand
                            href="/"
                            className="ms-2 mt-2 d-flex justify-content-between"
                        >
                            <img
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/logo-dkz_1_sntx9w.png"
                                alt="DKZ-Logo"
                                fluid="true"
                            />
                        </Navbar.Brand>
                    </div>
                    <div className="d-none d-sm-block">
                        <Navbar.Brand
                            href="/"
                            className="ms-2 mt-2 d-flex justify-content-between"
                        >
                            <img
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653772372/Home/logo-dkz-escritorio_phiruf.png"
                                alt="DKZ-Logo"
                                fluid="true"
                            />
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle
                        className="me-4 mt-2"
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse className="ms-auto" id="basic-navbar-nav">
                        <div className="navbar-celu my-2 pe-0">
                            <Nav className="my-3">
                                <Nav.Link
                                    className="tamaño-medio text-white"
                                    as={Link}
                                    to="/conocenos"
                                >
                                    Conocenos
                                </Nav.Link>
                                <Nav.Link
                                    className="tamaño-medio text-white"
                                    as={Link}
                                    to="/servicios"
                                >
                                    Servicios
                                </Nav.Link>
                                <Nav.Link
                                    className="tamaño-medio text-white"
                                    as={Link}
                                    to="/prensa"
                                >
                                    Prensa
                                </Nav.Link>
                                <Nav.Link
                                    className="tamaño-medio text-white"
                                    as={Link}
                                    to="/mindblown"
                                >
                                    Mind Blown
                                </Nav.Link>
                                <Nav.Link
                                    className="tamaño-medio text-white"
                                    as={Link}
                                    to="/contactanos"
                                >
                                    Contactanos
                                </Nav.Link>
                                <div className="mx-4 color-select text-white mb-2">
                                    <Form.Select
                                        className="color-select-2 text-white border-0 mt-2 text-center"
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
