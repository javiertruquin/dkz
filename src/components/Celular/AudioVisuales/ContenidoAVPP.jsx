import React from "react";
import { Fade } from "react-reveal";

export default function ContenidoAVPP() {
    return (
        <div className="color-azul-oscuro-fondo my-1 py-1">
            <Fade left>
                <div className="my-5">
                    <h1 className="text-white tamaño-grande peso-bold-italic mas-espaciado">
                        <span className="titulo-verde px-4">PREPRODUCCIÓN</span>
                    </h1>
                </div>
            </Fade>
            <Fade right>
                <div className="text-white texto-creatividad mx-5 py-3">
                    <p className="tamaño-medio peso-italic mb-0">
                        Devolución creativa y presentación preliminar.
                        Relevamiento de locaciones. Diseño de producción.
                    </p>
                </div>
            </Fade>
        </div>
    );
}
