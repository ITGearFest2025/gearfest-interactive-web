import { motion } from "framer-motion";
import { type PuzzlePiece } from "../../types/puzzlepiece";
import { useDraggable, useDroppable } from "@dnd-kit/core";

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
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="h-[clamp(60px,15vw,120px)] w-[clamp(60px,15vw,120px)] drop-shadow-lg"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
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
      className="absolute z-10 flex h-[clamp(40px,10vw,80px)] w-[clamp(40px,10vw,80px)] items-center justify-center" // ปรับขนาดให้เล็กลง
      style={{
        left: `${piece.dropZoneX}%`,
        top: `${piece.dropZoneY}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {!children && (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="pointer-events-none absolute top-0 left-0"
        >
          <path
            d={piece.path}
            fill="none"
            stroke="#000000"
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
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      className="h-[clamp(60px,15vw,120px)] w-[clamp(60px,15vw,120px)] drop-shadow-lg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <path
        d={piece.path}
        fill="#FFD700"
        stroke="#00000"
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
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M50 0L100 50L50 100L0 50L50 0"
        fill="none"
        stroke="#000000"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        className="opacity-30"
      />
    </svg>
  );
}
