import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Servicios from "./pages/Servicios";
import Prensa from "./pages/Prensa";
import MindBlown from "./pages/MindBlown";
import Contactanos from "./pages/Contactanos";
import Eventos from "./pages/Eventos";
import SitiosWeb from "./pages/SitiosWeb";
import Consultoria from "./pages/Consultoria";
import AudioVisuales from "./pages/AudioVisuales";
import PaginaNoExiste from "./pages/PaginaNoExiste";
import ScrollToTop from "./components/ScrollToTop";
import TrabajosAVDetalle from "./pages/TrabajosAVDetalle";
import NavbarReact from "./components/NavbarReact";
import Footer from "./components/Footer";
import Iconos from "./components/Iconos";
import SocialMedia from "./pages/SocialMedia";
import DiseñoGraf from "./pages/DiseñoGraf";
import TrabajosEventosDetalle from "./pages/TrabajosEventosDetalle";
import TrabajosPrensaDetalle from "./pages/TrabajosPrensaDetalle";
import TrabajosSocialMediaDetalle from "./pages/TrabajosSocialMediaDetalle";
import TrabajosDiseñoGraficoDetalle from "./pages/TrabajosDiseñoGraficoDetalle";
import TrabajosMindBlownDetalle from "./pages/TrabajosMindBlownDetalle";
import HappyEnding from "./pages/HappyEnding";
import TrabajosSitiosWebDetalle from "./pages/TrabajosSitiosWebDetalle";
import FooterEscritorio from "./components/FooterEscritorio";
import Wsp from "./components/Wsp";
import NavEscritorio from "./components/NavEscritorio";

function App() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <BrowserRouter>
                <ScrollToTop />
                <div className="d-none d-lg-block">
                    <NavEscritorio />
                    <Wsp />
                </div>
                <div className="d-lg-none d-block">
                    <NavbarReact />
                    <Wsp />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Conocenos" element={<Conocenos />} />
                    <Route path="/Servicios" element={<Servicios />} />
                    <Route path="/Prensa" element={<Prensa />} />
                    <Route
                        path="/Prensa/:id"
                        element={<TrabajosPrensaDetalle />}
                    />
                    <Route path="/MindBlown" element={<MindBlown />} />
                    <Route
                        path="/MindBlown/:id"
                        element={<TrabajosMindBlownDetalle />}
                    />
                    <Route path="/Contactanos" element={<Contactanos />} />
                    <Route path="/SocialMedia" element={<SocialMedia />} />
                    <Route
                        path="/SocialMedia/:id"
                        element={<TrabajosSocialMediaDetalle />}
                    />
                    <Route path="/Eventos" element={<Eventos />} />
                    <Route
                        path="/Eventos/:id"
                        element={<TrabajosEventosDetalle />}
                    />
                    <Route path="/Audiovisual" element={<AudioVisuales />} />
                    <Route
                        path="/Audiovisual/:id"
                        element={<TrabajosAVDetalle />}
                    />
                    <Route path="/SitiosWeb" element={<SitiosWeb />} />
                    <Route
                        path="/SitiosWeb/:id"
                        element={<TrabajosSitiosWebDetalle />}
                    />
                    <Route path="/HappyEnding" element={<HappyEnding />} />
                    <Route path="/Consultoria" element={<Consultoria />} />
                    <Route path="/DisGrafico" element={<DiseñoGraf />} />
                    <Route
                        path="/DisGrafico/:id"
                        element={<TrabajosDiseñoGraficoDetalle />}
                    />
                    <Route path="*" element={<PaginaNoExiste />} />
                </Routes>
                <div className="color-azul-oscuro-fondo d-sm-none d-block">
                    <Iconos />
                    <hr className="bg-white" />
                    <Footer />
                </div>
                <div className="color-azul-oscuro-fondo d-none d-sm-block">
                    <FooterEscritorio />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
