import { useState } from 'react';
import './UserCard.css';

function UserCard({ name, role, avatar }) {
  const [isOnline, setIsOnline] = useState(false);

  const cardClass = `card ${isOnline ? 'online' : 'offline'}`;
  const roleClass = `role-badge ${role}`;

  return (
    <div className={cardClass}>
      <img src={avatar} alt={name} style={{ width: 80, borderRadius: '50%' }} />
      <h3>{name}</h3>
      <span className={roleClass}>{role.toUpperCase()}</span>
      
      <p>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
      
      <button onClick={() => setIsOnline(!isOnline)}>
        Toggle Status
      </button>

      {role === 'admin' && (
        <div style={{ marginTop: 10, padding: 8, background: '#fff3cd', borderRadius: 5 }}>
          ⚙️ Admin Controls (visible only for admins)
        </div>
      )}

      {isOnline && (
        <p style={{ color: '#4CAF50', fontWeight: 'bold' }}>Available for chat</p>
      )}
    </div>
  );
}

export default UserCard;