import React from "react";

function Home() {
  return (
    <>
      {/*
        This section is for the main content of your home page.
        Do not add Navbar or Footer code here.
      */}

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 rounded-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Welcome to Beardev-Bank
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            A secure and seamless banking experience tailored just for you.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-colors">
              Open an Account
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
              Explore Products
            </button>
          </div>
        </div>
      </section>

      {/* You can add more sections here like Services, Offers, etc. */}
    </>
  );
}

export default Home;
