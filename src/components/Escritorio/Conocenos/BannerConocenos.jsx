import React from "react";
import BotonContactanos from "../../BotonContactanos";

export default function BannerConocenos() {
    return (
        <>
            <div className="color-azul-oscuro-fondo">
                <img
                    className="banner-escritorio"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653705291/conocenos/Group_54_4_jfmc3t.png"
                    alt="Banner-escritorio"
                />
                <div className="banner-posi-escritorio mb-4">
                    <div className="d-lg-none d-block mb-5">
                        <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            +20 PROFESIONALES A TU DISPOSICIÓN <br />
                            Un gran equipo
                        </p>
                        <p className="tamaño-medio peso-italic text-white text-center espaciado texto-sombra ">
                            de Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do
                            <br />
                            consectetur adipiscing elit, sed do consectetur
                            adipiscing elit, sed do
                            <br />
                            eiusmod tempor incididunt ut labore et consectetur
                            adipiscing elit, sed do
                            <br />
                            veniam, quis nostrud exercitation consectetur
                            adipiscing elit, sed do
                        </p>
                    </div>
                    <div className="d-none d-lg-block mb-5">
                        <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            +20 PROFESIONALES A TU DISPOSICIÓN <br />
                            Un gran equipo
                        </p>
                        <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
                            de Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do
                            <br />
                            consectetur adipiscing elit, sed do consectetur
                            adipiscing elit, sed do
                            <br />
                            eiusmod tempor incididunt ut labore et consectetur
                            adipiscing elit, sed do
                            <br />
                            veniam, quis nostrud exercitation consectetur
                            adipiscing elit, sed do
                        </p>
                    </div>
                    <BotonContactanos />
                </div>
            </div>
        </>
    );
}
