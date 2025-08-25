import React from "react";

const Login = () => {
  return (
    <div className="absolute top-4 right-4 bg-white shadow-lg p-6 rounded-md z-50">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form className="flex flex-col gap-4 max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered px-4 py-2 border border-gray-300 rounded"
        />
        <button className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
