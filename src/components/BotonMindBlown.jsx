import React from "react";
import Tada from "react-reveal/Tada";
import { Link } from "react-router-dom";

export default function BotonMindBlown() {
    return (
        <Tada>
            <div className="d-flex justify-content-center mt-2">
                <div className="boton-verde">
                    <div className="d-none d-sm-block">
                        <Link
                            className=" m-0 p-0 peso-bold tamaño-grande sin-sub"
                            to="/mindblown"
                        >
                            <span className="color-azul-oscuro">
                                Mind Blown
                            </span>
                        </Link>
                    </div>
                    <div className="d-sm-none d-block">
                        <Link
                            className=" m-0 p-0 peso-bold tamaño-medio sin-sub"
                            to="/mindblown"
                        >
                            <span className="color-azul-oscuro">
                                Mind Blown
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </Tada>
    );
}