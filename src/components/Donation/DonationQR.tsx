// src/components/Donation.jsx

import React from "react";
import ESC from "@/assets/landing/esc_hd.webp";
import GearFest from "@/assets/landing/gearfest_hd.webp";
import KNEng from "@/assets/landing/tueng_hd.webp";
import Line from "@/assets/donation/line.svg";
import DonationQR from "@/assets/donation/QR_hd.webp";
import PullToRedirect from "@/components/Landing/PullToRedirect";
import { CheckResultDonation } from "@/components/CheckResult";
import Continue from "@/assets/donation/continue.svg";

const Donation = () => {
  return (
    <div
      className="overflow-y-h absolute inset-0 flex h-screen flex-col items-center justify-evenly overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 64.4%, rgba(226, 199, 232, 0.18) 91%, rgba(239, 182, 200, 0.2) 96%)",
      }}
    >
      <div className="flex w-auto items-center justify-center gap-1.5">
        <img src={ESC.src} width={53} height={69} alt="ESC" />
        <img src={GearFest.src} width={136} height={136} alt="GearFest" />
        <img src={KNEng.src} width={53} height={53} alt="KNEng" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={Line.src} alt="line" />
        <h1 className="text-3xl text-[#faf8f5]">Donation</h1>
        <img src={Line.src} alt="line" />
      </div>
      <img
        src={DonationQR.src}
        className="w-full px-16 py-6"
        alt="QR code donate for gear festival 2025"
      />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdgE8kO0EU7MxFbD_lF8Rc7f0M6oOLMJn2MBsEqkli73hk6Yw/viewform"
        target="_blank"
        className="relative flex h-fit w-full items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-100"
      >
        <p
          className="font-taviraj w-full px-7 py-6 text-center text-xl text-[#faf8f5]"
          style={{
            textShadow: "0px 0px 4px #FFFFFF",
          }}
        >
          ลดหย่อนภาษี
        </p>
        <img
          src={Continue.src}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="continue button"
        />
      </a>
      <div className="w-full">
        <CheckResultDonation />
      </div>
      <PullToRedirect type="left" redirectUrl="/what-is-gearfest" />
      <PullToRedirect type="right" redirectUrl="/starboard" />
    </div>
  );
};

export default Donation;
