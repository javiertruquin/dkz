import React from "react";
import PaginaNoExisteEscritorio from "../components/Escritorio/PaginaNoExiste/PaginaNoExisteEscritorio";
import PaginaError from "../components/Celular/NotFound/PaginaError";

export default function PaginaNoExiste() {
    return (
        <div >
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <PaginaError />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <PaginaNoExisteEscritorio />
            </div>
        </div>
    );
}
