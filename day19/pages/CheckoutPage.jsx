// src/pages/CheckoutPage.jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

const checkoutSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  zip: z.string().min(1, 'ZIP is required').regex(/^\d{5}$/, '5 digits required'),
  card: z.string().min(1, 'Card number is required').regex(/^\d{16}$/, '16 digits required'),
});

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(checkoutSchema) });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const onSubmit = (data) => {
    console.log('Order placed:', data);
    clearCart();
    navigate('/confirmation', { state: { orderData: data } });
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const inputClass = 'w-full border p-3 rounded dark:bg-gray-700 dark:border-gray-600';
  const errorClass = 'text-red-500 text-sm mt-1';

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input {...register('fullName')} className={inputClass} />
            {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" {...register('email')} className={inputClass} />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input {...register('address')} className={inputClass} />
            {errors.address && <p className={errorClass}>{errors.address.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input {...register('city')} className={inputClass} />
              {errors.city && <p className={errorClass}>{errors.city.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ZIP</label>
              <input {...register('zip')} className={inputClass} />
              {errors.zip && <p className={errorClass}>{errors.zip.message}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Card Number (16 digits)</label>
            <input {...register('card')} className={inputClass} />
            {errors.card && <p className={errorClass}>{errors.card.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-colors"
          >
            Place Order – ${total.toFixed(2)}
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 h-fit">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>
          <div className="space-y-2">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <hr className="my-3 dark:border-gray-600" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}