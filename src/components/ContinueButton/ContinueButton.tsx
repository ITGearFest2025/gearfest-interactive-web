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
  const [showAnimate, setShowAnimate] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTap(true);
    }, delay * 1000);
    const timer2 = setTimeout(
      () => {
        setShowAnimate(true);
      },
      (delay + 0.5) * 1000,
    );
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [delay]);

  return (
    <>
      {showTap && (
        <a
          href={redirectUrl}
          className="absolute inset-0 z-50 cursor-pointer bg-transparent"
        >
          <p
            className={`bg-opacity-70 font-italiana absolute right-4 bottom-[10%] animate-pulse rounded bg-transparent px-3 py-2 text-2xl text-white opacity-0 transition-opacity duration-700 ease-in ${showAnimate ? "opacity-100" : ""}`}
          >
            Tap to <br />
            Continue
          </p>
        </a>
      )}
    </>
  );
};

export default ContinueButton;
