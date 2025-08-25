import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MinimalHome from "./pages/MinimalHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MinimalHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
