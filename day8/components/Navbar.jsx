import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { user, logout } = useAuth();
  const { theme } = useTheme();

  const navStyle = {
    background: theme === 'light' ? '#eee' : '#444',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <nav style={navStyle}>
      <strong>My App</strong>
      <div>
        {user ? (
          <>
            <span>Welcome, {user.username} </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;