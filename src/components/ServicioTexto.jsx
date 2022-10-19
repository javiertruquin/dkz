import React from "react";

export default function ServicioTexto() {
  return (
    <div>
      <div className="container">
        <div className="d-lg-none d-block">
          <p className="tamaño-pequeño peso-italic text-white text-center espaciado texto-sombra ">
            En DKZ studio sabemos lo fundamental de Identificar estrategias,
            herramientas y nuevas tecnologías para el diseño y ejecución de la
            publicidad de cada empresa. Por esto resulta imprescindible realizar
            campañas de marketing digital exitosas
          </p>
        </div>
        <div className="d-none d-lg-block">
          <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra">
            En DKZ studio sabemos lo fundamental de Identificar estrategias,
            herramientas y nuevas tecnologías <br /> para el diseño y ejecución
            de la publicidad de cada empresa.
            <br /> Por esto resulta imprescindible realizar campañas de
            marketing digital exitosas
          </p>
        </div>
      </div>
    </div>
  );
}