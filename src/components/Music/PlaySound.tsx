import React, { useEffect, useRef } from "react";
import { Howl } from "howler";

interface PlaySoundProps {
  src: string;
  volume?: number;
}

/**
 * PlaySound Component
 *
 * A simple component that plays a sound once when the page loads.
 * Just add it to your Astro page and it will play automatically.
 *
 * @example
 * <PlaySound client:load src="/sounds/notification.mp3" volume={0.5} />
 */
const PlaySound = ({
  src,
  volume = 0.5,
}: PlaySoundProps): React.ReactElement => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Create sound only on client
    soundRef.current = new Howl({
      src: [src],
      volume: volume,
      autoplay: false,
      loop: false,
      html5: true,
    });

    // Play sound once on mount
    soundRef.current.play();

    // Clean up on unmount
    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [src, volume]);

  // No visual output
  return <></>;
};

export default PlaySound;
