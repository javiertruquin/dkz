import React from "react";

export default function BannerConocenos() {
    return (
        <>
            <div className="color-azul-oscuro-fondo">
                <img
                    className="banner-escritorio"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653705291/conocenos/Group_54_4_jfmc3t.png"
                    alt="Banner-escritorio"
                />
                <div className="banner-posi-escritorio mb-4 banner-conocenos">
                    <div className="d-lg-none d-block mb-5">
                        <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            +20 PROFESIONALES A TU DISPOSICIÓN <br />
                            Un gran equipo
                        </p>
                        <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra ">
                        Somos un equipo de creativos, profesionales publicitarios, acordes a las demandas y las exigencias del cliente. Explotamos en conjunto con la revolución digital de la nueva era. Somos artistas avocados a nuestra profesión, pasionales, entusiastas.
                        </p>
                    </div>
                    <div className="d-none d-lg-block mb-5">
                        <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            +20 PROFESIONALES A TU DISPOSICIÓN <br />
                            Un gran equipo
                        </p>
                        <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
                            Somos un equipo de creativos, profesionales publicitarios, acordes a las demandas y las exigencias del cliente. <br /> Explotamos en conjunto con la revolución digital de la nueva era. Somos artistas avocados a nuestra profesión, pasionales, entusiastas.<br /> 
                            Tenemos la capacidad de formular, crear, ejecutar y evaluar propuestas publicitarias dirigidas a consumidores activos. <br /> Nuestra imaginación nos lleva a lugares recónditos de nuestra mente, buscando explotar cada neurotransmisor para crear productos únicos e inigualables.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
