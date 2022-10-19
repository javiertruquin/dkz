import React from "react";
import { Image } from "react-bootstrap";

export default function BannerConocenos() {
    return (
        <div className="color-azul-oscuro-fondo">
            <div className="d-none d-sm-block">
                <div className="color-azul-oscuro-fondo">
                    <Image
                        className="banner-escritorio"
                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653705291/conocenos/Group_54_4_jfmc3t.png"
                        alt="Banner-escritorio"
                        fluid
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <p className="mb-0 titulos-impacto margen-negativo px-5 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                        +20 PROFESIONALES <br /> A TU DISPOSICIÓN
                    </p>
                </div>
                <div className="my-5 pt-4 container">
                    <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra ">
                        Un gran equipo
                    </p>
                    <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra px-5">
                        Somos un equipo de creativos, profesionales
                        publicitarios, acordes a las demandas y las exigencias
                        del cliente. Explotamos en conjunto con la revolución
                        digital de la nueva era. Somos artistas avocados a
                        nuestra profesión, pasionales, entusiastas. Tenemos la
                        capacidad de formular, crear, ejecutar y evaluar
                        propuestas publicitarias dirigidas a consumidores
                        activos. Nuestra imaginación nos lleva a lugares
                        recónditos de nuestra mente, buscando explotar cada
                        neurotransmisor para crear productos únicos e
                        inigualables.
                    </p>
                </div>
            </div>
            <div className="d-sm-none d-block">
                <div className="color-azul-oscuro-fondo">
                    <div className="fondo-banner-conocenos">
                        <div className="card-position d-flex justify-content-center align-items-end">
                            <div className=" titulo-conocenos d-flex flex-column justify-content-center ">
                                <div className="my-5 mx-4">
                                    <h1 className="titulos-impacto px-2  peso-bold-italic text-white text-center mas-espaciado">
                                        +20 PROFESIONALES A TU DISPOSICIÓN
                                        <br />
                                    </h1>
                                </div>
                            </div>
                            <div className="card-home-conocenos color-violeta-fondo-banner-pie banner-pie-cel rounder-3 px-1">
                                <div className="my-4 mx-3">
                                    <h1 className="peso-bold-italic text-white text-center">
                                        Un gran equipo
                                    </h1>
                                    <p className="peso-italic tamaño-medio px-2 text-white text-center texto-sombra">
                                        Somos un equipo de creativos,
                                        profesionales publicitarios, acordes a
                                        las demandas y las exigencias del
                                        cliente. Explotamos en conjunto con la
                                        revolución digital de la nueva era.
                                        Somos artistas avocados a nuestra
                                        profesión, pasionales, entusiastas.
                                        Tenemos la capacidad de formular, crear,
                                        ejecutar y evaluar propuestas
                                        publicitarias dirigidas a consumidores
                                        activos. Nuestra imaginación nos lleva a
                                        lugares recónditos de nuestra mente,
                                        buscando explotar cada neurotransmisor
                                        para crear productos únicos e
                                        inigualables.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
