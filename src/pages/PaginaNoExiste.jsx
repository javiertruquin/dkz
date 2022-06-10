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
                <PaginaError />
            </div>
            <div className="color-azul-oscuro-fondo">
                <PaginaNoExisteEscritorio />
            </div>
        </div>
    );
}
