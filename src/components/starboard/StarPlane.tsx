import { useEffect, useRef } from "react";
import StarShare from "./StarShare";

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
    <div className="absolute inset-0 overflow-auto bg-[#17153B]">
      <div ref={targetRef} className="h-[1864px] w-[860px]">
        {Array.from({ length: 200 }).map((_, i) => (
          <StarShare message={`eiei ${i}`} />
        ))}
      </div>
    </div>
  );
};

export default StarPlane;
