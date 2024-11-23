import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="text-gray-600 body-font border-t-2">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">Create an exceptional experience with modern designs</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SERVICES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/web-design" className="text-gray-600 hover:text-gray-800">Web Design</a>
              </li>
              <li>
                <a href="/branding" className="text-gray-600 hover:text-gray-800">Branding</a>
              </li>
              <li>
                <a href="/marketing" className="text-gray-600 hover:text-gray-800">Marketing</a>
              </li>
              <li>
                <a href="/e-commerce" className="text-gray-600 hover:text-gray-800">E-commerce</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a href="/careers" className="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a href="/news" className="text-gray-600 hover:text-gray-800">News</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUPPORT</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/help-center" className="text-gray-600 hover:text-gray-800">Help Center</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-gray-800">FAQs</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-gray-800">Terms of Use</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FOLLOW US</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="https://facebook.com" className="text-gray-600 hover:text-gray-800">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-gray-600 hover:text-gray-800">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-gray-600 hover:text-gray-800">Instagram</a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Tailblocks —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="https://facebook.com" className="text-gray-500">
              {/* SVG for Facebook */}
            </a>
            <a href="https://twitter.com" className="ml-3 text-gray-500">
              {/* SVG for Twitter */}
            </a>
            <a href="https://instagram.com" className="ml-3 text-gray-500">
              {/* SVG for Instagram */}
            </a>
            <a href="https://linkedin.com" className="ml-3 text-gray-500">
              {/* SVG for LinkedIn */}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
