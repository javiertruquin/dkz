import React from "react";
import RubberBand from "react-reveal/RubberBand";
import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CartasEscritorio() {
  return (
    <div className="color-azul-oscuro-fondo mb-5 ">
      <div>
        <div className="container">
          <p className=" text-center my-4 tamaño-mas-grande mas-espaciado mt-5">
            <span className="mx-2 color-verde">DIGITAL</span>
            <span className="peso-bold-italic color-verde-claro ">
              SOLUTIONS
            </span>
          </p>
          <div className="d-flex flex-wrap justify-content-center">
            <RubberBand>
              <Nav.Link as={Link} to="/eventos">
                <Card className="border-card color-blanco mx-4 my-4 card-digital-escritorio">
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      className="imagen-card-conocenos"
                      src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_sqJ4tLBiurw_yeyos1.png"
                      alt="eventos"
                    />
                  </div>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title className="text-center peso-bold-italic tamaño-grande color-violeta">
                      Eventos
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </RubberBand>

            <RubberBand>
              <Nav.Link as={Link} to="/socialmedia">
                <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      className="imagen-card-conocenos"
                      src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                      alt="social media"
                    />
                  </div>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title className="text-center peso-bold-italic tamaño-grande color-violeta">
                      Social Media
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </RubberBand>

            <RubberBand>
              <Nav.Link as={Link} to="/sitiosweb">
                <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      className="imagen-card-conocenos"
                      src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_8qEB0fTe9Vw_yxqr4y.png"
                      alt="Sitios web"
                    />
                  </div>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title className="text-center peso-bold-italic tamaño-grande color-violeta">
                      Sitios web
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </RubberBand>

            <RubberBand>
              <Nav.Link as={Link} to="/audiovisual">
                <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      className="imagen-card-conocenos"
                      src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_4D-Q5INzhZE_iyo0vq.png"
                      alt="iconos solución digital"
                    />
                  </div>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title className="text-center peso-bold-italic tamaño-grande color-violeta">
                      Producción audiovisual
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </RubberBand>

            <RubberBand>
              <Nav.Link as={Link} to="/prensa">
                <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      className="imagen-card-conocenos"
                      src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_BcR77nBURV8_miaada.png"
                      alt="iconos solución digital"
                    />
                  </div>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title className="text-center peso-bold-italic tamaño-grande color-violeta">
                      Prensa
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </RubberBand>

            <RubberBand>
              <Nav.Link as={Link} to="/DisGrafico">
                <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      className="imagen-card-conocenos"
                      src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653499629/Home/unsplash_8qEB0fTe9Vw_ykmlma.png"
                      alt="iconos solución digital"
                    />
                  </div>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title className="text-center peso-bold-italic tamaño-grande color-violeta">
                    Diseño Gráfico
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </RubberBand>
            
            <RubberBand>
              <Nav.Link as={Link} to="/consultoria">
                <Card className="border-card color-blanco my-4 mx-4 card-digital-escritorio">
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      className="imagen-card-conocenos"
                      src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_m2TU2gfqSeE_gmwapk.png"
                      alt="iconos solución digital"
                    />
                  </div>
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Title className="text-center peso-bold-italic tamaño-grande color-violeta">
                      Consultoría
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </RubberBand>

           
          </div>
        </div>
      </div>
    </div>
  );
}
