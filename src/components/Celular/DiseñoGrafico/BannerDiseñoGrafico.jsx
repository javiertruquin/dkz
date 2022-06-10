import React from "react";

export default function BannerDiseñoGrafico() {
  return (
    <>
      <div className="pb-4 color-azul-oscuro-fondo">
        <div className="fondo-banner-av">
          <div className="card-position">
            <div className="titulo-audiovisual d-flex flex-column justify-content-center">
              <div className="my-5 mx-3">
                <h1 className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado pt-5 mt-5 titulo-producciones">
                  MARKETING <br /> DE CONTENIDO
                </h1>
              </div>
            </div>
            <div className="banner-pie d-flex justify-content-center">
              <div className="text-white">
                <h1 className=" peso-bold-italic my-2">
                  {" "}
                  Marketing 
                </h1>
                <p className="peso-italic tamaño-medio px-2">
                  Lorem ipsum dolor sit amet consectetur, ut illo architecto
                  <br />
                  adipisicing elit. Ipsum incidunt id unde. Numquam atque <br />{" "}
                  laudantium excepturi, totam nostrum impedit magnam cumque nam
                  maxime ad ipsum earum mollitia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
