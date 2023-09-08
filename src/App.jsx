import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Card1 from "./components/Card1";
import Wallpaper from "./pages/Wallpaper";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/card" element={<Card />} />
        {/* <Route path="/" element={<Home />} /> Single Card Page */}

        <Route path="/Wallpaper" element={<Wallpaper/>} />
      </Routes>
      
    </>
  );
}

export default App;
