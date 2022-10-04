import React from "react";
import BotonContactanos from "../../BotonContactanos";
import TrabajosSocialMedia from "../../TrabajosSocialMedia";
import BannerSocialM from "./BannerSocialM";
import TextoBanner from "./TextoBanner";

export default function SocialMediaEscritorio() {
  return (
    <div className="color-azul-oscuro-fondo">
      <BannerSocialM />
      <TextoBanner />
      <TrabajosSocialMedia />
      <BotonContactanos />
    </div>
  );
}
