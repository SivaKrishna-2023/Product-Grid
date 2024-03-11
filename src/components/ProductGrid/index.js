const productsGrid = ({ products, onProductClick }) => {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} className="product" style={{ border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }} onClick={() => onProductClick(product)}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    );
  };

  export default productsGrid