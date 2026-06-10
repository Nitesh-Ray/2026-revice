import { useReducer } from 'react';

// Products we can add
const availableProducts = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
];

const initialCart = [];

function cartReducer(cart, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = cart.find(item => item.id === action.payload.id);
      if (existing) {
        // Increase quantity
        return cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...cart, { ...action.payload, quantity: 1 }];
    }
    case 'REMOVE_FROM_CART':
      return cart.filter(item => item.id !== action.payload);
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return cart.filter(item => item.id !== id);
      }
      return cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
    }
    case 'CLEAR_CART':
      return [];
    default:
      return cart;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: 600, margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: 20, marginBottom: 30 }}>
        {availableProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: 10, borderRadius: 8, textAlign: 'center' }}>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>Cart ({totalItems} items)</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map(item => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, borderBottom: '1px solid #eee', paddingBottom: 10 }}>
            <span style={{ flex: 1 }}>{item.name} - ${item.price} each</span>
            <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}>+</button>
            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>🗑</button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <div>
          <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
          <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
