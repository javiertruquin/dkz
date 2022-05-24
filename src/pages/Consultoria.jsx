import React from "react";
import NavbarReact from "../components/NavbarReact";
import SitioConstruccion from "../components/SitioConstruccion";
import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import ConsultoriaEscritorio from "../components/Escritorio/Consultoria/ConsultoriaEscritorio";


export default function Consultoria() {
    return (
        <div>
        <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
            <NavbarReact />
            <SitioConstruccion />
            <Iconos />
            <Footer />
            </div>
            <div className="d-none d-sm-block">
                <ConsultoriaEscritorio /> 
            </div>
            </div>
    );
}