import React from "react";
import ProduccionAVContenido from "./ProduccionAVContenido";

export default function ProduccionAVTexto() {
  return (
    <div className="container">
      <div className="d-none d-md-block">
        <div>
          <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra">
            Spots publicitarios; cobertura de eventos y registros sociales.
            <br /> Videos corporativos. Infomerciales. Institucionales. Books.{" "}
            <br /> Producciones especiales.
          </p>
        </div>
        <div className="my-5">
          <ProduccionAVContenido />
        </div>
      </div>
    </div>
  );
}
