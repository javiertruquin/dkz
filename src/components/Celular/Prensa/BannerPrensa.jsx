import React from "react";
import { Image } from "react-bootstrap";
import { Radio } from "../../Radio";

export default function BannerPrensa() {
  return (
    <>
      <div className="pb-4 color-azul-oscuro-fondo">
        <div className="fondo-banner fondo-prensa">
          <div className="card-position">
            <div className="titulo-audiovisual d-flex flex-column justify-content-center">
              <div className="my-5 mx-3 padding-nav">
                <h1 className=" titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado titulo-producciones">
                  PRENSA
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <div className="row text-white">
            <div className="">
              <p className="tamaño-mas-grande peso-bold-italic text-white d-flex ms-4   espaciado texto-sombra posi-eventos-escritorio">
                Artículos destacados
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
