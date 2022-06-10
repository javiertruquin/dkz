import React from "react";
import Banner from "../components/Celular/Nosotros/Banner";
import ConocenosEscritorio from "../components/Escritorio/Conocenos/ConocenosEscritorio";

export default function Conocenos() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo  d-sm-none d-block">
                <Banner />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <ConocenosEscritorio />
            </div>
        </div>
    );
}
