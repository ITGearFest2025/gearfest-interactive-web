import ImageHd from "@/assets/story/scene2/1กาแลกซี่หาดาว_gif_loop_hd.webp";
import { useEffect, useRef } from "react";
import StarShare from "./StarShare";
import AddYour from "./AddYour";
import ArrowDown from "@/assets/landing/arrowdown.svg";
import Navbar from "../Navbar/Navbar";

const StarPlane = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);
  return (
    <div
      className="absolute inset-0 overflow-auto"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 64.4%, rgba(226, 199, 232, 0.18) 91%, rgba(239, 182, 200, 0.2) 96%)",
      }}
    >
      <div className="relative h-[1864px] w-[860px]">
        <Navbar />
        <img
          src={ImageHd.src}
          alt="background"
          className="absolute top-0 right-0 bottom-0 left-0 -z-10 h-full w-full object-cover"
        />
        <AddYour ref={targetRef} />
        {Array.from({ length: 50 }).map((_, i) => (
          <StarShare indexNum={i} key={i} />
        ))}
      </div>
      <div
        className="font-judson fixed bottom-5 flex w-full max-w-[430px] items-center justify-between px-5 text-[20px] text-white"
        style={{ textShadow: "0px 0px 4px #FFFFFF" }}
      >
        <div className="flex cursor-pointer items-center">
          <a href="/donation" className="flex items-center gap-1">
            <img
              src={ArrowDown.src}
              width={36}
              height={36}
              className="rotate-90"
              alt="ArrowLeft"
            />
            Donation
          </a>
        </div>
        <div className="flex cursor-pointer items-center">
          <a href="/what-is-gearfest" className="flex items-center gap-1">
            GearFestival
            <img
              src={ArrowDown.src}
              width={36}
              height={36}
              className="rotate-270"
              alt="ArrowRight"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StarPlane;
