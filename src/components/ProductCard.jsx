import React from 'react';
import '../App.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">

      <div className="product-card">
  <img src={product.image} alt={product.name} className="product-image"/>
  <h3>{product.name}</h3>
  <p>{product.description}</p>
  <p><strong>${product.price}</strong></p>
</div>

    </div>
  );
};

export default ProductCard;
