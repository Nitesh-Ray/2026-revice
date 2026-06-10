import { useState, useEffect, useRef } from 'react';

function IntervalCounter() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setCount(c => c + 1);
      }, 500);
    } else {
      clearInterval(intervalRef.current);
    }
    // Cleanup on unmount or when running changes
    return () => clearInterval(intervalRef.current);
  }, [running]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}

export default IntervalCounter;