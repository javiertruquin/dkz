import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Papa from "papaparse";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Image, Spinner } from "react-bootstrap";
import { Autoplay } from "swiper";

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
        width,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export default function TrabajosMindBlown() {
    const [loading, setLoading] = useState(false);
    const { width } = useWindowDimensions();
    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
        setLoading(true);
        const getTrabajos = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?gid=2150379&single=true&output=csv"
            );

            const imagenes = Papa.parse(response.data, { header: true });

            setTrabajos(imagenes.data);
            setLoading(false);
        };
        getTrabajos();
    }, []);

    return (
        <>
            {loading ? (
                <div className=" text-white  d-flex justify-content-center my-5 p-5">
                    <Spinner
                        className="fs-1"
                        animation="border"
                        role="status"
                        variant="light"
                    ></Spinner>
                </div>
            ) : (
                <div className={width <= 992 ? "my-5" : "my-5 container"}>
                    <Swiper
                        navigation={width <= 720 ? true : false}
                        spaceBetween={10}
                        slidesPerView={
                            width <= 365
                                ? 1.5
                                : width <= 390
                                ? 1.75
                                : width <= 500
                                ? 2
                                : width <= 720
                                ? 2.5
                                : 3
                        }
                        className="margen-mb-trabajos my-5"
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {trabajos.slice(0, 3).map((trabajo) => (
                            <SwiperSlide>
                                <NavLink to={"/mindblown/" + trabajo.id}>
                                    <div className="p-2 d-flex flex-column justify-content-between">
                                        <div className="caja-mb">
                                            <div className="imgBx-mb">
                                                <Image
                                                    className=""
                                                    src={trabajo.imagenMini}
                                                    alt={trabajo.titulo}
                                                    fluid
                                                />
                                            </div>
                                            <div className="details-mb">
                                                <h2 className="tamaño-medio">
                                                    {trabajo.titulo}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        className="my-5"
                        navigation={width <= 870 ? true : false}
                        spaceBetween={10}
                        slidesPerView={
                            width <= 365
                                ? 1.5
                                : width <= 390
                                ? 1.75
                                : width <= 500
                                ? 2
                                : width <= 720
                                ? 2.5
                                : width <= 860
                                ? 3.3
                                : 4
                        }
                        autoplay={{
                            delay: 3600,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {trabajos.slice(3, 7).map((trabajo) => (
                            <SwiperSlide>
                                <NavLink to={"/mindblown/" + trabajo.id}>
                                    <div className="p-2 d-flex flex-column justify-content-between ">
                                        <div className="caja-mb">
                                            <div className="imgBx-mb">
                                                <Image
                                                    className=""
                                                    src={trabajo.imagenMini}
                                                    alt={trabajo.titulo}
                                                    fluid
                                                />
                                            </div>
                                            <div className="details-mb">
                                                <h2 className="tamaño-medio">
                                                    {trabajo.titulo}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        navigation={width <= 720 ? true : false}
                        spaceBetween={10}
                        slidesPerView={
                            width <= 365
                                ? 1.5
                                : width <= 390
                                ? 1.75
                                : width <= 500
                                ? 2
                                : width <= 720
                                ? 2.5
                                : 3
                        }
                        className="margen-mb-trabajos my-5"
                        autoplay={{
                            delay: 3700,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {trabajos.slice(7, 10).map((trabajo) => (
                            <SwiperSlide>
                                <NavLink to={"/mindblown/" + trabajo.id}>
                                    <div className="p-2 d-flex flex-column justify-content-between ">
                                        <div className="caja-mb">
                                            <div className="imgBx-mb">
                                                <Image
                                                    className=""
                                                    src={trabajo.imagenMini}
                                                    alt={trabajo.titulo}
                                                    fluid
                                                />
                                            </div>
                                            <div className="details-mb">
                                                <h2 className="tamaño-medio">
                                                    {trabajo.titulo}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </>
    );
}
