import React from "react";

const MusicPlayer = () => {
  return (
    <div className="music">
      <audio controls autoPlay={true} loop={true} muted={false} preload="auto">
        <source src="../music/love-story.mp3" type="audio/mpeg" />
        <track kind="captions" src="captions.vtt" srcLang="en" label="English" />
      </audio>
    </div>
  );
};

export default MusicPlayer;
