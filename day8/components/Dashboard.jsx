import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  if (!user) return <p>Please login to see your dashboard.</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Secret data for {user.username}...</p>
    </div>
  );
}

export default Dashboard;