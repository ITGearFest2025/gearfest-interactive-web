import { useRef } from "react";
import html2canvas from "html2canvas";
import SavePicturePrepare from "./SavePicturePrepare";
import ImageHd from "@/assets/onsite/bg-onsite_hd.webp";

const Test = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSaveAsImage = async () => {
    if (!contentRef.current) return;

    try {
      await html2canvas(contentRef.current).then((canvas) => {
        const image = canvas.toDataURL("image/png", 1.5);

        const a = document.createElement("a");
        a.href = image;
        a.download = "starglobe_gear_festival_2025.png";
        a.click();
      });
    } catch (error) {
      console.error("Failed to capture screenshot", error);
    }
  };

  return (
    <div ref={contentRef} className="h-[932px] w-[430px]">
      {/* <img
        src={ImageHd.src}
        alt="background"
        className="top-0 -z-10 h-full w-full bg-red-500 object-cover"
      /> */}
      <SavePicturePrepare />
      <button className="absolute top-1/2 left-1/2" onClick={handleSaveAsImage}>
        Save a picture
      </button>
    </div>
  );
};

export default Test;
