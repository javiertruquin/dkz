import React from "react";

export default function BannerAV() {
  return (
    <>
      <div className="pb-5 color-azul-oscuro-fondo">
        <div className="fondo-banner-av">
          <div className="card-position">
            <div className="titulo-audiovisual d-flex flex-column justify-content-center">
              <div className="my-4 mx-3">
                <h1 className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                  PRODUCCIONES <br />
                  AUDIOVISUALES
                </h1>
              </div>
            </div>
            <div className="banner-pie d-flex justify-content-center">
              <div className="text-white">
                <h1> Producciones audiovisuales integrales</h1>
                <p>
                  Spots publicitarios; cobertura de eventos y registros
                  sociales. Videos corporativos. Infomerciales. Institucionales.
                  Books. Producciones especiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
