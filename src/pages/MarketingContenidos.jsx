import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import MarketingContenidosEscritorio from "../components/Escritorio/MarketingContenido/MarketingContenidosEscritorio";

export default function MarketingContenidos() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <MarketingContenidosEscritorio />
            </div>
        </div>
    );
}
