import React from "react";
import { Fade } from "react-reveal";

export default function ContenidoAVP() {
  return (
    <div className="color-azul-oscuro-fondo my-5 contenedor-padding ">
      <Fade left> 
      <div>
        <h1 className="titulo-verde color-violeta tamaño-mas-grande peso-bold-italic posicion-titulo my-4">
          <span className="ms-2">PRODUCCIÓN</span> 
        </h1>
        </div>
        </Fade>
    <Fade right>
        <div className="text-white texto-creatividad mb-5 ms-5 ">
          <p className="tamaño-medio peso-italic">
          Equipo y personal técnico (diversos formatos segun necesidad y
        presupuesto) Dirección; producción; dirección de fotografía. Dirección
        de arte. Realización de decorados. Casting. Make up, estilismo,
        vestuario.
          </p>
       
      </div>
      </Fade>
    </div>
  );
}
