import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Beardev Bank</div>
      <div>
        <a href="/" className="mx-2 hover:text-gray-200">Home</a>
        <a href="/login" className="mx-2 hover:text-gray-200">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
