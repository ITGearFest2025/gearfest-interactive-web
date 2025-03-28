import ImageHd from "@/assets/starglobe/bgstarglobe.png";
import ESC from "@/assets/landing/esc_hd.webp";
import GearFest from "@/assets/landing/gearfest_hd.webp";
import KNEng from "@/assets/landing/tueng_hd.webp";
import FinishGlobeView from "@/components/Starglobe/FinishGlobeView";
import Navbar from "@/components/Navbar/Navbar";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";

const SavePicturePrepare = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState<string>("Title");
  const handleSaveAsImage = async () => {
    if (!contentRef.current) return;
    try {
      const elementsToExcludeDisplay = contentRef.current.querySelectorAll(
        ".exclude-from-screenshot",
      );
      elementsToExcludeDisplay.forEach((el) => {
        (el as HTMLElement).style.display = "none";
      });

      const elementsToExcludeOpacity = contentRef.current.querySelectorAll(
        ".exclude-from-screenshot2",
      );
      elementsToExcludeOpacity.forEach((el) => {
        (el as HTMLElement).style.opacity = "0";
      });
      const elementsToIncludeDisplay = contentRef.current.querySelectorAll(
        ".include-for-screenshot",
      );
      elementsToIncludeDisplay.forEach((el) => {
        (el as HTMLElement).style.display = "block";
      });

      await html2canvas(contentRef.current, { useCORS: true }).then(
        (canvas) => {
          const image = canvas.toDataURL("image/png", 1.5);

          const a = document.createElement("a");
          a.href = image;
          a.download = "gear_festival_2025.png";
          a.click();
        },
      );

      elementsToExcludeDisplay.forEach((el) => {
        (el as HTMLElement).style.display = "";
      });

      elementsToExcludeOpacity.forEach((el) => {
        (el as HTMLElement).style.opacity = "";
      });
      elementsToIncludeDisplay.forEach((el) => {
        (el as HTMLElement).style.display = "none";
      });
    } catch (error) {
      console.error("Failed to capture screenshot", error);
    }
  };
  return (
    <div ref={contentRef} className="h-full w-full">
      <img src={ImageHd.src} className="absolute top-0" />
      <Navbar />
      <div className="absolute top-0 right-0 left-0 flex h-full flex-col items-center">
        <div className="mt-4 flex w-auto items-center justify-center gap-1.5">
          <img
            src={ESC.src}
            alt="ESC"
            className="exclude-from-screenshot h-[65px] w-[65px]"
          />
          <img
            src={GearFest.src}
            alt="GearFest"
            className="h-[98px] w-[98px]"
          />
          <img
            src={KNEng.src}
            alt="KNEng"
            className="exclude-from-screenshot h-[55px] w-[55px]"
          />
        </div>

        <div className="absolute top-[150px] left-1/2 flex w-full -translate-x-1/2 flex-col items-center">
          <h1
            id="title-display"
            className="mercy-font mb-[37px] text-center text-[28px] text-white"
          >
            {title}
          </h1>

          <div className="relative mb-[37px] h-[295.31px] w-[295.31px]">
            <FinishGlobeView />
          </div>
          <p className="include-for-screenshot font-petit hidden w-full text-center text-[32px] text-white">
            Starry Playground
          </p>

          <div className="include-for-screenshot mt-16 hidden">
            <p className="font-baskervville text-center text-white">
              gearfest2025.com
            </p>
            <div>
              <img src={ESC.src} alt="ESC" className="h-[65px] w-[65px]" />
              <img src={KNEng.src} alt="KNEng" className="h-[55px] w-[55px]" />
            </div>
          </div>
          <div className="exclude-from-screenshot flex w-[347px] flex-col items-start gap-4">
            <div className="w-full text-left">
              <p className="font-taviraj mb-1 text-2xl text-white">Title</p>
              <input
                id="title-input"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your memory globe title"
                className="w-full border-b border-white bg-transparent px-2 pb-1 text-left text-lg text-white focus:outline-none"
              />
            </div>

            <div className="flex w-full flex-col items-center gap-y-[12px]">
              <button
                onClick={handleSaveAsImage}
                className="font-mercy h-[39px] w-full cursor-pointer rounded-full border-2 border-white text-center text-[20px] text-white transition-all duration-300 hover:scale-110 active:scale-105"
                style={{
                  boxShadow: "0 0 10px 2px #E2C7E8",
                  textShadow: "0 0 10px #E2C7E8",
                }}
              >
                Save a picture
              </button>

              <a
                href="/"
                className="font-mercy h-[39px] w-full cursor-pointer rounded-full border-2 border-white text-center text-[20px] leading-[39px] text-white transition-all duration-300 hover:scale-110 active:scale-105"
                style={{
                  boxShadow: "0 0 10px 2px #E2C7E8",
                  textShadow: "0 0 10px #E2C7E8",
                }}
              >
                Back to home page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavePicturePrepare;
