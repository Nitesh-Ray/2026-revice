// ProductDetail.jsx
import {useParams} from "react-router-dom";

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 },
];

export default function ProductDetail() {
  const {productId} = useParams();
  const product = products.find((p) => p.id === Number(productId));

  if (!product) return <NotFound />;
  return (
    <h3>
      {product.name} - ${product.price}
    </h3>
  );
}