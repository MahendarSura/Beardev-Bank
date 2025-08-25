import React from "react";

export default function MinimalHome() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 rounded shadow">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to Beardev Bank</h1>
        <p className="text-center text-gray-700">
          This content is centered horizontally and vertically.
        </p>
      </div>
    </div>
  );
}
