import "./diseñografico.css";

export default function BannerDG() {
  return (
    <div className="color-azul-oscuro-fondo">
      <img
        className="banner-escritorio"
        src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661375243/bannerdg_1_z0yo5f.jpg"
        alt="Banner-escritorio"
      />
      <div className="banner-posi-marketing-contenido-escritorio">
        <div className="d-lg-none d-block">
          <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
            DISEÑO GRAFICO
          </p>
          <p className="tamaño-medio  peso-italic text-white text-center espaciado texto-sombra">
            Tenemos una creencia, un concepto: podemos ser eróticos
            conceptualmente, sin la necesidad de ser pornos. <br /> Por eso nos
            arriesgamos, implementando desafíos en cada pieza que ejecutamos,
            siendo disruptivos y marcando tendencia en el mercado.
            <br /> ¿Cómo lo hacemos? De acuerdo a cada proyecto, montamos
            unidades operativas de trabajo, <br /> agregando profesionales de
            DKZ con amplia trayectoria en nivel ejecutivo y creativo.
          </p>
          <div className="d-flex justify-content-center posi-dg-escritorio">
            <p className="tamaño-medio  peso-italic text-white espaciado texto-sombra">
            <span className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">Nuestros diferentes servicios de diseño son:</span>
              <br />
              -Masivos: carteles, infografía, flyers, simbología y señalética,
              folletos, etcétera. <br /> -Diseño web: maquetación y diseño final
              de prototipos web. <br /> -Diseño de Identidad Visual o Branding:
              desarrollamos manuales corporativos de marcas con diferentes
              aplicaciones y envergaduras. <br /> -Diseños de productos
              Multimedia. <br /> -Diseño Publicitario. <br /> -Diseño de
              Packaging. <br /> -Diseño de Merchandising
            </p>
          </div>
        </div>
        <div className="d-none d-lg-block">
          <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
            DISEÑO GRAFICO
          </p>
          <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
            Tenemos una creencia, un concepto: podemos ser eróticos
            conceptualmente, sin la necesidad de ser pornos. <br /> Por eso nos
            arriesgamos, implementando desafíos en cada pieza que ejecutamos,
            siendo disruptivos y marcando tendencia en el mercado.
            <br /> ¿Cómo lo hacemos? De acuerdo a cada proyecto, montamos
            unidades operativas de trabajo, <br /> agregando profesionales de
            DKZ con amplia trayectoria en nivel ejecutivo y creativo.
          </p>
          <div className="d-flex justify-content-center posi-dg-escritorio">
            <p className="tamaño-grande peso-italic text-white espaciado texto-sombra">
              <span className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">Nuestros diferentes servicios de diseño son:</span>
              <br />
              -Masivos: carteles, infografía, flyers, simbología y señalética,
              folletos, etcétera. <br /> -Diseño web: maquetación y diseño final
              de prototipos web. <br /> -Diseño de Identidad Visual o Branding:
              desarrollamos manuales corporativos de marcas con diferentes
              aplicaciones y envergaduras. <br /> -Diseños de productos
              Multimedia. <br /> -Diseño Publicitario. <br /> -Diseño de
              Packaging. <br /> -Diseño de Merchandising
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
