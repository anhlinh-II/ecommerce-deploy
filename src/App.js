import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import Login from './modules/Login';
import Register from './modules/Register';
import AdminProduct from './modules/AdminProduct';

function App() {
  const location = useLocation();

  // Paths where Header and Footer should not be displayed
  const hideHeaderFooter = ['/login', '/register'];

  return (
    <div>
      {!hideHeaderFooter.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:title" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<AboutDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/products" element={<AdminProduct />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 className="mb-4 text-4xl font-bold">404</h1>
                <p className="text-gray-600">Oops! Trang bạn đang tìm kiếm không được tìm thấy, vui lòng thử lại</p>
                <a href="/" className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">Trang chủ</a>
              </div>
            </div>
          }
        />
      </Routes>
      {!hideHeaderFooter.includes(location.pathname) && <Footer />}
      <ToastContainer />
    </div>
  );
}

export default App;
