import React from "react";
import { Fade } from "react-reveal";

export default function ContenidoAVPost() {
    return (
        <div className="color-azul-oscuro-fondo my-1 py-1">
            <Fade left>
                <div className="my-5">
                    <h1 className="text-white tamaño-grande peso-bold-italic mas-espaciado">
                        <span className=" titulo-verde px-4">
                            POSTPRODUCCIÓN
                        </span>
                    </h1>
                </div>
            </Fade>
            <Fade bottom>
                <div className="text-white texto-creatividad mx-5 py-3">
                    <p className="tamaño-medio peso-italic mb-0 pb-5">
                        Edición. Montaje. Sonido. Etalonaje y corrección de
                        color. Video fx. Audio fx. Música y sonido. Corte final
                        y copias para cualquier medio.
                    </p>
                </div>
            </Fade>
        </div>
    );
}
