import { useTheme } from '../context/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '50vh',
    padding: '20px',
    transition: 'all 0.3s',
  };

  return (
    <div style={appStyle}>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      <h1>Current theme: {theme}</h1>
    </div>
  );
}

export default ThemeSwitcher;