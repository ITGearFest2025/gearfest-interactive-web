// PullToRedirect.jsx
import React, { useState, useEffect } from "react";

interface PullToRedirectProps {
  type: "up" | "down" | "left" | "right"; // Determines swipe direction
  redirectUrl: string; // URL to redirect to when pull distance is exceeded
}

const PullToRedirect: React.FC<PullToRedirectProps> = ({
  type,
  redirectUrl,
}) => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [pullDistanceX, setPullDistanceX] = useState(0);
  const [pullDistanceY, setPullDistanceY] = useState(0);

  useEffect(() => {
    const handleTouchStart = (e: any) => {
      setStartX(e.touches[0].clientX);
      setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: any) => {
      const distanceX = e.touches[0].clientX - startX;
      const distanceY = startY - e.touches[0].clientY;
      setPullDistanceX(distanceX);
      setPullDistanceY(distanceY);
    };

    const handleTouchEnd = () => {
      const threshold = 100;

      // Check swipe direction and distance to trigger redirect
      if (type === "down" && pullDistanceY > threshold) {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1500);
      } else if (type === "up" && pullDistanceY < -threshold) {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1500);
      } else if (type === "left" && pullDistanceX > threshold) {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1500);
      } else if (type === "right" && pullDistanceX < -threshold) {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1500);
      }

      setPullDistanceX(0);
      setPullDistanceY(0);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startX, startY, pullDistanceX, pullDistanceY, type, redirectUrl]);

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
