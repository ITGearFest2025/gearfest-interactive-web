// PullToRedirect.jsx
import React, { useState, useEffect } from "react";

interface PullToRedirectProps {
  type: "up" | "down";
  redirectUrl: string;
}

const PullToRedirect: React.FC<PullToRedirectProps> = ({
  type,
  redirectUrl,
}) => {
  const [startY, setStartY] = useState(0);
  const [pullDistance, setPullDistance] = useState(0);

  useEffect(() => {
    const handleTouchStart = (e: any) => {
      setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: any) => {
      const distance = startY - e.touches[0].clientY;
      setPullDistance(distance);
    };

    const handleTouchEnd = () => {
      const threshold = 100;
      if (type === "down" && pullDistance < -threshold) {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1500);
      } else if (type === "up" && pullDistance > threshold) {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1500);
      }

      setPullDistance(0);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startY, pullDistance, type, redirectUrl]);

  return (
    <div
      style={{
        position: "absolute",
        height: "100vh",
        overflow: "hidden",
        paddingTop: "10px",
      }}
    ></div>
  );
};

export default PullToRedirect;
