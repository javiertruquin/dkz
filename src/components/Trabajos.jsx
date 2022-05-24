import Tada from "react-reveal/Tada";

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
                            <div className="boton-morado">
                                <p className=" m-0 p-0 text-white tamaño-medio">
                                    Mind blown
                                </p>
                            </div>
                        </div>
                    </Tada>
                </div>
            </div>
        </div>
    );
}
