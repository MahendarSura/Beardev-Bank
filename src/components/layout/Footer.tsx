// src/components/Footer.tsx

const Footer = () => {
  return (
    // Main footer container with full width and a modern look.
    // The bg-[#4169E1] is a custom shade of blue.
    <footer className="bg-[#4169E1] text-white pt-12 pb-6 mt-16 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/*
          The grid layout for the footer columns.
          - On mobile (default), it's a single column.
          - On small screens (sm), it becomes two columns.
          - On medium screens (md), it becomes four columns.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:underline transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:underline transition-colors duration-300">Services</a></li>
              <li><a href="#" className="hover:underline transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="mb-1">beardevbank@gmail.com</p>
            <p className="mb-1">beardevbank.in</p>
            <p className="mb-4">Fully remote — available worldwide.</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-2">
              {/* NOTE: These icons require the Font Awesome library to be set up in your project. */}
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
          
          {/* Add more sections here, such as a "Legal" or "Blog" section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300">
              We are dedicated to building innovative and accessible financial solutions.
            </p>
          </div>

        </div>

        {/* Bottom Bar with Copyright Notice */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} beardev-Bnak - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
