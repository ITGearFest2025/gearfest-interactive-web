// audioManager.ts
import { Howl } from "howler";
import Piano from "@/assets/sound/SoftPianoVer.webm";
import MusicBox from "@/assets/sound/MusicBoxVer.webm";

class AudioManager {
  private sounds: Howl[];
  private regexs: RegExp[];
  private currentTrack: number | null = null;

  constructor() {
    this.sounds = [
      new Howl({
        src: [Piano],
        loop: true,
        autoplay: false,
        html5: true,
      }),
      new Howl({
        src: [MusicBox],
        loop: true,
        autoplay: false,
        html5: true,
      }),
    ];

    this.regexs = [
      /^\/story\/scene(1|2|3_5|4_5|6|7)\/.*/,
      /^\/story\/scene(3|4|5)\/.*/,
    ];
  }

  updatePlayer(path: string): void {
    let trackToPlay: number | null = null;

    // Find which track should play for this path
    for (let i = 0; i < this.regexs.length; i++) {
      if (this.regexs[i].test(path)) {
        trackToPlay = i;
        break;
      }
    }

    // If we're already playing the correct track, do nothing
    if (
      this.currentTrack === trackToPlay &&
      trackToPlay !== null &&
      this.sounds[trackToPlay].playing()
    ) {
      // console.log(`Already playing track ${trackToPlay}, continuing...`);
      return;
    }

    // Stop all tracks
    for (let i = 0; i < this.sounds.length; i++) {
      if (i !== trackToPlay) {
        this.sounds[i].stop();
      }
    }

    // Play the new track if one was selected
    if (trackToPlay !== null) {
      // If this is a different track than what was playing, start it
      if (!this.sounds[trackToPlay].playing()) {
        this.sounds[trackToPlay].play();
        // console.log(`Started playing track ${trackToPlay} for path: ${path}`);
      }
      this.currentTrack = trackToPlay;
    } else {
      // No track should play for this path
      this.currentTrack = null;
    }
  }

  stopAll(): void {
    this.sounds.forEach((sound) => sound.stop());
    this.currentTrack = null;
  }
}

// Create a singleton instance
const audioManager = new AudioManager();
export default audioManager;
