import React from "react";
import BotonContactanos from "../../BotonContactanos";

export default function Banner() {
    return (
        <>
            <div className="color-azul-oscuro-fondo">
                <div className="fondo-banner">
                    <div className="card-position d-flex justify-content-center align-items-end">
                        <div className="card-home  ">
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
        </>
    );
}
