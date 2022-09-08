import React from "react";

export default function BannerPrensa() {
    return (
        <>
            <div className="pb-4 color-azul-oscuro-fondo">
                <div className="fondo-banner-prensa-cel">
                    <div className="card-position">
                        <div className="titulo-audiovisual d-flex flex-column justify-content-center">
                            <div className="my-5 mx-3 padding-nav">
                                <h1 className=" titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado titulo-producciones">
                                    PRENSA 
                                </h1>
                            </div>
                        </div>
                        {/* <div className="banner-pie-prensa d-flex justify-content-center rounded-3 color-violeta-fondo-banner-pie px-1">
                            <div className="text-white ">
                                <h1 className=" peso-bold-italic my-2">
                                    {" "}
                                    Prensa
                                </h1>
                                <p className="peso-italic tamaño-medio px-2">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi laudantium rem facilis accusantium expedita explicabo quis quibusdam nostrum? At sint, iure amet temporibus dolores eaque voluptas dolor nam neque cumque?
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
