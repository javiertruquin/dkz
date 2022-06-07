import "./audiovisual.css";
import BannerAVE from "./BannerAVE";
import AVContenido from "./AVContenido";
import AVContenido2 from "./AVContenido2";
import BotonContactanos from "../../BotonContactanos";
import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import NavbarReact from "../../../components/NavbarReact";
import TrabajosAVE from "./TrabajosAVE";

export default function AudioVisualEscritorio() {
    return (
        <div >
            <div className="d-none d-lg-block">
                <NavEscritorio />
            </div>
            <div className="d-lg-none d-block">
                <NavbarReact />
            </div>
            <BannerAVE />
            <AVContenido />
            <AVContenido2 />
            <TrabajosAVE />
            <BotonContactanos />
            <FooterEscritorio />
        </div>
    );
}
