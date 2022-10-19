import React from "react";
import BotonContactanos from "./BotonContactanos";

export default function Banner() {
    return (
        <>
            {/* Escritorio */}
            <div className="color-azul-oscuro-fondo">
                <div className="fondo-banner fondo-home">
                    <div className="d-none d-sm-block">
                        <div className="centrado pb-5">
                            <div className="d-lg-none d-block">
                                <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                                    LLEVA TUS IDEAS A UN LUGAR QUE NUNCA
                                    IMAGINASTE
                                </p>
                            </div>
                            <div className="d-none d-lg-block ">
                                <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                                    LLEVA TUS IDEAS A UN LUGAR QUE NUNCA
                                    IMAGINASTE
                                </p>
                            </div>
                            <BotonContactanos />
                        </div>
                    </div>
                    {/* Celular */}
                    <div className="d-sm-none d-block">
                        <div className="d-flex justify-content-center align-items-end">
                            <div className="card-home">
                                <div className="my-4 mx-3">
                                    <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                                        Lleva tus ideas a un lugar <br />
                                        que nunca imaginaste
                                    </p>
                                    <BotonContactanos />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
