import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      {/* Website Logo/Name on the left */}
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-blue-600">Beardev-Bank</div>
      </div>
      
      {/* Links on the right side */}
      <div className="flex space-x-4 items-center">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;

