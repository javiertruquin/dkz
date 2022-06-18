import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Papa from "papaparse";
import axios from "axios";
import { NavLink } from "react-router-dom";
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

export default function TrabajosEventos() {
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions();
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getTrabajos = async () => {
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?gid=1632136573&single=true&output=csv"
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
            width <= 800 ? "mt-sm-5 mb-5 mt-2" : "mt-sm-5 mb-5 mt-2 container"
          }
        >
          <Swiper spaceBetween={10} slidesPerView={width <= 800 ? 1.85 : 5}>
            {trabajos.map((trabajo) => (
              <SwiperSlide>
                <NavLink to={"/eventos/" + trabajo.id}>
                  <div className="p-2 d-flex flex-column justify-content-between ">
                    <img src={trabajo.imagen1} alt={trabajo.titulo} />
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
