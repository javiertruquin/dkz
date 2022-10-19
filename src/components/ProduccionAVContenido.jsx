import React from "react";
import { Fade } from "react-reveal";

export default function ProduccionAVContenido() {
  return (
    <div>
      <div className="">
        <div className="d-none d-sm-block">
          <div className="container text-white">
            <div className="d-flex justify-content-center">
              <Fade left>
                <div className="me-2 me-xl-5">
                  <div>
                    <h1 className="titulos-impacto tamaño-grande peso-bold-italic px-1 py-2 mx-4 mb-5 mas-espaciado">
                      <span className="d-flex justify-content-center">
                        CREATIVIDAD
                      </span>
                    </h1>
                  </div>
                  <div className="text-white text-center">
                    <p className="tamaño-medio peso-italic tamaño-medio px-2">
                      Spots publicitarios, cobertura de eventos y <br />
                      registros sociales. Videos corporativos. <br />{" "}
                      Infomerciales. Institucionales. Books. <br /> Producciones
                      especiales.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="ms-2 ms-xl-5">
                  <h1 className="titulos-impacto tamaño-grande peso-bold-italic px-1 py-2 mx-4 mb-5 mas-espaciado mx-4">
                    <span className="d-flex justify-content-center ">
                      PREPRODUCCIÓN
                    </span>
                  </h1>
                  <div className="text-white text-center">
                    <p className="tamaño-medio peso-italic tamaño-grande px-2">
                      Devolución creativa y presentación <br />
                      preliminar. Relevamiento de locaciones. <br />
                      Diseño de producción.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="color-azul-oscuro-fondo">
          <div className="container text-white">
            <div className="d-flex justify-content-center">
              <Fade left>
                <div className="me-2 me-xl-5">
                  <div>
                    <h1 className="titulos-impacto tamaño-grande peso-bold-italic px-1 py-2 mx-4 mb-5 mas-espaciado">
                      <span className="d-flex justify-content-center">
                        PRODUCCIÓN
                      </span>
                    </h1>
                  </div>
                  <div className="text-white text-center">
                    <p className="tamaño-medio peso-italic tamaño-grande px-2">
                      Equipo y personal técnico (diversos <br />
                      formatos segun necesidad y presupuesto).
                      <br />
                      Dirección; producción; dirección de fotografía.
                      <br />
                      Dirección de arte. Realización de decorados. <br />{" "}
                      Casting. Make up, estilismo, vestuario.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="ms-2 ms-xl-5">
                  <h1 className="titulos-impacto tamaño-grande peso-bold-italic px-1 py-2 mx-4 mb-5 mas-espaciado mx-4">
                    <span className="d-flex justify-content-center ">
                      POSTPRODUCCIÓN
                    </span>
                  </h1>
                  <div className="text-white text-center">
                    <p className="tamaño-medio peso-italic tamaño-grande px-2">
                      Edición. Montaje. Sonido. Etalonaje y <br />
                      corrección de color. Video fx. Audio fx.
                      <br /> Música y sonido. Corte final y copias para <br />
                      cualquier medio.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
