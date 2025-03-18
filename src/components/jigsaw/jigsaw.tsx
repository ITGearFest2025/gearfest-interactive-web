import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import Image1 from "@/assets/story/scene6/puzzle_0000_สี-(1)_hd.webp";
import Image2 from "@/assets/story/scene6/puzzle_0001_IMG_1715_hd.webp";
import Image3 from "@/assets/story/scene6/puzzle_0002_Layer-1_hd.webp";

export default function Jigsaw() {
  const [droppedItems, setDroppedItems] = useState<number>(0);
  const [draggedItems, setDraggedItems] = useState<Set<string>>(new Set());

  const handleDragEnd = ({ over, active }: { over: any; active: any }) => {
    if (over && over.id === "droppable") {
      setDroppedItems((prev) => prev + 1);
      setDraggedItems((prev) => new Set(prev.add(active.id))); // Mark the item as dropped
    }
  };
  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <div>
          {!draggedItems.has("draggable-2") && (
            <div className="absolute top-[65%] left-[40%]">
              <Draggable
                id="draggable-2"
                className="relative z-40 size-auto cursor-pointer"
              >
                <img
                  src={Image2.src}
                  alt="jigsaw second puzzle"
                  width={126}
                  height={120}
                />
              </Draggable>
            </div>
          )}

          {!draggedItems.has("draggable-3") && (
            <div className="absolute top-[70%] right-[8%]">
              <Draggable
                id="draggable-3"
                className="relative z-30 size-auto cursor-pointer"
              >
                <img
                  src={Image3.src}
                  alt="jigsaw third puzzle"
                  width={173}
                  height={143}
                />
              </Draggable>
            </div>
          )}
          {!draggedItems.has("draggable-1") && (
            <div className="absolute top-[70%] left-[8%]">
              <Draggable
                id="draggable-1"
                className="relative z-20 size-auto cursor-pointer"
              >
                <img
                  src={Image1.src}
                  alt="jigsaw first puzzle"
                  width={202}
                  height={171}
                />
              </Draggable>
            </div>
          )}
        </div>
        <Droppable
          redirectUrl="/story/scene6/6-10"
          id="droppable"
          droppedItems={droppedItems}
        >
          <></>
        </Droppable>
      </DndContext>
    </div>
  );
}
