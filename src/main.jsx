import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalAppProvider } from "./context/GlobalContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalAppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalAppProvider>
  </React.StrictMode>
);
