import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import EventosEscritorio from "../components/Escritorio/Eventos/EventosEscritorio";

export default function Eventos() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <EventosEscritorio />
            </div>
        </div>
    );
}
