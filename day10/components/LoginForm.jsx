import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function LoginForm() {
  const [username, setUsername] = useState('');
  const { login, user } = useAuth();

  if (user) {
    return <p>You are logged in as {user.username}. <button onClick={() => login('')}>Logout</button></p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) login(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;