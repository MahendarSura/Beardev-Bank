import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/index";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Renders the navigation bar here */}
      <Navbar />

      {/* Main content section */}
      <main className="flex-1">
        {/*
          Content inside this container will be centered.
          It provides proper padding and max-width in the middle of the page.
        */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </main>

      {/* Renders the footer here */}
      <Footer />
    </div>
  );
}

export default App;
