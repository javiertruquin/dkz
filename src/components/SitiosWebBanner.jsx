import React from "react";
import { Image } from "react-bootstrap";

export default function SitiosWebBanner() {
  return (
    <div>
      {/* Escritorio */}
      <div className="color-azul-oscuro-fondo d-none d-md-block">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1666208843/banners/BannerSitioWeb_pozirw.png"
          alt="Banner-escritorio"
          fluid
        />
        <div className="banner-posicion-escritorio">
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center align-items-center">
              <p className="titulos-impacto px-5 margen-negativo2 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                SITIOS WEBS
              </p>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center align-items-center">
              <p className="titulos-impacto px-5 margen-negativo2 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                SITIOS WEBS
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Celular */}
      <div className="pb-4 color-azul-oscuro-fondo d-md-none d-block">
        <div className="fondo-banner fondo-sitio-web ">
          <div className="card-position">
            <div className="titulo-audiovisual d-flex flex-column justify-content-center">
              <div className="my-5 mx-3">
                <h1 className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado mt-5 titulo-producciones">
                  SITIOS WEBS
                </h1>
              </div>
            </div>
            <div className="banner-pie-cel d-flex justify-content-center color-violeta-fondo-banner-pie px-1 rounded-3">
              <div className="text-white">
                <div>
                  <p className="peso-italic tamaño-medio px-2 py-4">
                    Trabajamos sobre cada uno de nuestros desarrollos de manera
                    exclusiva. Nuestras ideas parten desde una concepción
                    inicial en la cual implementamos todos nuestros proyectos
                    desde cero, sin utilización de contenidos realizados por
                    terceros o código fuente reutilizable de otros trabajos,
                    para DKZ cada cliente es un nuevo desafío. Trabajamos sobre
                    cada uno de nuestros desarrollos de manera exclusiva.
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
            -Desarrollo y solución completa llave en mano (diseño + desarrollo +
            programación)
            <br /> -Tecnologías utilizadas en nuestros desarrollos: Linux +
            Apache + PHP + MySQL + React + HTML 5 + CSS + Javascript <br />{" "}
            -Análisis funcional del sitio. <br /> -UX UI. <br /> -Sitios
            Responsive. <br /> -Codificación SEO Y SEM . <br /> -Certificados
            SSL de seguridad. <br /> -Integración de API´s y Webservices.
          </p>
        </div>
      </div>
    </div>
  );
}
