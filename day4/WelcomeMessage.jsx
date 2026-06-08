import { useState } from 'react';

function WelcomeMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {isLoggedIn ? (
        <h2>Welcome back, {username || 'User'}!</h2>
      ) : (
        <p>Please log in to continue.</p>
      )}

      {isLoggedIn && (
        <input
          type="text"
          placeholder="Change username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}
    </div>
  );
}

export default WelcomeMessage;