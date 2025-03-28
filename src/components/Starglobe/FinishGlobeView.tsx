import { useEffect, useState } from "react";
import StarGlobe from "./StarGlobe";

import red from "@/assets/starglobe/base/red.png";
import silver from "@/assets/starglobe/base/silver.png";
import turquoise from "@/assets/starglobe/base/turquoise.png";
import yellow from "@/assets/starglobe/base/yellow.png";
import brown from "@/assets/starglobe/base/brown.png";
import green from "@/assets/starglobe/base/green.png";
import orange from "@/assets/starglobe/base/orange.png";
import pink from "@/assets/starglobe/base/pink.png";
import purple from "@/assets/starglobe/base/purple.png";

const baseImages = {
  red: red.src,
  silver: silver.src,
  turquoise: turquoise.src,
  yellow: yellow.src,
  brown: brown.src,
  green: green.src,
  orange: orange.src,
  pink: pink.src,
  purple: purple.src,
};

type BaseColor = keyof typeof baseImages;

interface PlacedItem {
  id: number;
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

export default function FinishGlobeView() {
  const [baseImage, setBaseImage] = useState<string>(baseImages.brown);
  const [placedItems, setPlacedItems] = useState<PlacedItem[]>([]);

  useEffect(() => {
    const color = (localStorage.getItem("selectedBaseColor") || "brown") as BaseColor;
    setBaseImage(baseImages[color]);

    const items = JSON.parse(localStorage.getItem("placedItems") || "[]");
    setPlacedItems(items);
  }, []);

  return (
    <div className="relative w-[297px] h-[232px]">
        <StarGlobe baseImage={baseImage} />
        <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
            {placedItems.map((item) => (
            <img
                key={item.id}
                src={item.src}
                alt="placed item"
                style={{
                position: "absolute",
                left: `${item.x}px`,
                top: `${item.y}px`,
                width: `${item.width}px`,
                height: `${item.height}px`,
                objectFit: "contain",
                pointerEvents: "none",
                }}
            />
            ))}
        </div>
        </div>

  );
}
