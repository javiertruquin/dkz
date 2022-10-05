import React from "react";

export default function TextoContenido() {
  return (
    <div className="pt-xl-5">
      <div className="d-lg-none d-block pt-xl-5">
        <div className="d-flex justify-content-center">
          <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra">
            Spots publicitarios; cobertura de eventos y registros sociales.
            <br /> Videos corporativos. Infomerciales. Institucionales. Books.{" "}
            <br /> Producciones especiales.
          </p>
        </div>
      </div>
      <div className="d-none d-lg-block pt-xl-5">
        <div className="d-flex justify-content-center">
          <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
            Spots publicitarios; cobertura de eventos y registros sociales.
            <br /> Videos corporativos. Infomerciales. Institucionales. Books.{" "}
            <br /> Producciones especiales.
          </p>
        </div>
      </div>
    </div>
  );
}
