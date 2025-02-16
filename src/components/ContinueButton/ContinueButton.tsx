import type React from "react";
import { useEffect, useState } from "react";

interface ContinueButtonProps {
  word: string;
  delay: number;
  redirectUrl: string;
  position: "top" | "bottom" | "center";
  className?: string;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  word = "tap to continue",
  delay,
  redirectUrl,
  position,
  className = "",
}) => {
  const baseClasses = "z-50 animate-pulse bg-transparent cursor-pointer";

  const positionClasses = {
    top: "absolute left-4 top-[30%]",
    bottom: "absolute right-4 bottom-4",
    center: "absolute left-1/2 bottom-[30%] -translate-x-1/2",
  };

  const [showTap, setShowTap] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTap(true);
    }, delay * 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      {showTap && (
        <a
          className={`${baseClasses} ${positionClasses[position]} ${className}`}
          href={redirectUrl}
        >
          <p className="bg-opacity-50 rounded bg-transparent px-3 py-2 text-black">
            {word}
          </p>
        </a>
      )}
    </>
  );
};

export default ContinueButton;
