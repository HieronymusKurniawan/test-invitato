import { css } from '@emotion/react';

export default globalStyles = css`
  body,
  html {
    margin: 0;
    padding: 0;
  }

  @keyframes textPopUp {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  #teks-overlay-1,
  #teks-overlay-2,
  #teks-overlay-3,
  #teks-overlay-4,
  #teks-overlay-5,
  #pigeon {
    animation: textPopUp 1s ease-out;
    animation-fill-mode: both;
    animation-delay: 0.5s;
  }

  @font-face {
    font-family: "Jost";
    src: url("../fonts/Jost.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "ClickerScript";
    src: url("../fonts/ClickerScript.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const coverStyles = css`
  background-image: url("../images/wedding-1.jpeg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const imageContainerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const image30Styles = css`
  overflow: auto;
  height: 100vh;
  width: 55%;
  position: relative;
  left: 90%;
  z-index: 1;
  bottom: 0%;
`;

export const image70Styles = css`
  object-fit: cover;
  bottom: 0%;
  height: 100%;
  width: 63%;
  position: fixed;
  margin-right: 0.5%;
  z-index: 1;
`;

export const teksOverlayStyles = css`
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const teksOverlay1Styles = css`
  ${teksOverlayStyles}
  top: 10%;
  left: 4%;
  font-size: 18px;
  font-family: "Jost", "sans-serif";
  font-weight: 100;
  letter-spacing: 3px;
  color: #8f8784;
  z-index: 1;
`;

export const teksOverlay2Styles = css`
  ${teksOverlayStyles}
  top: 15%;
  left: 4%;
  font-size: 54px;
  font-family: "ClickerScript", "cursive";
  font-weight: bold;
  color: #67544e;
  letter-spacing: 3px;
  z-index: 1;
  margin-top: 30px;
`;

export const teksOverlay3Styles = css`
  ${teksOverlayStyles}
  top: 20%;
  left: 4%;
  font-size: 16px;
  font-family: "Jost", "sans-serif";
  font-style: italic;
  font-weight: 100;
  color: #8f8784;
  z-index: 1;
  margin-top: 80px;
  letter-spacing: 1px;
`;

export const teksOverlay4Styles = css`
  ${teksOverlayStyles}
  top: 25%;
  left: 40%;
  font-size: 14px;
  font-family: "Jost", "sans-serif";
  font-weight: 100;
  color: white;
  z-index: 1;
`;

export const teksOverlay5Styles = css`
  ${teksOverlayStyles}
  top: 26%;
  left: 34%;
  font-size: 36px;
  font-family: "ClickerScript", "cursive";
  font-weight: bold;
  color: white;
  margin-top: 30px;
  z-index: 1;
`;

export const teksOverlay6Styles = css`
  ${teksOverlayStyles}
  top: 88%;
  left: 55%;
  font-size: 15px;
  font-family: "Jost", "sans-serif";
  font-weight: 100;
  color: white;
  margin-top: 30px;
  z-index: 2;
`;

export const teksOverlay7Styles = css`
  ${teksOverlayStyles}
  top: 92%;
  left: 55%;
  font-size: 12px;
  font-family: "Jost", "sans-serif";
  font-weight: 100;
  color: white;
  margin-top: 30px;
  z-index: 2;
`;

export const pigeonStyles = css`
  position: absolute;
  top: 15%;
  left: 47%;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

export const zoomInOutStyles = css`
  @keyframes zoomInOut {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const buttonStyles = css`
  position: absolute;
  top: 70%;
  left: 40%;
  transform: translate(-50%, -50%);
  font-family: "Jost", "sans-serif";
  background-color: #a5aeb6;
  color: white;
  padding: 8px 17px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
  font-weight: 600;
  animation: ${zoomInOutStyles} 1.5s infinite alternate;

  &:hover {
    background-color: black;
    opacity: 0.5;
  }
`;


