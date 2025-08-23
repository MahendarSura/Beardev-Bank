<main className="flex-1 p-4">
  <div className="max-w-7xl mx-auto">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

    {/* Tailwind test blocks */}
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
