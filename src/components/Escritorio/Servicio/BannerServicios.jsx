import React from 'react'
import BotonContactanos from '../../BotonContactanos'

export default function BannerServicios() {
  return (
      <div>
          <div className="color-azul-oscuro-fondo">
                <img
                    className="banner-escritorio"
                    src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653692828/Home/banner-escritorio_fndswh.png"
                    alt="Banner-escritorio"
                />
                <div className="banner-posi-servicio-escritorio">
                    <div className="d-lg-none d-block">
                        <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                            NUESTROS SERVICIOS
                      </p>
                      <p className="tamaño-mas-grande peso-italic text-white text-center espaciado texto-sombra">
                            Spots publicitarios; cobertura de eventos y
                            registros sociales.
                            <br /> Videos corporativos. Infomerciales.
                            Institucionales. Books. <br /> Producciones
                            especiales.
                        </p>
                    </div>
                    <div className="d-none d-lg-block">
                        <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                        NUESTROS SERVICIOS
                      </p>
                      <p className="tamaño-mas-grande peso-italic text-white text-center espaciado texto-sombra">
                            Spots publicitarios; cobertura de eventos y
                            registros sociales.
                            <br /> Videos corporativos. Infomerciales.
                            Institucionales. Books. <br /> Producciones
                            especiales.
                        </p>
                    </div>
                    <BotonContactanos />
                </div>
            </div>
    </div>
  )
}
