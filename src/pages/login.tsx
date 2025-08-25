import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-3xl font-bold text-[#E80000]">ICICI Bank</div>

        {/* Right: Login */}
        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="text-[#E80000] font-semibold hover:underline">
            Login
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-300 shadow-md rounded-md p-4 z-50 text-sm space-y-4">
              {/* Internet Banking */}
              <div>
                <p className="font-bold text-gray-800">Internet Banking</p>
                <ul className="ml-4 text-gray-600 list-disc">
                  <li>Personal</li>
                  <li>Neo for Corporates</li>
                  <li>Neo for Business</li>
                </ul>
              </div>

              {/* Mobile Banking */}
              <div>
                <p className="font-bold text-gray-800">Mobile Banking</p>
                <ul className="ml-4 text-gray-600 list-disc">
                  <li>iMobile Pay App</li>
                  <li>UPI Services</li>
                  <li>QR Payments</li>
                </ul>
              </div>

              {/* Payment Solutions */}
              <div>
                <p className="font-bold text-gray-800">Payment Solutions</p>
                <ul className="ml-4 text-gray-600 list-disc">
                  <li>Bill Payments</li>
                  <li>NEFT/IMPS/RTGS</li>
                  <li>Credit Card Payments</li>
                </ul>
              </div>

              {/* Power Access */}
              <div>
                <p className="font-bold text-gray-800">Power Access</p>
                <ul className="ml-4 text-gray-600 list-disc">
                  <li>Secure Access</li>
                  <li>Transaction Control</li>
                </ul>
              </div>

              {/* Cards */}
              <div>
                <p className="font-bold text-gray-800">Cards</p>
                <ul className="ml-4 text-gray-600 list-disc">
                  <li>Credit Cards</li>
                  <li>Debit Cards</li>
                  <li>Prepaid Cards</li>
                </ul>
              </div>

              {/* Edge Rewards */}
              <div>
                <p className="font-bold text-gray-800">Edge Rewards</p>
                <ul className="ml-4 text-gray-600 list-disc">
                  <li>Redeem Points</li>
                  <li>Offers & Deals</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
