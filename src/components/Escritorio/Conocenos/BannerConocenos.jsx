import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BannerConocenos() {
  return (
    <div>
      <div className="pb-5 color-azul-oscuro-fondo">
        <div className="fondo-banner-conocenos-escritorio">
          <div className="card-position">
            <div className="banner-pie-conocenos-escritorio  d-flex justify-content-center container-fluid">
              <div className="text-white ">
                <h1 className=" peso-bold-italic my-2">
                  {" "}
                  +20 profesionales a tu disposición <br />
                  Un gran equipo
                </h1>
                <p className="peso-italic tamaño-medio">
                  de Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do
                  <br />
                  consectetur adipiscing elit, sed do consectetur adipiscing
                  elit, sed do
                  <br />
                  eiusmod tempor incididunt ut labore et consectetur adipiscing
                  elit, sed do
                  <br />
                  veniam, quis nostrud exercitation consectetur adipiscing elit,
                  sed do
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <div className=" my-4 d-flex justify-content-center">
          <div className="boton-verde">
            <p className=" m-0 p-0 color-azul-oscuro peso-bold tamaño-medio">
              <Nav.Link as={Link} to="/Contactanos">
                {" "}
                <span className="text-dark">Contactanos</span>
              </Nav.Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
