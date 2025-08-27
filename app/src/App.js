import React from 'react';
import { Search, User, LifeBuoy, MapPin, ArrowRightCircle, ChevronRight, MessageCircle, BarChart, CreditCard, DollarSign } from 'lucide-react';

const App = () => {
  return (
    // Main container for the entire page with a light gray background and Inter font
    <div className="bg-gray-100 font-sans min-h-screen">

      {/* Full page wrapper with consistent horizontal padding */}
      <div className="px-4 sm:px-6 lg:px-16 xl:px-20">

        {/* Header section with two rows */}
        <header className="bg-red-600 shadow-sm sticky top-0 z-50 text-[12px] -mx-4 sm:-mx-6 lg:-mx-16 xl:-mx-20">
          {/* Top header row */}
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-3 min-w-0">
              {/* Logo and bank name */}
              <div className="flex items-center flex-shrink-0">
                <span className="bg-white text-red-600 rounded-md p-1 mr-2 font-bold text-sm">B</span>
                <span className="text-sm font-bold text-white whitespace-nowrap">Beardev Bank</span>
              </div>
              {/* Primary navigation links */}
              <nav className="flex items-center space-x-2 font-medium min-w-0 overflow-x-auto no-scrollbar whitespace-nowrap">
                {["Personal", "Business", "Corporate", "Private Banking", "Privy League", "Solitaire", "NRI Services", "Investors"].map((link) => (
                  <a key={link} href="#" className="text-white hover:underline flex-shrink-0 px-1">{link}</a>
                ))}
              </nav>
            </div>
            {/* Search and Login buttons */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <button className="text-white hover:text-gray-100 p-2 rounded-full transition-colors hidden sm:block">
                <Search size={16} />
              </button>
              <button className="bg-white hover:bg-gray-100 text-red-600 font-semibold px-3 py-1 rounded-full flex items-center space-x-1 text-xs shadow-sm transition-colors whitespace-nowrap">
                <User size={14} />
                <span>Login</span>
              </button>
            </div>
          </div>
          {/* Secondary header row with sub-navigation and utility links */}
          <div className="bg-white border-t border-gray-200">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
              {/* Sub-navigation links */}
              <div className="flex items-center space-x-3 text-gray-600 font-medium text-[11px] min-w-0 overflow-x-auto no-scrollbar whitespace-nowrap">
                {["Accounts & Deposits", "Cards & Prepaid Services", "Loans", "Investment & Insurance", "Payments & Taxes", "Offers", "Service Request"].map((item) => (
                  <a key={item} href="#" className="hover:text-red-600 flex-shrink-0 px-1">{item}</a>
                ))}
              </div>
              {/* Utility icons for help and location */}
              <div className="hidden md:flex items-center space-x-4 text-red-600 font-semibold text-xs whitespace-nowrap">
                <a href="#" className="flex items-center space-x-1 hover:underline">
                  <LifeBuoy size={14} /><span>Help Center</span>
                </a>
                <a href="#" className="flex items-center space-x-1 hover:underline">
                  <MapPin size={14} /><span>Locate us</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area with max-width for centering */}
        <main className="mt-10 max-w-[1600px] mx-auto">
          {/* Hero Section */}
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 lg:h-[600px] flex flex-col-reverse lg:flex-row items-center">
            <div className="p-8 sm:p-12 lg:p-24 lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                Own your dream home, with best <span className="text-red-600">Beardev Bank Home Loans</span> rate!
              </h1>
              <p className="text-lg text-gray-600 mb-6">Interest rate now starting at 7.99%* p.a.</p>
              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-8 rounded-full shadow-lg">Apply Now</button>
                <button className="text-red-600 hover:text-red-700 font-semibold py-3 px-8 rounded-full border-2 border-red-600 transition-colors">Know More</button>
              </div>
            </div>
            <div className="lg:w-1/2 h-64 sm:h-96 lg:h-full w-full">
              <img src="https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132414.jpg" alt="Family" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Cards Section 1 - Promotional Products */}
          <section className="mt-20 mb-20">
            <div className="flex justify-between gap-6 flex-wrap">
              {[
                {
                  title: "Everyday Savings Account",
                  desc: "Enjoy offers on BookMyShow, EazyDiner and more.",
                  img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_1.jpg"
                },
                {
                  title: "Credit Cards",
                  desc: "Rewards | Cashback | EMI Deals",
                  img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_2.jpg"
                },
                {
                  title: "3-in-1 Trinity Account",
                  desc: "Save, Trade & Invest Smartly",
                  img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_3.jpg"
                }
              ].map((card, i) => (
                <div key={i} className="w-full sm:w-[calc(33.333%-16px)] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="h-36">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-md font-semibold text-gray-800 mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{card.desc}</p>
                    <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium">
                      <span>Apply Now</span>
                      <ArrowRightCircle size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Side by side images with text */}
          <section className="mb-20">
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div className="w-full md:w-2/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="h-40 sm:h-48 md:h-52 lg:h-60">
                  <img
                    src="https://raw.githubusercontent.com/mdr-001/images/main/wide-placeholder.jpg"
                    alt="Wide Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
                <div className="h-40 sm:h-48 md:h-52 lg:h-60">
                  <img
                    src="https://raw.githubusercontent.com/mdr-001/images/main/small-placeholder.jpg"
                    alt="Small Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] text-gray-600 leading-relaxed">
                    At <span className="font-semibold">Beardev Bank</span>, we believe in the fearless trailblazers—the ones who dare to dream bigger, push boundaries, and turn challenges into opportunities. That’s why we are here—to back you with financial solutions that evolve with your needs, empowering you to chase the extraordinary. Because when you have <span className="font-semibold">Hausla</span>, anything is possible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section 2 - Business Products */}
          <section className="mb-20">
            <div className="flex justify-between gap-6 flex-wrap">
              {[
                {
                  tag: "Current Account",
                  title: "Power your entrepreneurial dreams",
                  desc: "Enjoy simplified transactions and grow the smart way.",
                  img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_1.jpg"
                },
                {
                  tag: "Business Lending",
                  title: "Not enough funds for your business dreams?",
                  desc: "Flexible collateral-free loans from ₹3 lakh to ₹1 crore",
                  img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_2.jpg"
                },
                {
                  tag: "Working Capital",
                  title: "Your big ambitions need smart capital",
                  desc: "Answer business opportunities with confidence, thanks to our working capital solutions",
                  img: "https://raw.githubusercontent.com/mdr-001/images/main/Screenshot%202025-08-27%20132438_3.jpg"
                }
              ].map((card, i) => (
                <div key={i} className="w-full sm:w-[calc(33.333%-16px)] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="h-36">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mb-1 block">{card.tag}</span>
                    <h3 className="text-md font-semibold text-gray-800 mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{card.desc}</p>
                    <a href="#" className="text-red-600 hover:underline flex items-center space-x-1 text-sm font-medium">
                      <span>Apply Now</span>
                      <ArrowRightCircle size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* New Section: What's New */}
          <section className="my-20">
            <h2 className="text-[20px] font-semibold text-[#1d2939] text-center mb-6">
              What's New at Beardev Bank
            </h2>
            <div className="flex flex-wrap md:flex-nowrap gap-6">
              {[
                { title: "New Instant Loan Approval", desc: "Get your loan approved in minutes with our new digital process.", date: "Aug 25, 2025", icon: <DollarSign size={24} className="text-red-600" /> },
                { title: "Financial Literacy Workshops", desc: "Join our free workshops to learn how to manage your finances better.", date: "Aug 20, 2025", icon: <BarChart size={24} className="text-red-600" /> },
                { title: "Introducing the Titanium Credit Card", desc: "Enjoy exclusive benefits and rewards with our new premium credit card.", date: "Aug 18, 2025", icon: <CreditCard size={24} className="text-red-600" /> },
              ].map((item, i) => (
                <div key={i} className="w-full md:w-1/3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-6 flex flex-col items-start space-y-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 flex-grow">{item.desc}</p>
                  <div className="text-xs text-gray-400 mt-2">{item.date}</div>
                </div>
              ))}
            </div>
          </section>

          {/* New Section: Customer Testimonials */}
          <section className="my-20">
            <h2 className="text-[20px] font-semibold text-[#1d2939] text-center mb-6">
              Hear from Our Happy Customers
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              {[
                { name: "Jane Doe", quote: "Beardev Bank's customer service is top-notch. They helped me secure my home loan with an incredibly smooth process. Highly recommended!", avatar: "https://placehold.co/80x80/EFEFEF/9C9C9C?text=JD" },
                { name: "John Smith", quote: "The online banking platform is so easy to use. I can manage all my accounts, investments, and credit cards from one place. It has truly simplified my financial life.", avatar: "https://placehold.co/80x80/EFEFEF/9C9C9C?text=JS" },
                { name: "Emily White", quote: "I've been a customer for years and have always been impressed by their commitment to security and providing a seamless experience. They're a bank you can trust.", avatar: "https://placehold.co/80x80/EFEFEF/9C9C9C?text=EW" },
              ].map((testimonial, i) => (
                <div key={i} className="w-full md:w-1/3 bg-white rounded-xl shadow-md border border-gray-200 p-6 text-center flex flex-col items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mb-4" />
                  <p className="text-sm italic text-gray-600 mb-4 flex-grow">"{testimonial.quote}"</p>
                  <div className="font-semibold text-red-600">— {testimonial.name}</div>
                </div>
              ))}
            </div>
          </section>

          {/* New Section: Contact/Call to Action */}
          <section className="my-20 bg-white rounded-xl shadow-lg border border-gray-200 p-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Ready to take the next step?</h2>
              <p className="text-md text-gray-600">Our team is here to help you with your financial needs. Get in touch with us today!</p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-8 rounded-full shadow-lg">
                Contact Us
              </button>
            </div>
          </section>

          {/* Knowledge Hub Section - Updated with user's code */}
          <section className="my-20">
            <h2 className="text-[20px] font-semibold text-[#1d2939] text-center mb-6">Knowledge Hub</h2>
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

        </main>

        {/* Footer with copyright information */}
        <footer className="bg-[#f9fafb] border-t border-gray-200 py-6 mt-20 text-center text-gray-500 text-xs -mx-4 sm:-mx-6 lg:-mx-16 xl:-mx-20">
          <div className="max-w-[1600px] mx-auto">
            &copy; 2025 Beardev Bank. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
