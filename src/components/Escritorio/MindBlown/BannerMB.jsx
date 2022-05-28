import React from 'react'

export default function BannerMB() {
  return (
    <>
    <div className="color-azul-oscuro-fondo">
                <img
                    className="banner-escritorio"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653777449/mindblown/BannerMB_ocd74q.png"
                    alt="Banner-escritorio"
                />
                <div className="banner-posi-escritorio">
                    <div className="d-lg-none d-block">
                        <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                          MIND BLOWN <br /> 
                          CHEQUEA ALGUNOS DE NUESTROS TRABAJOS
                        </p>
                    </div>
                    <div className="d-none d-lg-block">
                        <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                        MIND BLOWN <br /> 
                          CHEQUEA ALGUNOS DE NUESTROS TRABAJOS
                        </p>
                    </div>
                </div>
            </div>
</>
  )
}
