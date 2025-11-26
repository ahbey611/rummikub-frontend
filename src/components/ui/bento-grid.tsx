// src/components/ui/bento-grid.tsx
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }} // 鼠标悬停轻微上浮
      className={cn(
        // 基础样式：圆角、背景色（带一点透明度实现层次感）、边框
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-gray-100 justify-between flex flex-col space-y-4",
        // 阴影处理：模拟高级卡片的质感
        "shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]", 
        className
      )}
    >
      {/* 头部视觉区域 (Header) */}
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden relative">
         {header}
      </div>

      {/* 文本区域 */}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
      <div className="flex flex-row gap-2 items-center">
        <div className="mb-2 mt-2 opacity-80 group-hover/bento:opacity-100 transition text-blue-600">
            {icon}
            </div>
            <div className="font-sans font-bold text-neutral-800 dark:text-neutral-200 mb-2 mt-2 text-lg">
              {title}
            </div>
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};