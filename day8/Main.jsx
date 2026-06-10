import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
// import { ThemeProvider } from './context/ThemeContext';
import {ThemeProvider} from "./context/ThemeContext.jsx";
import { LanguageProvider } from './context/LanguageContext';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <h1>Day 8 – Context API & useContext </h1>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
