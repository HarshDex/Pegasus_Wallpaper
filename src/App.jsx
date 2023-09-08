import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Wallpaper from "./pages/Wallpaper";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        {/* <Route path="/" element={<Home />} /> Single Card Page */}

        <Route path="/wallpaper" element={<Wallpaper />} />
      </Routes>
    </>
  );
}

export default App;
