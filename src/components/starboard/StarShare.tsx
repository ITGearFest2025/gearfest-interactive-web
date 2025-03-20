import { useState } from "react";

interface StarProperties {
  top: number;
  left: number;
  size: number;
  rotate: number;
  duration: number;
}

interface StarImageProps {
  position: StarProperties;
  star: string;
  onClick?: () => void;
  isHighlighted?: boolean;
}

interface StarShareProps {
  message?: string;
}

const generateStarProperties = (): StarProperties => {
  const screen = { width: 430 * 2, height: 932 * 2 };

  let left, top;

  // Generate top, left ensuring it's not between 830 and 890
  do {
    left = Math.floor(Math.random() * screen.width - 70);
    top = Math.floor(Math.random() * screen.height - 70);
  } while (top >= 720 && top <= 1084 && left >= 250 && left <= 490);

  return {
    top,
    left,
    size: Math.max(Math.floor(Math.random() * 30) + 40, 20),
    rotate: Math.floor(Math.random() * 360),
    duration: Math.floor(Math.random() * 5) + 2,
  };
};

const getRandomMessage = () => {
  const message = [
    "เก่งมากๆ ที่มาได้จนถึงจุดๆ นี้ แค่หายใจอยู่ก็เก่งและ",
    "นอนเยอะ ๆ พักผ่อนเยอะ ๆ กินน้ำให้ครบ ดูแลสุขภาพด้วย!",
    "ปล่อยวางบ้าง ชีวิตไม่ต้องเพอเฟ็คทุกอย่างก็ได้ เอาเวลาไปนอนดีกว่า🤩",
    "เลิกรับงานซ้อน🫵",
    "สู้ๆนะ เดี๋ยวเราก็ผ่านเรื่องหนักๆไปได้",
    "ทำเท่าที่ไหวก็พอ เน้นให้มีความสุขดีกว่า เย่ๆๆๆๆ",
    "ไม่มีคําว่าสายเกินไปสําหรับคนเก่งอย่างเทอ",
    "เลิกแคร์คนอื่นเยอะเกินไปได้แล้ว แคร์ตัวเองบ้างเถอะ😔",
    "นอนเยอะๆ กินเยอะๆ พักผ่อนเยอะๆ ดูแลตัวเองบ้าง",
    "ไปอ่านหนังสือได้แล้ว!",
    "ถึงตัวเองใน 1 ปีข้างหน้า ชั้นรวยรึยัง?",
    "Be the best version of you💖",
    "ฉันนี้แหละ คือตัวตนที่เก่งที่สุดแล้ว",
    "อย่าลืม ว่าทั้งหมดนี้ทำเพื่อใคร!",
    "อ่าห์ นานแค่ไหนแล้วนะที่ได้นอนดูใบไม้พริ้วไหว",
    "อ่านหนังสือมันเครียด ไปออกกำลังกายกันดีกว่านะ เพื่อสุขภาพ!",
    "อย่ากลัวในสิ่งที่ยังมาไม่ถึง กล้าเข้าไว้นะ!",
    "เรื่องที่เป็นไปไม่ได้ ก็เป็นแค่เรื่องที่ยังมาไม่ถึง พยายามเข้าไว้นะ เหนื่อยก็พักได้ แต่ก็ลุกขึ้นมาให้ได้นะ!",
    "ขอให้โลกใจดีกับเทอนะ :)",
    "ถึงแม้บางครั้งโลกจะไม่น่ารักกับเรา อย่าลืมยิ้มเยอะๆนะ",
    "ถ้าลองมองย้อนกลับไป เราก็โตมาไกลนะเนี่ย!",
    "เห้! เทอหน่ะ! เก่งมากเลยนะวันนี้!",
    "อยากโทรไปหาแม่จังง",
    "วันนี้เราได้ให้รางวัลตัวเองรึยังนะ? อ้อ! บิงซูไง 555655",
    "เข้าเดือนอ่านหนังสือจนเปื่อยเลยใช่มั้ย รีบขึ้นมาจากน้ำได้แล้ว! ใครใช้ให้อ่านหนังสือในน้ำจนเปื่อยกันเล่า",
  ];
  return message[Math.floor(Math.random() * message.length)];
};

const getRandomStarImage = () => {
  const starImages = [
    "reformer",
    "helper",
    "achiever",
    "individualist",
    "investigator",
    "loyalist",
    "enthusiast",
    "challenger",
    "peacemaker",
  ];
  return starImages[Math.floor(Math.random() * starImages.length)];
};

const StarImage: React.FC<StarImageProps> = ({
  position,
  star,
  onClick,
  isHighlighted,
}) => (
  <img
    src={`/src/assets/starboard/${star === "" ? "reformer" : star}_Star.svg`}
    alt="Star"
    className={`absolute animate-pulse transition-transform ${
      isHighlighted ? "z-[50]" : "z-0"
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
    star: string;
  } | null>(null);

  const [star] = useState(getRandomStarImage);
  const [position] = useState(generateStarProperties);
  const [messageStar] = useState(message ? message : getRandomMessage());

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
      <StarImage position={position} star={star} onClick={handleStarClick} />

      {showMessage && selectedStar && (
        <>
          <StarImage
            position={selectedStar.position}
            star={selectedStar.star}
            isHighlighted
          />

          <div
            onClick={closeMessage}
            className="fixed inset-0 z-40 flex cursor-pointer flex-col items-center justify-center bg-black/50"
          >
            <div
              style={{
                background: "#807E8E",
                boxShadow: "inset 0px 0px 64px #FFFFFF",
                borderRadius: "8px",
              }}
              className="font-taviraj mx-auto flex h-auto max-h-80 min-h-20 w-fit max-w-80 min-w-40 items-center justify-center overflow-y-auto rounded-lg bg-gray-100 p-4 text-center text-white shadow-lg"
            >
              <p>{messageStar}</p>
            </div>
            <p className="font-taviraj mt-4 text-white">Tap to close</p>
          </div>
        </>
      )}
    </>
  );
};

export default StarShare;
