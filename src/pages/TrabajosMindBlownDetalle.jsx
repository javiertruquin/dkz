import React from "react";
import BotonContactanos from "../components/BotonContactanos";
import VideoMindBlown from "../components/VideoMindBlown";

export default function TrabajosMindBlownDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed">
                <VideoMindBlown />
                <BotonContactanos />
            </div>
        </div>
    );
}
