import React, { useRef, useEffect, useState } from "react";
import { Arrow2 } from "@/assets/story/scene2/arrow";
import useIsInViewport from "@/hooks/useIsInViewport";
import { navigate } from "astro:transitions/client";
interface DragScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  ImageHd: ImageMetadata;
  redirectUrl: string;
}

const DragScreen2: React.FC<DragScreenProps> = ({
  children,
  ImageHd,
  redirectUrl,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [ref, isInViewport] = useIsInViewport({ threshold: 0.1 });
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 3000);
    if (isInViewport && delay) {
      setTimeout(() => {
        navigate(redirectUrl);
      }, 1000);
    }
  }, [isInViewport]);

  return (
    <div ref={targetRef} className="relative z-10 h-screen w-[1290px]">
      {children ? children : null}
      <div className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 text-white"></div>
      <div
        ref={ref}
        className="absolute top-40 left-20 size-2 text-white"
      ></div>
      <div className="pointer-events-none fixed bottom-[20%] left-1/2 -translate-x-1/2 space-y-2 text-2xl text-white">
        <p>Drag to find more</p>
        <p className="font-mitr mb-8 text-center text-base font-light">
          เลื่อนหน้าจอดูสิ!
        </p>
        <div className="flex animate-pulse items-center justify-center">
          <Arrow2 />
        </div>
      </div>
      <img
        src={ImageHd.src}
        alt="background"
        className="absolute -z-50 h-screen w-[1290px] object-cover"
      />
    </div>
  );
};

export default DragScreen2;
