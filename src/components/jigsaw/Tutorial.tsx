import Arrow from "@/assets/story/scene2/arrow";
import { useEffect, useState } from "react";

const Tutorial = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Set a timer to hide the message after 2 seconds
    const timer = setTimeout(() => {
      setShowMessage(false);
      const hid = setTimeout(() => {
        setHidden(true);
      }, 750);
    }, 4000); // 2000ms = 2 seconds

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute z-50 h-full w-full transition-opacity ${showMessage ? "opacity-100" : "opacity-0"} duration-1000`}
      hidden={hidden}
    >
      <div className="abosolute h-full w-full bg-black opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
        <p className="w-full text-center text-2xl font-semibold text-white">
          Drag the jigsaws into the star
        </p>
      </div>
    </div>
  );
};

export default Tutorial;
