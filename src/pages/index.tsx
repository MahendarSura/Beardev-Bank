// src/pages/index.tsx
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-axisRed">
        Beardev Bank 
      </h1>
    </div>
  );
};

import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center font-sans">
      <div className="max-w-3xl bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-[#E2001A] mb-6">Welcome to Beardev Bank</h1>
        <p className="mb-6 text-gray-700 text-lg">
          Experience seamless and secure banking tailored for you.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-axisRed text-white px-6 py-3 rounded hover:bg-red-700 transition">
            Open an Account
          </button>
          <button className="border border-axisRed text-axisRed px-6 py-3 rounded hover:bg-axisRed hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between mb-12">
        <div className="text-5xl font-extrabold text-axisRed">Beardev Bank</div>
        <ul className="hidden md:flex space-x-10 font-semibold text-gray-700">
          <li className="hover:text-axisRed cursor-pointer">Explore products</li>
          <li className="hover:text-axisRed cursor-pointer">Grab Deal</li>
          <li className="hover:text-axisRed cursor-pointer">Make Payments</li>
          <li className="hover:text-axisRed cursor-pointer">Bank Smart</li>
          <li className="hover:text-axisRed cursor-pointer">Accounts</li>
          <li className="hover:text-axisRed cursor-pointer">Deposits</li>
          <li className="hover:text-axisRed cursor-pointer">Cards</li>
          <li className="hover:text-axisRed cursor-pointer">Loans</li>
          <li className="hover:text-axisRed cursor-pointer">Investments</li>
          <li className="hover:text-axisRed cursor-pointer">Insurance</li>
          <li className="hover:text-axisRed cursor-pointer">Special Services</li>
          <li className="hover:text-axisRed cursor-pointer">Knowledge Hub</li>
        </ul>
        <div className="text-axisRed font-semibold cursor-pointer hover:underline">Login/Signup</div>
      </nav>

export default Home;
