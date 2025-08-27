// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4169E1] text-white pt-12 pb-6 mt-16 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:underline transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:underline transition-colors duration-300">Services</a></li>
              <li><a href="#" className="hover:underline transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="mb-1">beardevbank@gmail.com</p>
            <p className="mb-1">www.beardevbank.in</p>
            <p className="mb-4">Fully remote — available worldwide.</p>
            <div className="flex space-x-4 mt-2">
              {/* You can add FontAwesome icons by including the CDN or using react-icons */}
              <a href="#" aria-label="LinkedIn" className="hover:text-orange-400 transition-colors duration-300">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-orange-400 transition-colors duration-300">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-orange-400 transition-colors duration-300">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-orange-400 transition-colors duration-300">
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300">
              We are dedicated to building innovative and accessible financial solutions.
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Beardev Bank - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
