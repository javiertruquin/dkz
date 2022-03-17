import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavbarReact() {
    return (
        <>
            <Navbar expand="lg" fixed="top" variant="dark"
>
                <Container>
                    <Navbar.Brand href="#home"><div><img src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/logo-dkz_1_sntx9w.png" alt="DKZ-Logo" /></div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Conocenos</Nav.Link>
                            <Nav.Link href="#link">Servicios</Nav.Link>
                            <Nav.Link href="#link">Prensa</Nav.Link>
                            <Nav.Link href="#link">Mind Blown</Nav.Link>
                            <Nav.Link href="#link">Contactanos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
