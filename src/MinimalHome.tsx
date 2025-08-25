// src/pages/MinimalHome.tsx
import React from "react";

function MinimalHome() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md mt-16">
      <h1 className="text-5xl font-extrabold text-center text-axisRed mb-6">
        Welcome to Beardev Bank
      </h1>
      <p className="text-center text-gray-700 text-lg">
        This is a minimal home page created to test layout and styling.
      </p>
      <div className="mt-8 text-center">
        <button className="bg-axisRed text-white font-bold py-3 px-8 rounded hover:bg-red-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default MinimalHome;
