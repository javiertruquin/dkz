import React from "react";

export default function ContenidoSitioWebs() {
  return (
    <div>
      <div className="d-lg-none d-block py-5">
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
            Apache + PHP + MySQL + Javascript + React + HTML 5 + CSS <br /> -Análisis
            funcional del sitio. <br /> -UX UI. <br /> -Sitios Responsive.{" "}
            <br /> -Codificación SEO Y SEM . <br /> -Certificados SSL de
            seguridad. <br /> -Integración de API´s y Webservices.
          </p>
        </div>
      </div>
      <div className="d-none d-lg-block py-5">
        {" "}
        <div className="container">
          <p className="tamaño-medio peso-italic text-white espaciado texto-sombra ms-5">
            <span className="tamaño-grande peso-bold-italic text-white espaciado texto-sombra">
              Algunas de nuestras soluciones webs:
            </span>
            <br />
            -Desarrollo y solución completa llave en mano (diseño + desarrollo +
            programación)
            <br /> -Tecnologías utilizadas en nuestros desarrollos: Linux +
            Apache + PHP + MySQL + Javascript + React + HTML 5 <br /> -Análisis
            funcional del sitio. <br /> -UX UI. <br /> -Sitios Responsive.{" "}
            <br /> -Codificación SEO Y SEM . <br /> -Certificados SSL de
            seguridad. <br /> -Integración de API´s y Webservices.
          </p>
        </div>
      </div>
    </div>
  );
}
