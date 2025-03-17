import React from "react";
import BubbleWhite from "@/assets/tool/bubble-white.webp";
import BubbleDark from "@/assets/tool/bubble-dark.webp";

type PickOneProps = {
  type: "top" | "bottom" | "center" | "box";
  children?: React.ReactNode;
  word?: string;
  theme?: "light" | "dark";
  className?: string;
};

const PickOne: React.FC<PickOneProps> = ({
  type = "top",
  children,
  word,
  theme = "light",
  className = "",
}) => {
  const baseClasses = "absolute flex items-center justify-center w-full";

  return (
    <div
      className={`${baseClasses} ${type === "top" ? "top-[10%]" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} ${className}`}
    >
      {/* Image Container */}
      <div className="relative">
        <img
          className="opacity-60"
          src={theme === "light" ? BubbleWhite.src : BubbleDark.src}
          alt="Text Background"
        />

        {/* Centered Text */}
        <p
          className={`${theme === "light" ? "text-black" : "text-white"} font-italiana absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-4xl`}
        >
          {word}
        </p>
      </div>
    </div>
  );
};

export default PickOne;
