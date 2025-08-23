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

{/* NAVBAR */}
      <nav className="bg-white shadow rounded-md flex items-center justify-between py-4 px-6 border border-gray-200">
        <div className="text-3xl font-extrabold text-[#E80000] cursor-pointer">ICICI Bank</div>
        <ul className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <li className="hover:text-[#E80000] cursor-pointer">Personal</li>
          <li className="hover:text-[#E80000] cursor-pointer">NRI</li>
          <li className="hover:text-[#E80000] cursor-pointer">Business</li>
          <li className="hover:text-[#E80000] cursor-pointer">iShop</li>
          <li className="hover:text-[#E80000] cursor-pointer">Resources</li>
          <li className="hover:text-[#E80000] cursor-pointer">About</li>
          <li className="hover:text-[#E80000] cursor-pointer">Help</li>
          <li className="hover:text-[#E80000] cursor-pointer">Complaints</li>
        </ul>
        <div className="text-[#E80000] font-semibold cursor-pointer hover:underline">Login</div>
      </nav>


export default Navbar;
