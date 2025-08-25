import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/index"; 
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* 👇 Main Content Area */}
      <main className="flex-1 bg-gray-100 flex justify-center">
        <div className="w-full max-w-7xl px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
