import React from "react";

export default function Banner() {
  return (
    <div className="pb-5 color-azul-oscuro-fondo">
      <div className="fondo-banner-conocenos">
        <div className="card-position">
          <div className=" titulo-conocenos d-flex flex-column justify-content-center">
            <div className="my-5 mx-3">
              <h1 className="tamaño-mas-grande peso-bold-italic text-white text-center mas-espaciado">
                +20 PROFESIONALES
                <br />A TU DISPOSICIÓN
              </h1>
            </div>
          </div>
          <div className="banner-pie-conocenos d-flex justify-content-center">
            <div className="text-white">
              <h1 className="peso-bold-italic my-2"> Somos un equipo</h1>
              <p className="peso-italic tamaño-medio px-2">
                Somos un equipo de Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
