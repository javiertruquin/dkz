import Banner from "../components/Celular/HomeCel/Banner";
import Banner2 from "../components/Celular/HomeCel/Banner2";
import Banner3 from "../components/Celular/HomeCel/Banner3";
import Cartas from "../components/Celular/HomeCel/Cartas";
import Frase from "../components/Celular/HomeCel/Frase";
import Trabajos from "../components/Celular/HomeCel/Trabajos";
import HomeContenidoEscritorio from "../components/Escritorio/HomeEscritorio/HomeContenidoEscritorio";

export default function Home() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo d-sm-none d-block  ">
                <Banner />
                <Banner2 />
                <Cartas />
                <Trabajos />
                <Banner3 />
                <Frase />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <HomeContenidoEscritorio />
            </div>
        </div>
    );
}
