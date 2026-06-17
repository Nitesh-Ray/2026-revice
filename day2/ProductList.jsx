function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Phone', price: 699, inStock: false },
    { id: 3, name: 'Tablet', price: 499, inStock: true },
  ];
  
  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p style={{ color: product.inStock ? 'green' : 'red' }}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;