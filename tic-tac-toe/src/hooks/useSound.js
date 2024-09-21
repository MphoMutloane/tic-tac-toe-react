import { useEffect, useState, useCallback } from "react";

const useSound = (url, options = {}) => {
  const [sound, setSound] = useState(null);
  const [isUserInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    // Create audio instance
    const audio = new Audio(url);
    audio.volume = options.volume || 1;
    audio.load();
    setSound(audio);

    // Listener to check for user interaction (needed for autoplay policy)
    const enableSound = () => setUserInteracted(true);
    document.addEventListener("click", enableSound, { once: true });

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("click", enableSound);
      if (sound) {
        sound.pause();
        sound.currentTime = 0;
      }
    };
  }, [url, options.volume]); // We track only `volume` in `options`

  // Use useCallback to prevent recreating the function on every render
  const playSound = useCallback(() => {
    if (isUserInteracted && sound) {
      sound.play().catch((error) => {
        console.error("Sound play error:", error);
      });
    }
  }, [isUserInteracted, sound]);

  return playSound;
};

export default useSound;
