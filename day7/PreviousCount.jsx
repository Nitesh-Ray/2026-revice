import { useState, useEffect, useRef } from 'react';

function PreviousCount() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    // After every render, update the ref to the current count
    prevCountRef.current = count;
  });

  // The ref now holds the previous value because effect runs after render.
  // To show the previous value during render, we can read prevCountRef.current,
  // but it will be the value from the last render. So it's the "previous" value.

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}

export default PreviousCount;