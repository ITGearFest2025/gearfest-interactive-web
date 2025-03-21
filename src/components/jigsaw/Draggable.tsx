import { useDraggable } from "@dnd-kit/core";

interface DraggableProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Draggable({ id, className, children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : "",
  };

  return (
    <button
      className={className + "draggable cursor-pointer"}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
}
