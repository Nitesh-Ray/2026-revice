import {useState, useMemo, useCallback, memo} from "react";

// --- ProductItem (memoised) ---
const ProductItem = memo(function ProductItem({product, onAdd}) {
  console.log("ProductItem rendered:", product.name);
  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-700 shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">${product.price}</p>
      </div>
      <button
        onClick={() => onAdd(product)}
        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
});

// --- Main Page ---
const allProducts = Array.from({length: 1000}, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 1,
  category: i % 3 === 0 ? "Electronics" : i % 3 === 1 ? "Clothing" : "Books",
}));

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name"); // 'name' or 'price'
  const [cartCount, setCartCount] = useState(0);

  // useMemo – only recalculate when search or sort changes
  const filteredAndSorted = useMemo(() => {
    console.log("Filtering & sorting...");
    let result = allProducts.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
    if (sort === "price") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [search, sort]);

  // useCallback – stable function reference for child items
  const handleAdd = useCallback((product) => {
    setCartCount((c) => c + 1);
    console.log("Added:", product.name);
  }, []);

  //------------------

  const [category, setCategory] = useState("All");

  const filteredByCategoryAndSearch = useMemo(() => {
  let result = allProducts;
  
  // Filter by category
  if (category !== "All") {
    result = result.filter((p) => p.category === category);
  }
  
  // Filter by search
  if (search) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }
  
  // Sort
  if (sort === "price") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else {
    result = [...result].sort((a, b) => a.name.localeCompare(b.name));
  }
  
  return result;
}, [search, sort, category]);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">
        Products ({filteredByCategoryAndSearch.length})
      </h1>
      <p>Cart: {cartCount} items</p>

      <div className="flex gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="border p-2 rounded flex-1 dark:bg-gray-700 dark:border-gray-600"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredByCategoryAndSearch.map((product) => (
          <ProductItem key={product.id} product={product} onAdd={handleAdd} />
        ))}
      </div>

      <div className="flex gap-2">
        {["All", "Electronics", "Clothing", "Books"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`py-1 px-3 rounded ${category === cat ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-600"}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
