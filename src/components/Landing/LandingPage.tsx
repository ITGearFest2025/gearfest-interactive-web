import ESC from "@/assets/landing/esc.svg";
import GearFest from "@/assets/landing/gearfest.svg";
import KNEng from "@/assets/landing/kneng.svg";
import Logo from "@/assets/landing/logo.webp";
import Tiktok from "@/assets/landing/tiktok.svg";
import Instagram from "@/assets/landing/ig.svg";
import ArrowDown from "@/assets/landing/arrowdown.svg";
import Glass from "@/assets/landing/glass.svg";
import Line from "@/assets/landing/line.svg";
import { userResult } from "@/stores/userResult";

import Achiever from "@/assets/result/Achiever.png";
import Reformer from "@/assets/result/Reformer.png";
import Helper from "@/assets/result/Helper.png";
import Challenger from "@/assets/result/Challenger.png";
import Enthusiast from "@/assets/result/Enthusiast.png";
import Individualist from "@/assets/result/Individualist.png";
import Investigator from "@/assets/result/Investigator.png";
import Peacemaker from "@/assets/result/Peacemaker.png";
import Loyalist from "@/assets/result/Loyalist.png";

const ImageSrc: { [index: string]: ImageMetadata } = {
  achiever: Achiever,
  reformer: Reformer,
  helper: Helper,
  challenger: Challenger,
  enthusiast: Enthusiast,
  individualist: Individualist,
  investigator: Investigator,
  peacemaker: Peacemaker,
  loyalist: Loyalist,
};

const LandingPage = () => {
  const result = userResult.get()["result"] || "";

  return (
    <div
      className="absolute inset-0 flex h-screen flex-col items-center justify-between overflow-y-auto"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 64.4%, rgba(226, 199, 232, 0.18) 91%, rgba(239, 182, 200, 0.2) 96%)",
      }}
    >
      {result !== "" ? (
        <>
          <div className="mt-6 flex w-auto items-center justify-center gap-1.5">
            <img src={ESC.src} width={53} height={69} alt="ESC" />
            <img src={GearFest.src} width={136} height={136} alt="GearFest" />
            <img src={KNEng.src} width={53} height={53} alt="KNEng" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-[180px] w-full">
              <img
                src={Logo.src}
                alt="from Scars to Star logo"
                className="h-full min-h-[100px] w-full max-w-[404px] min-w-[200px] object-cover"
              />
            </div>
            <a
              href={`/result/${result}`}
              className="relative -translate-y-1/8 cursor-pointer"
            >
              <img
                src={ImageSrc[result].src}
                className=""
                alt="Orb"
                width={456}
                height={317}
              />
              <img
                src={Glass.src}
                className="absolute bottom-0 left-[60%]"
                alt="Magnifying glass"
                width={31}
                height={31}
              />
            </a>
            <a
              href="/story/scene0/0-1"
              style={{
                boxShadow: "0px 0px 10px 2px #E2C7E8",
                textShadow: "0px 0px 10px #E2C7E8",
              }}
              className="font-italiana rounded-full border-[2px] border-white bg-transparent px-12 py-3.5 text-2xl text-white transition-all duration-300 hover:scale-110 active:scale-105"
            >
              Try New Journey
            </a>
            <a
              href="/starboard"
              className="font-italiana mt-4 text-2xl text-[#F7DEFC] transition-all duration-300 hover:scale-110 active:scale-105"
            >
              Visit Star Board
            </a>
            <img src={Line.src} width={164} height={1} alt="line" />
          </div>
          <div className="font-judson mt-6 flex flex-col items-center justify-center gap-2.5">
            <a
              href="https://www.instagram.com/gearfestival.official/"
              className="text-judson flex gap-1.5 text-white"
            >
              <img src={Instagram.src} width={25} height={25} alt="Instagram" />
              gearfestival.official
            </a>
            <a
              href="https://www.tiktok.com/@gearfestival_official"
              className="text-judson flex gap-1.5 text-white"
            >
              <img src={Tiktok.src} width={24} height={27.5} alt="Tiktok" />
              gearfestival.official
            </a>
          </div>
          <a
            href="/what-is-gearfest"
            className="mb-4 flex w-full cursor-pointer flex-col items-center"
          >
            <p
              style={{ textShadow: "0px 0px 4px #FFFFFF" }}
              className="font-judson text-[#F7DEFC]"
            >
              What is Gear Festival?
            </p>
            <img src={ArrowDown.src} width={36} height={36} alt="ArrowDown" />
          </a>
        </>
      ) : (
        <>
          <div className="mt-16 flex w-auto items-center justify-center gap-1.5">
            <img src={ESC.src} width={53} height={69} alt="ESC" />
            <img src={GearFest.src} width={136} height={136} alt="GearFest" />
            <img src={KNEng.src} width={53} height={53} alt="KNEng" />
          </div>
          <div className="-mt-[50px] flex flex-col items-center justify-center">
            <div className="h-[280px] w-full">
              <img
                src={Logo.src}
                alt="from Scars to Star logo"
                className="h-full min-h-[100px] w-full max-w-[404px] min-w-[200px] object-cover"
              />
            </div>
            <a
              href="/story/scene0/0-1"
              style={{
                boxShadow: "0px 0px 10px 2px #E2C7E8",
                textShadow: "0px 0px 10px #E2C7E8",
              }}
              className="font-italiana rounded-full border-[2px] border-white bg-transparent px-12 py-3.5 text-2xl text-white transition-all duration-300 hover:scale-110 active:scale-105"
            >
              Start Journey
            </a>
          </div>
          <div className="font-judson flex flex-col items-center justify-center gap-2.5">
            <a
              href="https://www.instagram.com/gearfestival.official/"
              className="text-judson flex gap-1.5 text-white"
            >
              <img src={Instagram.src} width={25} height={25} alt="Instagram" />
              gearfestival.official
            </a>
            <a
              href="https://www.tiktok.com/@gearfestival_official"
              className="text-judson flex gap-1.5 text-white"
            >
              <img src={Tiktok.src} width={24} height={27.5} alt="Tiktok" />
              gearfestival.official
            </a>
          </div>
          <a
            href="/what-is-gearfest"
            className="mb-4 flex w-full cursor-pointer flex-col items-center"
          >
            <p
              style={{ textShadow: "0px 0px 4px #FFFFFF" }}
              className="font-judson text-[#F7DEFC]"
            >
              What is Gear Festival?
            </p>
            <img src={ArrowDown.src} width={36} height={36} alt="ArrowDown" />
          </a>
        </>
      )}
    </div>
  );
};

export default LandingPage;
