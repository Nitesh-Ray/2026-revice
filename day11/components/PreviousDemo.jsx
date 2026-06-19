import { useState } from 'react';
import { usePrevious } from '../hooks/usePrevious';  // import the hook

function PreviousDemo() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);   // now prevCount is the previous value

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Current count: {count}</h2>
      <h3>Previous count: {prevCount}</h3>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}

export default PreviousDemo;