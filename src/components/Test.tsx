import React, { useState, useEffect } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import ContinueButton from "./ContinueButton/ContinueButton";
import Answerfield from "./AnswerField/AnswerField";
import StoryText from "./StoryText/StoryText";
import { motion } from "framer-motion";

interface PuzzlePiece {
  id: string;
  path: string;
  dropZoneX: number;
  dropZoneY: number;
}

const puzzlePieces: PuzzlePiece[] = [
  {
    id: "piece1",
    path: "M50 10L61.5 35.5L50 45L38.5 35.5L50 10Z",
    dropZoneX: 50,
    dropZoneY: 30,
  },
  {
    id: "piece2",
    path: "M61.5 35.5L90 50L61.5 64.5L50 45L61.5 35.5Z",
    dropZoneX: 70,
    dropZoneY: 50,
  },
  {
    id: "piece3",
    path: "M61.5 64.5L75 90L50 75L50 64.5L61.5 64.5Z",
    dropZoneX: 62.5,
    dropZoneY: 70,
  },
  {
    id: "piece4",
    path: "M25 90L50 75L50 64.5L38.5 64.5L25 90Z",
    dropZoneX: 37.5,
    dropZoneY: 70,
  },
  {
    id: "piece5",
    path: "M10 50L38.5 35.5L50 45L38.5 64.5L10 50Z",
    dropZoneX: 30,
    dropZoneY: 50,
  },
];

function DraggablePiece({
  piece,
  isPlaced,
}: {
  piece: PuzzlePiece;
  isPlaced: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: piece.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  if (isPlaced) return null;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-grab touch-none active:cursor-grabbing"
    >
      <motion.svg
        width="50" // ปรับขนาดให้เล็กลง
        height="50"
        viewBox="0 0 100 100"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="drop-shadow-lg"
      >
        <path
          d={piece.path}
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="0.5"
          className="drop-shadow-md filter"
        />
      </motion.svg>
    </div>
  );
}

function DropZone({
  piece,
  children,
}: {
  piece: PuzzlePiece;
  children?: React.ReactNode;
}) {
  const { setNodeRef } = useDroppable({
    id: `dropzone-${piece.id}`,
  });

  return (
    <div
      ref={setNodeRef}
      className="absolute flex h-[50px] w-[50px] items-center justify-center" // ปรับขนาดให้เล็กลง
      style={{
        left: `${piece.dropZoneX}%`,
        top: `${piece.dropZoneY}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {!children && (
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          className="absolute top-0 left-0"
        >
          <path
            d={piece.path}
            fill="none"
            stroke="#FFD700"
            strokeWidth="0.5"
            strokeDasharray="4 2"
            className="opacity-50"
          />
        </svg>
      )}
      {children}
    </div>
  );
}

function PlacedPiece({ piece }: { piece: PuzzlePiece }) {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="drop-shadow-lg"
    >
      <path
        d={piece.path}
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="0.5"
        className="drop-shadow-md filter"
      />
    </motion.svg>
  );
}

function StarOutline() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="pointer-events-none absolute top-0 left-0 h-full w-full"
    >
      <path
        d="M50 10L90 50L50 90L10 50L50 10Z"
        fill="none"
        stroke="#FFD700"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        className="opacity-30"
      />
    </svg>
  );
}

function Test() {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");
  const [items, setItems] = useState([
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
  ]);
  const [droppedItems, setDroppedItems] = useState<{ [key: string]: string[] }>(
    {
      "1": [],
      "2": [],
      "3": [],
    },
  );
  const [placedPieces, setPlacedPieces] = useState<string[]>([]);
  const [isStarComplete, setIsStarComplete] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    console.log("Clicked", clicked);
  }, [clicked]);

  function handleStarDragEnd(event: { delta: any; active: any; over: any }) {
    const { active, over } = event;

    if (over && over.id === `dropzone-${active.id}`) {
      const piece = puzzlePieces.find((p) => p.id === active.id);
      if (piece) {
        // ตรวจสอบว่าตำแหน่งที่วางใกล้เคียงกับ dropZoneX และ dropZoneY หรือไม่
        const tolerance = 10; // ความคลาดเคลื่อนที่ยอมรับได้
        const dx = Math.abs(event.delta.x - piece.dropZoneX);
        const dy = Math.abs(event.delta.y - piece.dropZoneY);
        if (dx <= tolerance && dy <= tolerance) {
          setPlacedPieces((prev) => [...prev, active.id]);
        }
      }
    }
  }

  function checkPosition(
    piece: PuzzlePiece,
    event: { active: any; over: any },
  ): boolean {
    const { active, over } = event;
    const tolerance = 10;
    const dx = Math.abs(active.rect.current.translated.left - piece.dropZoneX);
    const dy = Math.abs(active.rect.current.translated.top - piece.dropZoneY);
    return dx <= tolerance && dy <= tolerance;
  }

  useEffect(() => {
    if (placedPieces.length === puzzlePieces.length) {
      setIsStarComplete(true);
    }
  }, [placedPieces]);

  return (
    <main className="h-full w-full bg-gray-100 p-5">
      <div className="flex bg-red-500 p-4 text-2xl">hello</div>
      <hr className="my-4" />

      <section>
        <h3 className="mb-2 text-lg font-bold">Tap to continue button</h3>
        <div className="relative flex h-[400px] w-full items-center justify-center bg-blue-100">
          <ContinueButton
            position="center"
            word="Tap to Continue"
            onClick={handleClick}
          />
          <ContinueButton
            position="top"
            word="Tap to Continue"
            onClick={handleClick}
          />
          <ContinueButton
            position="bottom"
            word="Tap to Continue"
            onClick={handleClick}
          />
          {clicked && <p className="text-green-500">Clicked</p>}
        </div>
        <hr className="my-4" />
      </section>

      <section>
        <h3 className="mb-2 text-lg font-bold">Long text input</h3>
        <div className="h-[400px] w-full bg-yellow-100 p-4">
          <Answerfield
            value={text}
            className="h-full"
            onChange={handleTextChange}
          />
        </div>
        <hr className="my-4" />
      </section>

      <div className="h-auto w-full p-4">
        <h3 className="mb-2 text-lg font-bold">Story Text type 1</h3>
        <div className="flex h-[800px] w-full bg-gray-500 p-4">
          <StoryText type="top" className="h-full w-full bg-blue-100">
            <p>
              Top story text Top story text Top story text Top story text Top
              story text Top story text Top story text Top story text Top story
              text Top story text Top story text Top story text Top story text
              Top story text Top story text Top story text Top story text Top
              story text Top story text Top story text Top story text Top story
              text Top story text Top story text Top story text Top story text
              Top story text Top story text Top story text Top story text Top
              story text Top story text Top story text Top story text
            </p>
          </StoryText>
        </div>
        <hr className="my-4" />
      </div>

      <div className="h-auto w-full p-4">
        <h3 className="mb-2 text-lg font-bold">Story Text type 2</h3>
        <div className="flex h-[800px] w-full bg-gray-500 p-4">
          <StoryText type="bottom" className="h-full w-full bg-blue-100">
            <p>
              bottom story text bottom story text bottom story text bottom story
              text bottom story text bottom story text bottom story text bottom
              story text bottom story text bottom story text bottom story text
              bottom story text bottom story text bottom story text bottom story
              text bottom story text bottom story text bottom story text bottom
              story text bottom story text bottom story text bottom story text
              bottom story text bottom story text
            </p>
          </StoryText>
        </div>
        <hr className="my-4" />
      </div>

      <div className="h-auto w-full p-4">
        <h3 className="mb-2 text-lg font-bold">Story Text type 3</h3>
        <div className="flex h-[800px] w-full bg-gray-500 p-4">
          <StoryText type="center" className="h-full w-full bg-blue-100">
            <p>
              center story text center story text center story text center story
              text center story text center story text center story text center
              story text center story text center story text center story text
              center story text center story text center story text center story
              text center story text
            </p>
          </StoryText>
        </div>
        <hr className="my-4" />
      </div>

      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 aspect-video">
  <DndContext onDragEnd={handleStarDragEnd}>
    <StarOutline />
    {puzzlePieces.map((piece) => (
      <DropZone key={piece.id} piece={piece}>
        {placedPieces.includes(piece.id) && <PlacedPiece piece={piece} />}
      </DropZone>
    ))}
    <div className="flex flex-wrap gap-8 justify-center items-center mt-8">
      {puzzlePieces.map((piece) => (
        <DraggablePiece key={piece.id} piece={piece} isPlaced={placedPieces.includes(piece.id)} />
      ))}
    </div>
  </DndContext>
</div>
    </main>
  );
}

export default Test;
