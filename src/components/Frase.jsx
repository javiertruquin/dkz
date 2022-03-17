import React from "react";

export default function Frase() {
  return (
    <div className=" color-azul-oscuro-fondo">
      <div className="card-position">
        <div className=" efecto-blur-card d-flex flex-column justify-content-center mt-5">
          <div className="my-4 mx-3">
            <p className="peso-italic text-white text-center espaciado">
              “Aquellos que están lo suficientemente <br />
              locos para creer que pueden <br />
              cambiar el mundo son quienes lo cambian”
              <span className="d-flex justify-content-end">Steve Jobs </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
