import React from "react";

export default function Banner() {
  return (
    <div className="pb-5 color-azul-oscuro-fondo">
      <div className="color-azul-oscuro-fondo">
        <div className="fondo-banner-conocenos">
          <div className="card-position d-flex justify-content-center align-items-end">
            <div className=" titulo-conocenos d-flex flex-column justify-content-center">
              <div className="my-5 mx-4">
                <h1 className="tamaño-mas-grande peso-bold-italic text-white text-center mas-espaciado">
                  +20 PROFESIONALES A TU DISPOSICIÓN
                  <br />
                </h1>
              </div>
            </div>
            <div className="card-home-conocenos">
              <div className="my-4 mx-3">
                <h1 className="peso-bold-italic text-white tamaño grande text-center">
                  {" "}
                  Somos un equipo
                </h1>
                <p className="peso-italic tamaño-medio px-2 text-white text-center texto-sombra">
                  Somos un equipo de Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
