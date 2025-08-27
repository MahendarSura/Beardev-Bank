import React from 'react';
import { Search, User, LifeBuoy, MapPin, ArrowRightCircle, ChevronRight } from 'lucide-react';

const App = () => {
  // Main application container with a light gray background and Inter font
  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      {/* Header section with two layers: red top bar and white bottom bar */}
      <header className="bg-red-600 shadow-sm sticky top-0 z-50 text-[12px]">
        {/* Top bar with logo, main navigation, and login button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          {/* Left section: Logo and bank name */}
          <div className="flex items-center space-x-3 min-w-0">
            <div className="flex items-center flex-shrink-0">
              <span className="bg-white text-red-600 rounded-md p-1 mr-2 font-bold text-sm">B</span>
              <span className="text-sm font-bold text-white whitespace-nowrap">Beardev Bank</span>
            </div>
            {/* Main navigation links */}
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

          {/* Right section: Login button */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button className="bg-white hover:bg-gray-100 text-red-600 font-semibold px-3 py-1 rounded-full flex items-center space-x-1 text-xs shadow-sm transition-colors whitespace-nowrap">
              <User size={14} />
              <span>Login</span>
            </button>
          </div>
        </div>

        {/* Bottom white navbar with additional service links */}
        <div className="bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
            {/* Service links */}
            <div className="flex items-center space-x-3 text-gray-600 font-medium text-[11px] min-w-0 overflow-x-auto no-scrollbar whitespace-nowrap">
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Accounts &amp; Deposits</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Cards &amp; Prepaid Services</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Loans</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Investment &amp; Insurance</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Payments &amp; Taxes</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Offers</a>
              <a href="#" className="hover:text-red-600 flex-shrink-0 px-1">Service Request</a>
            </div>
            {/* Help/Locate links (hidden on smaller screens) */}
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

      {/* Main content area */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-20">
        {/* Hero section with text and an image */}
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 lg:h-[600px] flex flex-col-reverse lg:flex-row items-center">
          {/* Hero text content */}
          <div className="p-8 sm:p-12 lg:p-24 lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Own your dream home, with best <span className="text-red-600">Beardev Bank Home Loans</span> rate!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Interest rate now starting at 7.99%* p.a.
            </p>
            {/* Call-to-action buttons */}
            <div className="flex space-x-4">
              <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-8 rounded-full shadow-lg">
                Apply Now
              </button>
              <button className="text-red-600 hover:text-red-700 font-semibold py-3 px-8 rounded-full border-2 border-red-600 transition-colors">
                Know More
              </button>
            </div>
          </div>
          {/* Hero image container */}
          <div className="lg:w-1/2 h-64 sm:h-96 lg:h-full w-full">
            <img
              src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132414.jpg"
              alt="Family"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      {/* Section with three cards and images */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex justify-between gap-4 flex-wrap">
          {/* Card 1 */}
          <div className="w-full sm:w-[32%] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="h-36">
              <img src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_1.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">Everyday Savings Account</h3>
              <p className="text-sm text-gray-600 mb-2">Enjoy offers on BookMyShow, EazyDiner and more.</p>
              <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium">
                <span>Apply Now</span>
                <ArrowRightCircle size={14} />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[32%] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="h-36">
              <img src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_2.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">Credit Cards</h3>
              <p className="text-sm text-gray-600 mb-2">Rewards | Cashback | EMI Deals</p>
              <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium">
                <span>Apply Now</span>
                <ArrowRightCircle size={14} />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[32%] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="h-36">
              <img src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_3.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">3-in-1 Trinity Account</h3>
              <p className="text-sm text-gray-600 mb-2">Save, Trade & Invest Smartly</p>
              <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium">
                <span>Apply Now</span>
                <ArrowRightCircle size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section with three cards and images */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex justify-between gap-4 flex-wrap">
          {/* Card 1 */}
          <div className="w-full sm:w-[32%] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="h-36">
              <img src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_1.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mb-1 block">Current Account</span>
              <h3 className="text-md font-semibold text-gray-800 mb-1">Power your entrepreneurial dreams</h3>
              <p className="text-sm text-gray-600 mb-2">Enjoy simplified transactions and grow the smart way.</p>
              <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium">
                <span>Apply Now</span>
                <ArrowRightCircle size={14} />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[32%] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="h-36">
              <img src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_2.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mb-1 block">Business Lending</span>
              <h3 className="text-md font-semibold text-gray-800 mb-1">Not enough funds for your business dreams?</h3>
              <p className="text-sm text-gray-600 mb-2">Flexible collateral-free loans from ₹3 lakh to ₹1 crore</p>
              <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium">
                <span>Apply Now</span>
                <ArrowRightCircle size={14} />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[32%] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="h-36">
              <img src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_3.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mb-1 block">Working Capital</span>
              <h3 className="text-md font-semibold text-gray-800 mb-1">Your big ambitions need smart capital</h3>
              <p className="text-sm text-gray-600 mb-2">Answer business opportunities with confidence, thanks to our working capital solutions</p>
              <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium">
                <span>Apply Now</span>
                <ArrowRightCircle size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Two side-by-side images with paragraph */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {/* Wide Image (Left - 2/3 width) */}
          <div className="w-full md:w-2/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="h-40 sm:h-48 md:h-52 lg:h-60">
              <img
                src="https://raw.githubusercontent.com/mdr-001/images/main/wide-placeholder.jpg"
                alt="Wide Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right Section: Small Image + Paragraph (1/3 width) */}
          <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
            {/* Small Image */}
            <div className="h-40 sm:h-48 md:h-52 lg:h-60">
              <img
                src="https://raw.githubusercontent.com/mdr-001/images/main/small-placeholder.jpg"
                alt="Small Image"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text below image */}
            <div className="p-4">
              <p className="text-[10px] text-gray-600 leading-relaxed">
                At <span className="font-semibold">Beardev Bank</span>, we believe in the fearless trailblazers—the ones who dare to dream bigger, push boundaries, and turn challenges into opportunities. That’s why we are here—to back you with financial solutions that evolve with your needs, empowering you to chase the extraordinary. Because when you have <span className="font-semibold">Hausla</span>, anything is possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Hub Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Knowledge Hub</h2>
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 flex flex-col md:flex-row p-4 gap-4">
          {/* Left: Large Image with text overlay */}
          <div className="relative w-full md:w-2/3 rounded-2xl overflow-hidden">
            <img
              src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132522.jpg"
              alt="Stories in focus"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay with text */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 text-white">
              <h3 className="text-base font-semibold mb-2">Stories in focus</h3>
              <p className="text-sm font-medium mb-4 leading-relaxed">
                Browse through our specially curated collection of stories, handpicked for your reading pleasure
              </p>
              <a href="#" className="flex items-center space-x-1 text-sm font-medium hover:underline">
                <span>Read more</span>
                <ArrowRightCircle size={14} />
              </a>
            </div>
          </div>

          {/* Right: List of stories */}
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Stories in focus</h3>
            <ul className="space-y-3">
              {/* Story 1 */}
              <li className="flex items-center space-x-2 pb-3 border-b border-gray-200">
                <img
                  src="https://raw.githubusercontent.com/mdr-001/images/main/sabatical.jpg"
                  alt="Sabbatical"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-xs text-gray-800 font-medium leading-tight">How to Manage Personal Loan If You Are Planning to Take a Sabbatical</span>
                  <ChevronRight size={16} className="text-red-600 flex-shrink-0" />
                </div>
              </li>
              {/* Story 2 */}
              <li className="flex items-center space-x-2 pb-3 border-b border-gray-200">
                <img
                  src="https://raw.githubusercontent.com/mdr-001/images/main/benefits.jpg"
                  alt="Benefits of personal loan"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-xs text-gray-800 font-medium leading-tight">Here are some of the Amazing Benefits of Personal Loan</span>
                  <ChevronRight size={16} className="text-red-600 flex-shrink-0" />
                </div>
              </li>
              {/* Story 3 */}
              <li className="flex items-center space-x-2 pb-3 border-b border-gray-200">
                <img
                  src="https://raw.githubusercontent.com/mdr-001/images/main/calculator.jpg"
                  alt="Loan calculator"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-xs text-gray-800 font-medium leading-tight">4 Major benefits of using online personal loan EMI calculators over manual computations</span>
                  <ChevronRight size={16} className="text-red-600 flex-shrink-0" />
                </div>
              </li>
              {/* Story 4 */}
              <li className="flex items-center space-x-2 pb-3 border-b border-gray-200">
                <img
                  src="https://raw.githubusercontent.com/mdr-001/images/main/self-employed.jpg"
                  alt="Self-employed"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-xs text-gray-800 font-medium leading-tight">How to Build a Strong Credit Profile as a Self-Employed Individual</span>
                  <ChevronRight size={16} className="text-red-600 flex-shrink-0" />
                </div>
              </li>
              {/* Story 5 */}
              <li className="flex items-center space-x-2 pb-3 border-b-0">
                <img
                  src="https://raw.githubusercontent.com/mdr-001/images/main/financial-setback.jpg"
                  alt="Financial setback"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-xs text-gray-800 font-medium leading-tight">Steps to Rebuild Credit After a Financial Setback</span>
                  <ChevronRight size={16} className="text-red-600 flex-shrink-0" />
                </div>
              </li>
            </ul>
            <div className="mt-2 text-center">
              <a href="#" className="text-red-600 font-semibold text-xs hover:underline">
                View all stories
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
