import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (running) {
      document.title = time.toLocaleTimeString();
    } else {
      document.title = 'Clock Paused';
    }
  }, [time, running]);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

export default Clock;