// PullToRedirect.jsx
import React, { useState, useEffect } from "react";

const PullToRedirect = () => {
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
      if (pullDistance > 100) {
        window.location.href = "/what-is-gearfest";
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
  }, [startY, pullDistance]);

  const progress = Math.min((pullDistance / 100) * 100, 100);

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
