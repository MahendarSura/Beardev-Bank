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
      <Navbar />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
