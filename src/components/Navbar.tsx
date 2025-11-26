// src/components/Navbar.tsx
import React from 'react';
import { Menu, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-lg transform rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
            <span className="text-black font-bold transform -rotate-45 text-xl">R</span>
          </div>
          <span className="text-2xl font-bold text-white tracking-wider">
            RUMMY<span className="text-yellow-400">PRO</span>
          </span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium text-sm tracking-wide">
          <a href="#" className="hover:text-yellow-400 transition-colors">Lobby</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Tournaments</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Leaderboard</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Rules</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-yellow-400 md:hidden">
            <Menu size={24} />
          </button>
          <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_4px_14px_0_rgba(234,179,8,0.39)]">
            <User size={18} />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;