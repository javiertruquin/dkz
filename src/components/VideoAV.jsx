import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-bootstrap/Modal";
import { Navigation } from "swiper";
import { Carousel, Image } from "react-bootstrap";
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

export default function VideoAV() {
    const [show, setShow] = useState(false);
    const { width } = useWindowDimensions();
    const params = useParams();
    const [trabajos, setTrabajos] = useState({});
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const getTrabajos = async () => {
        const response = await axios.get(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?output=csv"
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

    if (imagen4 !== "") {
        var cantcard = 4;
    } else if (imagen3 !== "") {
        var cantcard = 3;
    } else {
        var cantcard = 2;
    }

    return (
        <div className="mt-lg-5 mt-0 padding-sitioconst container text-center">
            <div className="d-flex justify-content-center">
                <p className="text-white tamaño-mas-grande titulos-impacto px-4">
                    {titulo}
                </p>
            </div>
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
                navigation={width <= 500 ? true : imagen5 !== "" ? true : false}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 3600,
                    disableOnInteraction: false,
                }}
                spaceBetween={10}
                slidesPerView={
                    width <= 500
                        ? 1.5
                        : width <= 992
                        ? cantcard - 1.5
                        : width <= 1200
                        ? cantcard - 1
                        : cantcard
                }
                className="my-5 efecto-hover"
            >
                {imagen1 === "" ? (
                    ""
                ) : (
                    <SwiperSlide
                        onClick={() => {
                            setShow(true);
                            setIndex(0);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img
                                src={imagen1}
                                alt={titulo}
                                className="border-card"
                            />
                        </div>
                    </SwiperSlide>
                )}
                {imagen2 === "" ? (
                    ""
                ) : (
                    <SwiperSlide
                        onClick={() => {
                            setShow(true);
                            setIndex(1);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img
                                src={imagen2}
                                alt={titulo}
                                className="border-card"
                            />
                        </div>
                    </SwiperSlide>
                )}
                {imagen3 === "" ? (
                    ""
                ) : (
                    <SwiperSlide
                        onClick={() => {
                            setShow(true);
                            setIndex(2);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img
                                src={imagen3}
                                alt={titulo}
                                className="border-card"
                            />
                        </div>
                    </SwiperSlide>
                )}
                {imagen4 === "" ? (
                    ""
                ) : (
                    <SwiperSlide
                        onClick={() => {
                            setShow(true);
                            setIndex(3);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img
                                src={imagen4}
                                alt={titulo}
                                className="border-card"
                            />
                        </div>
                    </SwiperSlide>
                )}
                {imagen5 === "" ? (
                    ""
                ) : (
                    <SwiperSlide
                        onClick={() => {
                            setShow(true);
                            setIndex(4);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img
                                src={imagen5}
                                alt={titulo}
                                className="border-card"
                            />
                        </div>
                    </SwiperSlide>
                )}
                {imagen6 === "" ? (
                    ""
                ) : (
                    <SwiperSlide
                        onClick={() => {
                            setShow(true);
                            setIndex(5);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img
                                src={imagen6}
                                alt={titulo}
                                className="border-card"
                            />
                        </div>
                    </SwiperSlide>
                )}
                {imagen7 === "" ? (
                    ""
                ) : (
                    <SwiperSlide
                        onClick={() => {
                            setShow(true);
                            setIndex(6);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img
                                src={imagen7}
                                alt={titulo}
                                className="border-card"
                            />
                        </div>
                    </SwiperSlide>
                )}
                {imagen8 === "" ? (
                    ""
                ) : (
                    <SwiperSlide
                        onClick={() => {
                            setShow(true);
                            setIndex(7);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img
                                src={imagen8}
                                alt={titulo}
                                className="border-card"
                            />
                        </div>
                    </SwiperSlide>
                )}
                {imagen9 === "" ? (
                    ""
                ) : (
                    <SwiperSlide
                        onClick={() => {
                            setShow(true);
                            setIndex(8);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img
                                src={imagen9}
                                alt={titulo}
                                className="border-card"
                            />
                        </div>
                    </SwiperSlide>
                )}
                {imagen10 === "" ? (
                    ""
                ) : (
                    <SwiperSlide
                        onClick={() => {
                            setShow(true);
                            setIndex(9);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="p-2 d-flex flex-column justify-content-between ">
                            <img
                                src={imagen10}
                                alt={titulo}
                                className="border-card"
                            />
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
            <Modal show={show} onHide={() => setShow(false)} size="xl" centered>
                <Modal.Body>
                    <div>
                        <Carousel
                            activeIndex={index}
                            onSelect={handleSelect}
                            indicators={false}
                            controls={true}
                            className="container"
                            interval={null}
                        >
                            <Carousel.Item>
                                <Image
                                    className=""
                                    src={imagen1}
                                    alt="Imagen no encontrada"
                                    fluid
                                />
                            </Carousel.Item>
                            {imagen2 === "" ? (
                                ""
                            ) : (
                                <Carousel.Item className="">
                                    <Image
                                        className=""
                                        src={imagen2}
                                        alt="Imagen no encontrada"
                                        fluid
                                    />
                                </Carousel.Item>
                            )}
                            {imagen3 === "" ? (
                                ""
                            ) : (
                                <Carousel.Item className="">
                                    <Image
                                        className=""
                                        src={imagen3}
                                        alt="Imagen no encontrada"
                                        fluid
                                    />
                                </Carousel.Item>
                            )}
                            {imagen4 === "" ? (
                                ""
                            ) : (
                                <Carousel.Item className="">
                                    <Image
                                        className=""
                                        src={imagen4}
                                        alt="Imagen no encontrada"
                                        fluid
                                    />
                                </Carousel.Item>
                            )}
                            {imagen5 === "" ? (
                                ""
                            ) : (
                                <Carousel.Item className="">
                                    <Image
                                        className=""
                                        src={imagen5}
                                        alt="Imagen no encontrada"
                                        fluid
                                    />
                                </Carousel.Item>
                            )}
                            {imagen6 === "" ? (
                                ""
                            ) : (
                                <Carousel.Item className="">
                                    <Image
                                        className=""
                                        src={imagen6}
                                        alt="Imagen no encontrada"
                                        fluid
                                    />
                                </Carousel.Item>
                            )}
                            {imagen7 === "" ? (
                                ""
                            ) : (
                                <Carousel.Item className="">
                                    <Image
                                        className=""
                                        src={imagen7}
                                        alt="Imagen no encontrada"
                                        fluid
                                    />
                                </Carousel.Item>
                            )}
                            {imagen8 === "" ? (
                                ""
                            ) : (
                                <Carousel.Item className="">
                                    <Image
                                        className=""
                                        src={imagen8}
                                        alt="Imagen no encontrada"
                                        fluid
                                    />
                                </Carousel.Item>
                            )}
                            {imagen9 === "" ? (
                                ""
                            ) : (
                                <Carousel.Item className="">
                                    <Image
                                        className=""
                                        src={imagen9}
                                        alt="Imagen no encontrada"
                                        fluid
                                    />
                                </Carousel.Item>
                            )}
                            {imagen10 === "" ? (
                                ""
                            ) : (
                                <Carousel.Item className="">
                                    <Image
                                        className=""
                                        src={imagen10}
                                        alt="Imagen no encontrada"
                                        fluid
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                </Modal.Body>
            </Modal>
            {video2 === "" ? (
                ""
            ) : (
                <div className="mb-5 px-2">
                    <p className="text-white tamaño-mas-grande my-5">
                        Backstage
                    </p>
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
