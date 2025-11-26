// src/components/RummyTile.tsx
import React from 'react';
import { motion } from 'framer-motion';

type TileColor = 'red' | 'black' | 'blue' | 'orange';

interface TileProps {
  number: number | 'J';
  color: TileColor;
  scale?: number;
  rotate?: number;
  className?: string;
  delay?: number;
}

const colorMap = {
  red: 'text-red-500',
  black: 'text-gray-800',
  blue: 'text-blue-500',
  orange: 'text-orange-500', // Rummikub 经典的橙黄色
};

const RummyTile: React.FC<TileProps> = ({ number, color, scale = 1, rotate = 0, className = "", delay = 0 }) => {
  const isJoker = number === 'J';

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }} // 上下浮动
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut", 
        delay: delay 
      }}
      className={`
        relative flex items-center justify-center
        w-20 h-28 rounded-xl
        bg-[#fdfbf7] /* 象牙白 */
        border-2 border-gray-100
        shadow-[0_8px_0_#e2e2e2,0_15px_20px_rgba(0,0,0,0.15)] /* 模拟厚度和投影 */
        ${className}
      `}
      style={{ 
        transform: `scale(${scale}) rotate(${rotate}deg)`,
        transformOrigin: 'center'
      }}
    >
      {/* 牌面凹陷感光泽 (可选) */}
      <div className="absolute inset-2 rounded-lg bg-gradient-to-br from-gray-50 to-transparent opacity-50 pointer-events-none"></div>

      {isJoker ? (
        <div className="text-4xl">😊</div> // 或者使用 SVG 绘制笑脸
      ) : (
        <span className={`text-5xl font-black font-mono tracking-tighter ${colorMap[color]}`}>
          {number}
        </span>
      )}
      
      {/* 底部小数字 (Rummikub 牌通常底部也有小的方便倒着看，这里简化为装饰) */}
      {!isJoker && (
        <span className={`absolute bottom-2 right-2 text-xs font-bold transform rotate-180 ${colorMap[color]} opacity-40`}>
          {number}
        </span>
      )}
    </motion.div>
  );
};

export default RummyTile;