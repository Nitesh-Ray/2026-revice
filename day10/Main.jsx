import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
// import { ThemeProvider } from './context/ThemeContext';

// import './index.css'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <h1>Day 10 – React Router (Multi‑Page Apps)</h1>
      <App />
    </BrowserRouter>
  </StrictMode>,
);