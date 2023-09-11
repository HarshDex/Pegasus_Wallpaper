import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalAppProvider } from "./context/GlobalContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-2x625ht00q54wvsw.us.auth0.com"
      clientId="wWzoBbUOjX1ecQCHX864f2P5V57njjoE"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GlobalAppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalAppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
