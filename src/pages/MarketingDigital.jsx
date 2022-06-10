import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import MarketingDigitalEscritorio from "../components/Escritorio/MarketingDigital/MarketingDigitalEscritorio";

export default function MarketingDigital() {
    return (
        <div >
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <MarketingDigitalEscritorio />
            </div>
        </div>
    );
}
