import React from "react";

export default function EventosTexto() {
  return (
    <div >
      <div className="d-lg-none d-block">
        <div className="d-flex justify-content-center">
          <p className="tamaño-pequeño  peso-italic text-white text-center espaciado texto-sombra">
            Ponemos a tu disposición un equipo de profesionales los cuales son
            capaces
            <br /> de ejecutar y accionar eventos de gran envergadura de acuerdo
            a los mas
            <br /> altos estándares de calidad organizativa y estilo.
          </p>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <div className="d-flex justify-content-center">
          {" "}
          <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra">
            Ponemos a tu disposición un equipo de profesionales los cuales son
            capaces
            <br /> de ejecutar y accionar eventos de gran envergadura de acuerdo
            a los mas
            <br /> altos estándares de calidad organizativa y estilo.
          </p>
        </div>
      </div>
    </div>
  );
}
