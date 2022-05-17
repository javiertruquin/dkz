import React from "react";
import { Fade } from "react-reveal";

export default function ContenidoAV() {
  return (
    <div className="color-azul-oscuro-fondo my-5">
      <Fade right>
      <div>
        <h1 className="titulo-verde color-violeta tamaño-mas-grande peso-bold-italic posicion-titulo my-5">
          <span className="ms-2">CREATIVIDAD</span> 
        </h1>
        </div>
      </Fade>
      <Fade left>
        <div className="text-white texto-creatividad ms-5">
          <p className="tamaño-medio peso-italic"> Investigación, relevamiento, generación e interpretación del brief y las
        necesidades específicas de comunicación. Guión y propuesta creativa.
        Presupuestación.</p>
        
      </div>
      </Fade>
    </div>
  );
}
