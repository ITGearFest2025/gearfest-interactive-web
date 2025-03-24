// src/components/Donation.jsx

import ESC from "@/assets/landing/esc_hd.webp";
import GearFest from "@/assets/landing/gearfest_hd.webp";
import KNEng from "@/assets/landing/tueng_hd.webp";
import Line from "@/assets/donation/line.svg";
import Image1 from "@/assets/donation/1_hd.webp";
import Image2 from "@/assets/donation/2_hd.webp";
import Image3 from "@/assets/donation/3_hd.webp";
import Image4 from "@/assets/donation/4_hd.webp";
import Continue from "@/assets/donation/continue.svg";

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
        <img src={ESC.src} width={43} height={59} alt="ESC" />
        <img src={GearFest.src} width={126} height={126} alt="GearFest" />
        <img src={KNEng.src} width={43} height={43} alt="KNEng" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={Line.src} alt="line" />
        <h1 className="text-2xl text-[#faf8f5]">Donation</h1>
        <img src={Line.src} alt="line" />
      </div>
      <div>
        <div className="z-10 flex items-center justify-center">
          <img
            src={Image1.src}
            width={160}
            height={120}
            alt="image of โรงเรียนบ้านต้นผึ้งอำเภอแม่ริม จังหวัดเชียงใหม่"
          />
          <img
            className="-ml-[5px]"
            src={Image2.src}
            width={160}
            height={120}
            alt="image of โรงเรียนบ้านต้นผึ้งอำเภอแม่ริม จังหวัดเชียงใหม่"
          />
        </div>
        <div className="z-0 -mt-[15px] flex items-center justify-center">
          <img
            className="z-10"
            src={Image3.src}
            width={160}
            height={120}
            alt="image of โรงเรียนบ้านต้นผึ้งอำเภอแม่ริม จังหวัดเชียงใหม่"
          />
          <img
            className="-ml-[15px]"
            src={Image4.src}
            width={160}
            height={120}
            alt="image of โรงเรียนบ้านต้นผึ้งอำเภอแม่ริม จังหวัดเชียงใหม่"
          />
        </div>
      </div>
      <div className="font-taviraj flex flex-col p p-2 gap-3 text-center text-xs text-[#faf8f5]">
        <div className="text-[15px]">
          ร่วมสมทบทุนโรงเรียนบ้านต้นผึ้งอำเภอแม่ริม จังหวัดเชียงใหม่ <br />
          ในการสนับสนุนงบประมาณดำเนินการซ่อมแชม
          <br />
          และปรับปรุงอาคารเรียนอนุบาล พร้อมทั้งพัฒนาสนามเด็กเล่น
          <br />
          เพื่อเสริมสร้างพัฒนาการเด็กประถมวัย
        </div>
        <a
          href="https://drive.google.com/file/d/18kJLxOB-NkQyJQWABp93SqEq4mUf6j6n/view?usp=sharing"
          className="text-[14px] italic underline underline-offset-2"
          target="_blank"
        >
          คลิ๊กเพื่ออ่านรายละเอียดเพิ่มเติม
        </a>
        <p className="text-[15px]">
          <span className="text-[15px] underline underline-offset-2">
            *หมายเหตุ
          </span>{" "}
          สามารถลดหย่อนภาษีได้ 2 เท่า
          <br />       <br />
          ทางโครงการจะส่งใบเสร็จและใบ E-Donation ให้ภายหลังจบโครงการผ่าน E-mail ที่ได้ทำการกรอกมา
        </p>
      </div>
      <a
        href="/donation/payment"
        className="relative flex h-fit w-full items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-100"
      >
        <p
          className="font-italina w-full px-7 py-6 text-center text-xl text-[#faf8f5]"
          style={{
            textShadow: "0px 0px 4px #FFFFFF",
          }}
        >
          Continue
        </p>
        <img
          src={Continue.src}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="continue button"
        />
      </a>
    </div>
  );
};

export default Donation;
