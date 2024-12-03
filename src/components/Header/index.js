import React from 'react';
import { IoIosLogOut } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuth } from '../../modules/AuthContext';

const navigations = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'News', path: '/news' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Admin', path: 'admin/products', requiresAdmin: true }, // Admin-only navigation
];

const Header = () => {
  const { setIsAuthenticate, isAuthenticate, isAdmin } = useAuth();

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={'/'}
          className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Ecommerce</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations
            .filter(
              (navigation) => !navigation.requiresAdmin || isAdmin // Show admin links only if isAdmin is true
            )
            .map((navigation) => (
              <Link
                key={navigation.name}
                to={navigation.path}
                className="mr-5 hover:text-gray-900"
              >
                {navigation.name}
              </Link>
            ))}
        </nav>
        <div className="flex gap-4 items-center">
          {isAuthenticate ? (
            // Logout button
            <button
              onClick={() => setIsAuthenticate(false)}
              className="flex gap-1 items-center text-gray-900 hover:text-indigo-500"
            >
              <IoIosLogOut className="text-2xl" />
              <span className="hidden md:block">Log out</span>
            </button>
          ) : (
            // Login button
            <Link
              to={'/login'}
              className="flex gap-1 items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded"
            >
              <span className="hidden md:block">Login</span>
            </Link>
          )}
          {/* Cart button */}
          <Link
            to={'/cart'}
            className="flex gap-1 items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded"
          >
            <AiOutlineShoppingCart className="text-xl" />
            <span className="hidden md:block">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;