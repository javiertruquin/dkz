import "./conocenos.css";
import BannerConocenos from "./BannerConocenos";
import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import NavbarReact from "../../../components/NavbarReact";
import Fotos from "./Fotos";

export default function ConocenosEscritorio() {
    return (
        <div>
            <div className="d-none d-lg-block">
                <NavEscritorio />
            </div>
            <div className="d-lg-none d-block">
                <NavbarReact />
            </div>
            <BannerConocenos />
            <Fotos />
            <FooterEscritorio />
        </div>
    );
}
