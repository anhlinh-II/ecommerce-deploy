import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Product = () => {
  const { title: slug } = useParams(); // Use the slug from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const createSlug = (title) => { 
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ''); // Trim leading/trailing hyphens
  };

  useEffect(() => {
    const fetchProductFromLocalStorage = () => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      console.log('Stored Products:', storedProducts); // Debug stored products
      const foundProduct = storedProducts.find(
        (product) => createSlug(product.title) === slug // Match slug instead of ID
      );

if (foundProduct) {
  console.log('Matched Product:', foundProduct); // Debug matched product
  setProduct(foundProduct);

  // Update SEO metadata when product is loaded
  document.title = `${foundProduct.title} - Buy Online | MyStore`;
  document.querySelector('meta[name="description"]').setAttribute(
    'content',
    `${foundProduct.title} - Buy this amazing ${foundProduct.category} for only $${foundProduct.price}.`
  );
} else {
  console.error('Product not found for slug:', slug); // Debug not found case
  toast.error('Product not found');
  navigate('/'); // Redirect to home or an appropriate page
}
    };

fetchProductFromLocalStorage();
  }, [slug, navigate]);

const handleCart = (product, redirect) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const isProductExist = cart.find((item) => item.id === product.id);

  if (isProductExist) {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  } else {
    localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
  }

  toast.success('Product added to cart');
  if (redirect) {
    navigate('/cart');
  }
};

if (!product) return <div>Loading...</div>;

return (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt={product.title}
          className="lg:w-1/2 w-full lg:h-auto max-h-[600px] h-64 object-contain object-center rounded"
          src={product.image}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{product.category}</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
          <div className="flex mb-4">
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </div>
          <p className="leading-relaxed">{product.description}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
            <div className="flex">
              <button
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mr-2"
                onClick={() => handleCart(product, true)}
              >
                Buy it now
              </button>
              <button
                className="flex ml-auto border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded"
                onClick={() => handleCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Product;
