// contexts/ProductContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const storedProducts = JSON.parse(localStorage.getItem('products'));
      if (storedProducts) {
        setProducts(storedProducts);
      } else {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        localStorage.setItem('products', JSON.stringify(data)); // Save initial fetch to localStorage
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
