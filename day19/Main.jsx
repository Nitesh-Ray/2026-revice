import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <h1>Day 19 – Full Project: E-Commerce Store (Cart, Filters, Checkout, Zustand, Router)</h1>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
