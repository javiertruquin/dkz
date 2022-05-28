import React from "react";

export default function Frase() {
    return (
        <div className="color-azul-oscuro-fondo mx-auto">
            <div className="d-flex justify-content-center">
                <div className="efecto-blur-card mt-5 mx-2">
                    <div className="m-3">
                        <p className="peso-italic text-white text-center tamaño-medio">
                            “Aquellos que están lo suficientemente <br />
                            locos para creer que pueden cambiar <br />
                            el mundo son quienes lo cambian”
                            <span className="d-flex justify-content-end tamaño-chico mx-3">
                                Steve Jobs{" "}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
