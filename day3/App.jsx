import Counter from "./Counter";
// import DarkModeToggle from "./DarkModeToggle";
import FeedbackForm from "./FeedbackForm";
import NameInput from "./NameInput";
import SignupForm from "./SignupForm";
import ToggleMessage from "./ToggleMessage";

function App() {
  return (
    <div>
      <h1>My First App</h1>
      < Counter />

      <ToggleMessage />

      < NameInput />

      <SignupForm />

      < FeedbackForm />

      {/* <DarkModeToggle /> */}

    </div>
  );
}
export default App;