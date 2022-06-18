import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Papa from "papaparse";
import axios from "axios";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import { Spinner } from "react-bootstrap";

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

export default function HappyEndingCards() {
    const { width } = useWindowDimensions();
    const [trabajos, setTrabajos] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getTrabajos = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?gid=1856388429&single=true&output=csv"
            );

            const imagenes = Papa.parse(response.data, { header: true });

            setTrabajos(imagenes.data);
            setLoading(FOCUSABLE_SELECTOR)
        };
        getTrabajos();
    }, []);

    return (
        <div>
            <div className="text-white text-center peso-bold-italic tamaño-mas-grande d-sm-block d-none mt-5 padding-nav">
                <p>Happy ending</p>
            </div>
            <div className="text-white text-center peso-bold-italic tamaño-grande d-block d-sm-none mt-5 padding-nav">
                <p>Happy ending</p>
            </div>

            {loading ? (
                <div className="my-5 text-white  d-flex justify-content-center my-5 p-5">
                    <Spinner className="fs-1" animation="border" role="status" variant="light">
                    </Spinner>
                </div>
            ) : (<div className={width <= 800 ? "my-5" : "my-5 container"}>
                <Swiper
                    spaceBetween={2}
                    slidesPerView={4}
                    className="mx-4"
                >
                    {trabajos.slice(0, 4).map((trabajo) => (
                        <SwiperSlide>
                            <div className="p-2 d-flex flex-column justify-content-between ">
                                <img
                                    src={trabajo.imagen1}
                                    alt={trabajo.titulo}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={2}
                    slidesPerView={4}
                    className="mx-4"
                >
                    {trabajos.slice(4, 8).map((trabajo) => (
                        <SwiperSlide>
                            <div className="p-2 d-flex flex-column justify-content-between ">
                                <img
                                    src={trabajo.imagen1}
                                    alt={trabajo.titulo}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={2}
                    slidesPerView={4}
                    className="mx-4"
                >
                    {trabajos.slice(8, 12).map((trabajo) => (
                        <SwiperSlide>
                            <div className="p-2 d-flex flex-column justify-content-between ">
                                <img
                                    src={trabajo.imagen1}
                                    alt={trabajo.titulo}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={2}
                    slidesPerView={4}
                    className="mx-4"
                >
                    {trabajos.slice(12, 16).map((trabajo) => (
                        <SwiperSlide>
                            <div className="p-2 d-flex flex-column justify-content-between ">
                                <img
                                    src={trabajo.imagen1}
                                    alt={trabajo.titulo}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    spaceBetween={2}
                    slidesPerView={4}
                    className="mx-4"
                >
                    {trabajos.slice(16, 20).map((trabajo) => (
                        <SwiperSlide>
                            <div className="p-2 d-flex flex-column justify-content-between ">
                                <img
                                    src={trabajo.imagen1}
                                    alt={trabajo.titulo}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>)}
        </div>
    );
}
