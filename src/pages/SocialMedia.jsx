import SocialMediaEscritorio from "../components/Escritorio/SocialMedia/SocialMediaEscritorio";
import BannerSocialMedia from "../components/Celular/SocialMedia/BannerSocialMedia";
import TrabajosSocialMedia from "../components/TrabajosSocialMedia";

export default function SocialMedia() {
    return (
        <div >
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerSocialMedia />
                <TrabajosSocialMedia />
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <SocialMediaEscritorio />
            </div>
        </div>
    );
}
