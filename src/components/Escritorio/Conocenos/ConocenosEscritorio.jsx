import "./conocenos.css";
import BannerConocenos from "./BannerConocenos";
import IconosEscritorio from "../IconosEscritorio";
import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import NavbarReact from "../../../components/NavbarReact";

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
            <IconosEscritorio />
            <hr className="bg-white container" />
            <FooterEscritorio />
        </div>
    );
}
