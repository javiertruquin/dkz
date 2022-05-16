import { Fade } from "react-reveal";

export default function ContenidoAVPP() {
  return (
    <div className="color-azul-oscuro-fondo my-5 contenedor-padding ">
      <Fade right>
        {" "}
        <div>
          <h1 className="titulo-verde color-violeta tamaño-mas-grande peso-bold-italic posicion-titulo my-4">
            <span className="ms-2"> PREPRODUCCIÓN</span>
          </h1>
        </div>
      </Fade>
      <Fade left>
        <div className="text-white texto-creatividad ms-5">
          Devolución creativa y <br /> presentación preliminar. <br />{" "}
          Relevamiento de locaciones. <br /> Diseño de producción.
        </div>
      </Fade>
    </div>
  );
}
