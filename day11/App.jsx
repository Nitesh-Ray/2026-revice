import UserList from "./components/UserList.jsx";
import {useToggle} from "./hooks/useToggle";

function App() {
  const [isVisible, toggleVisibility] = useToggle(true);

  return (
    <div>
      <UserList />

      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? "Hide" : "Show"}
        </button>

        {isVisible && <p>This content is visible.</p>}
      </div>
    </div>
  );
}
export default App;
