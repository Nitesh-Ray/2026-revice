import ThemeSwitcher from "./components/ThemeSwitcher";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  return <div>
    <ThemeSwitcher />

    <LanguageSwitcher />

    <Footer />

    <Navbar />

    <LoginForm />

    <Dashboard />
  </div>;
}
export default App;
