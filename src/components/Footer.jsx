import React from "react";
import { Image } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="color-azul-oscuro-fondo d-flex justify-content-around text-white">
          <div className="text-white mt-4">
          <Image
                    className=""
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/logo-dkz_1_sntx9w.png"
                    fluid
                    alt="logo"
                />
          </div>
          <div className="text-white mt-4 mb-4">
              <span>Copyright © 2022</span> <br/>
              <span>Todos los derechos reservados.</span>
          </div>
    </div>
  );
}
