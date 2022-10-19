import React from "react";

export default function ConsultoriaTexto() {
  return (
    <div>
      <div className="d-none d-md-block">
        <div className="d-flex justify-content-center">
          <div className="container">
            <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra">
              Nos enfocamos en el requerimiento del cliente, brindando
              soluciones alternativas y eficaces, <br /> que ayuden a consolidar
              el esquema de trabajo y los objetivos internos de una compañía.
            </p>
          </div>
        </div>
      </div>
      <div className=" d-none d-md-block ">
        <div className="d-flex justify-content-center ">
          <p className="tamaño-medio  peso-italic text-white espaciado texto-sombra pt-4 px-5">
            <span className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              Nuestros diferentes servicios de consultoría son:
            </span>
            <br />
            <ul className="tamaño-medio peso-italic text-white espaciado texto-sombra mb-5">
              <li>Consultoría y asesoramiento estratégico</li>
              <li>
                Consultoría y asesoramiento en marketing y comercialización
              </li>
              <li>Consultoría y asesoramiento económico - financiero</li>
              <li>
                Consultoría y asesoramiento en organización y recursos humanos.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
