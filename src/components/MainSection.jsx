import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainSection.css";
import Video from "../assets/videos/video-1.MP4";

function MainSection() {
  return (
    <div className="main-container">
      <video src={Video} autoPlay loop muted />
      <h1>WELCOME</h1>
      <p>Ready to learn about Rob?</p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
