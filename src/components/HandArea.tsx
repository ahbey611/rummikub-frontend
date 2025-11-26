// src/HandArea.tsx
import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import Card from "@/components/Card";
import type { ICard } from "@/types";
interface HandAreaProps {
  cards: ICard[];
}

const HandArea: React.FC<HandAreaProps> = ({ cards }) => {
  return (
    <div className="mt-12 w-full max-w-4xl">
      <h3 className="text-white text-center mb-4 font-semibold tracking-wider opacity-80">
        你的手牌 (拖拽排序)
      </h3>

      <Droppable droppableId="player-hand-zone" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            // Flex 容器
            // pl-8 是为了抵消第一张牌之后的 -ml-8 造成的整体左移视觉偏差
            className={`
              flex flex-row justify-center items-center
              min-h-[180px] px-8 py-4
              rounded-xl border-2 border-white/10
              transition-colors duration-300
              ${snapshot.isDraggingOver ? "bg-white/10" : "bg-black/20"}
            `}
          >
            {cards.map((card, index) => (
              <Card key={card.id} cardData={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default HandArea;
