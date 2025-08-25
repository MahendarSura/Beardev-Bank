import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold text-[#E80000] cursor-pointer">
          ICICI Bank
        </div>

        {/* LOGIN DROPDOWN */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="text-[#E80000] font-semibold cursor-pointer hover:underline">
            Login
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 text-sm">
              <div className="mb-2">
                <strong className="block text-gray-700">Internet Banking</strong>
                <ul className="ml-4 text-gray-600 space-y-1">
                  <li>Personal</li>
                  <li>Neo for Corporates</li>
                  <li>Neo for Business</li>
                </ul>
              </div>

              <div className="mb-2">
                <strong className="block text-gray-700">Mobile Banking</strong>
                <ul className="ml-4 text-gray-600 space-y-1">
                  <li>iMobile Pay</li>
                  <li>UPI with ICICI</li>
                  <li>Mobile App Features</li>
                </ul>
              </div>

              <div className="mb-2">
                <strong className="block text-gray-700">Payment Solutions</strong>
                <ul className="ml-4 text-gray-600 space-y-1">
                  <li>Bill Payments</li>
                  <li>Credit Card Payment</li>
                  <li>Instant Transfers</li>
                </ul>
              </div>

              <div className="mb-2">
                <strong className="block text-gray-700">Power Access</strong>
                <ul className="ml-4 text-gray-600 space-y-1">
                  <li>Secure Login</li>
                  <li>Two-Factor Auth</li>
                  <li>Access History</li>
                </ul>
              </div>

              <div className="mb-2">
                <strong className="block text-gray-700">Cards</strong>
                <ul className="ml-4 text-gray-600 space-y-1">
                  <li>Credit Cards</li>
                  <li>Debit Cards</li>
                  <li>Prepaid Cards</li>
                </ul>
              </div>

              <div>
                <strong className="block text-gray-700">Edge Rewards</strong>
                <ul className="ml-4 text-gray-600 space-y-1">
                  <li>Redeem Points</li>
                  <li>Offers</li>
                  <li>How to Earn</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
