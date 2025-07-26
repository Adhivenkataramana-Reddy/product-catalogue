import React, { useState } from 'react';
import productsData from '../data/products';
import ProductCard from './ProductCard';
import '../App.css';

const ProductList = () => {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  let filtered = productsData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'All' || p.category === category)
  );

  if (sortOrder === 'lowToHigh') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select onChange={e => setSortOrder(e.target.value)}>
          <option value="">Sort by</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>

        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
