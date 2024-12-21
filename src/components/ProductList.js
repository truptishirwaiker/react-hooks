// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
      
        axios.get ('https://fakestoreapi.com/products')
        .then((response)=>{
          console.log (response)
          setProducts(response.data)
        })
      },[])
  return (
    <div>
      <h1>Product List</h1>
      
        <ul>
          {products.map((data) => (
        <li key={data.id}>
              <strong>{data.title}</strong></li>
            ))}
        </ul>
    
 </div>
  )}

export default ProductList;
