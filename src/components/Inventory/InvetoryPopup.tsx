import { useState, useRef } from "react";
import { motion } from "framer-motion";
import tentIcon from "@/assets/starglobe/tent.png";

const inventoryItems = new Array(15).fill(null);
inventoryItems[0] = tentIcon;

interface PlacedItem {
  id: number;
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

export default function InventoryPopup() {
  const [open, setOpen] = useState(false);
  const [placedItems, setPlacedItems] = useState<PlacedItem[]>([]);
  const dragZoneRef = useRef<HTMLDivElement>(null);

  const handlePlaceItem = (item: any) => {
    setPlacedItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        src: item.src,
        width: 80,
        height: 80,
        x: 0,
        y: 0,
      },
    ]);
    setOpen(false);
  };

  const handleRemoveItem = (id: number) => {
    setPlacedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleResize = (id: number, dx: number, dy: number) => {
    setPlacedItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              width: Math.max(40, item.width + dx),
              height: Math.max(40, item.height + dy),
            }
          : item
      )
    );
  };

  const startResize = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    e.stopPropagation();

    let prevX = e.clientX;
    let prevY = e.clientY;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - prevX;
      const dy = moveEvent.clientY - prevY;
      handleResize(id, dx, dy);
      prevX = moveEvent.clientX;
      prevY = moveEvent.clientY;
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleFinish = () => {
    localStorage.setItem("placedItems", JSON.stringify(placedItems));
    window.location.href = "/starglobe/finish";
  };

  return (
    <>
      <div className="flex flex-col items-center gap-[11px]">
        <button
          className="z-20 w-[341px] h-[47px] rounded-full font-italiana text-[32px] text-white border-2 border-white bg-[#1A193E] transition-all duration-300 hover:scale-110 active:scale-105"
          style={{
            boxShadow: "0px 0px 10px 2px #E2C7E8",
            textShadow: "0px 0px 10px #E2C7E8",
          }}
          onClick={() => setOpen(true)}
        >
          My Inventory
        </button>

        <button
          onClick={handleFinish}
          className="z-20 w-[341px] h-[47px] rounded-full font-italiana text-[32px] text-white border-2 border-white bg-[#1A193E] transition-all duration-300 hover:scale-110 active:scale-105"
          style={{
            boxShadow: "0px 0px 10px 2px #E2C7E8",
            textShadow: "0px 0px 10px #E2C7E8",
          }}
        >
          Finish
        </button>
      </div>

      {open && (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50">
          <div
            className="w-[430px] h-[704px] bg-[#7065A473] border border-white rounded-[16px] px-6 pt-6 pb-4 relative shadow-[0_0_10px_2px_#E2C7E8]"
            style={{
              backgroundColor: "rgba(112, 101, 164, 0.45)",
            }}
          >
            <h2
              className="text-white text-[32px] font-taviraj mb-4"
              style={{
                textShadow: "0px 0px 4px #FFFFFF",
              }}
            >
              My Inventory
            </h2>

            <div className="grid grid-cols-3 gap-[20px]">
              {inventoryItems.map((item, index) => (
                <div
                  key={index}
                  className="w-[100px] h-[100px] bg-[#0B002F] border border-white flex items-center justify-center cursor-pointer"
                  onClick={() => item && handlePlaceItem(item)}
                >
                  {item && (
                    <img
                      src={item.src}
                      alt={`item-${index}`}
                      className="w-3/4 h-3/4 object-contain"
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              className="absolute top-4 right-4 text-white text-2xl hover:scale-110 transition"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div
        ref={dragZoneRef}
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "120px",
          width: "297px",
          height: "232px",
          border: "1px dashed white",
        }}
      >
        {placedItems.map((item) => (
          <motion.div
            key={item.id}
            drag
            dragConstraints={dragZoneRef}
            dragMomentum={false}
            className="absolute pointer-events-auto border border-white rounded-md p-1 cursor-grab active:cursor-grabbing bg-black/20"
            style={{
              width: `${item.width}px`,
              height: `${item.height}px`,
              x: item.x,
              y: item.y,
            }}
            onDrag={(e, info) => {
              const bounds = dragZoneRef.current?.getBoundingClientRect();
              if (!bounds) return;

              const newX = info.point.x - bounds.left - item.width / 2;
              const newY = info.point.y - bounds.top - item.height / 2;

              const clampedX = Math.min(
                Math.max(0, newX),
                bounds.width - item.width
              );
              const clampedY = Math.min(
                Math.max(0, newY),
                bounds.height - item.height
              );

              setPlacedItems((prev) =>
                prev.map((p) =>
                  p.id === item.id ? { ...p, x: clampedX, y: clampedY } : p
                )
              );
            }}
          >
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="absolute -top-2 -right-2 text-white text-xs bg-black/60 px-1 rounded-full z-10"
            >
              ✕
            </button>
            <img
              src={item.src}
              alt="placed item"
              className="w-full h-full object-contain"
            />
            <div
              className="absolute right-0 bottom-0 w-3 h-3 bg-white cursor-se-resize"
              onMouseDown={(e) => startResize(e, item.id)}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
