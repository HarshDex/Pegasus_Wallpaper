import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/card" element={<Card />} /> */}
        {/* <Route path="/" element={<Home />} /> Single Card Page */}
      </Routes>
    </>
  );
}

export default App;
