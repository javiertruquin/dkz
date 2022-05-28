import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export default function Banner2() {
    return (
        <>
            <div className="color-azul-oscuro-fondo">
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
                    <div className="boton-verde ">
                        <Link
                            className=" m-0 p-0 color-azul-oscuro peso-bold tamaño-medio sin-sub"
                            to="/Conocenos"
                        >
                            Conocenos
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
