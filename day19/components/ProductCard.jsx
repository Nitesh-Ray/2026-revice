// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-lg hover:text-blue-500 transition-colors">{product.name}</h3>
        </Link>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{product.category}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-bold transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}