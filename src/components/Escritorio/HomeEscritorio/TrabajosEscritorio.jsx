import React from "react";
import BotonMindBlown from "../../BotonMindBlown";

export default function TrabajosEscritorio() {
    return (
        <div className="mt-5">
            <div>
                <h1 className="peso-bold-italic tamaño-mas-grande text-white text-center">
                    {/* Mira algunos de nuestros trabajos y descubrí lo que somos{" "}
                    <br /> capaces de hacer con tu marca. */}
                    ¿ Quieres que tu cabeza explote de creatividad?
                </h1>
            </div>
            <div className="mt-4 d-flex justify-content-center">
                <BotonMindBlown />
            </div>
        </div>
    );
}
