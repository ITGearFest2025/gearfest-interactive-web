import { useState } from "react";
import star2 from "@/assets/starboard/Star2.webp";
import star3 from "@/assets/starboard/Star3.webp";
import star4 from "@/assets/starboard/Star4.webp";

interface StarProperties {
  top: number;
  left: number;
  size: number;
  rotate: number;
  duration: number;
}

interface StarImageProps {
  position: StarProperties;
  star: { src: string };
  onClick?: () => void;
  isHighlighted?: boolean;
}

interface StarShareProps {
  message: string;
}

const generateStarProperties = (): StarProperties => {
  const screen = { width: 430 * 2, height: 932 * 2 };

  return {
    top: Math.floor(Math.random() * screen.height * 1.5 - 40),
    left: Math.floor(Math.random() * screen.width * 1.5 - 40),
    size: Math.max(Math.floor(Math.random() * 30) + 20, 20),
    rotate: Math.floor(Math.random() * 360),
    duration: Math.floor(Math.random() * 5) + 2,
  };
};

const getRandomStarImage = (): { src: string } => {
  const starImages = [star2, star3, star4];
  return starImages[Math.floor(Math.random() * starImages.length)];
};

const StarImage: React.FC<StarImageProps> = ({
  position,
  star,
  onClick,
  isHighlighted,
}) => (
  <img
    src={star.src}
    alt="Star"
    className={`absolute animate-pulse transition-transform ${
      isHighlighted ? "z-[100]" : "z-0"
    }`}
    style={{
      top: `${position.top}px`,
      left: `${position.left}px`,
      width: `${position.size}px`,
      height: `${position.size}px`,
      transform: `rotate(${position.rotate}deg)`,
      animationDuration: `${position.duration}s`,
      cursor: onClick ? "pointer" : "default",
    }}
    onClick={onClick}
  />
);

const StarShare: React.FC<StarShareProps> = ({ message }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [selectedStar, setSelectedStar] = useState<{
    position: StarProperties;
    star: { src: string };
  } | null>(null);

  const [star] = useState(getRandomStarImage);
  const [position] = useState(generateStarProperties);

  const handleStarClick = () => {
    setSelectedStar({ position, star });
    setShowMessage(true);
  };

  const closeMessage = () => {
    setShowMessage(false);
    setSelectedStar(null);
  };

  return (
    <>
      {/* Trigger Star */}
      <StarImage position={position} star={star} onClick={handleStarClick} />

      {/* Modal Overlay */}
      {showMessage && selectedStar && (
        <>
          {/* Keep the clicked star on top! */}
          <StarImage
            position={selectedStar.position}
            star={selectedStar.star}
            isHighlighted
          />

          {/* Modal Background */}
          <div
            onClick={closeMessage}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70"
          >
            {/* Message Box */}
            <div className="z-50 mx-auto flex h-auto max-h-80 min-h-20 w-fit max-w-80 min-w-40 items-center justify-center overflow-y-auto rounded-lg bg-gray-100 p-4 text-center shadow-lg">
              <p>{message}</p>
            </div>
            <p className="mt-4 text-white">Tap to close</p>
          </div>
        </>
      )}
    </>
  );
};

export default StarShare;
