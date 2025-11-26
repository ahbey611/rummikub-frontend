import React, { useState } from "react";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import HandArea from "@/components/HandArea";
import { initialHand } from "@/data";
import type { ICard } from "@/types";

const Board = () => {
   const [myCards, setMyCards] = useState<ICard[]>(initialHand);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // 1. 没拖到有效位置
    if (!destination) return;

    // 2. 位置没变
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // 3. 执行重新排序
    const newCards = Array.from(myCards);
    const [movedCard] = newCards.splice(source.index, 1);
    newCards.splice(destination.index, 0, movedCard);

    setMyCards(newCards);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="min-h-screen flex flex-col items-center p-6">
        {/* 游戏桌子容器 */}
        <div className="w-full max-w-5xl bg-indigo-500 rounded-[40px] border-[12px] border-[#4a3324] shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] p-8 min-h-[600px] flex flex-col justify-between items-center relative">
          {/* 标题 */}
          <h1 className="text-2xl font-bold text-yellow-100 opacity-50 absolute top-8">
            Rummy Arena
          </h1>

          {/* 对手区域占位符 */}
          <div className="flex gap-4 opacity-40">
            <div className="w-16 h-24 bg-red-900 rounded border border-white/20"></div>
            <div className="w-16 h-24 bg-red-900 rounded border border-white/20"></div>
            <div className="w-16 h-24 bg-red-900 rounded border border-white/20"></div>
          </div>

          {/* 中间牌堆区域 (Deck & Open Deck) */}
          <div className="flex gap-8 items-center justify-center my-8">
            {/* 牌堆 (背面) */}
            <div className="w-24 h-36 bg-blue-900 rounded-lg border-2 border-white shadow-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <div className="w-20 h-32 border border-white/30 rounded bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-50"></div>
            </div>

            {/* 弃牌堆 (正面示例) */}
            <div className="w-24 h-36 bg-white rounded-lg border border-gray-300 shadow-md flex flex-col justify-between p-2 cursor-pointer hover:scale-105 transition-transform relative">
              <span className="text-red-600 font-bold text-lg">10</span>
              <span className="text-red-600 text-4xl self-center">♦</span>
              <span className="text-red-600 font-bold text-lg self-end rotate-180">
                10
              </span>
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full shadow">
                OPEN
              </div>
            </div>
          </div>

          {/* 玩家区域 */}
          <HandArea cards={myCards} />
        </div>
      </div>
    </DragDropContext>
  );
}

export default Board