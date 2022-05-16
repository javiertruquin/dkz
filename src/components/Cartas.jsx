import Trabajos from "./Trabajos";
import RubberBand from "react-reveal/RubberBand";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cartas() {
  return (
    <div className="color-azul-oscuro-fondo">
      <div>
        <div className="row">
          <h1 className="color-verde text-center my-4"> Digital solutions</h1>
          <div className="d-flex flex-wrap justify-content-around">
            <RubberBand>
              <Card className="border-card color-blanco my-4 card-digital">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="peso-bold-italic color-violeta text-center mt-3 p-1">
                    Marketing digital
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>

            <RubberBand>
              <Card className="border-card color-blanco my-4 card-digital">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_sqJ4tLBiurw_yeyos1.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="peso-bold-italic color-violeta text-center mt-3 p-1">
                    Eventos
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>
            <RubberBand>
              <Card className="border-card color-blanco my-4 card-digital">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_4D-Q5INzhZE_iyo0vq.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title  className="text-center " >
                    <Link className="peso-bold-italic color-violeta mt-3 p-1 sin-sub" to="/Audiovisual">Producción Audiovisual</Link>
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>
            <RubberBand>
              <Card className="border-card color-blanco my-4 card-digital">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_8qEB0fTe9Vw_yxqr4y.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="peso-bold-italic color-violeta text-center mt-3 p-1">
                    Sitios Webs
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>
            <RubberBand>
              <Card className="border-card color-blanco my-4 card-digital">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_m2TU2gfqSeE_gmwapk.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="peso-bold-italic color-violeta text-center mt-3 p-1">
                    Consultoria
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>
            <RubberBand>
              <Card className="border-card color-blanco my-4 card-digital">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    className="imagen-card"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_BcR77nBURV8_miaada.png"
                    alt="iconos solución digital"
                  />
                </div>
                <Card.Body className="efecto-imagen">
                  <Card.Title className="peso-bold-italic color-violeta text-center mt-3 p-1">
                    Prensa
                  </Card.Title>
                </Card.Body>
              </Card>
            </RubberBand>
          </div>
        </div>
      </div>
      <Trabajos />
    </div>
  );
}
