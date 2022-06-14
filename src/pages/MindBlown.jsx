import React from "react";
import BannerT from "../components/Celular/MindBlown/BannerT";
import BotonContactanos from "../components/BotonContactanos";
import MindBlownEscritorio from "../components/Escritorio/MindBlown/MindBlownEscritorio";
import TrabajosMindBlown from "../components/TrabajosMindBlown";
import Clientes from "../components/Clientes";

export default function MindBlown() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerT />
                <TrabajosMindBlown />
                <Clientes />
                <BotonContactanos />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <MindBlownEscritorio />
            </div>
        </div>
    );
}
