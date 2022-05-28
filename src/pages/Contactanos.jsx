import React from "react";
import NavbarReact from "../components/NavbarReact";
import FormContactanos from "../components/Celular/Contactanos/FormContactanos";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import ContactanosEscritorio from "../components/Escritorio/Contactanos/ContactanosEscritorio";

export default function Contactanos() {
    return (
        <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <NavbarReact />
                <FormContactanos />
                <Iconos />
                <hr className="bg-white" />
                <Footer />
            </div>
            <div className="d-flex flex-column color-azul-oscuro-fondo d-none d-sm-block" style={{minHeight: '100vh'}}>
                <ContactanosEscritorio />
            </div>
        </div>
    );
}
