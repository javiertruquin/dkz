import React from "react";

export default function BannerAV() {
    return (
        <>
            <div className="pb-4 color-azul-oscuro-fondo">
                <div className="fondo-banner-pav-cel">
                    <div className="card-position">
                        <div className="titulo-audiovisual d-flex flex-column justify-content-center">
                            <div className="my-5 mx-3">
                                <h1 className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado mt-5 titulo-producciones">
                                    PRODUCCIONES <br />
                                    AUDIOVISUALES
                                </h1>
                            </div>
                        </div>
                        <div className="banner-pie-audiovisual d-flex justify-content-center px-1">
                            <div className="text-white color-violeta-fondo-banner-pie rounded-3">
                                <h1 className=" peso-bold-italic my-2 titulos-impacto">
                                    {" "}
                                    Producciones audiovisuales integrales
                                </h1>
                                <p className="peso-italic tamaño-medio px-2 ">
                                    Spots publicitarios; cobertura de eventos y{" "}
                                    <br />
                                    registros sociales. Videos corporativos.{" "}
                                    <br /> Infomerciales. Institucionales.
                                    Books. <br /> Producciones especiales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
