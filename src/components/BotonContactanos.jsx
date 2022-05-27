import React from "react";
import Tada from "react-reveal/Tada";
import { Link } from "react-router-dom";

export default function BotonContactanos() {
    return (
        <Tada>
            <div className="d-flex justify-content-center">
                <div className="boton-verde">
                    <Link
                        className=" m-0 p-0 color-azul-oscuro peso-bold tamaño-medio sin-sub"
                        to="/Contactanos"
                    >
                        Contactanos
                    </Link>
                </div>
            </div>
        </Tada>
    );
}
