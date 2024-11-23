// Products.js
import React from 'react';
import Categories from '../../components/Categories';
import ProductCard from '../../components/ProductCard';
import { useProductContext } from '../../modules/ProductContext';

const Products = () => {
  const { products } = useProductContext(); // Access products from context

  return (
    <div>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCT</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
};

export default Products;
