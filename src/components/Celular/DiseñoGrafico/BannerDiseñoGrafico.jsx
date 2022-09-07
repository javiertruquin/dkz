import React from "react";

export default function BannerDiseñoGrafico() {
  return (
    <>
      <div className="pb-4 color-azul-oscuro-fondo">
        <div className="fondo-banner-dg-cel">
          <div className="card-position">
            <div className="titulo-audiovisual d-flex flex-column justify-content-center">
              <div className="my-5 mx-3">
                <h1 className="titulos-impacto tamaño-mas-grande peso-bold-italic text-white text-center espaciado pt-5 mt-5 titulo-producciones">
                  DISEÑO GRÁFICO
                </h1>
              </div>
            </div>
            <div className="banner-pie-dg d-flex justify-content-center px-1 rounded-3 color-violeta-fondo-banner-pie">
              <div className="text-white">
                <p className="peso-italic tamaño-medio px-2 py-4">
                  Tenemos una creencia, un concepto: podemos ser eróticos
                  conceptualmente, sin la necesidad de ser pornos. Por eso nos
                  arriesgamos, implementando desafíos en cada pieza que
                  ejecutamos, siendo disruptivos y marcando tendencia en el
                  mercado. ¿Cómo lo hacemos? De acuerdo a cada proyecto,
                  montamos unidades operativas de trabajo,agregando
                  profesionales de DKZ con amplia trayectoria en nivel ejecutivo
                  y creativo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <p className="peso-italic tamaño-medio px-2 text-white">
            Nuestros diferentes servicios de diseño son:
          </p>
          <p className="peso-italic tamaño-medio px-2 text-white">
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
    </>
  );
}
