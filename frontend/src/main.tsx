import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import { HashRouter } from "react-router-dom";
import "./index.css";
import SinagContext from "./context/sinagContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider>
      <SinagContext>
      <HashRouter>
        <App />
      </HashRouter>
      </SinagContext>
    </ThirdwebProvider>
  </React.StrictMode>
);
