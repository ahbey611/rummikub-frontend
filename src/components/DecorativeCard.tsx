// src/components/DecorativeCard.tsx
import React from 'react';

interface Props {
  rank: string;
  suit: string;
  color: 'red' | 'black' | 'purple';
  rotate: string;
  delay?: string;
  position: string;
}

const DecorativeCard: React.FC<Props> = ({ rank, suit, color, rotate, delay, position }) => {
  return (
    <div 
      className={`
        absolute w-32 h-48 bg-white rounded-xl shadow-2xl 
        border border-gray-200 flex flex-col justify-between p-3
        transform ${rotate} ${position}
        animate-float select-none
      `}
      style={{ animationDelay: delay }}
    >
      <div className={`text-2xl font-bold ${color === 'red' ? 'text-red-600' : 'text-gray-900'}`}>
        {rank}<br/>{suit}
      </div>
      <div className={`text-6xl self-center ${color === 'red' ? 'text-red-600' : 'text-gray-900'}`}>
        {suit}
      </div>
      <div className={`text-2xl font-bold text-right transform rotate-180 ${color === 'red' ? 'text-red-600' : 'text-gray-900'}`}>
        {rank}<br/>{suit}
      </div>
      
      {/* 光泽效果 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-xl pointer-events-none"></div>
    </div>
  );
};

export default DecorativeCard;