import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-blue-600">Beardev-Bank</div>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Personal</Link>
        <Link to="/business" className="text-gray-700 hover:text-blue-600 transition-colors">Business</Link>
        <Link to="/corporate" className="text-gray-700 hover:text-blue-600 transition-colors">Corporate</Link>
        <Link to="/nri" className="text-gray-700 hover:text-blue-600 transition-colors">NRI</Link>
      </div>
      <div className="flex space-x-4 items-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition-colors">
          Log In
        </button>
        <button className="hidden sm:block border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
