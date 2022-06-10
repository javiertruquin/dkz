import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import ServiciosEscritorio from "../components/Escritorio/Servicio/ServiciosEscritorio";

export default function Conocenos() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <ServiciosEscritorio />
            </div>
        </div>
    );
}
