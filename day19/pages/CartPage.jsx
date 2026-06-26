// src/pages/CartPage.jsx
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Cart ({totalItems} items)</h1>
        <button
          onClick={clearCart}
          className="text-red-500 hover:underline text-sm"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center gap-4"
          >
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <Link to={`/product/${item.id}`} className="font-bold hover:text-blue-500">
                {item.name}
              </Link>
              <p className="text-gray-500">${item.price} each</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 dark:bg-gray-600 w-8 h-8 rounded-full font-bold"
              >
                −
              </button>
              <span className="w-8 text-center font-bold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 dark:bg-gray-600 w-8 h-8 rounded-full font-bold"
              >
                +
              </button>
            </div>
            <p className="font-bold text-lg w-24 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              🗑
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mt-6">
        <div className="flex justify-between text-xl font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Link
          to="/checkout"
          className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold mt-4 transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}