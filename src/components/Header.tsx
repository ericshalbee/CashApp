import React from 'react';
import { DollarSign } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">How to Contact Cash App Support</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#contact" className="text-gray-600 hover:text-green-500">Contact</a>
            <a href="#faq" className="text-gray-600 hover:text-green-500">FAQ</a>
            <a href="#help" className="text-gray-600 hover:text-green-500">Help Center</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;