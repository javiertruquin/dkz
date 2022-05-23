import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AudioVisuales from "./pages/AudioVisuales";
import MindBlown from "./pages/MindBlown";
import Conocenos from "./pages/Conocenos";
import Prensa from "./pages/Prensa";

// import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Audiovisual" element={<AudioVisuales />} />
                <Route path="/MindBlown" element={<MindBlown />} />
                <Route path="/Conocenos" element={<Conocenos />} />
                <Route path="/Prensa" element={<Prensa />} />
                <Route path="*" element={<h1>notfound</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
