import React from "react";
import { Image } from "react-bootstrap";

export default function DGraficoBanner() {
  return (
    <div>
      {/* Escritorio */}
      <div className="color-azul-oscuro-fondo d-none d-md-block">
        <Image
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1666208384/banners/BannerDG_n4rmhz.png"
          alt="Banner-escritorio"
          fluid
        />
        <div className="banner-posicion-escritorio">
          <div className="d-lg-none d-block">
            <div className="d-flex justify-content-center align-items-center">
              <p className="titulos-impacto px-5 margen-negativo2 tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                DISEÑO GRÁFICO
              </p>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center align-items-center">
              <p className="titulos-impacto px-5 margen-negativo2 tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
                DISEÑO GRÁFICO
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Celular */}
      <div className="pb-4 color-azul-oscuro-fondo d-md-none d-block">
        <div className="fondo-banner">
          <div className="card-position">
            <div className="titulo-audiovisual d-flex flex-column justify-content-center">
              <div className="my-5 mx-3">
                <h1 className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado mt-5 titulo-producciones">
                  DISEÑO GRÁFICO
                </h1>
              </div>
            </div>
            <div className="banner-pie-cel d-flex justify-content-center color-violeta-fondo-banner-pie px-1 rounded-3">
              <div className="text-white">
                <p className="peso-italic tamaño-medio px-2 py-4">
                  Tenemos una creencia, un concepto: podemos ser eróticos
                  conceptualmente, sin la necesidad de ser pornos. Por eso nos
                  arriesgamos, implementando desafíos en cada pieza que
                  ejecutamos, siendo disruptivos y marcando tendencia en el
                  mercado. ¿Cómo lo hacemos? De acuerdo a cada proyecto,
                  montamos unidades operativas de trabajo, agregando
                  profesionales de DKZ con amplia trayectoria en nivel ejecutivo
                  y creativo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-4 px-5">
          <p className="tamaño-medio peso-italic text-white espaciado texto-sombra">
            <span className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              Nuestros diferentes servicios de diseño son:
            </span>
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
  );
}
