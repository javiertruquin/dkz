import React from "react";
import { Fade } from "react-reveal";

export default function ContenidoAVPost() {
  return (
    <div className="color-azul-oscuro-fondo my-5 contenedor-padding-post  ">
      <Fade right>
        {" "}
        <div>
          <h1 className="titulo-verde color-violeta tamaño-mas-grande peso-bold-italic posicion-titulo my-5">
            <span className="ms-2">POSTPRODUCCIÓN</span>
          </h1>
        </div>
      </Fade>
      <Fade left>
        <div className="text-white texto-creatividad mb-5 ms-5">
          Edición. Montaje. Sonido. Etalonaje y corrección de color. Video fx.
          Audio fx. Música y sonido. Corte final y copias para cualquier medio.
        </div>
        <div className="text-white texto-creatividad mb-5 ms-5">
          Edición. Montaje. Sonido. Etalonaje y corrección de color. Video fx.
          Audio fx. Música y sonido. Corte final y copias para cualquier medio.
        </div>
      </Fade>
    </div>
  );
}
