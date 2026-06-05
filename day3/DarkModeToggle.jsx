import {useState} from "react";
import App from "./App";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const pageStyle = {
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#000",
    // minHeight: "100vh",
    // padding: "20px",
    transition: "all 0.3s",
  };

  return (
    <div style={pageStyle}>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Hello World, this is dark mode, toggle</h1>


      <App />


    </div>
  );
}

export default DarkModeToggle;
