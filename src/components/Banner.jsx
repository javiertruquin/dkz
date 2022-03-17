import React from "react";

export default function Banner() {
    return (
        <>
            <div className="pb-5 color-azul-oscuro-fondo">
                <div className="fondo-banner">
                    <div className="card-position">
                        <div className="card-home d-flex flex-column justify-content-center">
                            <div className="my-4 mx-3">
                                <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                                    Lleva tus ideas a un lugar <br />
                                    que nunca imaginaste
                                </p>
                                <div className="d-flex justify-content-center">
                                    <div className="boton-morado">
                                        <p className=" m-0 p-0 text-white tamaño-medio">
                                            Contactanos
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
