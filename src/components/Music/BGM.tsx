// BGM.tsx
import React, { useEffect } from "react";
import audioManager from "./audioManager";

const BGM = (): React.JSX.Element => {
  useEffect(() => {
    // Initial play
    audioManager.updatePlayer(window.location.pathname);

    // Setup listener for page transitions
    const handleRouteChange = () => {
      audioManager.updatePlayer(window.location.pathname);
    };

    // For Astro View Transitions
    document.addEventListener("astro:page-load", handleRouteChange);

    // Cleanup
    return () => {
      document.removeEventListener("astro:page-load", handleRouteChange);
    };
  }, []);

  return <></>;
};

export default BGM;
