// src/pages/HomePage.jsx
import {useState, useMemo} from "react";
import {products} from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import { Link } from 'react-router-dom';
import { useRecentStore } from "../store/recentStore";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const recent = useRecentStore((state) => state.recent);

  const filtered = useMemo(() => {
    let result = products;
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }
    if (search.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return result;
  }, [search, category]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🛍️ Shop</h1>

      {/* Add this section right after the <h1> and before <FilterBar> */}
      {recent.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">🕒 Recently Viewed</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {recent.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="flex-shrink-0 w-32 text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <p className="text-sm mt-1 truncate">{product.name}</p>
                <p className="text-sm font-bold">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 mt-12 text-lg">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
