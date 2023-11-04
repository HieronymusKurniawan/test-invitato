import React from "react";
import "../../assets/css/cover.css";
import { StaticImage } from "gatsby-plugin-image";

const LeftSectionDesktop = () => {
  return (
    <div>
      <StaticImage
        src="../../assets/images/wedding-1.jpeg"
        alt="Gambar 70%"
        className="image-70"
      />
      <div id="teks-overlay-1">THE WEDDING OF</div>
      <div id="teks-overlay-2">Nailal & Via</div>
      <div id="teks-overlay-3">
        “And I knew exactly how old Walt Disney’s Cinderella felt when she
        <br></br>found her prince.”<br></br>— Elizabeth Young
      </div>
    </div>
  );
};

export default LeftSectionDesktop;
