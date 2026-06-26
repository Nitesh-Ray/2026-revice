// src/components/Navbar.jsx
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-6 py-3 flex justify-between items-center">
      <span className="font-bold text-lg">📋 Task Manager</span>
      <div className="flex items-center gap-4">
        <span>👤 {user?.username}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}