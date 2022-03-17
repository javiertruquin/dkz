import React from "react";

export default function Banner() {
    return (
        <div className="fondo-banner">
            {/* <div className="  bg-abajo">
                <div className="bg-abajo"> */}
            <div className="card-position">
                <card className="card-home d-flex flex-column justify-content-center">
                    <div className="my-4 mx-3">
                        <p className="tamaño-grande peso-bold-italic text-white text-center espaciado ">
                            Lleva tus ideas a un lugar <br />
                            que nunca imaginaste
                        </p>
                        <div className="text-center">
                            <boton className="boton-morado">
                                <p className=" m-0 p-0 text-white">Contactanos</p>
                            </boton>
                        </div>
                    </div>
                </card>
            </div>
            {/* </div>
            </div> */}
        </div>
    );
}
