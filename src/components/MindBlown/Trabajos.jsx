import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Trabajos() {
    return (
        <div>
            <Swiper spaceBetween={10} slidesPerView={1.2}>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652824284/Trabajos/Rectangle_92_lat3as.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652996297/Trabajos/Group_12_rfhnxz.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652824284/Trabajos/Rectangle_92_lat3as.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper spaceBetween={10} slidesPerView={1.2}>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652996297/Trabajos/Rectangle_35_v0mqiy.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652996297/Trabajos/Rectangle_352_knn3av.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652996297/Trabajos/Rectangle_35_v0mqiy.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper spaceBetween={10} slidesPerView={1.2}>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652996297/Trabajos/Rectangle_192_ioce2e.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652996297/Trabajos/Group_1212_tf2hgk.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between color-azul-oscuro-fondo">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652996297/Trabajos/Rectangle_192_ioce2e.png"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
