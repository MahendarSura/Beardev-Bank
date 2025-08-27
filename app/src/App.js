import React from 'react';
import { Search, User, LifeBuoy, MapPin } from 'lucide-react'; // Icons

const App = () => {
  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Top Header with Red Background and Both Navbars */}
      <header className="bg-red-600 shadow-sm sticky top-0 z-50 text-[12px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">

          {/* Left - Logo + Nav */}
          <div className="flex items-center space-x-3 min-w-0">
            {/* Smaller Logo */}
            <div className="flex items-center flex-shrink-0">
              <span className="bg-white text-red-600 rounded-md p-1 mr-2 font-bold text-sm">B</span>
              <span className="text-sm font-bold text-white whitespace-nowrap">Beardev Bank</span>
            </div>

            {/* Nav Links */}
            <nav className="flex items-center space-x-2 font-medium min-w-0 overflow-x-auto no-scrollbar whitespace-nowrap">
              <a href="#" className="text-white hover:underline flex-shrink-0 px-1">Personal</a>
              <a href="#" className="text-white hover:underline flex-shrink-0 px-1">Business</a>
              <a href="#" className="text-white hover:underline flex-shrink-0 px-1">Corporate</a>
              <a href="#" className="text-white hover:underline flex-shrink-0 px-1">Private Banking</a>
              <a href="#" className="text-white hover:underline flex-shrink-0 px-1">Privy League</a>
              <a href="#" className="text-white hover:underline flex-shrink-0 px-1">Solitaire</a>
              <a href="#" className="text-white hover:underline flex-shrink-0 px-1">NRI Services</a>
              <a href="#" className="text-white hover:underline flex-shrink-0 px-1">Investors</a>
            </nav>
          </div>

          {/* Right - Login Button */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button className="bg-white hover:bg-gray-100 text-red-600 font-semibold px-3 py-1 rounded-full flex items-center space-x-1 text-xs shadow-sm transition-colors whitespace-nowrap">
              <User size={14} />
              <span>Login</span>
            </button>
          </div>
        </div>

        {/* Bottom white navbar inside same red header */}
        <div className="bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-3 text-gray-600 font-medium text-[11px] min-w-0 overflow-x-auto no-scrollbar whitespace-nowrap">
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Accounts &amp; Deposits</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Cards &amp; Prepaid Services</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Loans</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Investment &amp; Insurance</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Payments &amp; Taxes</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Offers</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Service Request</a>
            </div>

            <div className="hidden md:flex items-center space-x-4 text-red-600 font-semibold text-xs whitespace-nowrap">
              <a href="#" className="flex items-center space-x-1 hover:underline">
                <LifeBuoy size={14} />
                <span>Help Center</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:underline">
                <MapPin size={14} />
                <span>Locate us</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-20">
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 lg:h-[600px] flex flex-col-reverse lg:flex-row items-center">
          {/* Left Content Column */}
          <div className="p-8 sm:p-12 lg:p-24 lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Own your dream home, with best <span className="text-red-600">Beardev Bank Home Loans</span> rate!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Interest rate now starting at 7.99%* p.a.
            </p>
            <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-8 rounded-full shadow-lg">
                  Apply Now
                </button>
                 <button className="text-red-600 hover:text-red-700 font-semibold py-3 px-8 rounded-full border-2 border-red-600 transition-colors">
                  Know More
                </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:w-1/2 h-64 sm:h-96 lg:h-full w-full">
            <img 
              src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132414.jpg" 
              alt="Family sitting on a couch"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
