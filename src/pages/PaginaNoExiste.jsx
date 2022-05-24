import React from "react";
import NavbarReact from "../components/NavbarReact";
import PaginaError from "../components/PaginaError";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";

export default function Conocenos() {
    return (
        <div className="color-azul-oscuro-fondo">
            <NavbarReact />
            <PaginaError />
            <Iconos />
            <Footer />
        </div>
    );
}