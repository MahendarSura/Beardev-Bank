import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import Home from "./Home"; 
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex h-screen">
          <Footer />
          <div className="flex h-screen">
            <Login />
            <div className="flex h-screen">
              <Home />
              <main className="p-4 flex-1 overflow-auto">
               <Dashboard />
             </main>
           </div>
         </div>
       );
     }

export default App;
