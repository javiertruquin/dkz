import React from "react";

export default function AVContenido() {
  return (
    <div className="my-5">
      <div className="color-azul-oscuro-fondo">
        <div className="container text-white">
          <div className="d-flex  justify-content-around">
            <div>
              <h1 className="titulo-contenido-av tamaño-mas-grande peso-bold-italic ms-3 px-1 py-1">
                <span className="ms-5 ">CREATIVIDAD</span>
              </h1>
              <div className="text-white text-center">
                <p className="peso-italic tamaño-medio px-2">
                  Spots publicitarios; cobertura de eventos y <br />
                  registros sociales. Videos corporativos. <br /> Infomerciales.
                  Institucionales. Books. <br /> Producciones especiales.
                </p>
              </div>
            </div>
            <div>
              <h1 className="titulo-contenido-av  tamaño-mas-grande peso-bold-italic ms-4 px-1 py-1">
                <span className="ms-4 ">PREPRODUCCIÓN</span>
              </h1>
              <div className="text-white text-center">
                <p className="peso-italic tamaño-medio px-2">
                  Devolución ceativa y presentación <br />
                  preliminar. Relevamiento de locaciones. <br />
                  Diseño de producción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
