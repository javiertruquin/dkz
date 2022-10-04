import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Papa from "papaparse";
import axios from "axios";
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

export default function HappyEndingCardsEscritorio() {
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
    <div className="padding-sitioconst">
      <div className="d-flex justify-content-center">
        <div className="titulos-impacto-dg-escritorio text-white text-center peso-bold-italic tamaño-mas-grande d-sm-block d-none mt-5">
          <p className="mt-2">HAPPY ENDING</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="titulos-impacto-dg-escritorio text-white text-center peso-bold-italic tamaño-grande d-block d-sm-none  mt-5">
          <p className="mt-2">HAPPY ENDING</p>
        </div>
      </div>

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
        <div className={width <= 800 ? "my-5" : "my-5 container"}>
          <Swiper spaceBetween={10} slidesPerView={5} className="my-3">
            {trabajos.slice(0, 5).map((trabajo) => (
              <SwiperSlide>
                <div className="p-2 d-flex flex-column justify-content-between ">
                  <img src={trabajo.imagen1} alt={trabajo.titulo} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper spaceBetween={10} slidesPerView={5} className="my-3">
            {trabajos.slice(5, 10).map((trabajo) => (
              <SwiperSlide>
                <div className="p-2 d-flex flex-column justify-content-between ">
                  <img src={trabajo.imagen1} alt={trabajo.titulo} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper spaceBetween={10} slidesPerView={5} className="my-3">
            {trabajos.slice(10, 15).map((trabajo) => (
              <SwiperSlide>
                <div className="p-2 d-flex flex-column justify-content-between ">
                  <img src={trabajo.imagen1} alt={trabajo.titulo} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper spaceBetween={10} slidesPerView={5} className="my-3">
            {trabajos.slice(15, 20).map((trabajo) => (
              <SwiperSlide>
                <div className="p-2 d-flex flex-column justify-content-between ">
                  <img src={trabajo.imagen1} alt={trabajo.titulo} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
