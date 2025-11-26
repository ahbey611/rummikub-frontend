// src/components/HeroSection.tsx
import React from 'react';
import { ArrowRight, BrainCircuit, Users } from 'lucide-react';
import RummyTile from './RummyTile';
import { TypewriterEffectDemo } from './TypeWritterEffect';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

const HeroSection = () => {

    const firstLine = [
    {
      text: "Think",
      className:"text-6xl md:text-7xl font-black text-gray-900 "
    },
    {
      text: "Fast.",
      className:"text-6xl md:text-7xl font-black text-gray-900 "
}
    ];

    const secondLine = [
    {
      text: "Play",
      className:"text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-tight tracking-tight"
    },
    {
      text: "Smart",
className:"text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-tight tracking-tight"      
}
    ];
    


  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* 背景装饰：柔和的圆形光斑 */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* 左侧：文案 */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Waiting for players...
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
            Think Fast.
            {/* <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Play Smart.
            </span> */}
          </h1>


            {/* <TypewriterEffectDemo/> */}

            {/* <TypewriterEffect words={firstLine} /> */}
            <TypewriterEffect words={secondLine} className='-mt-10'/>

          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            The world's favorite tile game is now online. 
            Arrange sets, runs, and outsmart your opponents in this addictive strategy game.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              Start Game
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-2xl font-bold text-lg hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
              <Users size={20}/>
              Invite Friends
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm font-semibold text-gray-500">
             <span className="flex items-center gap-1"><BrainCircuit size={16}/> Pure Strategy</span>
             <span>•</span>
             <span>No Gambling</span>
             <span>•</span>
             <span>Family Friendly</span>
          </div>
        </div>

        {/* 右侧：视觉展示 (摆好的牌型) */}
        <div className="relative h-[500px] w-full flex justify-center items-center perspective-[2000px]">
          {/* Group 1: Run (10, 11, 12 Blue) */}
          <div className="absolute top-10 left-10 flex gap-1 transform -rotate-12 z-10">
             <RummyTile number={10} color="blue" delay={0} />
             <RummyTile number={11} color="blue" delay={0.2} />
             <RummyTile number={12} color="blue" delay={0.4} />
          </div>

          {/* Group 2: Set (7, 7, 7 Different Colors) */}
          <div className="absolute bottom-20 right-10 flex gap-1 transform rotate-6 z-20">
             <RummyTile number={7} color="red" delay={1} />
             <RummyTile number={7} color="black" delay={1.2} />
             <RummyTile number={7} color="orange" delay={1.4} />
          </div>

          {/* The Joker floating in the middle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <RummyTile number="J" color="red" scale={1.2} delay={0.8} className="shadow-2xl" />
          </div>

           {/* 背景装饰性圆圈 */}
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-orange-50 rounded-full opacity-30 blur-3xl -z-10 transform scale-75"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;