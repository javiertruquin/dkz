import React from "react";
import BannerConocenos from "../components/BannerConocenos";
import BotonContactanos from "../components/BotonContactanos";
import Fotos from "../components/Fotos";

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
