// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
