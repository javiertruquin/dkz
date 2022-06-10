import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import ConsultoriaEscritorio from "../components/Escritorio/Consultoria/ConsultoriaEscritorio";

export default function Consultoria() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <ConsultoriaEscritorio />
            </div>
        </div>
    );
}
