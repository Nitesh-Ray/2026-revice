// src/pages/ConfirmationPage.jsx
import { useLocation, Link } from 'react-router-dom';

export default function ConfirmationPage() {
  const location = useLocation();
  const orderData = location.state?.orderData;

  if (!orderData) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center mt-20">
        <p className="text-xl">No order found.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 text-center mt-20">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <span className="text-6xl">🎉</span>
        <h1 className="text-3xl font-bold mt-4">Order Confirmed!</h1>
        <p className="text-gray-500 mt-2">Thank you for your purchase, {orderData.fullName}.</p>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mt-6 text-left space-y-2">
          <p><strong>Email:</strong> {orderData.email}</p>
          <p><strong>Shipping to:</strong> {orderData.address}, {orderData.city} {orderData.zip}</p>
          <p className="text-sm text-gray-500 mt-2">A confirmation email will be sent shortly.</p>
        </div>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-bold mt-6 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}