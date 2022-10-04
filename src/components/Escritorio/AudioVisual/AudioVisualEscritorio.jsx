import "./audiovisual.css";
import BannerAVE from "./BannerAVE";
import AVContenido from "./AVContenido";
import AVContenido2 from "./AVContenido2";
import BotonContactanos from "../../BotonContactanos";
import TrabajosAV from "../../TrabajosAV";
import TextoContenido from "./TextoContenido";

export default function AudioVisualEscritorio() {
    return (
        <div>
            <BannerAVE />
            <div className="pt-5">
            <TextoContenido />
            <AVContenido />
            </div>
         
            <AVContenido2 />
            <TrabajosAV />
            <BotonContactanos />
        </div>
    );
}
