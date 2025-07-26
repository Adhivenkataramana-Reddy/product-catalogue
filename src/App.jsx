import React from 'react';
import ProductList from './components/ProductList';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="app-container">
      <img src={logo} alt="GreenMart Logo" className="logo" />
      <h1>🛍 PRODUCT CATALOGUE</h1>
      <ProductList />
    </div>
  );
}

export default App;
