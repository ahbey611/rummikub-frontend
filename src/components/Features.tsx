// src/components/Features.tsx
import React from 'react';
import { Zap, Trophy, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Zero Lag Gaming",
    desc: "Optimized Websocket connection ensures smooth gameplay even on 3G networks."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: "Real Multiplayer",
    desc: "Play with 100% verified real players. No bots allowed in ranked matches."
  },
  {
    icon: <Trophy className="w-8 h-8 text-purple-400" />,
    title: "Daily Tournaments",
    desc: "Join our daily freerolls and win huge prize pools. Prove your skills."
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "Secure & Safe",
    desc: "RNG Certified shuffling and SSL encryption for all your data."
  }
];

const Features = () => {
  return (
    <div className="bg-black/30 backdrop-blur-lg py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose RummyPro?</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-black/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;