import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import News from './modules/News';
import About from './modules/About';
import { ToastContainer } from 'react-toastify';
import Contact from './modules/Contact';
import NewsDetails from './modules/NewsDetails';
import AboutDetails from './modules/AboutDetails';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<NewsDetails />} />
        <Route path="cart" element={<Cart/>} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<AboutDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;