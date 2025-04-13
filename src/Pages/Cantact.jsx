// src/Pages/Cantact.jsx
import React from 'react';
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products;
};

function Cantact() {
  const products = useLoaderData();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cantact;
