import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
// import { ThemeProvider } from './context/ThemeContext';
import {ThemeProvider} from "./context/ThemeContext.jsx";
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from "./context/AuthContext.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <NotificationProvider>
            <h1>Day 8 – Context API & useContext </h1>
            <App />
          </NotificationProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
