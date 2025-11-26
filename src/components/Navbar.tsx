// src/components/Navbar.tsx
import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Glassmorphism Container */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md shadow-sm border-b border-white/40"></div>
        
        {/* Logo Content */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
            <Gamepad2 size={24} />
          </div>
          <span className="text-2xl font-black tracking-tight text-gray-800">
            Rummy<span className="text-blue-600">World</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="relative z-10 flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 text-gray-600 font-bold hover:text-blue-600 transition-colors">
            Rules
          </button>
          <button className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-bold shadow-lg hover:bg-gray-800 hover:scale-105 transition-all">
            Play Guest
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;