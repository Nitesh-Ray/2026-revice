// src/components/Footer.jsx
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { theme } = useTheme();
  return (
    <footer style={{ marginTop: 20, fontStyle: 'italic' }}>
      <p>Footer----- – theme: {theme}</p>
    </footer>
  );
}

export default Footer;