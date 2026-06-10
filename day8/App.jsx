import ThemeSwitcher from "./components/ThemeSwitcher";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import NotifyButton from './components/NotifyButton';
import Notifications from './components/Notifications';

function App() {
  return <div>
    <ThemeSwitcher />

    <LanguageSwitcher />

    <Footer />

    <Navbar />

    <LoginForm />

    <Dashboard />

    <NotifyButton />

    <Notifications />

    
  </div>;
}
export default App;
