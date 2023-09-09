import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wallpaper from "./pages/Wallpaper";
import Card from "./components/Card";
import SingleWallpaper from "./pages/SingleWallpaper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/wallpaper" element={<Wallpaper />} />
        <Route path="/download/:title" element={<SingleWallpaper />} />
      </Routes>
    </>
  );
}

export default App;
