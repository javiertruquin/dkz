import React from "react";
import { Fade } from "react-reveal";

export default function AVContenido() {
    return (
        <div className="my-5">
            <div className="color-azul-oscuro-fondo">
                <div className="container text-white">
                    <div className="d-flex justify-content-center">
                        <Fade left>
                            <div className="me-2 me-xl-5">
                                <div>
                                    <h1 className="titulo-contenido-av peso-bold-italic px-1 py-2 mx-4 mb-5 mas-espaciado">
                                        <span className="d-flex justify-content-center">
                                            CREATIVIDAD
                                        </span>
                                    </h1>
                                </div>
                                <div className="text-white text-center">
                                    <p className="texto-av peso-italic tamaño-grande px-2">
                                        Spots publicitarios; cobertura de
                                        eventos y <br />
                                        registros sociales. Videos corporativos.{" "}
                                        <br /> Infomerciales. Institucionales.
                                        Books. <br /> Producciones especiales.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="ms-2 ms-xl-5">
                                <h1 className="titulo-contenido-av peso-bold-italic px-1 py-2 mx-4 mb-5 mas-espaciado mx-4">
                                    <span className="d-flex justify-content-center ">
                                        PREPRODUCCIÓN
                                    </span>
                                </h1>
                                <div className="text-white text-center">
                                    <p className="texto-av peso-italic tamaño-grande px-2">
                                        Devolución ceativa y presentación <br />
                                        preliminar. Relevamiento de locaciones.{" "}
                                        <br />
                                        Diseño de producción.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}
