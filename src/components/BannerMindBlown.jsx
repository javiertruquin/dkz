import React from "react";

export default function BannerMindBlown() {
    return (
        <>
            <div className="d-none d-sm-block">
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
            </div>
            <div className="d-sm-none d-block">
                <div className="color-azul-oscuro-fondo">
                    <div className="fondo-banner-trabajos">
                        <div className="d-flex flex-row justify-content-center">
                            <div className="titulo-audiovisual pt-5 d-flex flex-column justify-content-center">
                                <div className="my-5 mx-3 padding-nav ">
                                    <p className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center mas-espaciado titulo-producciones">
                                        MIND BLOWN
                                    </p>
                                </div>
                            </div>
                            <div className="banner-pie d-flex justify-content-center">
                                <div className="text-white peso-bold-italic tamaño-grande">
                                    <p>
                                        {" "}
                                        Chequea algunos de <br />
                                        nuestros trabajos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
