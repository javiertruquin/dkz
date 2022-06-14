import React from "react";
import EventosEscritorio from "../components/Escritorio/Eventos/EventosEscritorio";
import TrabajosEventos from "../components/TrabajosEventos";
import BannerEventos from "../components/Celular/Eventos/BannerEventos";
import BotonContactanos from "../components/BotonContactanos";

export default function Eventos() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerEventos />
                <TrabajosEventos />
                <BotonContactanos />

            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <EventosEscritorio />
            </div>
        </div>
    );
}
