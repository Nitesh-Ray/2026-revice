// src/components/Navbar.jsx
import {Link, useLocation} from "react-router-dom";
import {useCartStore} from "../store/cartStore";

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          🛍️ ShopNow
        </Link>
        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className={`hover:text-blue-500 ${location.pathname === "/" ? "text-blue-500 font-bold" : ""}`}
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className={`hover:text-blue-500 relative ${location.pathname === "/cart" ? "text-blue-500 font-bold" : ""}`}
          >
            Cart{" "}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
