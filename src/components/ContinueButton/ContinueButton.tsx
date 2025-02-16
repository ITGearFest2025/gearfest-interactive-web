import type React from "react";

interface ContinueButtonProps {
  word: string;
  onClick: () => void;
  position: "top" | "bottom" | "center";
  className?: string;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  word,
  onClick,
  position,
  className = "",
}) => {
  const baseClasses = "z-50 animate-pulse bg-transparent cursor-pointer";

  const positionClasses = {
    top: "absolute left-4 top-[30%]",
    bottom: "absolute right-4 bottom-4",
    center: "absolute left-1/2 bottom-[30%] -translate-x-1/2",
  };

  return (
    <div
      className={`${baseClasses} ${positionClasses[position]} ${className}`}
      onClick={onClick}
    >
      <p className="bg-opacity-50 rounded bg-transparent px-3 py-2 text-black">
        {word}
      </p>
    </div>
  );
};

export default ContinueButton;
