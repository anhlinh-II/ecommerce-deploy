import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const exchangeRate = 24000; // Giả sử tỷ giá là 24.000 VND cho 1 USD

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleCart = (product, redirect) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find(item => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
    }
    toast.success("Sản phẩm đã được thêm vào giỏ hàng");
    if (redirect) {
      navigate('/cart');
    }
  };

  if (!Object.keys(product).length > 0) return <div>Đang tải.....</div>;

  const priceInVND = (product.price * exchangeRate).toLocaleString(); // Chuyển đổi giá

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product?.title}
            className="lg:w-1/2 w-full lg:h-auto max-h-[600px] h-64 object-contain object-center rounded"
            src={product?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{product?.category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {/* Thêm các biểu tượng đánh giá ở đây nếu cần */}
                <span className="text-gray-600 ml-3">4 Đánh giá</span>
              </span>
            </div>
            <p className="leading-relaxed">Sản phẩm là hai chuẩn kết nối phổ biến, mang lại sự tương thích và hiệu suất vượt trội cho người dùng. Với khả năng chuyển dữ liệu nhanh chóng, USB 3.0 giúp tăng cường hiệu suất máy tính, đặc biệt khi làm việc với các tệp tin lớn. Được thiết kế với dung lượng cao, ổ USB này hỗ trợ định dạng NTFS cho các hệ điều hành Windows 10, 8.1 và 7, giúp người dùng dễ dàng lưu trữ và truy xuất dữ liệu. Tuy nhiên, đối với những hệ điều hành khác, có thể cần phải định dạng lại để đảm bảo tính tương thích. Tính tương thích của USB 3.0 và USB 2.0 cũng có thể thay đổi tùy thuộc vào cấu hình phần cứng và hệ điều hành của từng người dùng, mang lại sự linh hoạt trong việc sử dụng.</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Màu sắc</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Kích thước</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="title-font font-medium text-2xl text-gray-900">{priceInVND} VND</span>
              <div className="flex">
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mr-2" onClick={() => handleCart(product, true)}>Mua ngay</button>
                <button className="flex ml-auto border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded" onClick={() => handleCart(product)}>Thêm vào giỏ hàng</button>
              </div>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
