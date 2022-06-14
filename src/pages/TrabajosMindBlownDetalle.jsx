import React from "react";
import VideoMindBlown from "../components/Celular/MindBlown/VideoMindBlown";
import VideoMindBlownEscritorio from "../components/Escritorio/MindBlown/VideoMindBlownEscritorio";

export default function TrabajosMindBlownDetalle() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <VideoMindBlown />
            </div>
            <div className=" color-azul-oscuro-fondo d-none d-sm-block">
                <VideoMindBlownEscritorio />
            </div>
        </div>
    );
}
