import { useState, useRef } from "react";
import { motion } from "framer-motion";
import tentIcon from "@/assets/starglobe/tent.png";
import { useStore } from "@nanostores/react";
import { ImageSrc, validItems } from "@/components/Onsite/ShowItem";
import { userCollection } from "@/stores/userCollection";
import Free1 from "@/assets/starglobe/freeItems/1.png";
import Free2 from "@/assets/starglobe/freeItems/2.png";
import Free3 from "@/assets/starglobe/freeItems/3.png";
import Free4 from "@/assets/starglobe/freeItems/4.png";
import Free5 from "@/assets/starglobe/freeItems/5.png";
import Free6 from "@/assets/starglobe/freeItems/6.png";
import Free7 from "@/assets/starglobe/freeItems/7.png";
import Free8 from "@/assets/starglobe/freeItems/8.png";
import Free9 from "@/assets/starglobe/freeItems/9.png";
import Free10 from "@/assets/starglobe/freeItems/10.png";
import Free11 from "@/assets/starglobe/freeItems/11.png";
import Free12 from "@/assets/starglobe/freeItems/12.png";
import Free13 from "@/assets/starglobe/freeItems/13.png";
import Free14 from "@/assets/starglobe/freeItems/14.png";
import Free15 from "@/assets/starglobe/freeItems/15.png";
import Free16 from "@/assets/starglobe/freeItems/16.png";
import Free17 from "@/assets/starglobe/freeItems/17.png";
import Free18 from "@/assets/starglobe/freeItems/18.png";
import Free19 from "@/assets/starglobe/freeItems/19.png";
import Free20 from "@/assets/starglobe/freeItems/20.png";

const FreeImageSrc = [
  Free1,
  Free2,
  Free3,
  Free4,
  Free5,
  Free6,
  Free7,
  Free8,
  Free9,
  Free10,
  Free11,
  Free12,
  Free13,
  Free14,
  Free15,
  Free16,
  Free17,
  Free18,
  Free19,
  Free20,
];

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

  const tempItem = useStore(userCollection);
  const item = Object.keys(tempItem).filter((key) => tempItem[key] === "true");

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
          : item,
      ),
    );
  };

  const startResize = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number,
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
    window.location.href = "/onsite/starglobe/finish";
  };

  return (
    <>
      <div className="flex flex-col items-center gap-[11px]">
        <button
          className="font-italiana z-20 h-[47px] w-[341px] cursor-pointer rounded-full border-2 border-white text-[32px] text-white transition-all duration-300 hover:scale-110 active:scale-105"
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
          className="font-italiana z-20 h-[47px] w-[341px] cursor-pointer rounded-full border-2 border-white text-[32px] text-white transition-all duration-300 hover:scale-110 active:scale-105"
          style={{
            boxShadow: "0px 0px 10px 2px #E2C7E8",
            textShadow: "0px 0px 10px #E2C7E8",
          }}
        >
          Finish
        </button>
      </div>

      {open && (
        <div className="fixed bottom-0 left-1/2 z-50 w-full -translate-x-1/2">
          <div
            className="relative h-[704px] w-full max-w-[430px] rounded-[16px] border border-white bg-[#7065A473] px-6 pt-6 pb-4 shadow-[0_0_10px_2px_#E2C7E8]"
            style={{
              backgroundColor: "rgba(112, 101, 164, 0.45)",
            }}
          >
            <h2
              className="font-taviraj mb-4 text-[32px] text-white"
              style={{
                textShadow: "0px 0px 4px #FFFFFF",
              }}
            >
              My Inventory
            </h2>

            <div className="hide-scrollbar grid max-h-[560px] grid-cols-3 gap-[20px] overflow-y-auto">
              {Array.from({ length: 55 }, (_, index) => index + 1).map(
                (i, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() =>
                        item &&
                        handlePlaceItem(
                          index <= item.length - 1
                            ? ImageSrc[parseInt(item[index]) - 1]
                            : FreeImageSrc[index - item.length],
                        )
                      }
                      className="eiei flex h-[100px] w-[100px] items-center justify-center border-[1px] border-[#F7DEFC] bg-[#0D0232]"
                    >
                      {index <= item.length - 1 ? (
                        <img
                          src={ImageSrc[parseInt(item[index]) - 1].src}
                          alt="items"
                          className="h-[90px] w-[90px] object-cover"
                        />
                      ) : index <= item.length - 1 + 20 ? (
                        <img
                          src={FreeImageSrc[index - item.length].src}
                          alt="items"
                          className="h-[90px] w-[90px] object-cover"
                        />
                      ) : (
                        <></>
                      )}
                    </button>
                  );
                },
              )}
            </div>

            <button
              className="absolute top-4 right-4 cursor-pointer text-2xl text-white transition hover:scale-110"
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
            className="pointer-events-auto absolute cursor-grab rounded-md border border-white bg-black/20 p-1 active:cursor-grabbing"
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
                bounds.width - item.width,
              );
              const clampedY = Math.min(
                Math.max(0, newY),
                bounds.height - item.height,
              );

              setPlacedItems((prev) =>
                prev.map((p) =>
                  p.id === item.id ? { ...p, x: clampedX, y: clampedY } : p,
                ),
              );
            }}
          >
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="absolute -top-2 -right-2 z-10 rounded-full bg-black/60 px-1 text-xs text-white"
            >
              ✕
            </button>
            <img
              src={item.src}
              alt="placed item"
              className="h-full w-full object-contain"
            />
            <div
              className="absolute right-0 bottom-0 h-3 w-3 cursor-se-resize bg-white"
              onMouseDown={(e) => startResize(e, item.id)}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
