import Banner from "../components/Celular/HomeCel/Banner";
import Banner2 from "../components/Celular/HomeCel/Banner2";
import Banner3 from "../components/Celular/HomeCel/Banner3";
import Cartas from "../components/Celular/HomeCel/Cartas";
import Frase from "../components/Celular/HomeCel/Frase";
import HomeContenidoEscritorio from "../components/Escritorio/HomeEscritorio/HomeContenidoEscritorio";
import Footer from "../components/Footer";
import Iconos from "../components/Iconos";
import NavbarReact from "../components/NavbarReact";

export default function Home() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo d-sm-none d-block  ">
                <NavbarReact />
                <Banner />
                <Banner2 />
                <Cartas />
                <Banner3 />
                <Frase />
                <Iconos />
                <hr className="bg-white" />
                <Footer />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <HomeContenidoEscritorio />
            </div>
        </div>
    );
}
