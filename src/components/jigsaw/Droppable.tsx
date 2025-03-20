import { useDroppable } from "@dnd-kit/core";
import Star0 from "@/assets/story/scene6/star0_hd.webp";
import Star1 from "@/assets/story/scene6/star1_hd.webp";
import Star2 from "@/assets/story/scene6/star2_hd.webp";
import Star3 from "@/assets/story/scene6/star3_hd.webp";
import { useEffect } from "react";
import { navigate } from "astro:transitions/client";

interface DroppableProps {
  id: string;
  droppedItems: number;
  children: React.ReactNode;
  redirectUrl: string;
}

export function Droppable({
  id,
  droppedItems,
  children,
  redirectUrl,
}: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const getBgImage = () => {
    if (droppedItems === 1) return Star1;
    if (droppedItems === 2) return Star2;
    if (droppedItems >= 3) return Star3;
    return Star0; // Default Image when no items are dropped
  };

  const style = {
    opacity: droppedItems === 3 || isOver ? 1 : 0.8,
  };

  useEffect(() => {
    if (droppedItems === 3) {
      setTimeout(() => {
        navigate(redirectUrl);
      }, 1000);
    }
  }, [droppedItems === 3]);

  return (
    <>
      <div
        className="absolute top-[15%] left-1/2 -translate-x-1/2 bg-cover bg-center transition-all"
        ref={setNodeRef}
        style={{ width: "250px", height: "350px", ...style }}
      >
        {children}
      </div>
      <img
        src={getBgImage().src}
        style={{ ...style }}
        className="absolute inset-0 left-1/2 -translate-x-1/2 bg-cover bg-center object-cover"
        alt="star image"
      />
    </>
  );
}
