import BotonMindBlown from "../../BotonMindBlown";

export default function Trabajos() {
    return (
        <div>
            <div className="d-sm-none d-block">
                <div className="color-azul-oscuro-fondo d-flex flex-column justify-content-center mt-4 mb-5">
                    <div className="peso-regular text-white tamaño-medio text-center mb-3">
                        ¿ Quieres que tu cabeza explote de creatividad?
                    </div>
                    <BotonMindBlown />
                </div>
            </div>
            <div className="d-none d-sm-block">
                <div className="mt-5">
                    <div>
                        <h1 className="peso-bold-italic tamaño-mas-grande text-white text-center">
                            ¿ Quieres que tu cabeza explote de creatividad?
                        </h1>
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <BotonMindBlown />
                    </div>
                </div>
            </div>
        </div>
    );
}
