import React from "react";
import Tada from "react-reveal/Tada";

export default function Contacto() {
  return (
    <div className="pt-5">
      <div>
        <h1 className="tamaño-mas-grande peso-bold-italic text-white text-center ">
          Tu proyecto <br />
          en buenas manos
        </h1>
      </div>
      <Tada>
        <div className="d-flex justify-content-center ">
          <div className="mt-4 boton-morado-visuales border-0 borde-boton-morado">
            Contactanos
          </div>
        </div>
      </Tada>
    </div>
  );
}