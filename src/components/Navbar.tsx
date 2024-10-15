import React from 'react';
import { Menu, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/parco-logo.svg" alt="Parco" className="h-8 w-auto" />
        </div>
        <div className="flex items-center space-x-4">
          <a href="/ayuda" className="text-teal-600">
            <HelpCircle className="h-6 w-6" />
          </a>
          <button onClick={onMenuClick} className="text-gray-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;