import React from "react";
import PaginaNoExisteEscritorio from "../components/Escritorio/PaginaNoExiste/PaginaNoExisteEscritorio";
import PaginaError from "../components/Celular/NotFound/PaginaError";

export default function PaginaNoExiste() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <PaginaError />
            </div>
            <div className="color-azul-oscuro-fondo">
                <PaginaNoExisteEscritorio />
            </div>
        </div>
    );
}
