import React from "react";

const royalMaroon = "#6B0B16"; // Dark Royal Maroon

export default function BeardevBankHomepage() {
  return (
    <div className="font-sans text-black bg-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-5 shadow-md sticky top-0 bg-white z-50">
        <div className="text-4xl font-extrabold" style={{ color: royalMaroon }}>
          Beardev-Bank
        </div>
        <ul className="hidden md:flex space-x-12 text-lg font-semibold">
          <li className="hover:text-rose-900 cursor-pointer">Home</li>
          <li className="hover:text-rose-900 cursor-pointer">Accounts</li>
          <li className="hover:text-rose-900 cursor-pointer">Loans</li>
          <li className="hover:text-rose-900 cursor-pointer">Investments</li>
          <li className="hover:text-rose-900 cursor-pointer">Services</li>
          <li className="hover:text-rose-900 cursor-pointer">Contact</li>
         
            Beardev Bank
        </div>
        <ul className="hidden md:flex flex-wrap space-x-6 font-semibold text-gray-700 max-w-4xl">
          <li className="hover:text-[#6B0B16] cursor-pointer">Explore Products</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Grab Deals</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Make Payments</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Bank Smart</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Accounts</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Deposits</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Cards</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Loans</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Investments</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Insurance</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Special Services</li>
          <li className="hover:text-[#6B0B16] cursor-pointer">Knowledge Hub</li>
        </ul>
        <div className="text-blue-600 font-semibold cursor-pointer hover:underline">
          Login / Signup
        </div>
      </nav>

      
      {/* HERO SLIDER */}
      <section className="relative h-[480px] md:h-[600px] bg-gradient-to-r from-rose-900 to-rose-700 flex items-center px-10 text-white">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-extrabold" style={{ color: "#fff" }}>
            Reimagining Banking for You
          </h1>
          <p className="text-xl max-w-xl">
            Seamless, secure, and personalized banking experience at Beardev-Bank. Explore our services today.
          </p>
          <div className="flex space-x-6">
            <button className="bg-white text-rose-900 font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
              Open an Account
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-rose-900 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          {/* Placeholder for hero image */}
          <img
            src="https://images.unsplash.com/photo-1515165562835-c48f9bb46a3d?auto=format&fit=crop&w=800&q=80"
            alt="Digital Banking"
            className="rounded shadow-xl"
          />
        </div>
      </section>

      {/* QUICK LINKS / SERVICES */}
      <section className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {[
          {
            title: "Personal Banking",
            description:
              "Savings accounts, checking accounts, debit cards & more.",
            icon: "🏦",
          },
          {
            title: "Loans & Credit",
            description: "Home loans, personal loans & credit cards with low rates.",
            icon: "💳",
          },
          {
            title: "Investments",
            description:
              "Mutual funds, fixed deposits & retirement plans tailored for you.",
            icon: "📈",
          },
          {
            title: "Digital Banking",
            description:
              "Manage your accounts & payments on the go with Beardev mobile app.",
            icon: "📱",
          },
        ].map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-white shadow-lg rounded p-6 flex flex-col items-start hover:shadow-xl cursor-pointer transition"
          >
            <div
              className="text-4xl mb-4"
              style={{ color: royalMaroon }}
              aria-hidden="true"
            >
              {icon}
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: royalMaroon }}>
              {title}
            </h3>
            <p>{description}</p>
          </div>
        ))}
      </section>

      {/* OFFERS & HIGHLIGHTS */}
      <section className="bg-rose-50 py-20 px-10">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-extrabold" style={{ color: royalMaroon }}>
            Explore Our Latest Offers
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Discover exciting products and services to help you achieve your financial goals faster.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Zero Processing Fee on Home Loans",
                details: "Apply now & save up to ₹10,000.",
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=60",
              },
              {
                title: "Earn More with Fixed Deposits",
                details: "Attractively higher interest rates on FD.",
                img: "https://images.unsplash.com/photo-1495121605193-b116b5b09e21?auto=format&fit=crop&w=400&q=60",
              },
              {
                title: "Instant Personal Loans",
                details: "Get funds within 24 hours at competitive rates.",
                img: "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=400&q=60",
              },
            ].map(({ title, details, img }) => (
              <div
                key={title}
                className="bg-white rounded shadow hover:shadow-lg cursor-pointer overflow-hidden"
              >
                <img src={img} alt={title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2" style={{ color: royalMaroon }}>
                    {title}
                  </h3>
                  <p>{details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL BANKING FEATURES */}
      <section className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6" style={{ color: royalMaroon }}>
            Banking at Your Fingertips
          </h2>
          <p className="text-lg mb-6">
            Our mobile and internet banking platforms make it easier than ever to manage your money securely and efficiently anytime, anywhere.
          </p>
          <ul className="list-disc list-inside space-y-3 text-black">
            <li>Check account balances and transaction history</li>
            <li>Instant funds transfer and bill payments</li>
            <li>Easy loan applications and tracking</li>
            <li>Personalized alerts and budgeting tools</li>
          </ul>
          <div className="mt-8 flex space-x-6">
            <button className="bg-rose-900 text-white px-8 py-3 rounded font-semibold hover:bg-rose-800 transition">
              Download App
            </button>
            <button className="border-2 border-rose-900 text-rose-900 px-8 py-3 rounded font-semibold hover:bg-rose-900 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=600&q=80"
            alt="Mobile Banking"
            className="rounded shadow-lg"
          />
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="bg-rose-50 py-20 px-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-extrabold" style={{ color: royalMaroon }}>
            What Our Customers Say
          </h2>
          <div className="space-y-10">
            {[
              {
                name: "Rajesh Kumar",
                feedback:
                  "Beardev-Bank has transformed how I manage my finances. Their app is super easy and customer support is fantastic!",
                photo:
                  "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Sneha Patil",
                feedback:
                  "The loan process was smooth and quick. I got my funds in less than 24 hours!",
                photo:
                  "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Aditya Sharma",
                feedback:
                  "Investments made simple! The advice and tools helped me grow my portfolio confidently.",
                photo:
                  "https://randomuser.me/api/portraits/men/45.jpg",
              },
            ].map(({ name, feedback, photo }) => (
              <div
                key={name}
                className="bg-white p-8 rounded shadow-lg max-w-xl mx-auto text-left"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src={photo}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold" style={{ color: royalMaroon }}>
                    {name}
                  </h3>
                </div>
                <p className="italic text-black">"{feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-rose-900 text-white py-12 mt-24">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Beardev-Bank</h3>
            <p>
              Empowering your financial journey with innovative banking solutions designed for the modern world.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Accounts</a></li>
              <li><a href="#" className="hover:underline">Loans</a></li>
              <li><a href="#" className="hover:underline">Investments</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul>
              <li><a href="#" className="hover:underline">Savings Account</a></li>
              <li><a href="#" className="hover:underline">Credit Cards</a></li>
              <li><a href="#" className="hover:underline">Personal Loans</a></li>
              <li><a href="#" className="hover:underline">Fixed Deposits</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p>Email: support@beardevbank.com</p>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Address: 123 Hightech City, Mancherial</p>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-300">
          © 2025 Beardev-Bank. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
