import React from "react";

export default function BannerSitiosW() {
  return (
    <>
      <div className="pb-4 color-azul-oscuro-fondo">
        <div className="fondo-banner-sitio-web-cel">
          <div className="card-position">
            <div className="titulo-audiovisual d-flex flex-column justify-content-center">
              <div className="my-5 mx-3">
                <h1 className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado pt-5 mt-5 titulo-producciones">
                  SITIOS WEB
                </h1>
              </div>
            </div>
           <div className="banner-pie-eventos d-flex justify-content-center px-1">
              <div className="text-white color-violeta-fondo-banner-pie rounded-3 ">
                <h1 className=" peso-bold-italic my-2"> Sitios Web</h1>
                <p className="peso-italic tamaño-medio px-2 mb-0">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet delectus, corrupti libero dolorem voluptates aspernatur eum sed quae a dolore soluta consectetur aliquam eaque voluptate iure facilis itaque odit praesentium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
