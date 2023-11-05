import React, { useEffect, useRef } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.src = "../../music/love-story.mp3";
    audioRef.current.autoplay = true;
    audioRef.current.loop = true;
  }, []);

  return (
    <div>
      <audio ref={audioRef} controls style={{ display: "none" }}></audio>
    </div>
  );
};

export default MusicPlayer;
