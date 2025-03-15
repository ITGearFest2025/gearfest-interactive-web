import React, { useRef, useEffect, useState } from "react";
import Arrow from "@/assets/story/scene2/arrow";
import useIsInViewport from "@/hooks/useIsInViewport";
import { navigate } from "astro:transitions/client";
interface DragScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  ImageHd: ImageMetadata;
  redirectUrl: string;
}

const DragScreen: React.FC<DragScreenProps> = ({
  children,
  ImageHd,
  redirectUrl,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [ref, isInViewport] = useIsInViewport({ threshold: 0.1 });
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);

  useEffect(() => {
    if (isInViewport) {
      setTimeout(() => {
        navigate(redirectUrl);
      }, 1000);
    }
  }, [isInViewport]);

  return (
    <div ref={targetRef} className="relative h-screen w-[860px]">
      {children ? children : null}
      <div className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 text-white"></div>
      <div
        ref={ref}
        className="absolute top-40 right-20 size-2 text-white"
      ></div>
      <div className="fixed bottom-[20%] left-1/2 -translate-x-1/2 space-y-2 text-2xl text-white">
        <p>Drag to find more</p>
        <div className="animate-pulse">
          <Arrow />
        </div>
      </div>
      <img
        src={ImageHd.src}
        alt="background"
        className="absolute -z-50 h-screen w-[860px] object-cover"
      />
    </div>
  );
};

export default DragScreen;
