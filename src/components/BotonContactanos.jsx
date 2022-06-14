import React from "react";
// import Tada from "react-reveal/Tada";
import { Link } from "react-router-dom";

export default function BotonContactanos() {
    return (
        // <Tada>
            <div className="d-flex justify-content-center">
                <div className="boton-verde">
                    <div className="d-none d-sm-block">
                        <Link
                            className=" m-0 p-0 peso-bold tamaño-grande sin-sub"
                            to="/contactanos"
                        >
                            <span className="color-azul-oscuro">
                                Contactanos
                            </span>
                        </Link>
                    </div>
                    <div className="d-sm-none d-block">
                        <Link
                            className=" m-0 p-0 peso-bold tamaño-medio sin-sub"
                            to="/contactanos"
                        >
                            <span className="color-azul-oscuro">
                                Contactanos
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        // </Tada>
    );
}
