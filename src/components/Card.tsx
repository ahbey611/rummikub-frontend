// src/Card.tsx
import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import type { ICard } from "@/types";

interface CardProps {
  cardData: ICard;
  index: number;
}
const Card: React.FC<CardProps> = ({ cardData, index }) => {
  const isJoker = cardData.suit === "JOKER";

    const getTextColorClass = () => {
        switch (cardData.color) {
          case "red":
            return "text-red-600";
          case "purple":
            return "text-purple-600";
          case "green":
            return "text-green-600";
          case "blue":
            return "text-blue-600";
          default:
            return "text-gray-900";
        }
      };

  return (
    <Draggable draggableId={cardData.id} index={index}>
      {(provided, snapshot) => {
        // 修复卡顿的关键：
        // 如果正在拖拽中，我们不应该让 transform 受到 CSS 类的干扰
        // 只有在非拖拽状态下的内层元素才应用 hover 效果
        const transformStyle = provided.draggableProps.style;

        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...transformStyle,
              // 可选：如果你觉得重叠部分的层级在放置时闪烁，可以强制 z-index
              zIndex: snapshot.isDragging ? 100 : "auto",
            }}
            // --- 外层容器：只负责布局 ---
            // 1. 移除了 transition-transform 和 duration
            // 2. 移除了 hover:-translate-y-4
            // 3. 保留了 -ml-8 用于处理重叠
            className={`
              relative 
              w-24 h-36 
              -ml-8 first:ml-0 
              ${snapshot.isDragging ? "z-50" : "z-0"}
            `}
          >
            {/* --- 内层容器：负责视觉和 Hover 动画 --- */}
            {/* 这里加 transition 不会影响外层的 DnD 归位动画 */}
            <div
              className={`
                w-full h-full 
                bg-white rounded-lg border border-gray-300 shadow-md
                flex flex-col justify-between p-2 
                select-none cursor-grab active:cursor-grabbing
                ${getTextColorClass()}
                ${
                  snapshot.isDragging
                    ? "ring-4 ring-yellow-400 shadow-2xl"
                    : "transition-transform duration-200 hover:-translate-y-4"
                }
              `}
            >
              {!isJoker ? (
                <>
                  <div className="text-left leading-none">
                    <div className="text-lg font-bold">{cardData.rank}</div>
                    <div className="text-sm">{cardData.suit}</div>
                  </div>

                  <div className="flex-grow flex items-center justify-center text-4xl">
                    {cardData.suit}
                  </div>

                  <div className="text-left leading-none transform rotate-180">
                    <div className="text-lg font-bold">{cardData.rank}</div>
                    <div className="text-sm">{cardData.suit}</div>
                  </div>
                </>
              ) : (
                <div className="flex-grow flex items-center justify-center flex-col">
                  <div className="text-4xl">🤡</div>
                  <span className="font-bold text-xs mt-1">JOKER</span>
                </div>
              )}
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;
