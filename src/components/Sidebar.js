// Sidebar.js
import React from 'react';
import {
  Home,
  CreditCard,
  PiggyBank,
  BarChart2,
  Send,
  Percent,
  HelpCircle,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-red-600 text-white flex flex-col shadow-lg fixed top-0 left-0 z-40">
      <div className="p-4 flex items-center space-x-2 border-b border-red-400">
        <span className="bg-white text-red-600 font-bold rounded-md px-2 py-1">B</span>
        <span className="text-lg font-bold">Beardev Bank</span>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-4 text-sm font-medium">
        <a href="#" className="flex items-center space-x-2 hover:text-yellow-200">
          <Home size={18} />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-yellow-200">
          <CreditCard size={18} />
          <span>Cards</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-yellow-200">
          <PiggyBank size={18} />
          <span>Accounts</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-yellow-200">
          <BarChart2 size={18} />
          <span>Investments</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-yellow-200">
          <Send size={18} />
          <span>Transfers</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-yellow-200">
          <Percent size={18} />
          <span>Offers</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-yellow-200">
          <HelpCircle size={18} />
          <span>Help Center</span>
        </a>
      </nav>
      <div className="p-4 border-t border-red-400">
        <button className="flex items-center space-x-2 text-white hover:text-yellow-200">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
