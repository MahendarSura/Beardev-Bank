function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex flex-col items-center px-4 flex-grow">
        <div className="w-full max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        {/* Test blocks */}
        <div className="mt-8 space-y-4 w-full max-w-7xl">
          <div className="text-axisRed hover-text-axisRed text-2xl font-bold text-center">
            Axis Red Text
          </div>
          <div className="bg-axisRed hover-bg-axisRed p-4 rounded text-white font-semibold text-center">
            Axis Red Background
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
