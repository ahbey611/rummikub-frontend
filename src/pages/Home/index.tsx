// src/Home.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
// import {ColourfulTextDemo} from '@/components/ColourfulTextDemo';

const Home = () => {
  return (
    // 全局背景：深绿色径向渐变，模拟高级绒布牌桌
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900 via-green-950 to-black overflow-x-hidden font-sans">
      
      {/* 噪点纹理 (可选，增加质感) */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <Navbar />
      
      <main>
        <HeroSection />
        <Features />
        {/* <ColourfulTextDemo /> */}
      </main>

      {/* 简易 Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-black/40">
        <p>&copy; 2025 RummyPro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;