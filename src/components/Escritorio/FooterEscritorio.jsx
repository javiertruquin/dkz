import React from 'react'
import { Image } from 'react-bootstrap'

export default function FooterEscritorio() {
  return (
    <div className="footer container">
      <div className="color-azul-oscuro-fondo d-flex justify-content-between text-white  ">
        <div className="text-white mt-4">
          <Image
            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653772372/Home/logo-dkz-escritorio_phiruf.png"
            fluid
            alt="logo-dkz"
          />
        </div>
        <div className="text-white text-center mt-4 mb-4 tamaño-chico ms-5">
          <div>info.dkzstudio@gmail.com | 381 66 79 511</div>
          <div>Córdoba 714, 1° B - San Miguel de Tucumán</div>
          <div>Tucumán - Argentina</div>
        </div>
        <div className="text-white mt-4 mb-4 tamaño-chico">
          <span className="d-flex justify-content-end">Copyright © 2022</span>
          <span className="d-flex justify-content-end my-1">
            Todos los derechos reservados.
          </span>
          <span className="d-flex justify-content-end my-1">
            Product by DKZ studio
          </span>
        </div>
      </div>
    </div>
  )
}
