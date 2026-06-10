// day8/components/Notifications.jsx
import React from 'react';
import { useNotifications } from '../context/NotificationContext.jsx';

export default function Notifications() {
  const { notifications } = useNotifications();
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, width: 300 }}>
      {notifications.map(n => (
        <div key={n.id} style={{
          marginBottom: 8,
          padding: 10,
          borderRadius: 6,
          background: n.type === 'success' ? '#2ecc71' : n.type === 'error' ? '#e74c3c' : '#3498db',
          color: '#fff'
        }}>
          {n.text}
        </div>
      ))}
    </div>
  );
}