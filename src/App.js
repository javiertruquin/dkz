import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AudioVisuales from "./pages/AudioVisuales";
import Trabajos from "./pages/Trabajos";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Audiovisual" element={<AudioVisuales />} />
                <Route path="/Trabajos" element={<Trabajos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
