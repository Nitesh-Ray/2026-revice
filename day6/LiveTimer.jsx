import {useState, useEffect} from "react";

function LiveTimer() {
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return; // don't start if paused
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning]); // re-run when isRunning changes

  useEffect(() => {
    // Set up an interval when the component mounts
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup: clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      console.log("Timer cleaned up!");
    };
  }, []); // empty array → run once on mount, cleanup on unmount

  return (
    <div>
      <h2>You've been on this page for {seconds} seconds.</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Resume"}
      </button>
    </div>
  );
}

export default LiveTimer;
