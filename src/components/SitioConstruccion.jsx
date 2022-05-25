import React from "react";
export default function SitioConstruccion() {
    return (
        <>
            <div className="padding-nav color-azul-oscuro-fondo padding-fixed ">
                <div className="padding-sitioconst">
                    <p className=" tamaño-mas-grande peso-bold-italic text-white text-center espaciado  mb-0 titulo-producciones">
                        Ups!
                    </p>
                    <p className="tamaño-grande peso-bold-italic text-white text-center espaciado titulo-producciones">
                        Sitio en construcción
                    </p>
                </div>
                <div className=" text-center my-5">
                    <img
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653345580/Utilidades/Frame_ddtrhh.png"
                        alt="sitio en construcción"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <div className="boton-verde">
                        <p className=" m-0 p-0 color-azul-oscuro peso-bold tamaño-medio">
                            Volver al home
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
