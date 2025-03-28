import ESC from "@/assets/landing/esc_hd.webp";
import GearFest from "@/assets/landing/gearfest_hd.webp";
import KNEng from "@/assets/landing/tueng_hd.webp";
import Logo from "@/assets/landing/logo.webp";
import Tiktok from "@/assets/landing/tiktok_hd.webp";
import Instagram from "@/assets/landing/ig.svg";
import ArrowDown from "@/assets/landing/arrowdown.svg";
import ArrowRight from "@/assets/landing/arrowRight.svg";
import Glass from "@/assets/landing/glass.svg";
import Loyalist from "@/assets/result/Loyalist.png";
import Achiever from "@/assets/result/Achiever.png";
import Reformer from "@/assets/result/Reformer.png";
import Helper from "@/assets/result/Helper.png";
import Challenger from "@/assets/result/Challenger.png";
import Enthusiast from "@/assets/result/Enthusiast.png";
import Individualist from "@/assets/result/Individualist.png";
import Investigator from "@/assets/result/Investigator.png";
import Peacemaker from "@/assets/result/Peacemaker.png";
import Timeless from "@/assets/landing/TimelessMemory_hd.webp";
import Starry from "@/assets/landing/StarryPlayground_hd.webp";
import Star from "@/assets/landing/star.webp";

import { userResult } from "@/stores/userResult";
import { useEffect, useState } from "react";
import Modal from "./Model";
import { userAds } from "@/stores/userAds";
import { useStore } from "@nanostores/react";

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
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(false);
  const [state, setState] = useState(0);

  useEffect(() => {
    setResult(userResult.get()["result"] || "");
    setIsModalOpen(Ads["register"] === "false");
    setStatus(true);
  }, []);

  const Ads = useStore(userAds);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (): void => setIsModalOpen(true);
  const handleCloseModal = (): void => {
    userAds.set({ register: "true" });
    setIsModalOpen(false);
  };

  const handleRight = (): void => setState((state) => (state + 1) % 3);
  const handleLeft = (): void => setState((state) => Math.min(state - 1, 0));
  return (
    <div
      className="absolute inset-0 flex h-screen flex-col items-center overflow-y-auto"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 64.4%, rgba(226, 199, 232, 0.18) 91%, rgba(239, 182, 200, 0.2) 96%)",
      }}
    >
      <div className="mt-6 flex w-full items-center justify-between px-15">
        <div className="flex items-center">
          <img
            src={GearFest.src}
            className="h-[55px] w-[70px] object-cover"
            alt="GearFest"
          />
          <img
            src={ESC.src}
            className="h-[54px] w-[34px] object-cover"
            alt="ESC"
          />
          <img
            src={KNEng.src}
            className="ml-1.5 h-[45px] w-[45px] object-cover"
            alt="KNEng"
          />
        </div>
        <button
          onClick={handleOpenModal}
          className="font-taviraj cursor-pointer text-xl text-white underline"
        >
          Register
        </button>
      </div>
      <img
        src={Logo.src}
        alt="from Scars to Star logo"
        className="h-[226px] w-[312px] object-cover"
      />
      <div className="relative flex h-[350px] w-full items-center justify-center">
        <button onClick={handleLeft}>
          <img
            src={ArrowRight.src}
            width={27}
            height={48}
            className="absolute top-1/2 left-4 -translate-y-1/2 rotate-180 cursor-pointer"
            alt="Arrow left"
          />
        </button>
        {state === 0 ? (
          <div className="flex w-full flex-col items-center justify-center">
            <img
              className="h-[300px] w-[300px] object-cover"
              src={Timeless.src}
              alt="Timeless logo"
            />
            <a
              href=""
              key="Timeless"
              style={{
                boxShadow: "0px 0px 10px 2px #E2C7E8",
                textShadow: "0px 0px 10px #E2C7E8",
              }}
              className="font-italiana w-[300px] rounded-full border-[2px] border-white bg-transparent px-12 py-3.5 text-center text-2xl text-white transition-all duration-300 hover:scale-110 active:scale-105"
            >
              Collect Memory
            </a>
            <a
              href="/onsite/inventory"
              style={{
                boxShadow: "0px 0px 10px 2px #E2C7E8",
                textShadow: "0px 0px 10px #E2C7E8",
              }}
              className="font-italiana mt-6 w-[300px] rounded-full border-[2px] border-white bg-transparent px-12 py-3.5 text-center text-2xl text-white transition-all duration-300 hover:scale-110 active:scale-105"
            >
              My Inventory
            </a>
          </div>
        ) : state === 1 ? (
          <div className="flex w-full flex-col items-center justify-center">
            <img
              key="Starry"
              className="h-[300px] w-[300px] object-cover"
              src={Starry.src}
              alt="Timeless logo"
            />
            <a
              href=""
              style={{
                boxShadow: "0px 0px 10px 2px #E2C7E8",
                textShadow: "0px 0px 10px #E2C7E8",
              }}
              className="font-italiana w-[300px] rounded-full border-[2px] border-white bg-transparent px-12 py-3.5 text-center text-2xl text-white transition-all duration-300 hover:scale-110 active:scale-105"
            >
              Custom your own <br />
              memory globe
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-start">
            {result !== "" && status ? (
              <>
                <a
                  href={`/result/${result}`}
                  className="relative -translate-y-1/8 cursor-pointer"
                >
                  <img
                    src={ImageSrc[result].src}
                    alt="Orb"
                    className="h-[300px] w-[300px] object-cover"
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
              </>
            ) : (
              <>
                <img
                  src={Star.src}
                  alt="from Scars to Star logo"
                  className="h-[300px] w-[300px] object-cover"
                />
                <a
                  href="/story/scene0/0-1"
                  style={{
                    boxShadow: "0px 0px 10px 2px #E2C7E8",
                    textShadow: "0px 0px 10px #E2C7E8",
                  }}
                  className="font-italiana mt-12 rounded-full border-[2px] border-white bg-transparent px-12 py-3.5 text-2xl text-white transition-all duration-300 hover:scale-110 active:scale-105"
                >
                  Start Journey
                </a>
              </>
            )}
          </div>
        )}
        <button onClick={handleRight}>
          <img
            src={ArrowRight.src}
            width={27}
            height={48}
            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
            alt="Arrow right"
          />
        </button>
      </div>

      <div className="mt-14">
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
          className="mt-8 flex w-full cursor-pointer flex-col items-center"
        >
          <p
            style={{ textShadow: "0px 0px 4px #FFFFFF" }}
            className="font-judson text-[#F7DEFC]"
          >
            What is Gear Festival?
          </p>
          <img src={ArrowDown.src} width={36} height={36} alt="ArrowDown" />
        </a>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      {/* {result !== "" && status ? (
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
      )} */}
    </div>
  );
};

export default LandingPage;
