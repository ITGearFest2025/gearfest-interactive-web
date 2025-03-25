// src/components/Donation.jsx

import jar from "@/assets/donation/jar.webp";
import PullToRedirect from "@/components/Landing/PullToRedirect";
import { CheckResultDonation } from "@/components/CheckResult";

const Donation = () => {
  return (
    <div
      className="overflow-y-h absolute inset-0 flex h-screen flex-col items-center justify-evenly overflow-x-hidden pt-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 64.4%, rgba(226, 199, 232, 0.18) 91%, rgba(239, 182, 200, 0.2) 96%)",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1
          className="font-bethellen text-2xl text-[#faf8f5]"
          style={{ textShadow: "0px 0px 4px #FFFFFF, 0px 0px 8px #FFFFFF" }}
        >
          Donation
        </h1>
      </div>
      <div className="relative flex w-full items-center justify-center">
        <img
          src={jar.src}
          className="w-full"
          alt="QR code donate for gear festival 2025"
        />
        <p
          className="font-petit absolute bottom-[30%] text-center text-2xl font-bold text-white"
          style={{ textShadow: "0px 0px 4px #000000, 0px 0px 8px #000000" }}
        >
          12345
        </p>
      </div>
      <a
        href="/donation/payment"
        className="font-taviraj mx-4 block rounded-[50px] p-4 px-10 text-center text-xl text-white no-underline"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at center 30%, rgba(217,217,217,0) 25%, rgba(255,255,255,0.55) 100%)",
          backdropFilter: "blur(2px)",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Donate here!
      </a>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1
          className="font-bethellen text-2xl text-[#faf8f5]"
          style={{ textShadow: "0px 0px 4px #FFFFFF, 0px 0px 8px #FFFFFF" }}
        >
          for charity
        </h1>
      </div>
      <div className="w-full">
        <CheckResultDonation />
      </div>
      <PullToRedirect type="left" redirectUrl="/what-is-gearfest" />
      <PullToRedirect type="right" redirectUrl="/starboard" />
    </div>
  );
};

export default Donation;
