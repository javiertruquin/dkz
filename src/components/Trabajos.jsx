import { Button } from "react-bootstrap";

export default function Trabajos() {
  return (
    <div className="color-azul-fondo d-flex justify-content-center mt-5">
      <div className="peso-regular text-white">
        Mirá algunos de nuestros trabajos <br />
        y descubrí lo que somos capaces de <br />
        hacer con tu marca.
        <div>
          <div className="d-flex justify-content-center mt-4 boton-morado border-0 borde-boton-morado">
            <Button className="boton-morado border-0">
              Contactanos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
