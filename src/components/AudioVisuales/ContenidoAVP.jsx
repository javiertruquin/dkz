import React from "react";
import { Fade } from "react-reveal";

export default function ContenidoAVP() {
    return (
        <div className="color-azul-oscuro-fondo my-1 py-1">
            <Fade left>
                <div className="my-5">
                    <h1 className="text-white tamaño-grande peso-bold-italic mas-espaciado">
                        <span className="titulo-verde px-4">PRODUCCIÓN</span>
                    </h1>
                </div>
            </Fade>
            <Fade right>
                <div className="text-white texto-creatividad mx-5 py-3">
                    <p className="tamaño-medio peso-italic mb-0">
                        Equipo y personal técnico (diversos formatos segun
                        necesidad y presupuesto) Dirección; producción;
                        dirección de fotografía. Dirección de arte. Realización
                        de decorados. Casting. Make up, estilismo, vestuario.
                    </p>
                </div>
            </Fade>
        </div>
    );
}
