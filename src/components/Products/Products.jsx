import React, { useState, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

function Products(){
  const[products, setProducts] = useState([]);

  useEffect(() =>{
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);


  return(
    <section className="products contanier">
      {
        products.map((product) => <ProductCard key={product.id} data={product}/>)
      }
    </section>
  );
}

export default Products;
