import React from "react";
import BotonVolverHome from "../../BotonVolverHome";

export default function SitioConstruEscritorio() {
    return (
        <>
            <div className="color-azul-oscuro-fondo padding-sitioconst ">
                <div>
                    <p className=" tamaño-mas-grande peso-bold-italic text-white text-center espaciado  mb-0 titulo-producciones">
                        Parece que esta pagina no existe{" "}
                    </p>
                </div>
                <div className=" text-center my-5">
                    <img
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653775980/Utilidades/escritorioHombrecito_szt4a0.png"
                        alt="sitio en construcción"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <BotonVolverHome />
                </div>
            </div>
        </>
    );
}
