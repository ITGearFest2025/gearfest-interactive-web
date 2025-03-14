import type React from "react";
import { useEffect, useState } from "react";

interface ContinueButtonProps {
  delay: number;
  redirectUrl: string;
  position?: "right" | "bottom" | "center";
  color?: "black" | "white";
  className?: string;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({
  delay,
  redirectUrl,
  position = "right",
  color = "black",
  className = "",
}) => {
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
        <a className="absolute inset-0 z-50 cursor-pointer bg-transparent">
          <p className="bg-opacity-70 font-italiana absolute right-4 bottom-[20%] animate-pulse rounded bg-transparent px-3 py-2 text-2xl text-white">
            Tap to <br />
            Continue
          </p>
        </a>
      )}
    </>
  );
};

export default ContinueButton;
