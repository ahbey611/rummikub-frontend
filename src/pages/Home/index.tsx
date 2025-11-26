// src/Home.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';

const Home = () => {
  return (
    // 使用柔和的浅色渐变，避免使用黑色，营造轻松氛围
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* 一个简单的过渡分割线 */}
        <div className="h-24 bg-gradient-to-b from-transparent to-white"></div>
        
        <Features />
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 RummyWorld. Just for fun.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
            <a href="#" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;