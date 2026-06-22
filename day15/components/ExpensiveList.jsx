import {useState, useMemo} from "react";

// Simulate an expensive filtering operation
function expensiveFilter(items, query) {
  console.log("Running expensive filter...");
  // Artificial delay to simulate heavy work
  const start = performance.now();
  while (performance.now() - start < 100) {
    // Block for 100ms
  }
  return items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  );
}

const allItems = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
];

function ExpensiveList() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  // Without useMemo – runs on every render (even when count changes)
  // const filtered = expensiveFilter(allItems, query);

  // With useMemo – only re‑runs when query changes
  const filtered = useMemo(() => expensiveFilter(allItems, query), [query]);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Expensive List Filter</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter fruits..."
        className="border p-2 rounded w-full dark:bg-gray-700 dark:border-gray-600"
      />
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
      >
        Count: {count} (doesn't trigger filter)
      </button>
      <ul className="list-disc pl-5">
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensiveList;
