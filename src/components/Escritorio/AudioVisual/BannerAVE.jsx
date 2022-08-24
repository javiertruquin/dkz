import React from "react";
import { Image } from "react-bootstrap";

export default function BannerAVE() {
  return (
    <>
      <div className="color-azul-oscuro-fondo">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661374858/audiovisual/bannerav_ijf7n2.jpg"
          alt="Banner-AV-escritorio"
          fluid
        />
        <div className="banner-posi-escritorio">
          <div className="d-lg-none d-block">
            <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra mb-0">
              PRODUCCIONES AUDIOVISUALES INTEGRALES
            </p>
            <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra">
              Spots publicitarios; cobertura de eventos y registros sociales.
              <br /> Videos corporativos. Infomerciales. Institucionales. Books.{" "}
              <br /> Producciones especiales.
            </p>
          </div>
          <div className="d-none d-lg-block">
            <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra mb-0">
              PRODUCCIONES AUDIOVISUALES INTEGRALES
            </p>
            <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
              Spots publicitarios; cobertura de eventos y registros sociales.
              <br /> Videos corporativos. Infomerciales. Institucionales. Books.{" "}
              <br /> Producciones especiales.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
