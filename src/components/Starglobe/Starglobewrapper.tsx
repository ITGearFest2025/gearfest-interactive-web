import { useState, useEffect } from "react";
import StarGlobe from "./StarGlobe";
import ColorSelector from "./Colorselector";

type BaseColor =
  | "red" | "silver" | "turquoise" | "yellow"
  | "brown" | "green" | "orange" | "pink" | "purple";

import red from "@/assets/starglobe/base/red.png";
import silver from "@/assets/starglobe/base/silver.png";
import turquoise from "@/assets/starglobe/base/turquoise.png";
import yellow from "@/assets/starglobe/base/yellow.png";
import brown from "@/assets/starglobe/base/brown.png";
import green from "@/assets/starglobe/base/green.png";
import orange from "@/assets/starglobe/base/orange.png";
import pink from "@/assets/starglobe/base/pink.png";
import purple from "@/assets/starglobe/base/purple.png";

const baseImages: Record<BaseColor, string> = {
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

export default function StarGlobeWrapper() {
  const [selectedColor, setSelectedColor] = useState<BaseColor>("brown");

  useEffect(() => {
    const storedColor = localStorage.getItem("selectedBaseColor") as BaseColor;
    if (storedColor && baseImages[storedColor]) {
      setSelectedColor(storedColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedBaseColor", selectedColor);
  }, [selectedColor]);

  return (
    <div className="flex flex-col items-center gap-4">
      <StarGlobe baseImage={baseImages[selectedColor]} />
      <ColorSelector selectedColor={selectedColor} onSelect={setSelectedColor} />
    </div>
  );
}
