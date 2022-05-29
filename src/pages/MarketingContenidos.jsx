import React from "react";
import NavbarReact from "../components/NavbarReact";

import Iconos from "../components/Iconos";
import Footer from "../components/Footer";
import SitioConstruccion from "../components/SitioConstruccion";
import MarketingContenidosEscritorio from "../components/Escritorio/MarketingContenido/MarketingContenidosEscritorio";

export default function MarketingContenidos() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <NavbarReact />
                <SitioConstruccion />
                <Iconos />
                <hr className="bg-white" />
                <Footer />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <MarketingContenidosEscritorio />
            </div>
        </div>
    );
}
