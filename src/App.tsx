import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/index";  // Home page component
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 p-4">
        <div className="max-w-7xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
