// src/components/Donation.jsx

import React from "react";
import ESC from "@/assets/landing/esc.svg";
import GearFest from "@/assets/landing/gearfest.svg";
import KNEng from "@/assets/landing/kneng.svg";
import Line from "@/assets/donation/line.svg";
import DonationQR from "@/assets/donation/QR_hd.webp";
import PullToRedirect from "@/components/Landing/PullToRedirect";
import { CheckResultDonation } from "@/components/CheckResult";

const Donation = () => {
  return (
    <div
      className="absolute inset-0 flex h-screen flex-col items-center justify-evenly overflow-x-hidden overflow-y-auto"
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
        width={220}
        height={270}
        alt="QR code donate for gear festival 2025"
      />
      <div className="font-taviraj flex flex-col gap-3 text-center text-[#faf8f5]">
        <p className="text-[15px]">
          ร่วมสมทบทุนโรงเรียนบ้านต้นผึ้งอำเภอแม่ริม จังหวัดเชียงใหม่ <br />
          ในการสนับสนุนงบประมาณดำเนินการซ่อมแชม
          <br />
          และปรับปรุงอาคารเรียนอนุบาล พร้อมทั้งพัฒนาสนามเด็กเล่น
          <br />
          เพื่อเสริมสร้างพัฒนาการเด็กประถมวัย
        </p>
        <a
          href="https://drive.google.com/file/d/18kJLxOB-NkQyJQWABp93SqEq4mUf6j6n/view?usp=sharing"
          className="text-[14px] italic underline underline-offset-2"
          target="_blank"
        >
          คลิ๊กเพื่ออ่านรายละเอียดเพิ่มเติม
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdgE8kO0EU7MxFbD_lF8Rc7f0M6oOLMJn2MBsEqkli73hk6Yw/viewform"
          target="_blank"
        >
          <span className="text-[16px] underline underline-offset-2">
            คลิ๊กเพื่อกรอกฟอร์มสำหรับรับใบเสร็จลดหย่อนภาษี
          </span>{" "}
        </a>
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
