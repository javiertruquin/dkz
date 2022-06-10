import React from "react";
import SitioConstruccion from "../components/SitioConstruccion";
import EventosEscritorio from "../components/Escritorio/Eventos/EventosEscritorio";
import TrabajosEventos from "../components/TrabajosEventos";
import BannerEventos from "../components/Celular/Eventos/BannerEventos";

export default function Eventos() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerEventos />
                <TrabajosEventos />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <EventosEscritorio />
            </div>
        </div>
    );
}
