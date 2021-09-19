import React from "react";
import { EndScreenStyle } from "../styles/EndScreen";
import locnar from "../assets/locnar.jpg";
import { Button } from "../styles/Button";
const format = require('format-duration')

const EndScreen = ({ restart, levelData, time }) => {
  const getPlayerTime = () => {
    return format(time.end - time.start);
  };

  return (
    <EndScreenStyle>
      <div className="leftContainer">
        <h2>Good Job! You found every character!</h2>

        <div className="personalTime">Your time was: {getPlayerTime()}</div>
        <div className="highScoreTable">

        </div>
        <Button onClick={restart}>Restart</Button>
      </div>
      <div className="imgDiv">
        <img src={locnar} />
      </div>
    </EndScreenStyle>
  );
};

export default EndScreen;
