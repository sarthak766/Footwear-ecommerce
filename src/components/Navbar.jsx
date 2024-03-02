import React, { useState } from 'react';
import { TbBrandDatabricks } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };
  const cartItems =useSelector(state => state.cart.cart)
  return (
    <div className="bg-gray-900 text-white fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className={isOpen ? 'hidden' : 'text-2xl font-bold'}>
          Style<TbBrandDatabricks/>
        </Link>
        {!isOpen ? (
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </button>
        ) : (
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={closeNavbar}
          >
            <MdClose className="h-6 w-6 fill-current" />
          </button>
        )}
        <nav className={isOpen ? 'block md:block' : 'hidden md:block'}>
          <ul className="flex flex-col md:flex-row md:space-x-4 md:space-y-0">
            <li>
              <Link
                to="/"
                className="block md:inline-block hover:bg-gray-800 px-3 py-2 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allproduct"
                className="block md:inline-block hover:bg-gray-800 px-3 py-2 rounded"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block md:inline-block hover:bg-gray-800 px-3 py-2 rounded"
              >
                Cart({cartItems.length})
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block md:inline-block hover:bg-gray-800 px-3 py-2 rounded"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
