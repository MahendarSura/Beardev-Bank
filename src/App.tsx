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
      {/* flex-1 makes this fill vertical space */}
      <main className="flex-1">
        {/* Container centers content and adds padding */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

          {/* Tailwind test blocks inside the same container but outside Routes */}
          <div className="mt-8 space-y-4">
            <div className="text-axisRed hover-text-axisRed text-2xl font-bold">
              Axis Red Text
            </div>
            <div className="bg-axisRed hover-bg-axisRed p-4 rounded text-white font-semibold">
              Axis Red Background
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
