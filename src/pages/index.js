import * as React from "react";
import { Link } from "gatsby";
import "../css/cover.css";
import { StaticImage } from "gatsby-plugin-image";

const CoverPage = () => (
  <div className="cover">
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
      <div className="image-30">
        <StaticImage src="../images/wedding-1.jpeg" alt="Gambar 30%" className="image-mobile"/>
        <div id="pigeon">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            color="#fff"
            height="60px"
            width="60px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M372 22.41c-6.4 33.89 6.8 54.39 32.6 66.3 4.6 8.17 8.4 16.29 11.4 24.39-15.3-17.02-33.3-25.31-58-13.12 14.1 27.62 35.6 32.42 61.5 23.42 6.2 21 7.7 41.6 6.3 62.4 0 .2 0 .4-.1.6 1 .6 2 1.1 2.9 1.7 4.9 2.9 9.7 5.9 14.3 8.9.4-3.3.7-6.7.9-10 1.2-17.6.4-35.4-3.3-53.5 26.8 5.1 43-8.6 52.8-33.62-24.2-2.6-44.9 1.22-55.3 22.92-2.6-9.4-6-18.9-10.3-28.46 23.7-15.85 37.7-36.07 26-67.62-22.5 8.53-33.5 22.13-36.3 39.47C412.8 44.33 400.3 28 372 22.41zM190.7 62.63C183.4 82.89 176.4 110 172 136.8c-3.2 19.9-5.3 39.7-5.7 56.9 30.4 25.9 63.3 44.6 99.8 46.3-33.2-52.5-63-120-75.4-177.37zM56.82 102.2c3.08 75.4 32.03 178.7 110.68 233.2l5.5 3.8-2 6.3c-3.2 10.1-7.8 19-15 25.8-7.3 6.8-16.9 11.2-28.7 13.3-22.5 4-54.14.8-101.89-7.7-9.6 24.1-8.29 50.6.43 72.1 8.72 21.3 24.29 36.6 42.1 40.6 24.85-31.8 62.26-70.4 113.56-68.1 52 2.3 111.5-12.1 146.9-47.6 12.5-12.4 23.2-42.3 29.4-68.6 6.2-26.3 8.7-49 8.7-49l.6-6.1 6-1.6c21.6-5.6 47.6-10.7 76.7-25.4-8.6-5.8-18.7-12.6-30.4-19.6-17.9-10.6-37.6-19.8-47.3-20.9-16.6-1.7-26 1.3-32.5 6.1-6.4 4.8-10.6 12.2-14.3 21.1-3.6 8.9-6.4 19-11.4 28.1-5.1 9.2-14 17.8-26.8 19.2-56 6.5-103.8-22.9-143.9-60.1-33-30.6-61.58-66.8-86.38-94.9zm376.08 148c-7.1 2.6-13.9 4.9-20.4 6.8-1.8 6.9-3.7 13.8-5.6 20.7l17.4 4.8c3-10.7 5.9-21.5 8.6-32.3z"></path>
          </svg>
        </div>
        <div id="teks-overlay-4">THE WEDDING OF</div>
        <div id="teks-overlay-5">Nailal and Via</div>
        <Link to="/welcoming">
          <button className="button">✉️ Open Invitation</button>
        </Link>
        <div id="teks-overlay-6">Created with 🤍 by Hieronymus</div>
        <div id="teks-overlay-7">© 2023 Nailal & Via. All Rights Reserved</div>
      </div>
    </div>
  </div>
);

export default CoverPage;

export const Head = () => (
  <title>The Wedding of ... and ... by Hieronymus Kurniawan</title>
);
