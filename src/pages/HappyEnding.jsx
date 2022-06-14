import React from "react";
import EventosEscritorio from "../components/Escritorio/Eventos/EventosEscritorio";
import BotonContactanos from "../components/BotonContactanos";
import HappyEndingCards from "../components/Celular/HappyEnding/HappyEndingCards";
import HappyEndingCardsEscritorio from "../components/Escritorio/HappyEnding/HappyEndingCardsEscritorio";

export default function HappyEnding() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <HappyEndingCards />
                <BotonContactanos />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <HappyEndingCardsEscritorio />
                <BotonContactanos />
            </div>
        </div>
    );
}
