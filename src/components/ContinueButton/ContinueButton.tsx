import type React from "react";
import { useEffect, useState } from "react";

interface ContinueButtonProps {
  word?: string;
  delay: number;
  redirectUrl: string;
  position?: "right" | "bottom" | "center";
  color?: "black" | "white";
  className?: string;
  onClick?: () => void; // Added onClick property
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  word = "Tap to continue",
  delay,
  redirectUrl,
  position = "right",
  color = "black",
  className = "",
  onClick, // Destructure onClick
}) => {
  const baseClasses = "absolute z-50 inset-0 bg-transparent cursor-pointer";

  const positionClasses = {
    right: "bottom-[20%] right-4",
    bottom: "bottom-4 right-4",
    center: "bottom-[15%] left-[50%] transform -translate-x-1/2",
  };

  const [showTap, setShowTap] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTap(true);
    }, delay * 1000);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <>
      {showTap && (
        <a className={`${baseClasses} ${className}`} href={redirectUrl} onClick={onClick}>
          <p
            className={`${positionClasses[position]} bg-opacity-70 absolute animate-pulse rounded bg-transparent px-3 py-2 text-2xl ${color === "black" ? "text-black" : "text-white"}`}
          >
            {word}
          </p>
        </a>
      )}
    </>
  );
};

export default ContinueButton;