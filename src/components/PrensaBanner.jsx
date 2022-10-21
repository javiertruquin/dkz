import React from "react";
import { Image } from "react-bootstrap";

export default function PrensaBanner() {
  return (
    <div>
      {/* Escritorio */}
      <div className="color-azul-oscuro-fondo d-none d-md-block">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1666208868/banners/BannerPrensa_il79yh.png"
          alt="Banner-escritorio"
          fluid
        />
        <div className="banner-posicion-escritorio">
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center align-items-center">
              <p className="titulos-impacto px-5 margen-negativo2 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                PRENSA
              </p>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center align-items-center">
              <p className="titulos-impacto px-5 margen-negativo2 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                PRENSA
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Celular */}
      <div className="pb-4 color-azul-oscuro-fondo d-md-none d-block">
        <div className="fondo-prensa fondo-banner">
          <div className="card-position">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="my-5 mx-3">
                <h1 className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado mt-5 px-5">
                  PRENSA
                </h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
