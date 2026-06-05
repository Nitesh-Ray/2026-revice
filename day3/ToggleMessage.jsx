import { useState } from 'react';

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ margin: '20px' }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>🎉 This is a toggled message!</p>}
    </div>
  );
}

export default ToggleMessage;