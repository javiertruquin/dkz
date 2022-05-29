import React from "react";
import NavbarReact from "../components/NavbarReact";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import PaginaNoExisteEscritorio from "../components/Escritorio/PaginaNoExiste/PaginaNoExisteEscritorio";
import PaginaError from "../components/Celular/NotFound/PaginaError";
import FooterEscritorio from "../components/Escritorio/FooterEscritorio";
import NavEscritorio from "../components/Escritorio/NavEscritorio";

export default function PaginaNoExiste() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <NavbarReact />
                <PaginaError />
                <Iconos />
                <hr className="bg-white" />
                <Footer />
            </div>

            <div className="color-azul-oscuro-fondo">
                <div className="d-none d-lg-block">
                    <NavEscritorio />
                </div>
                <div className="d-lg-none d-block">
                    <NavbarReact />
                </div>
                <div
                    className="d-flex flex-column"
                    style={{ minHeight: "100vh" }}
                >
                    <PaginaNoExisteEscritorio />
                    <FooterEscritorio />
                </div>
            </div>
        </div>
    );
}
