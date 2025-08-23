import React from "react";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 font-sans bg-gray-100 min-h-screen flex flex-col space-y-10">

      {/* NAVBAR */}
      <nav className="bg-white shadow rounded-md flex items-center justify-between py-4 px-6 border border-gray-200">
        <div className="text-3xl font-extrabold text-[#E80000] cursor-pointer">ICICI Bank</div>
        <ul className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <li className="hover:text-[#E80000] cursor-pointer">Personal</li>
          <li className="hover:text-[#E80000] cursor-pointer">NRI</li>
          <li className="hover:text-[#E80000] cursor-pointer">Business</li>
          <li className="hover:text-[#E80000] cursor-pointer">iShop</li>
          <li className="hover:text-[#E80000] cursor-pointer">Resources</li>
          <li className="hover:text-[#E80000] cursor-pointer">About</li>
          <li className="hover:text-[#E80000] cursor-pointer">Help</li>
          <li className="hover:text-[#E80000] cursor-pointer">Complaints</li>
        </ul>
        {/* Login Section Top Right with icon */}
        <div className="flex items-center space-x-2 text-[#E80000] font-semibold cursor-pointer hover:underline">
          <img 
            src="https://img.icons8.com/ios-filled/24/ff0000/user.png" 
            alt="Login Icon" 
            className="w-6 h-6"
          />
          <span>Login</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-white shadow rounded-md p-8 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image Left */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="https://images.unsplash.com/photo-1515165562835-c48f9bb46a3d?auto=format&fit=crop&w=600&q=80"
            alt="Digital Banking"
            className="rounded-lg shadow max-w-full h-auto object-cover"
          />
        </div>

        {/* Content Right */}
        <div className="flex-1 max-w-xl text-left flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold text-[#E80000] mb-6 leading-tight">
            Truth, Trust, Transparency
          </h1>
          <p className="text-lg mb-6 text-gray-800">
            Experience seamless, secure, and personalized banking with ICICI Bank. Your financial growth is our priority.
          </p>
          <div className="flex space-x-6">
            <button className="bg-[#E80000] text-white font-bold px-8 py-3 rounded hover:bg-red-700 transition">
              Open an Account
            </button>
            <button className="border-2 border-[#E80000] text-[#E80000] font-bold px-8 py-3 rounded hover:bg-[#E80000] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      {/* Keep as is, looks good */}

      {/* OFFERS SECTION */}
      {/* Keep as is */}

      {/* TESTIMONIALS */}
      {/* Keep as is */}

      {/* FOOTER */}
      {/* Keep as is */}

    </div>
  );
}

export default Home;
