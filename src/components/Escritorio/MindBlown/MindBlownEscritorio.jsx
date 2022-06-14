import React from "react";
import BotonContactanos from "../../BotonContactanos";
import Clientes from "../../Clientes";
import TrabajosMindBlown from "../../TrabajosMindBlown";
import BannerMB from "./BannerMB";

export default function MindBlownEscritorio() {
    return (
        <div
            className="d-flex flex-column color-azul-oscuro-fondo"
            style={{ minHeight: "100vh" }}
        >
            <BannerMB />
            <TrabajosMindBlown />
            <Clientes />
            <BotonContactanos />
        </div>
    );
}
