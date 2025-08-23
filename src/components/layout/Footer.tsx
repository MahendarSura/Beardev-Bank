const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 text-sm">
   
{/* Footer Section */}
      <footer className="bg-[#4169E1] text-white pt-12 pb-6 mt-16 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="mb-1">beardevbank@gmail.com</p>
              <p className="mb-1">beardevbank.in</p>
              <p className="mb-4">Fully remote — available worldwide.</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" aria-label="LinkedIn" className="hover:text-orange-400">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-orange-400">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-orange-400">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-orange-400">
                  <i className="fab fa-github fa-lg"></i>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
            © 2025 beardev-Bnak - All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
export default Footer;
