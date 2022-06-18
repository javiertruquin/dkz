import React from "react";
import BotonContactanos from "../components/BotonContactanos";
import Banner from "../components/Celular/Nosotros/Banner";
import ConocenosEscritorio from "../components/Escritorio/Conocenos/ConocenosEscritorio";
import Fotos from "../components/Escritorio/Conocenos/Fotos";

export default function Conocenos() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo  d-sm-none d-block">
          <Banner />
          <Fotos />
                <BotonContactanos />

            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <ConocenosEscritorio />
            </div>
        </div>
    );
}
