import { useThemeStore } from '../store/themeStore';

function ThemeWrapper() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const style = {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: 20,
    transition: '0.3s',
  };

  return (
    <div style={style}>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <h1>Hello Zustand Theme</h1>
    </div>
  );
}

export default ThemeWrapper;