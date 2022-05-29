import React from "react";

export default function BannerAVE() {
    return (
        <>
            <div className="color-azul-oscuro-fondo">
                <img
                    className="banner-escritorio"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653704987/audiovisual/Group_54_1_b492vr.png"
                    alt="Banner-AV-escritorio"
                />
                <div className="banner-posi-escritorio">
                    <div className="d-lg-none d-block">
                        <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra mb-0">
                            PRODUCCIONES AUDIOVISUALES INTEGRALES
                        </p>
                        <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
                            Spots publicitarios; cobertura de eventos y
                            registros sociales.
                            <br /> Videos corporativos. Infomerciales.
                            Institucionales. Books. <br /> Producciones
                            especiales.
                        </p>
                    </div>
                    <div className="d-none d-lg-block">
                        <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra mb-0">
                            PRODUCCIONES AUDIOVISUALES INTEGRALES
                        </p>
                        <p className="tamaño-mas-grande peso-italic text-white text-center espaciado texto-sombra">
                            Spots publicitarios; cobertura de eventos y
                            registros sociales.
                            <br /> Videos corporativos. Infomerciales.
                            Institucionales. Books. <br /> Producciones
                            especiales.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
