import React from "react";

export default function Banner2() {
    return (
        <>
            <div className="color-azul-oscuro-fondo seccion-joven">
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
                <div className="boton-verde ">
                    <p className="color-violeta tamaño-mas-grande peso-bold-italic espaciado m-0 p-0 texto-sombra letras-moradas posi">
                        SOMOS
                        
                    </p>
                    <p className="color-violeta tamaño-mas-grande peso-bold-italic espaciado m-0 p-0 texto-sombra letras-moradas posi2 ">
                        ENERGIA
                        
                    </p>
                </div>
                <p className="text-white text-center mt-3 tamaño-medio ">
                    + de 20 Profesionales a tu disposición
                </p>
                <div className="d-flex justify-content-center pb-4">
                    <div className="boton-morado ">
                        <p className=" m-0 p-0 text-white tamaño-medio">Conocenos</p>
                    </div>
                </div>
            </div>
        </>
    );
}
