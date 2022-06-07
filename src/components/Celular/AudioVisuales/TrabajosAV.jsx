import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TrabajosAV() {
    return (
        <div className="mb-5">
            <Swiper spaceBetween={10} slidesPerView={1.2}>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between ">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652824284/Trabajos/Rectangle_92_lat3as.png"
                            alt="imagen-trabajo"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between ">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652996297/Trabajos/Group_12_rfhnxz.png"
                            alt="imagen-trabajo"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between ">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652824284/Trabajos/Rectangle_92_lat3as.png"
                            alt="imagen-trabajo"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-2 d-flex flex-column justify-content-between ">
                        <img
                            src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1652996297/Trabajos/Rectangle_35_v0mqiy.png"
                            alt="imagen-trabajo"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
