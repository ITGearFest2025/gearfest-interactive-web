import { useState } from "react";
import Reformer from "@/assets/starboard/reformer_Star.svg";
import Achiever from "@/assets/starboard/achiever_Star.svg";
import Helper from "@/assets/starboard/helper_Star.svg";
import Individualist from "@/assets/starboard/individualist_Star.svg";
import Investigator from "@/assets/starboard/investigator_Star.svg";
import Peacemaker from "@/assets/starboard/peacemaker_Star.svg";
import Challenger from "@/assets/starboard/challenger_Star.svg";
import Enthusiast from "@/assets/starboard/enthusiast_Star.svg";
import Loyalist from "@/assets/starboard/loyalist_Star.svg";

interface StarProperties {
  top: number;
  left: number;
  size: number;
  rotate: number;
  duration: number;
}

interface StarImageProps {
  position: StarProperties;
  star: ImageMetadata;
  onClick?: () => void;
  isHighlighted?: boolean;
}

interface StarShareProps {
  message?: string;
  indexNum: number;
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

const getRandomMessage = ({ index }: { index: number }) => {
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
    "รู้ไหมว่าความพยายามที่เทอทำจะทำให้มีความสำเร็จในที่สุด ขอชมเลย!",
    "อย่าลืมให้เวลากับตัวเองมากๆ นะ อย่าฝืนเกินไป",
    "ไม่มีใครสำคัญเท่ากับตัวเองนะ จำไว้เสมอ",
    "แค่คิดในเชิงบวก ทุกอย่างก็จะดีขึ้น 😊",
    "ทุกก้าวที่เราก้าวไป คือความสำเร็จแล้ว อย่าลืมยิ้มด้วย!",
    "พักผ่อนเยอะๆ จะได้กลับมาทำงานได้เต็มที่นะ",
    "ทุกปัญหามีทางออกเสมอ อย่าเพิ่งท้อเลยนะ",
    "ลองยิ้มให้กับตัวเองในกระจกทุกเช้า แล้วดูความรู้สึกดีๆ ที่ตามมาเองแหละ!",
    "อย่าทำทุกอย่างให้มันยุ่งยาก เริ่มต้นจากสิ่งง่ายๆ แล้วค่อยๆ เพิ่มขึ้นนะคนเก่ง",
    "ชีวิตไม่ต้องสมบูรณ์แบบก็ได้ แค่พยายามเต็มที่ก็พอแล้ว <3",
    "ทุกครั้งที่ล้มต้องลุกขึ้นมาใหม่ แค่นั้นก็เพียงพอแล้ว",
    "อย่าให้คำพูดของคนอื่นทำให้เราหมดกำลังใจนะ",
    "ไม่มีใครที่ไม่เคยทำผิด อย่าตัดสินตัวเองจากความผิดพลาดเลย",
    "คนอื่นจะว่าอย่างไรไม่สำคัญ สิ่งที่สำคัญคือเราเชื่อในตัวเองนะ",
    "ทุกวันคือโอกาสใหม่ในการเริ่มต้น ไม่ว่าอะไรก็เริ่มใหม่ได้เสมอ",
    "เริ่มต้นเล็กๆ แต่มั่นคง แล้วค่อยๆ เติบโตอย่างมีความสุข",
    "ทำในสิ่งที่รัก แล้วความสำเร็จจะตามมาเอง",
    "แม้ว่าวันนี้จะยากแค่ไหน พรุ่งนี้คงจะดีขึ้น",
    "หยุดพักเมื่อรู้สึกเหนื่อย อย่าฝืนเกินไปนะ",
    "โลกนี้มีสิ่งดีๆ รออยู่แค่เราออกไปค้นหามัน go ๆ",
    "อะไรที่เราผ่านมาแล้ว มันทำให้เรามีความแข็งแกร่งขึ้น มั้ง555",
    "แม้ทุกสิ่งจะยากแต่ถ้าเรามีความเชื่อมั่น เราจะผ่านไปได้แน่ๆ",
    "ยิ้มทุกครั้งที่เหนื่อย มันจะทำให้เรารู้สึกดีขึ้นนะ",
    "อย่าลืมสังเกตและขอบคุณสิ่งดีๆ ที่อยู่รอบตัวคุณ ทุกอย่างดีขึ้นเมื่อมองเห็นความสวยงามในทุกวันค่ะ! 🌸",
    "เริ่มต้นเล็กๆ แต่มั่นคง แล้วค่อยๆ เติบโตอย่างมีความสุขนะครับ",
    "วันนี้เราได้ให้รางวัลตัวเองรึยังนะ? บิงซูแหละ 555555",
  ];
  return index && index >= 0
    ? message[index]
    : message[Math.floor(Math.random() * message.length)];
};

const getRandomStarImage = () => {
  const starImages = [
    Reformer,
    Helper,
    Achiever,
    Individualist,
    Investigator,
    Loyalist,
    Enthusiast,
    Challenger,
    Peacemaker,
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
    src={star ? star.src : Achiever.src}
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

const StarShare: React.FC<StarShareProps> = ({ message, indexNum }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [selectedStar, setSelectedStar] = useState<{
    position: StarProperties;
    star: ImageMetadata;
  } | null>(null);

  const [star] = useState(getRandomStarImage);
  const [position] = useState(generateStarProperties);
  const [messageStar] = useState(
    message ? message : getRandomMessage({ index: indexNum }),
  );

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
