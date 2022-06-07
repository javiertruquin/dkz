import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Clientes() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="text-white text-center peso-bold-italic tamaño-grande">
                    <p>Happy ending</p>
                </div>
            </div>

            <div className="">
                <Swiper spaceBetween={10} slidesPerView={2.15} className="">
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                            <img
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
                                alt="imagen-clientes"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                            <img
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
                                alt="imagen-clientes"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                            <img
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
                                alt="imagen-clientes"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper spaceBetween={10} slidesPerView={2.15} className="">
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                            <img
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
                                alt="imagen-clientes"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                            <img
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
                                alt="imagen-clientes"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                            <img
                                src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652836217/Trabajos/Rectangle_292_nyktt8.png"
                                alt="imagen-clientes"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
