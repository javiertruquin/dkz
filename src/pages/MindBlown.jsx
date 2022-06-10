import React from "react";
import BannerT from "../components/Celular/MindBlown/BannerT";
import Trabajos from "../components/Celular/MindBlown/Trabajos";
import Clientes from "../components/Celular/MindBlown/Clientes";
import BotonContactanos from "../components/BotonContactanos";
import MindBlownEscritorio from "../components/Escritorio/MindBlown/MindBlownEscritorio";

export default function MindBlown() {
    return (
        <div >
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerT />
                <Trabajos />
                <Clientes />
                <div className="pt-5">
                    <BotonContactanos />
                </div>
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <MindBlownEscritorio />
            </div>
        </div>
    );
}
