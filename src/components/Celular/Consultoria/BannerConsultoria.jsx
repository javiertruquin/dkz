import React from "react";

export default function BannerConsultoria() {
  return (
    <>
      <div className="pb-4 color-azul-oscuro-fondo">
        <div className="fondo-banner-consultoria-cel">
          <div className="card-position">
            <div className="titulo-audiovisual d-flex flex-column justify-content-center">
              <div className="my-5 mx-3">
                <h1 className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado pt-5 mt-5 titulo-producciones">
                  CONSULTORÍA
                </h1>
              </div>
            </div>
            <div className="banner-pie-consultoria d-flex justify-content-center rounded-3 color-violeta-fondo-banner-pie px-1">
              <div className="text-white">
                <p className="peso-italic tamaño-medio px-2 py-5">
                  Nos enfocamos en el requerimiento del cliente, brindando
                  soluciones alternativas y eficaces,que ayuden a consolidar el
                  esquema de trabajo y los objetivos internos de una compañía.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <ul className="peso-italic  text-white">
            <li>Consultoría y asesoramiento estratégico</li>
            <li>Consultoría y asesoramiento en marketing y comercialización</li>
            <li>Consultoría y asesoramiento económico - financiero</li>
            <li>
              Consultoría y asesoramiento en organización <br/> y recursos humanos.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
