import React, { useState, useEffect } from 'react';
import ProductGrid from './components/ProductGrid';
import ProductDetailsModal from './components/ProductDetailsModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleProductClick = product => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1>Products</h1>
      <ProductGrid products={products} onProductClick={handleProductClick} />
      {selectedProduct && <ProductDetailsModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default App