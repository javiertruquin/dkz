import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BotonContactoAV() {
  return (
    <div className="d-flex justify-content-center">
          <div >
              <div className="text-center ">
                  <Button as={Link}  to="/contactanos" className="boton-verde-av hover" variant="outline-success"> 
                   <span className="text-dark">Contactanos</span>
                  </Button>
              
              </div>
      </div>
    </div>
  );
}
