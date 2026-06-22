import { useState } from 'react';
import SlowChild from '../components/SlowChild';

function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  console.log('Parent rendered');

    return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Performance Demo</h1>
      
      <div className="space-y-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Increment Count: {count}
        </button>
        <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type a name..."
          className="border p-2 rounded w-full dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SlowChild name="Alice" count={count} />
        <SlowChild name="Bob" count={100} />  {/* props never change */}
        <SlowChild name="Bob" count={100} onDelete={() => console.log('Delete Bob')} />
      </div>
    </div>
  );
}

export default PerformanceDemo;