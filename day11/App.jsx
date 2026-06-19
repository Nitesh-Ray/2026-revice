import UserList from "./components/UserList.jsx";
import {useToggle} from "./hooks/useToggle";
import {useLocalStorage} from "./hooks/useLocalStorage.js";
import SearchInput from "./components/SearchInput.jsx";
import SearchBox from "./components/SearchBox.jsx";
import PreviousDemo from "./components/PreviousDemo.jsx";

function App() {
  const [isVisible, toggleVisibility] = useToggle(true);

  // inside ThemeProvider
  const [theme, setTheme] = useLocalStorage("app-theme", "light");

  return (
    <div>
      <UserList />
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <p>This content is visible.</p>}
      </div>

      <div
        style={{
          backgroundColor: theme === "dark" ? "#222" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
          padding: "20px",
          minHeight: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        <h2>Theme: {theme}</h2>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{
            padding: "10px 20px",
            backgroundColor: theme === "dark" ? "#444" : "#ddd",
            color: theme === "dark" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          Toggle Theme
        </button>

        <div style={{marginBottom: "20px"}}>
          <button onClick={toggleVisibility}>
            {isVisible ? "Hide" : "Show"}
          </button>
          {isVisible && <p>This content is visible.</p>}
        </div>

        <UserList />
      </div>

      <div>
        <SearchInput />
        <UserList />
        ...
      </div>

      <SearchBox />

      <PreviousDemo />?
    </div>
  );
}
export default App;
