import { useEffect, useRef } from "react";
import StarShare from "./StarShare";
import AddYour from "./AddYour";

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
      <div className="relative h-[1864px] w-[860px]">
        <AddYour ref={targetRef} />
        {Array.from({ length: 200 }).map((_, i) => (
          <StarShare key={i} message={`eiei ${i}`} />
        ))}
      </div>
    </div>
  );
};

export default StarPlane;
