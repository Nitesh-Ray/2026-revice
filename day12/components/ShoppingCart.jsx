import { useCartStore } from '../store/cartStore';

const availableProducts = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
];

function ShoppingCart() {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: 10 }}>
        {availableProducts.map((p) => (
          <div key={p.id}>
            <h4>{p.name}</h4>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart ({totalItems} items)</h2>
      {cart.length === 0 && <p>Empty cart.</p>}
      {cart.map((item) => (
        <div key={item.id} style={{ display: 'flex', gap: 10 }}>
          <span>{item.name}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>🗑</button>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;