import Carta from "./Carta";
import Trabajos from "./Trabajos";

export default function Cartas() {
  const imagenes = [
    {
      image:
        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_Ro38zH1CRUY_o30hxa.png",
      title: "Marketing digital",
    },
    {
      image:
        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_sqJ4tLBiurw_yeyos1.png",
      title: "Eventos",
    },
    {
      image:
        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290485/Home/unsplash_4D-Q5INzhZE_iyo0vq.png",
      title: "Producción audiovisual",
    },
    {
      image:
        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_8qEB0fTe9Vw_yxqr4y.png",
      title: "Sitio web",
    },
    {
      image:
        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_m2TU2gfqSeE_gmwapk.png",
      title: "Consultoría",
    },
    {
      image:
        "https://res.cloudinary.com/dlzcbrqax/image/upload/v1647290484/Home/unsplash_BcR77nBURV8_miaada.png",
      title: "Prensa",
    },
  ];

  return (
    <div className="color-azul-fondo">
      <div className="container">
        <div className="row">
          <h1 className="color-verde text-center my-4"> Digital solutions</h1>
          <div className="d-flex flex-wrap justify-content-around">
            {imagenes.map((imagen, id) => (
              <Carta key={id} data={imagen} />
            ))}
          </div>
        </div>
      </div>
      <Trabajos />
    </div>
  );
}
