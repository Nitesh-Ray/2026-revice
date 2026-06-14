// Products.jsx
import { Link } from 'react-router-dom';


const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 },
];

export default function Products() {
  return (
    <div>
      {products.map(p => (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
}
