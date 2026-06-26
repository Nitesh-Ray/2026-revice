// src/components/FilterBar.jsx
import {categories} from "../data/products";

export default function FilterBar({search, setSearch, category, setCategory}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="flex-1 border p-3 rounded-lg dark:bg-gray-800 dark:border-gray-700"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-3 rounded-lg dark:bg-gray-800 dark:border-gray-700"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
