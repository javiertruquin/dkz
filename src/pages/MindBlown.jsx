import React from "react";
import BotonContactanos from "../components/BotonContactanos";
import TrabajosMindBlown from "../components/TrabajosMindBlown";
import Clientes from "../components/Clientes";
import BannerMindBlown from "../components/BannerMindBlown";

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
