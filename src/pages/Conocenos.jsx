import React from "react";
import BotonContactanos from "../components/BotonContactanos";
import BannerConocenos from "../components/Celular/Nosotros/BannerConocenos";
import ConocenosEscritorio from "../components/Escritorio/Conocenos/ConocenosEscritorio";
import Fotos from "../components/Escritorio/Conocenos/Fotos";

export default function Conocenos() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo">
                <BannerConocenos />
                <Fotos />
                <BotonContactanos />
            </div>

        </div>
    );
}
