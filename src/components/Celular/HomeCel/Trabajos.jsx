import Tada from "react-reveal/Tada";
import { Link } from "react-router-dom";

export default function Trabajos() {
    return (
        <div className="color-azul-oscuro-fondo d-flex justify-content-center mt-4">
            <div className="peso-regular text-white tamaño-medio text-center">
                Mirá algunos de nuestros trabajos <br />
                y descubrí lo que somos capaces de <br />
                hacer con tu marca.
                <div>
                    <Tada>
                        <div className=" my-4 d-flex justify-content-center">
                            <div className="boton-verde">
                                <Link
                                    className="m-0 p-0 color-azul-oscuro peso-bold tamaño-medio sin-sub"
                                    to="/MindBlown"
                                >
                                    Mind blown
                                </Link>
                            </div>
                        </div>
                    </Tada>
                </div>
            </div>
        </div>
    );
}
