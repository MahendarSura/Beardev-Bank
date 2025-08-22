import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-axisRed text-white">Navbar</header>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <footer className="p-4 bg-gray-800 text-white">Footer</footer>
    </div>
  );
}

export default App;
