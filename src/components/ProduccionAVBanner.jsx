import React from "react";
import { Image } from "react-bootstrap";
import { Fade } from "react-reveal";

export default function ProduccionAVBanner() {
  return (
    <div>
      <div>
        {/* Escritorio */}
        <div className="color-azul-oscuro-fondo d-none d-md-block">
          <Image
            className="banner-escritorio"
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1666208154/banners/BannerAV_stf3qw.png"
            alt="Banner-escritorio"
            fluid
          />
          <div className="banner-posicion-escritorio">
            <div className="d-lg-none d-block">
              <div className="d-flex justify-content-center align-items-center">
                <p className="titulos-impacto px-5 margen-negativo2 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                  PRODUCCIONES AUDIOVISUALES
                </p>
              </div>
            </div>
            <div className="d-none d-lg-block">
              <div className="d-flex justify-content-center align-items-center">
                <p className="titulos-impacto px-5 margen-negativo2 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                  PRODUCCIONES AUDIOVISUALES
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Celular */}
        <div className="pb-4 color-azul-oscuro-fondo d-md-none d-block">
          <div className="fondo-banner fondo-pav">
            <div className="card-position">
              <div className="titulo-audiovisual d-flex flex-column justify-content-center">
                <div className="my-5 mx-3">
                  <h1 className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado mt-5 titulo-producciones">
                    PRODUCCIONES AUDIOVISUALES
                  </h1>
                </div>
              </div>
              <div className="banner-pie-cel d-flex justify-content-center color-violeta-fondo-banner-pie px-1 rounded-3">
                <div className="text-white">
                  <h1 className=" peso-bold-italic mb-2 mt-4">
                    {" "}
                    Producciones audiovisuales integrales
                  </h1>
                  <p className="peso-italic tamaño-medio px-2 pb-4 mb-0">
                    Spots publicitarios; cobertura de eventos y <br />
                    registros sociales. Videos corporativos. <br />{" "}
                    Infomerciales. Institucionales. Books. <br /> Producciones
                    especiales.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" text-white">
              <div className="color-azul-oscuro-fondo my-1 py-1 pt-5">
                <Fade left>
                  <div className="my-5">
                    <h1 className="text-white tamaño-grande peso-bold-italic mas-espaciado">
                      <span className="titulo-verde px-4 ">CREATIVIDAD</span>
                    </h1>
                  </div>
                </Fade>
                <Fade right>
                  <div className="text-white texto-creatividad mx-5 py-3">
                    <p className="tamaño-medio peso-italic mb-0">
                      Investigación, relevamiento, generación e interpretación
                      del brief y las necesidades específicas de comunicación.
                      Guión y propuesta creativa. Presupuestación.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="color-azul-oscuro-fondo my-1 py-1">
                <Fade left>
                  <div className="my-5">
                    <h1 className="text-white tamaño-grande peso-bold-italic mas-espaciado">
                      <span className="titulo-verde px-4">PREPRODUCCIÓN</span>
                    </h1>
                  </div>
                </Fade>
                <Fade right>
                  <div className="text-white texto-creatividad mx-5 py-3">
                    <p className="tamaño-medio peso-italic mb-0">
                      Devolución creativa y presentación preliminar.
                      Relevamiento de locaciones. Diseño de producción.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="color-azul-oscuro-fondo my-1 py-1">
                <Fade left>
                  <div className="my-5">
                    <h1 className="text-white tamaño-grande peso-bold-italic mas-espaciado">
                      <span className="titulo-verde px-4">PRODUCCIÓN</span>
                    </h1>
                  </div>
                </Fade>
                <Fade right>
                  <div className="text-white texto-creatividad mx-5 py-3">
                    <p className="tamaño-medio peso-italic mb-0">
                      Equipo y personal técnico (diversos formatos segun
                      necesidad y presupuesto) Dirección; producción; dirección
                      de fotografía. Dirección de arte. Realización de
                      decorados. Casting. Make up, estilismo, vestuario.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="color-azul-oscuro-fondo my-1 py-1">
                <Fade left>
                  <div className="my-5">
                    <h1 className="text-white tamaño-grande peso-bold-italic mas-espaciado">
                      <span className=" titulo-verde px-4">POSTPRODUCCIÓN</span>
                    </h1>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="text-white texto-creatividad mx-5 py-3">
                    <p className="tamaño-medio peso-italic mb-0 pb-5">
                      Edición. Montaje. Sonido. Etalonaje y corrección de color.
                      Video fx. Audio fx. Música y sonido. Corte final y copias
                      para cualquier medio.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
