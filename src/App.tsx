// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 space-y-6">
        {/* Example Axis Red Text */}
        <div className="text-axisRed hover-text-axisRed text-2xl font-bold">
          Axis Red Text
        </div>

        {/* Example Axis Red Background */}
        <div className="bg-axisRed hover-bg-axisRed p-4 rounded text-white font-semibold">
          Axis Red Background
        </div>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
