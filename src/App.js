import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Servicios from "./pages/Servicios";
import Prensa from "./pages/Prensa";
import MindBlown from "./pages/MindBlown";
import Contactanos from "./pages/Contactanos";
import MarketingDigital from "./pages/MarketingDigital";
import Eventos from "./pages/Eventos";
import SitiosWeb from "./pages/SitiosWeb";
import Consultoria from "./pages/Consultoria";
import MarketingContenidos from "./pages/MarketingContenidos";
import AudioVisuales from "./pages/AudioVisuales";
import PaginaNoExiste from "./pages/PaginaNoExiste";


// import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Conocenos" element={<Conocenos />} />
                <Route path="/Servicios" element={<Servicios />} />
                <Route path="/Prensa" element={<Prensa />} />
                <Route path="/MindBlown" element={<MindBlown />} />
                <Route path="/Contactanos" element={<Contactanos />} />
                <Route path="/MarketingDigital" element={<MarketingDigital />} />
                <Route path="/Eventos" element={<Eventos />} />
                <Route path="/Audiovisual" element={<AudioVisuales />} />
                <Route path="/SitiosWeb" element={<SitiosWeb />} />
                <Route path="/Consultoria" element={<Consultoria />} />
                <Route path="/MarketingContenidos" element={<MarketingContenidos />} />
                <Route path="*" element={<PaginaNoExiste />} />
            </Routes>

        </BrowserRouter>

    )
}

export default App;
