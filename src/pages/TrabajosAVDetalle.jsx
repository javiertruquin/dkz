import React from "react";
import VideoAV from "../components/Celular/AudioVisuales/VideoAV";

export default function TrabajosAVDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <VideoAV />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <VideoAV />
            </div>
        </div>
    );
}
