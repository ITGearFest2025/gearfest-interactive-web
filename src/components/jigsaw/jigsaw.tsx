import { motion } from "framer-motion";
import { type PuzzlePiece } from "../../lib/interface/puzzlepiece";
import {  useDraggable, useDroppable } from "@dnd-kit/core";

export function DraggablePiece({
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
  
export function DropZone({
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
  
export function PlacedPiece({ piece }: { piece: PuzzlePiece }) {
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
  
export function StarOutline() {
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
  