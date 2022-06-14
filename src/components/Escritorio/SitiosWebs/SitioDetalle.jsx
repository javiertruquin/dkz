import React from "react";
import { Col, Image, Row } from "react-bootstrap";

export default function SitioDetalle({ dato }) {
  const {
    imagenMonitor,
    imagenTablet,
    imagenCel,
    nombrePagina,
    subTitulo,
    descripcion,
    url,
  } = dato;
  return (
    <div className="container">
        <div>
        <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra my-2">{nombrePagina} </p>
        <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">{subTitulo }</p>
      </div>
      <div>
        <Row>
          <Image
            className="my-2 image-monitor"
            src={imagenMonitor}
            alt="monitor"
            fluid
          />
          <Col className="mt-2">
            <Image
              className="imagen-cuadrada"
              src={imagenTablet}
              alt="tablet-note"
              fluid
            />
          </Col>
          <Col className="mt-2">
            <Image
              className="imagen-cuadrada"
              src={imagenCel}
              alt="Cel"
              fluid
            />
          </Col>
        </Row>
      </div>
      <div>
        <p className="tamaño-grande  peso-italic text-white text-center espaciado texto-sombra  my-5"> {descripcion}</p>
      </div>
      <div>
        <p className="tamaño-grande  peso-italic text-white text-center espaciado texto-sombra  my-5"> Dale una vuelta a este site: <a href={url} target="_blank" rel="noreferrer">{ url}</a> </p>
      </div>
    </div>
  );
}
