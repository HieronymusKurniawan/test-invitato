import React from "react";
import "../css/cover.css";
import { StaticImage } from "gatsby-plugin-image";
import MusicPlayer from "./music";


const WelcomingPage = () => {
  return (
    <div className="cover">
      <MusicPlayer/>
      <div className="image-container">
        <StaticImage
          src="../images/wedding-1.jpeg"
          alt="Gambar 70%"
          className="image-70"
        />
        <div id="teks-overlay-1">THE WEDDING OF</div>
        <div id="teks-overlay-2">Nailal & Via</div>
        <div id="teks-overlay-3">
          “And I knew exactly how old Walt Disney’s Cinderella felt when she
          <br></br>found her prince.”<br></br>— Elizabeth Young
        </div>
        <div className="image-welcoming">
          <StaticImage
            src="../images/wedding-2.jpeg"
            alt="Gambar 30%"
            className="image-mobile"
          />
          <StaticImage
            src="../images/cover-wedding-3.jpeg"
            alt="Gambar 30%"
            className="image-mobile"
            style={{ width: "100%", height:"70%"}}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomingPage;

export const Head = () => (
  <title>The Wedding of ... and ... by Hieronymus Kurniawan</title>
);
