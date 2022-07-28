import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DetailContextProvider } from "./context/DetailContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DetailContextProvider>
        <App />
      </DetailContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
