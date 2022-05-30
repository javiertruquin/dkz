import React from "react";
import Tada from "react-reveal/Tada";
import { Link } from "react-router-dom";

export default function BotonConocenos() {
    return (
        <Tada>
            <div className="d-flex justify-content-center">
                <div className="boton-verde">
                    <div className="d-none d-sm-block">
                        <Link
                            className=" m-0 p-0 peso-bold tamaño-grande sin-sub"
                            to="/conocenos"
                        >
                            <span className="color-azul-oscuro">
                                Conocenos
                            </span>
                        </Link>
                    </div>
                    <div className="d-sm-none d-block">
                        <Link
                            className=" m-0 p-0 peso-bold tamaño-medio sin-sub"
                            to="/conocenos"
                        >
                            <span className="color-azul-oscuro">
                                Conocenos
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </Tada>
    );
}