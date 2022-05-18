import React from "react";
import NavbarReact from "../components/NavbarReact";
import Banner from "../components/Nosotros/Banner";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import Contactanos from "../components/Contactanos";

export default function Conocenos() {
    return (
        <div className="color-azul-oscuro-fondo">
            <NavbarReact />
            <Banner />
            <div className="pt-5">
                <Contactanos />
            </div>
            <Iconos />
            <hr className="bg-white" />
            <Footer />
        </div>
    );
}
