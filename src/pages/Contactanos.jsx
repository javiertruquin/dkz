import React from "react";
import NavbarReact from "../components/NavbarReact";
import FormContactanos from "../components/Contactanos/FormContactanos";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";

export default function Conocenos() {
    return (
        <div className="color-azul-oscuro-fondo">
            <NavbarReact />
            <FormContactanos />
            <Iconos />
            <Footer />
        </div>
    );
}