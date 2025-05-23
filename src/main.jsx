import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./context/Context";
import "./style/const.css"
import "./style/Main.scss"
import "./style/globals.css"
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <MainProvider>
        <App />
      </MainProvider>
    </StrictMode>
  </BrowserRouter>
);
