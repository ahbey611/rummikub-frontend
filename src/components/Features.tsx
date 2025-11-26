// src/components/Features.tsx
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Trophy,
  BrainCircuit,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

// --- 自定义插图组件 (Skeletons) ---

// 1. 模拟牌组整理的动画 (Logic)
// 1. 模拟牌组整理的动画 (Logic)
const SkeletonLogic = () => {
  // 定义第一组：顺子 (Run) - 蓝色
  const runTiles = [10, 11, 12];
  
  // 定义第二组：刻子 (Set) - 不同颜色 (红, 黑, 橙)
  const setTiles = [
    { num: 1, color: "text-red-500", borderColor: "border-red-100" },
    { num: 1, color: "text-gray-900", borderColor: "border-gray-200" },
    { num: 1, color: "text-orange-500", borderColor: "border-orange-100" },
  ];

  // 动画配置：出现 -> 停留 -> 消失 -> 循环
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: [0, 1, 1, 0], // 关键帧：0%透明 -> 100% -> 100% -> 0%
      scale: [0.5, 1, 1, 0.5],
      transition: {
        delay: i * 0.2, // 每个牌错开 0.2秒
        duration: 3,    // 每次循环总时长 3秒
        times: [0, 0.15, 0.85, 1], // 控制时间点：快速出现(15%)，长时间停留，快速消失
        repeat: Infinity, // 无限循环
        repeatDelay: 0.5  // 循环之间休息 0.5秒
      },
    }),
  };

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-4 justify-center items-center absolute inset-0 overflow-hidden">
      
      {/* 牌组容器 */}
      <div className="flex flex-row gap-10">
        
        {/* 第一组：蓝色顺子 */}
        <div className="flex gap-1.5">
          {runTiles.map((num, i) => (
            <motion.div
              key={`run-${num}`}
              custom={i} // 传入索引用于计算 delay
              variants={variants}
              initial="hidden"
              animate="visible"
              className="w-8 h-12 md:w-10 md:h-14 rounded bg-white border border-blue-100 shadow-sm flex items-center justify-center text-blue-600 font-bold text-lg md:text-xl"
            >
              {num}
            </motion.div>
          ))}
        </div>

        {/* 第二组：多彩刻子 */}
        <div className="flex gap-1.5">
          {setTiles.map((tile, i) => (
            <motion.div
              key={`set-${i}`}
              custom={i + 3} // 索引接着上一组继续，实现流畅的流水线感
              variants={variants}
              initial="hidden"
              animate="visible"
              className={`w-8 h-12 md:w-10 md:h-14 rounded bg-white border ${tile.borderColor} shadow-sm flex items-center justify-center ${tile.color} font-bold text-lg md:text-xl`}
            >
              {tile.num}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 底部进度条 (也一起循环) */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ 
          width: ["0%", "60%", "60%", "0%"],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 3, 
          times: [0, 0.3, 0.8, 1], 
          repeat: Infinity,
          repeatDelay: 0.5 
        }}
        className="h-1 bg-green-400 rounded-full"
      />
    </div>
  );
};

// 2. 模拟全球匹配的波纹动画 (Global)
const SkeletonGlobal = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
     <div className="relative">
        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white z-10 relative shadow-lg shadow-blue-300">
           <Globe2 size={32} />
        </div>
        {/* 波纹圆环 */}
        {[1, 2, 3].map((i) => (
           <motion.div
             key={i}
             className="absolute inset-0 rounded-full border border-blue-400"
             initial={{ scale: 1, opacity: 0.8 }}
             animate={{ scale: 1.5 + i * 0.5, opacity: 0 }}
             transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
           />
        ))}
     </div>
  </div>
);

// 3. 奖杯与排名 (Rank)
const SkeletonRank = () => (
   <div className="absolute inset-0 flex items-end justify-center px-4 pb-4 bg-gradient-to-t from-orange-50 to-white">
      <div className="flex items-end gap-2 w-full justify-center">
         <motion.div initial={{height: 0}} animate={{height: '40%'}} transition={{duration: 1}} className="w-8 bg-gray-200 rounded-t-md relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-400">2</span></motion.div>
         <motion.div initial={{height: 0}} animate={{height: '70%'}} transition={{duration: 1, delay: 0.2}} className="w-8 bg-yellow-400 rounded-t-md relative shadow-lg"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-yellow-600">1</span></motion.div>
         <motion.div initial={{height: 0}} animate={{height: '50%'}} transition={{duration: 1, delay: 0.4}} className="w-8 bg-orange-200 rounded-t-md relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-orange-400">3</span></motion.div>
      </div>
   </div>
);

// 4. 安全盾牌 (Secure) - 简约风
const SkeletonSecure = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-green-50/50">
      <motion.div 
        animate={{ rotateY: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="text-green-500"
      >
        <ShieldCheck size={64} strokeWidth={1} />
      </motion.div>
  </div>
);


const items = [
  {
    title: "Pure Logic Strategy",
    description: "Experience the thrill of rearranging sets and runs. No luck involved, just pure mental prowess.",
    header: <SkeletonLogic />,
    icon: <BrainCircuit className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2", // 占据 2 列宽
  },
  {
    title: "Global Matchmaking",
    description: "Connect with Rummy enthusiasts from 150+ countries instantly.",
    header: <SkeletonGlobal />,
    icon: <Globe2 className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Weekly Tournaments",
    description: "Climb the ladder, earn badges, and win exclusive tile skins.",
    header: <SkeletonRank />,
    icon: <Trophy className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Fair Play Guaranteed",
    description: "Our anti-cheat system ensures a safe environment. Zero tolerance for bots.",
    header: <SkeletonSecure />,
    icon: <ShieldCheck className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* 背景装饰：点阵图 (Dot Background) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-neutral-800 tracking-tight">
             Beyond Just a Game.
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Designed for the sharpest minds. Minimalist interface, maximum depth.
          </p>
        </div>

        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}