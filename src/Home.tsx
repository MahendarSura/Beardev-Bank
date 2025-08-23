import React from "react";

function Home() {
  return (
    <>
      {/*
        This component contains the main content of the home page.
        It does not include the Navbar or Footer as they are handled by App.tsx.
      */}

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 rounded-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Reimagine Your Finances with Beardev-Bank
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

      {/* Key Products/Services Grid */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl text-blue-600 mb-4">🏦</div>
            <h3 className="text-xl font-semibold mb-2">Savings Accounts</h3>
            <p className="text-gray-600">
              High interest rates with flexible withdrawal options.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl text-blue-600 mb-4">💳</div>
            <h3 className="text-xl font-semibold mb-2">Credit Cards</h3>
            <p className="text-gray-600">
              Exclusive rewards and benefits for every transaction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl text-blue-600 mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Personal Loans</h3>
            <p className="text-gray-600">
              Quick and easy loans with minimal documentation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl text-blue-600 mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2">Home Loans</h3>
            <p className="text-gray-600">
              Dream of your own home, made easy with our low interest rates.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Banking Section */}
      <section className="mt-20">
        <div className="bg-white p-10 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Banking at Your Fingertips</h2>
            <p className="text-gray-700 mb-6">
              Our award-winning mobile app allows you to manage your accounts,
              make payments, and invest from anywhere in the world.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Instant fund transfers</li>
              <li>Bill payments and recharges</li>
              <li>Portfolio management</li>
              <li>Secure biometric login</li>
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2363?auto=format&fit=crop&w=600&q=80"
              alt="Beardev-Bank Mobile App"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Latest Offers Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Exclusive Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=400&q=80"
              alt="Special Home Loan Rates"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Special Home Loan Rates</h3>
              <p className="text-gray-600">
                Get the lowest interest rates on home loans for a limited time.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1563986768605-da4d1480bd7e?auto=format&fit=crop&w=400&q=80"
              alt="Cashback on Credit Cards"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cashback on Credit Cards</h3>
              <p className="text-gray-600">
                Earn 5% cashback on all online purchases with your new card.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587570417749-e362c3e1e9c2?auto=format&fit=crop&w=400&q=80"
              alt="Refer and Earn"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Refer & Earn</h3>
              <p className="text-gray-600">
                Refer a friend and get ₹500 directly in your account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
