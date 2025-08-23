import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/index"; // Assuming your Home component is in src/pages/index.tsx
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* Main content section */}
      <main className="flex-1 p-4">
        {/*
          This new div is the key to centering your content.
          It sets a max-width, centers the content, and adds padding.
        */}
        <div className="max-w-7xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

          {/* Tailwind test blocks */}
          <div className="mt-8 space-y-4">
            {/* This div now has no text, keeping only the background color */}
            <div className="bg-axisRed hover-bg-axisRed p-4 rounded text-white font-semibold">
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
