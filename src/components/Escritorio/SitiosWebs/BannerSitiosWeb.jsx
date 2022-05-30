import BotonContactanos from "../../BotonContactanos";

export default function BannerSitiosWeb() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <img
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653692828/Home/banner-escritorio_fndswh.png"
          alt="Banner-escritorio"
        />
        <div className="banner-posi-sitios-escritorio">
          <div className="d-lg-none d-block">
            <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              SITIOS WEB
            </p>
            <p className="tamaño-medio  peso-italic text-white text-center espaciado texto-sombra">
              de Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              de Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br /> de Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do.
            </p>
          </div>
          <div className="d-none d-lg-block">
            <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              SITIOS WEB
            </p>
            <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
              de Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br /> de Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do <br /> de Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do.
            </p>
          </div>
          <BotonContactanos />
        </div>
      </div>
    </div>
  );
}
