import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories';
import Hero from '../../components/Hero';
import ProductCard from '../../components/ProductCard';
import Stats from '../../components/StatCard';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const { isAuthenticate } = useAuth();

  useEffect(() => {
    if (!isAuthenticate) {
      navigate('/login');
      return;
    }

    const fetchProducts = async () => {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        // Parse and limit products to 12
        setProducts(JSON.parse(storedProducts).slice(0, 12));
      } else {
        const response = await fetch('https://fakestoreapi.com/products?limit=12');
        const data = await response.json();
        // Save to localStorage and limit to 12
        localStorage.setItem('products', JSON.stringify(data));
        setProducts(data.slice(0, 12));
      }
    };

    fetchProducts();
  }, [isAuthenticate, navigate]);

  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCT</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">BEST SELLERS</h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
      <Stats />
    </>
  );
};

export default Home;
