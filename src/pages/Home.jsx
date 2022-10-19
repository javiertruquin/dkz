import Banner from "../components/Celular/HomeCel/Banner";
import Banner2 from "../components/Celular/HomeCel/Banner2";
import Cartas from "../components/Celular/HomeCel/Cartas";
import Trabajos from "../components/Celular/HomeCel/Trabajos";
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
