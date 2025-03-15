import React from "react";
import BubbleWhite from "@/assets/tool/bubble-white.webp";
import BubbleDark from "@/assets/tool/bubble-dark.webp";

type TextBoxProps = {
  type: "top" | "bottom" | "center" | "box";
  children?: React.ReactNode;
  word?: string;
  theme?: "light" | "dark";
  className?: string;
};

const TextBox: React.FC<TextBoxProps> = ({
  type,
  children,
  word,
  theme = "light",
  className = "",
}) => {
  const baseClasses = "absolute flex items-center justify-center w-full";

  const typeClasses = {
    top: "top-[10%]",
    bottom: "bottom-[20%]",
    center:
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    box: "relative",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${className}`}>
      {/* Image Container */}
      <div className="relative">
        <img
          src={theme === "light" ? BubbleWhite.src : BubbleDark.src}
          alt="Text Background"
        />

        {/* Centered Text */}
        <p
          className={`${theme === "light" ? "text-black" : "text-white"} font-mitr absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-xl`}
        >
          {word}
        </p>
      </div>
    </div>
  );
};

export default TextBox;
