import React from "react";
import NavbarReact from "../components/NavbarReact";
import SitioConstruccion from "../components/SitioConstruccion";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";

export default function Eventos() {
    return (
        <div className="color-azul-oscuro-fondo">
            <NavbarReact />
            <SitioConstruccion />
            <Iconos />
            <Footer />
        </div>
    );
}