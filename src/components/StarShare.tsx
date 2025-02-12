import { useState, useRef, useEffect } from "react";
import star from "@/assets/starboard/Star.webp";

const StarShare = ({
  message,
  position,
}: {
  message: string;
  position: { top: number; left: number; right: number; bottom: number };
}) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  const Image = () => {
    return (
      <img
        src={star.src}
        style={{
          top: `${position.top}%`,
          left: `${position.left}%`,
          right: `${position.right}%`,
          bottom: `${position.bottom}%`,
        }}
        alt="Star"
        className="absolute size-10"
      />
    );
  };

  return (
    <>
      {showMessage && (
        <button
          onClick={handleClick}
          className="absolute top-0 right-0 bottom-0 left-0 z-10 flex-col items-center justify-center bg-black opacity-70 hover:cursor-pointer"
        >
          <Image />
          <div className="mx-auto flex h-auto max-h-80 min-h-20 w-fit max-w-80 min-w-40 items-center justify-center overflow-y-auto rounded-lg bg-gray-100 p-4 text-center">
            <p>{message}</p>
          </div>
          <p className="mt-4 w-full text-white">Tap to close</p>
        </button>
      )}
      <button
        className="hover:pointer size-auto focus:ring-1"
        onClick={handleClick}
      >
        <Image />
      </button>
    </>
  );
};

const StarMessage = () => {};

export default StarShare;
