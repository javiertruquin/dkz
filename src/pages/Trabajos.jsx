import React from "react";
import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import BannerT from "../components/Trabajos/BannerT";
import CTrabajos from "../components/Trabajos/CTrabajos";
import Clientes from "../components/Trabajos/Clientes";
import NavbarReact from "../components/NavbarReact";

export default function Trabajos() {

    return (
        <div className="color-azul-oscuro-fondo">
            <NavbarReact />
            <BannerT />
            <CTrabajos />
            <CTrabajos />
            <CTrabajos />
            <Clientes />
            <Iconos />
            <Footer />
        </div>
    );
}