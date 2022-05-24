import React from "react";
import { Fade } from "react-reveal";

export default function ContenidoAVPost() {
  return (
    <div className="color-azul-oscuro-fondo my-5 contenedor-padding-post ">
      <Fade left>
        {" "}
        <div>
          <h1 className="titulo-verde color-violeta tamaño-mas-grande peso-bold-italic posicion-titulo my-5">
            <span className="ms-2">POSTPRODUCCIÓN</span>
          </h1>
        </div>
      </Fade>
      <Fade bottom>
        <div className="text-white texto-creatividad mb-5 ms-5">
          <p className="tamaño-medio peso-italic">Edición. Montaje. Sonido. Etalonaje y corrección de color. Video fx.
          Audio fx. Música y sonido. Corte final y copias para cualquier medio.</p>
          
        </div>
      </Fade>
    </div>
  );
}
