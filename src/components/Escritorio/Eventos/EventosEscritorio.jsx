import "./eventos.css";
import BannerEventos from "./BannerEventos";
import TrabajosEventos from "../../TrabajosEventos";
import BotonContactanos from "../../BotonContactanos";
import TextoEventos from "./TextoEventos";
import CaracteristicasEventos from "./CaracteristicasEventos";

export default function EventosEscritorio() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo">
                <BannerEventos />
                <TextoEventos />
                <CaracteristicasEventos />
                <TrabajosEventos />
                <BotonContactanos />

            </div>
        </div>
    );
}
