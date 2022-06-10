import React from "react";
import ConsultoriaEscritorio from "../components/Escritorio/Consultoria/ConsultoriaEscritorio";
import BannerConsultoria from "../components/Celular/Consultoria/BannerConsultoria";

export default function Consultoria() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerConsultoria />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <ConsultoriaEscritorio />
            </div>
        </div>
    );
}
