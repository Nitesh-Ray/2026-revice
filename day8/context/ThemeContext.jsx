import { createContext, useState, useContext } from 'react';

// 1. Create context
const ThemeContext = createContext();

// 2. Custom hook to use the context (optional, but good practice)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

// 3. Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
    
  );
};

// Also export the context itself if needed
export default ThemeContext;