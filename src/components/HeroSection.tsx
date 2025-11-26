// src/components/HeroSection.tsx
import React from 'react';
import { PlayCircle, ShieldCheck } from 'lucide-react';
import DecorativeCard from '@/components/DecorativeCard';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* 背景光效 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* 左侧文案 */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            10,000+ Players Online
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-lg">
            Master The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200">
              Classic Rummy
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            体验极致流畅的 13 张 Rummy 对战。公平竞技，实时匹配，与全球顶尖高手一决高下。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="group relative px-8 py-4 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-xl font-bold text-black text-lg shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all transform hover:-translate-y-1 active:scale-95">
              <span className="flex items-center gap-2">
                PLAY NOW <PlayCircle size={24} />
              </span>
              {/* 按钮光泽动画 */}
              <div className="absolute inset-0 rounded-xl bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 overflow-hidden"></div>
            </button>
            
            <button className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
              <ShieldCheck size={20} className="text-green-400"/> Fair Play Policy
            </button>
          </div>
        </div>

        {/* 右侧视觉图 (3D 浮动卡牌) */}
        <div className="relative h-[500px] w-full hidden md:block perspective-1000">
          <DecorativeCard rank="A" suit="♠" color="black" rotate="-rotate-12" position="left-10 top-20" delay="0s" />
          <DecorativeCard rank="K" suit="♥" color="red" rotate="rotate-6" position="right-20 top-10" delay="1s" />
          <DecorativeCard rank="J" suit="JOKER" color="purple" rotate="rotate-12" position="left-1/3 bottom-10 z-20" delay="2s" />
          
          {/* 装饰性筹码/圆圈 */}
          <div className="absolute right-10 bottom-20 w-20 h-20 rounded-full border-4 border-yellow-500/30 animate-bounce delay-700"></div>
          <div className="absolute left-20 top-40 w-12 h-12 rounded-full bg-yellow-400 blur-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;