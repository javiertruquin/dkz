import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
import Papa from "papaparse";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Spinner } from "react-bootstrap";
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

export default function TrabajosDiseñoGrafico() {
    const { width } = useWindowDimensions();
    const [trabajos, setTrabajos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getTrabajos = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?gid=296520141&single=true&output=csv"
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
                <div className="my-5 text-white  d-flex justify-content-center my-5 p-5">
                    <Spinner
                        className="fs-1"
                        animation="border"
                        role="status"
                        variant="light"
                    ></Spinner>
                </div>
            ) : (
                <div
                    className={
                        width <= 800
                            ? "mt-sm-5 mb-5 mt-2"
                            : "mt-sm-5 mb-5 mt-2 container"
                    }
                >
                    <Swiper
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={10}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={
                            width <= 365
                                ? 1.5
                                : width <= 390
                                ? 1.75
                                : width <= 650
                                ? 2
                                : width <= 992
                                ? 3
                                : width <= 1200
                                ? 4
                                : 5
                        }
                    >
                        {trabajos.map((trabajo) => (
                            <SwiperSlide>
                                <NavLink to={"/DisGrafico/" + trabajo.id}>
                                    <div className="py-5 d-flex flex-column justify-content-around">
                                        <div className="caja-service">
                                            <div className="imgBx-service">
                                                <img
                                                    className=""
                                                    src={trabajo.imagenMini}
                                                    alt={trabajo.titulo}
                                                />
                                            </div>
                                            <div className="details-service">
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
