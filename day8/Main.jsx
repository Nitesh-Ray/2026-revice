import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from './context/ThemeContext';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <h1>Day 8 – Context API & useContext </h1>

      <App />
    </ThemeProvider>
    {/* <App /> */}
  </StrictMode>,
);
