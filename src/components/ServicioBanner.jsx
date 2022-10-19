import React from "react";
import { Image } from "react-bootstrap";

export default function ServicioBanner() {
  return (
    <div>
      {/* Escritorio */}
        <div className="color-azul-oscuro-fondo d-none d-md-block">
          <Image
            className="banner-escritorio"
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1666059705/banners/BannerHome_dxeect.png"
            alt="Banner-escritorio"
            fluid
          />
          <div className="banner-posicion-escritorio">
            <div className="d-lg-none d-block">
              <div className="d-flex justify-content-center align-items-center">
                <p className="titulos-impacto px-5 margen-negativo2 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                  SERVICIOS
                </p>
              </div>
            </div>
            <div className="d-none d-lg-block">
              <div className="d-flex justify-content-center align-items-center">
                <p className="titulos-impacto px-5 margen-negativo2 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                  SERVICIOS
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Celular */}
        <div className="pb-4 color-azul-oscuro-fondo d-md-none d-block">
          <div className="fondo-banner">
            <div className="card-position">
              <div className="titulo-audiovisual d-flex flex-column justify-content-center">
                <div className="my-5 mx-3">
                  <h1 className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado mt-5 titulo-producciones">
                    SERVICIOS
                  </h1>
                </div>
              </div>
              <div className="banner-pie-cel d-flex justify-content-center color-violeta-fondo-banner-pie px-1 rounded-3">
                <div className="text-white">
                  <p className="peso-italic tamaño-medio px-2 py-5">
                    En DKZ sabemos lo fundamental que es identificar
                    estrategias, herramientas y nuevas tecnologías para el
                    diseño y ejecución de diferentes piezas y proyectos
                    publicitarios, cualquiera sea su índole y nivel abarcativo
                    de proyección. Por esto resulta imprescindible realizar
                    campañas exitosas y lograr un posicionamiento online acorde
                    a la demanda de cada rubro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
