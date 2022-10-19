import React from "react";
import BannerMindBlown from "../components/Celular/MindBlown/BannerMindBlown";
import BotonContactanos from "../components/BotonContactanos";
import MindBlownEscritorio from "../components/Escritorio/MindBlown/MindBlownEscritorio";
import TrabajosMindBlown from "../components/TrabajosMindBlown";
import Clientes from "../components/Clientes";

export default function MindBlown() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo">
                <BannerMindBlown />
                <TrabajosMindBlown />
                <Clientes />
                <BotonContactanos />
            </div>
        </div>
    );
}
