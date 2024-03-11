const productDetailedModel = ({ product, onClose }) => {
    return (
      <div id="productDetailedModel" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', maxWidth: '600px', textAlign: 'left' }}>
          <h2>{product.title}</h2>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

  export default productDetailedModel