import React from "react";

export default function Frase() {
  return (
    <div className="color-azul-oscuro-fondo mx-auto">
      <div className="d-flex justify-content-center">
        <div className="efecto-blur-card my-5">
          <div className="my-5 mx-5">
            <p className="peso-italic text-white text-center espaciado">
              “Aquellos que están lo suficientemente <br />
              locos para creer que pueden <br />
              cambiar el mundo son quienes lo cambian”
              <span className="d-flex justify-content-end tamaño-chico">Steve Jobs </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
