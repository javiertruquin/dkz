import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import EventosEscritorio from "../components/Escritorio/Eventos/EventosEscritorio";
import TrabajosEventos from "../components/TrabajosEventos";

export default function Eventos() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <SitioConstruccion />
                <TrabajosEventos />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <EventosEscritorio />
            </div>
        </div>
    );
}
