import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Papa from "papaparse";
import axios from "axios";
import { Image, Spinner } from "react-bootstrap";

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

export default function Clientes() {
    const { width } = useWindowDimensions();
    const [trabajos, setTrabajos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getTrabajos = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?gid=1856388429&single=true&output=csv"
            );

            const imagenes = Papa.parse(response.data, { header: true });

            setTrabajos(imagenes.data);
            setLoading(false);
        };
        getTrabajos();
    }, []);

    return (
        <div>
            <div className="d-sm-block d-none">
                <div className="d-flex justify-content-center my-5 pt-4">
                    <div className=" titulos-impacto text-white px-5 text-center peso-bold-italic tamaño-mas-grande ">
                        <p className="mb-0">Happy ending</p>
                    </div>
                </div>
            </div>
            <div className="d-block d-sm-none">
                <div className="d-flex justify-content-center my-5">
                    <div className="titulos-impacto text-white px-5 text-center peso-bold-italic tamaño-grande  ">
                        <p className="mb-0">Happy ending</p>
                    </div>
                </div>
            </div>
            {loading ? (
                <div className="text-white d-flex justify-content-center my-5 p-5">
                    <Spinner
                        className="fs-1"
                        animation="border"
                        role="status"
                        variant="light"
                    ></Spinner>
                </div>
            ) : (
                <div className="mb-5">
                    <div className="d-sm-flex d-none flex-wrap justify-content-center container">
                        {trabajos.slice(0, 10).map((trabajo) => (
                            <div className="col-25 d-flex justify-content-center align-items-center p-2">
                                <Image
                                    src={trabajo.imagen1}
                                    alt={trabajo.titulo}
                                    fluid
                                />
                            </div>
                        ))}
                    </div>
                    <div className="d-flex d-sm-none flex-wrap justify-content-center">
                        {trabajos.slice(0, 10).map((trabajo) => (
                            <div className="col-4 d-flex justify-content-center align-items-center p-2">
                                <Image
                                    src={trabajo.imagen1}
                                    alt={trabajo.titulo}
                                    fluid
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
