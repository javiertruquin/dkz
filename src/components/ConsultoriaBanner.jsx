import React from "react";
import { Image } from "react-bootstrap";

export default function ConsultoriaBanner() {
  return (
    <div>
      {/* Escritorio */}
      <div className="color-azul-oscuro-fondo d-none d-md-block">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1666208890/banners/BannerConsultoria_bifcgn.png"
          alt="Banner-escritorio"
          fluid
        />
        <div className="banner-posicion-escritorio">
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center align-items-center">
              <p className="titulos-impacto px-5 margen-negativo2 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                CONSULTORÍA
              </p>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center align-items-center">
              <p className="titulos-impacto px-5 margen-negativo2 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                CONSULTORÍA
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Celular */}
      <div className="pb-4 color-azul-oscuro-fondo d-md-none d-block">
        <div className="fondo-banner fondo-consultoria">
          <div className="card-position ">
            <div className="titulo-audiovisual d-flex flex-column justify-content-center">
              <div className="my-5 mx-3">
                <h1 className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado mt-5 titulo-producciones">
                  CONSULTORÍA
                </h1>
              </div>
            </div>
            <div className="banner-pie-cel d-flex justify-content-center color-violeta-fondo-banner-pie px-1 rounded-3">
              <div className="text-white">
                <div>
                  <p className="peso-italic tamaño-medio px-2 py-4">
                    Nos enfocamos en el requerimiento del cliente, brindando
                    soluciones alternativas y eficaces, que ayuden a consolidar
                    el esquema de trabajo y los objetivos internos de una
                    compañía.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <p className="tamaño-medio  peso-italic text-white espaciado texto-sombra px-5 text-center">
            <span className="tamaño-grande peso-bold-italic text-white  espaciado texto-sombra">
              {" "}
              Algunas de nuestras soluciones webs:
            </span>
            <br />
            - Consultoría y asesoramiento estratégico <br />
            - Consultoría y asesoramiento <br /> en marketing y comercialización <br />
            - Consultoría y asesoramiento <br /> económico - financiero <br />
            - Consultoría y asesoramiento <br /> en organización <br /> y recursos
            humanos.
          </p>
        </div>
      </div>
    </div>
  );
}
