import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WorldMap from "./components/WorldMap";
import Earth3D from "./components/Earth3D";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<WorldMap />} />
        <Route path="/earth" element={<Earth3D/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;