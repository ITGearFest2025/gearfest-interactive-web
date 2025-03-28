import React from "react";
import GearFest from "@/assets/onsite/gearfest.jpg";
import GearFest2 from "@/assets/landing/gearfest_hd.webp";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="bg-opacity-50 fixed inset-0 z-50 bg-black opacity-80"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="relative flex h-[360px] w-[350px] flex-col items-center rounded-3xl border-[1px] border-white bg-[#0D023D] px-9 py-5"
          style={{ boxShadow: "0px 0px 3.625px #FFFFFF" }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-5 size-[15px] cursor-pointer font-sans text-lg font-bold text-[#7065A4] focus:outline-none"
          >
            X
          </button>
          <p className="font-taviraj text-2xl text-[#F7DEFC]">
            สำหรับผู้เข้าร่วม
          </p>
          <img
            src={GearFest2.src}
            className="h-[180px] w-[220px] object-cover"
            alt="gearfest logo"
          />
          <p className="font-taviraj -mt-4 text-center text-2xl text-white">
            ณ อุทยาน 100 ปี จุฬาฯ
          </p>
          <a
            href="https://forms.gle/GeeudQQSXQSpJkT58"
            target="_blank"
            className="font-taviraj mt-4 w-full rounded-2xl border-[1px] border-[#F7DEFC] bg-[#7065A4] py-2 text-center text-2xl text-white transition-transform duration-300 hover:scale-105"
            style={{
              boxShadow:
                "0px 0px 3.625px #FFF2A9, 0px 0px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            คลิ๊กเพื่อลงทะเบียน
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;

export const ModalForOnsite: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="bg-opacity-50 fixed inset-0 z-50 bg-black opacity-80"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="relative flex h-[360px] w-[350px] flex-col items-center justify-center rounded-3xl border-[1px] border-white bg-[#0D023D] px-9 py-5"
          style={{ boxShadow: "0px 0px 3.625px #FFFFFF" }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-5 size-[15px] cursor-pointer font-sans text-lg font-bold text-[#7065A4] focus:outline-none"
          >
            X
          </button>
          <p className="mercy-font text-center text-2xl text-white underline">
            How to Collect Memory?
          </p>
          <img
            src={GearFest.src}
            className="mt-4 h-[180px] w-[220px] object-cover"
            alt="gearfest logo"
          />
          <p className="font-taviraj mt-4 text-center text-[#F7DEFC]">
            ตามหา และ Scan QRcode สิ่งของท
            <br />
            ทั้ถูกจัดวางอยู่รอบงาน Gear Festival <br /> เพื่อสะสมเทม!!
          </p>
        </div>
      </div>
    </>
  );
};
