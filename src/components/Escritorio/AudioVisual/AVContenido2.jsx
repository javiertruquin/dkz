import React from "react";

export default function AVContenido2() {
  return (
    <div className="my-5">
      <div className="color-azul-oscuro-fondo">
        <div className="container text-white">
          <div className="d-flex  justify-content-around">
            <div>
              <h1 className="titulo-contenido-av tamaño-mas-grande peso-bold-italic ms-4 py-1" >
                <span className="ms-5">PRODUCCIÓN</span>
              </h1>
              <div className="text-white text-center">
                <p className="peso-italic tamaño-medio px-2">
                  Equipo y personal técnico (diversos <br />
                  formatos segun necesidad y presupuesto).
                  <br />
                  Dirección; producción; dirección de fotografía.
                  <br />
                  Dirección de arte. Realización de decorados. <br /> Casting.
                  Make up, estilismo, vestuario.
                </p>
              </div>
            </div>
            <div>
              <h1 className="titulo-contenido-av  tamaño-mas-grande peso-bold-italic ms-4 py-1">
                <span className="ms-3">POSTPRODUCCIÓN</span>
              </h1>
              <div className="text-white text-center">
                <p className="peso-italic tamaño-medio px-2">
                  Edición. Montaje. Sonido. Etalonaje y <br />
                  corrección de color. Video fx. Audio fx.
                  <br /> Música y sonido. Corte final y copias para <br />
                  cualquier medio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
