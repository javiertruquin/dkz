import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

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

export default function VideoMindBlown() {
    const { width } = useWindowDimensions();
    const params = useParams();
    const [trabajos, setTrabajos] = useState({});
    const getTrabajos = async () => {
        const response = await axios.get(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?gid=2150379&single=true&output=csv"
        );

        const trabajos = Papa.parse(response.data, { header: true });
        const trabajo1 = trabajos.data;

        const trabajoFiltrado = trabajo1.filter(
            (trabajo) => trabajo.id === params.id
        );
        setTrabajos(trabajoFiltrado[0]);
    };
    useEffect(() => {
        getTrabajos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const {
        titulo,
        descripcion,
        imagen1,
        imagen2,
        imagen3,
        imagen4,
        imagen5,
        imagen6,
        imagen7,
        imagen8,
        imagen9,
        imagen10,
        video1,
        video2,
    } = trabajos;

    if (imagen5 !== "") {
        var cantcard = 5;
    } else if (imagen4 !== "") {
        var cantcard = 4;
    } else {
        var cantcard = 3;
    }

    return (
        <div className="mt-lg-5 mt-0 padding-sitioconst container text-center">
            <p className="text-white tamaño-mas-grande mb-5">{titulo}</p>
            <p className="text-white tamaño-grande  mb-5 mx-3">{descripcion}</p>
            {video1 === "" ? (
                ""
            ) : (
                <div className="mb-5 px-2">
                    <ReactPlayer
                        url={video1}
                        playing={false}
                        muted
                        controls={true}
                        width="100%"
                        height="600px"
                    />
                </div>
            )}
            <Swiper
                spaceBetween={10}
                slidesPerView={width <= 500 ? 1.5 : cantcard}
                className="my-5 "
            >
                {imagen1 === "" ? (
                    ""
                ) : (
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img src={imagen1} alt={titulo} className="border-card"/>
                        </div>
                    </SwiperSlide>
                )}
                {imagen2 === "" ? (
                    ""
                ) : (
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img src={imagen2} alt={titulo} className="border-card"/>
                        </div>
                    </SwiperSlide>
                )}
                {imagen3 === "" ? (
                    ""
                ) : (
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img src={imagen3} alt={titulo} className="border-card"/>
                        </div>
                    </SwiperSlide>
                )}
                {imagen4 === "" ? (
                    ""
                ) : (
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img src={imagen4} alt={titulo} className="border-card"/>
                        </div>
                    </SwiperSlide>
                )}
                {imagen5 === "" ? (
                    ""
                ) : (
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img src={imagen5} alt={titulo} className="border-card"/>
                        </div>
                    </SwiperSlide>
                )}
                {imagen6 === "" ? (
                    ""
                ) : (
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img src={imagen6} alt={titulo} className="border-card"/>
                        </div>
                    </SwiperSlide>
                )}
                {imagen7 === "" ? (
                    ""
                ) : (
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img src={imagen7} alt={titulo} className="border-card"/>
                        </div>
                    </SwiperSlide>
                )}
                {imagen8 === "" ? (
                    ""
                ) : (
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img src={imagen8} alt={titulo} className="border-card"/>
                        </div>
                    </SwiperSlide>
                )}
                {imagen9 === "" ? (
                    ""
                ) : (
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img src={imagen9} alt={titulo} className="border-card"/>
                        </div>
                    </SwiperSlide>
                )}
                {imagen10 === "" ? (
                    ""
                ) : (
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img src={imagen10} alt={titulo} className="border-card"/>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            {video2 === "" ? (
                ""
            ) : (
                

                <div className="mb-5 px-2">
                    <p className="text-white tamaño-mas-grande my-5">Backstage</p>
                    <ReactPlayer
                        url={video2}
                        playing={false}
                        muted
                        controls={true}
                        width="100%"
                        height="600px"
                    />
                </div>
            )}
        </div>
    );
}
