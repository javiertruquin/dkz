import RubberBand from "react-reveal/RubberBand";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Trabajos from "./Trabajos";

export default function Cartas() {
    return (
        <div className="color-azul-oscuro-fondo">
            <div>
                <div className="">
                    <h1 className="color-verde text-center my-4 peso-bold-italic tamaño-mas-grande mas-espaciado">
                        {" "}
                        Digital solutions
                    </h1>
                    <div className="d-flex flex-wrap justify-content-around">
                        <RubberBand>
                            <Card className="border-card color-blanco my-4 card-digital">
                                <div className="d-flex justify-content-center">
                                    <Card.Img
                                        variant=""
                                        className="imagen-card"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png"
                                        alt="iconos solución digital"
                                    />
                                </div>
                                <Card.Body className="efecto-imagen">
                                    <Card.Title className="text-center">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/MarketingDigital"
                                        >
                                            Marketing digital
                                        </Link>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </RubberBand>

                        <RubberBand>
                            <Card className="border-card color-blanco my-4 card-digital">
                                <div className="d-flex justify-content-center">
                                    <Card.Img
                                        variant=""
                                        className="imagen-card"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_sqJ4tLBiurw_yeyos1.png"
                                        alt="iconos solución digital"
                                    />
                                </div>
                                <Card.Body className="efecto-imagen">
                                    <Card.Title className="text-center mt-3 p-1">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/Eventos"
                                        >
                                            Eventos
                                        </Link>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </RubberBand>
                        <RubberBand>
                            <Card className="border-card color-blanco my-4 card-digital">
                                <div className="d-flex justify-content-center">
                                    <Card.Img
                                        variant=""
                                        className="imagen-card"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_4D-Q5INzhZE_iyo0vq.png"
                                        alt="iconos solución digital"
                                    />
                                </div>
                                <Card.Body className="efecto-imagen">
                                    <Card.Title className="text-center ">
                                        <Link
                                            className="peso-bold-italic tamaño-grande color-violeta sin-sub"
                                            to="/Audiovisual"
                                        >
                                            Producción Audiovisual
                                        </Link>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </RubberBand>
                        <RubberBand>
                            <Card className="border-card color-blanco my-4 card-digital">
                                <div className="d-flex justify-content-center">
                                    <Card.Img
                                        variant=""
                                        className="imagen-card"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_8qEB0fTe9Vw_yxqr4y.png"
                                        alt="iconos solución digital"
                                    />
                                </div>
                                <Card.Body className="efecto-imagen">
                                    <Card.Title className="text-center mt-3 p-1">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/SitiosWeb"
                                        >
                                            Sitios Web
                                        </Link>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </RubberBand>
                        <RubberBand>
                            <Card className="border-card color-blanco my-4 card-digital">
                                <div className="d-flex justify-content-center">
                                    <Card.Img
                                        variant=""
                                        className="imagen-card"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_m2TU2gfqSeE_gmwapk.png"
                                        alt="iconos solución digital"
                                    />
                                </div>
                                <Card.Body className="efecto-imagen">
                                    <Card.Title className="text-center mt-3 p-1">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/Consultoria"
                                        >
                                            Consultoria
                                        </Link>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </RubberBand>
                        <RubberBand>
                            <Card className="border-card color-blanco my-4 card-digital">
                                <div className="d-flex justify-content-center">
                                    <Card.Img
                                        variant=""
                                        className="imagen-card"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_BcR77nBURV8_miaada.png"
                                        alt="iconos solución digital"
                                    />
                                </div>
                                <Card.Body className="efecto-imagen">
                                    <Card.Title className="text-center mt-3 p-1">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/Prensa"
                                        >
                                            Prensa
                                        </Link>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </RubberBand>
                        <RubberBand>
                            <Card className="border-card color-blanco my-4 card-digital">
                                <div className="d-flex justify-content-center">
                                    <Card.Img
                                        variant=""
                                        className="imagen-card"
                                        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_m2TU2gfqSeE_gmwapk.png"
                                        alt="iconos solución digital"
                                    />
                                </div>
                                <Card.Body className="efecto-imagen">
                                    <Card.Title className="text-center">
                                        <Link
                                            className="sin-sub peso-bold-italic tamaño-grande color-violeta"
                                            to="/MarketingContenidos"
                                        >
                                            Marketing de contenidos
                                        </Link>
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
