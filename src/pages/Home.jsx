import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Cartas from "../components/Cartas";
import Trabajos from "../components/Trabajos";
import ImagenFrase from "../components/ImagenFrase";



export default function Home() {
    return (
        <div className="color-azul-oscuro-fondo">
            <Banner />
            <Banner2 />
            <Cartas />
            <Trabajos />
            <ImagenFrase />
        </div>
    );
}
