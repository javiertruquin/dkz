import React from "react";

export default function BannerEventos() {
  return (
    <>
      <div className="color-azul-oscuro-fondo">
        <div className="fondo-banner-eventos-cel">
          <div className="card-position">
            <div className="titulo-audiovisual d-flex flex-column justify-content-center">
              <div className="my-5 mx-3">
                <h1 className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado pt-5 mt-5 titulo-producciones">
                  EVENTOS
                </h1>
              </div>
            </div>
            <div className="banner-pie-eventos d-flex justify-content-center px-1">
              <div className="text-white color-violeta-fondo-banner-pie rounded-3 ">
                <h1 className=" peso-bold-italic my-2"> Eventos</h1>
                <p className="peso-italic tamaño-medio px-2 mb-0">
                  Ponemos a tu disposición un equipo de profesionales los cuales
                  son capaces de ejecutar y accionar eventos de gran envergadura
                  de acuerdo a los mas altos estándares de calidad organizativa
                  y estilo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="peso-italic tamaño-medio text-white  espaciado texto-sombra  mx-3">
            Nuestro equipo se caracteriza por:
          </p>
          <p className="peso-italic tamaño-medio text-white espaciado texto-sombra mx-3 ">
            - Capacidad de liderazgo, trabajo en equipo y planificación
            <br /> - Visión del entorno y el contexto
            <br /> - Habilidades comunicacionales, empáticas y negociadoras
          </p>
          <p className="peso-italic tamaño-medio text-white espaciado texto-sombra mx-3 ">
            Nuestros Eventos:
          </p>
          <p className="peso-italic tamaño-medio text-white espaciado texto-sombra  mx-3">
            - Eventos empresariales, Eventos sociales, Conciertos y espectáculos
            <br /> - Lanzamientos de marcas, productos o servicios
            <br /> - Feria y exhibiciones
          </p>
        </div>
      </div>
    </>
  );
}
