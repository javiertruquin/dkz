import React from "react";
import BannerMB from "./BannerMB";
import ClientesMb from "./ClientesMb";
import TrabajosMB from "./TrabajosMB";

export default function MindBlownEscritorio() {
    return (
        <div
            className="d-flex flex-column color-azul-oscuro-fondo"
            style={{ minHeight: "100vh" }}
        >
            <BannerMB />
            <TrabajosMB />
            <ClientesMb />
        </div>
    );
}
