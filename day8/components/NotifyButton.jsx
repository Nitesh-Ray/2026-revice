// day8/components/NotifyButton.jsx
import React from 'react';
import { useNotifications } from '../context/NotificationContext.jsx';

export default function NotifyButton() {
  const { addNotification } = useNotifications();
  return (
    <button onClick={() => addNotification('Saved successfully!', 'success')}>
      Show notification
    </button>
  );
}
