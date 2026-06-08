import { useState } from 'react';
import './NotificationBadge.css';

function NotificationBadge({ message }) {
  const [read, setRead] = useState(false);

  // Dynamic class: always 'badge', plus conditional
  const className = `badge ${read ? 'badge-read' : 'badge-unread'}`;

  return (
    <div className={className} onClick={() => setRead(!read)}>
      {message}
      {read ? ' ✓' : ' ●'}
    </div>
  );
}

export default function NotificationList() {
  const notifications = [
    'New message from Alice',
    'Your order shipped',
    'Reminder: Meeting at 3pm',
  ];

  return (
    <div>
      {notifications.map((msg, idx) => (
        <NotificationBadge key={idx} message={msg} />
      ))}
    </div>
  );
}