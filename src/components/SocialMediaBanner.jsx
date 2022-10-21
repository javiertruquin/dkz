import React from "react";
import { Image } from "react-bootstrap";

export default function SocialMediaBanner() {
    return (
        <div>
            {/* Escritorio */}
            <div className="color-azul-oscuro-fondo d-none d-md-block">
                <Image
                    className="banner-escritorio"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1666059705/banners/BannerHome_dxeect.png"
                    alt="Banner-escritorio"
                    fluid
                />
                <div className="banner-posicion-escritorio">
                    <div className="d-lg-none d-block">
                        <div className="d-flex justify-content-center align-items-center">
                            <p className="titulos-impacto px-5 margen-negativo2 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                                EVENTOS
                            </p>
                        </div>
                    </div>
                    <div className="d-none d-lg-block">
                        <div className="d-flex justify-content-center align-items-center">
                            <p className="titulos-impacto px-5 margen-negativo2 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                                SOCIAL MEDIA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Celular */}
            <div className="pb-4 color-azul-oscuro-fondo d-md-none d-block">
                <div className="fondo-banner fondo-social-media">
                    <div className="card-position">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="my-5 mx-3">
                                <h1 className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado mt-5 px-5">
                                    SOCIAL MEDIA
                                </h1>
                            </div>
                        </div>
                        <div className="banner-pie-cel d-flex justify-content-center color-violeta-fondo-banner-pie px-1 rounded-3">
                            <div className="text-white">
                                <p className="peso-italic tamaño-medio px-2 py-4 mb-0">
                                    Desarrollamos estrategias personalizadas
                                    para tu empresa. Ponemos creatividad y
                                    compromiso a la hora de ejecutar proyectos
                                    digitales, basándonos en una marcada
                                    trayectoria a la hora de generar contenidos.
                                    Desarrollamos campañas y acciones
                                    específicas a través de las plataformas y
                                    canales de redes sociales de acuerdo con la
                                    estrategia global de la empresa. Una
                                    estrategia social eficaz puede ayudar a
                                    hacer crecer tu negocio y crear un
                                    compromiso con el público. Creando
                                    estrategias, creando HISTORIAS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
