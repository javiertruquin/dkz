import React from "react";
import { Fade } from "react-reveal";
import BotonConocenos from "./BotonConocenos";

export default function Banner2() {
    return (
        <>
            <div className="color-azul-oscuro-fondo">
                <div className="d-none d-sm-block">
                    <div className="pb-5 d-flex flex-lg-row flex-column align-items-center justify-content-center container mt-0 banner-posi2-escritorio">
                        <div className="caja-somosenergia mt-5 mb-lg-0 mb-5">
                            <div className="text-center boton-morado-escritorio mb-45">
                                <p className="text-white tamaño-mas-grande peso-bold-italic mas-espaciado texto-sombra mb-0">
                                    SOMOS ENERGÍA
                                </p>
                            </div>
                            <div className="">
                                <p className="text-white tamaño-grande ms-5 me-4 my-45">
                                    Somos un equipo de creativos, profesionales
                                    publicitarios, acordes a las demandas y las
                                    exigencias del cliente. Explotamos en
                                    conjunto con la revolución digital de la
                                    nueva era.
                                </p>
                                <p className="text-white tamaño-grande ms-5 mx-4 my-45">
                                    Somos artistas avocados a nuestra profesión,
                                    pasionales, entusiastas.
                                </p>
                                <p className="text-white text-center tamaño-grande my-45">
                                    + de 20 Profesionales a tu disposición
                                </p>
                            </div>
                            <div className="d-flex justify-content-center pb-0">
                                <BotonConocenos />
                            </div>
                        </div>
                        <div>
                            <img
                                className="joven-escritorio"
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653757286/Home/joven-escritorio_sw4z3g.png"
                                alt="chica-con-celular"
                            />
                        </div>
                    </div>
                </div>
                <div className="d-sm-none d-block">
                    <Fade>
                        <div>
                            <img
                                className="imagen-joven"
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_eBoEQl7X1Hw-1_dmbv5e.png"
                                alt="chica-con-celular"
                            />
                            <img
                                className="imagen-joven-fondo"
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_eBoEQl7X1Hw_osvnkw.png"
                                alt="chica-con-celular"
                            />
                        </div>
                    </Fade>
                    <div className="boton-morado-posi">
                        <Fade left>
                            <div className="boton-morado">
                                <p className="text-white tamaño-mas-grande peso-bold-italic espaciado ms-3 texto-sombra letras-posi posi">
                                    SOMOS
                                </p>
                                <p className="text-white tamaño-mas-grande peso-bold-italic espaciado ms-3 texto-sombra letras-posi posi2 ">
                                    ENERGÍA
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <p className="text-white text-center mt-3 tamaño-medio ">
                        + de 20 Profesionales a tu disposición
                    </p>
                    <div className="d-flex justify-content-center pb-4">
                        <BotonConocenos />
                    </div>
                </div>
            </div>
        </>
    );
}
