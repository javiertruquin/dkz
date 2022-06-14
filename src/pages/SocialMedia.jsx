import SocialMediaEscritorio from "../components/Escritorio/SocialMedia/SocialMediaEscritorio";
import BannerSocialMedia from "../components/Celular/SocialMedia/BannerSocialMedia";
import VideoSocialMedia from "../components/Celular/SocialMedia/VideoSocialMedia";

export default function SocialMedia() {
    return (
        <div >
            <div className="color-azul-oscuro-fondo fixed d-sm-none d-block">
                <BannerSocialMedia />
                {/* <VideoSocialMedia /> */} 
            </div>
            <div className="color-azul-oscuro-fondo d-none d-sm-block">
                <SocialMediaEscritorio />
            </div>
        </div>
    );
}
