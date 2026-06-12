import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams(); // grabs the :id from the path

  return <h2>Product Details – ID: {id}</h2>;
}