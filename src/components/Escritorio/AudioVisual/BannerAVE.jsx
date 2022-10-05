import React from "react";
import { Image } from "react-bootstrap";

export default function BannerAVE() {
  return (
    <>
      <div className="color-azul-oscuro-fondo">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661383015/banners/bannerav_vwaqvy.jpg"
          alt="Banner-AV-escritorio"
          fluid
        />
        <div className="banner-posi-av-escritorio">
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center">
              <p className="titulos-impacto-eventos-escritorio tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra mb-0">
                PRODUCCIONES AUDIOVISUALES
              </p>
            </div>
           
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center">
              <p className="titulos-impacto-eventos-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra mb-0">
                PRODUCCIONES AUDIOVISUALES
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
