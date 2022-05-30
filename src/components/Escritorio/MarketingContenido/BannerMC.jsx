import "./marketingcontenido.css"
import BotonContactanos from '../../BotonContactanos'

export default function BannerMC() {
  return (
    <div className="color-azul-oscuro-fondo">
    <img
      className="banner-escritorio"
      src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653692828/Home/banner-escritorio_fndswh.png"
      alt="Banner-escritorio"
    />
    <div className="banner-posi-marketing-contenido-escritorio">
      <div className="d-lg-none d-block">
        <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
        MARKETING DIGITAL 
        </p>
        <p className="tamaño-medio  peso-italic text-white text-center espaciado texto-sombra">
        DKZ studio pone a su disposición todo el material tecnológico necesario
          <br /> para hacer producciones profesionales a gran escala. Contamos con un
        <br /> equipo altamente capacitado para crear y editar productos audiovisuales de alta calidad.
        </p>
      </div>
      <div className="d-none d-lg-block">
        <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
        MARKETING DIGITAL 
        </p>
        <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
        DKZ studio pone a su disposición todo el material tecnológico necesario
          <br /> para hacer producciones profesionales a gran escala. Contamos con un
        <br /> equipo altamente capacitado para crear y editar productos audiovisuales de alta calidad.
        </p>
      </div>
      <BotonContactanos />
    </div>
  </div>
  )
}
