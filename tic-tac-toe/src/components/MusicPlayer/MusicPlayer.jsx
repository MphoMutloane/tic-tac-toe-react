import React, { useEffect, useRef, useState } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import playList from "../../utils/MusicUtils/playlist";
import { randomizeIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon, NextIcon } from "./MusicPlayer.styled";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Set volume to 0.05 whenever the component mounts or the audio changes
    if (playerRef.current) {
      playerRef.current.volume = 0.03;
    }

    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      return;
    }
    playerRef.current.pause();
  }, [isPlaying]);

  const shuffleHandler = async () => {
    if (playPromise) {
      await playPromise.catch((e) => console.error(e)); // Handle any play promise errors
      playerRef.current.pause(); // Pause current song before shuffling
    }

    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(false); // Ensure playback is stopped before shuffling
    setIsPlaying(true); // Start playing the new song
  };

  const displaySong = playList[currentSong].split("/")[6];

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon onClick={() => setIsPlaying(false)} />
      ) : (
        <PlayIcon onClick={() => setIsPlaying(true)} />
      )}

      <NextIcon onClick={shuffleHandler} />

      <audio
        ref={playerRef}
        src={playList[currentSong]}
        onEnded={shuffleHandler}
      ></audio>
      <p>{displaySong}</p>
    </MusicPlayerWrapper>
  );
}

export default MusicPlayer;
