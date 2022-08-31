import React from "react";
import BotonConocenos from "../../BotonConocenos";

export default function Banner2Escritorio() {
  return (
    <>
      <div className="color-azul-oscuro-fondo py-5 d-flex flex-lg-row flex-column align-items-center justify-content-center container mt-4 banner-posi2-escritorio">
        <div className="caja-somosenergia mt-5 mb-lg-0 mb-5">
          <div className="text-center boton-morado-escritorio mb-45">
            <p className="text-white tamaño-mas-grande peso-bold-italic mas-espaciado texto-sombra mb-0">
              SOMOS ENERGÍA
            </p>
          </div>
          <div className="">
            <p className="text-white tamaño-grande ms-5 me-4 my-45">
              Somos un equipo de creativos, profesionales publicitarios, acordes
              a las demandas y las exigencias del cliente. Explotamos en
              conjunto con la revolución digital de la nueva era.
            </p>
            <p className="text-white tamaño-grande ms-5 mx-4 my-45">
              Somos artistas avocados a nuestra profesión, pasionales,
              entusiastas.
            </p>
            <p className="text-white text-center tamaño-grande my-45">
              + de 20 Profesionales a tu disposición
            </p>
          </div>
          <div className="d-flex justify-content-center pb-0">
            <BotonConocenos />
          </div>
        </div>
        <div>
          <img
            className="joven-escritorio"
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653757286/Home/joven-escritorio_sw4z3g.png"
            alt="chica-con-celular"
          />
        </div>
      </div>
    </>
  );
}
