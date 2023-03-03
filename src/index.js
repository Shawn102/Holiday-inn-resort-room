import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MyAppProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyAppProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MyAppProvider>
);
