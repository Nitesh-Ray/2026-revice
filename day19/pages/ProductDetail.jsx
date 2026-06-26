// src/pages/ProductDetail.jsx
import {useParams, Link} from "react-router-dom";
import {products} from "../data/products";
import {useCartStore} from "../store/cartStore";
import {useRecentStore} from "../store/recentStore";
import { useEffect } from 'react';

export default function ProductDetail() {
  const {productId} = useParams();
  const product = products.find((p) => p.id === Number(productId));
  const addToCart = useCartStore((state) => state.addToCart);



  // Inside the component, right after finding the product:
  const addRecent = useRecentStore((state) => state.addRecent);

  useEffect(() => {
    if (product) addRecent(product);
  }, [product]);




  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center">
        <p className="text-xl text-red-500">Product not found.</p>
        <Link
          to="/"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          ← Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to shop
      </Link>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 md:h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <span className="text-sm text-blue-500 font-semibold">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
            <p className="text-4xl font-bold text-blue-600 mt-4">
              ${product.price}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              {product.description}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold mt-6 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
