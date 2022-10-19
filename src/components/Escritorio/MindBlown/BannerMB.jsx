import React from "react";

export default function BannerMB() {
    return (
        <>
            <div className="color-azul-oscuro-fondo">
                <img
                    className="banner-escritorio"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653777449/mindblown/BannerMB_ocd74q.png"
                    alt="Banner-MB-escritorio"
                />
                <div className="banner-posi-mb-escritorio">
                    <div className="d-lg-none d-block">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="titulos-impacto px-5 margen-negativo2">
                                <p className="mb-0 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                                    MIND BLOWN
                                </p>
                            </div>
                        </div>
                        <p className="mb-0 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            CHEQUEA ALGUNOS DE NUESTROS TRABAJOS
                        </p>
                    </div>
                    <div className="d-none d-lg-block">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="titulos-impacto px-5 margen-negativo2">
                                <p className="mb-0 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                                    MIND BLOWN
                                </p>
                            </div>
                        </div>
                        <p className="mb-0 impacto-escritorio tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            CHEQUEA ALGUNOS DE NUESTROS TRABAJOS
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
