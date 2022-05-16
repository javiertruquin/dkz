import React from "react";
import { Fade } from "react-reveal";

export default function ContenidoAVP() {
  return (
    <div className="color-azul-oscuro-fondo my-5 contenedor-padding ">
      <Fade right> 
      <div>
        <h1 className="titulo-verde color-violeta tamaño-mas-grande peso-bold-italic posicion-titulo my-4">
          <span className="ms-2">PRODUCCIÓN</span> 
        </h1>
        </div>
        </Fade>
    <Fade Bottom>
      <div className="text-white texto-creatividad mb-5 ms-5">
        Equipo y personal técnico (diversos formatos segun necesidad y
        presupuesto) Dirección; producción; dirección de fotografía. Dirección
        de arte. Realización de decorados. Casting. Make up, estilismo,
        vestuario.
      </div>
      </Fade>
    </div>
  );
}
