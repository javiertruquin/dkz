import "./eventos.css";
import BannerEventos from "./BannerEventos";
import TrabajosEventos from "../../TrabajosEventos";
import BotonContactanos from "../../BotonContactanos";

export default function EventosEscritorio() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo">
                <BannerEventos />
                <TrabajosEventos />
                <BotonContactanos />

            </div>
        </div>
    );
}
