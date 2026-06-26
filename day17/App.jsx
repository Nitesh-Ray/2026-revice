// import ProtectedRoute from "./components/ProtectedRoute";
// import LoginPage from "./pages/LoginPage";

// function App() {
//   return (
//     <div>
//       <LoginPage />
//       <ProtectedRoute />
//     </div>
//   );
// }
// export default App;


import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuthStore } from './store/authStore';

export default function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} />} />
    </Routes>
  );
}