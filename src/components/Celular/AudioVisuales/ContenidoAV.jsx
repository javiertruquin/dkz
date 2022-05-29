import React from "react";
import { Fade } from "react-reveal";

export default function ContenidoAV() {
    return (
        <div className="color-azul-oscuro-fondo my-1 py-1 pt-5">
            <Fade left>
                <div className="my-5">
                    <h1 className="text-white tamaño-grande peso-bold-italic mas-espaciado">
                        <span className="titulo-verde px-4 ">CREATIVIDAD</span>
                    </h1>
                </div>
            </Fade>
            <Fade right>
                <div className="text-white texto-creatividad mx-5 py-3">
                    <p className="tamaño-medio peso-italic mb-0">
                        Investigación, relevamiento, generación e interpretación
                        del brief y las necesidades específicas de comunicación.
                        Guión y propuesta creativa. Presupuestación.
                    </p>
                </div>
            </Fade>
        </div>
    );
}
