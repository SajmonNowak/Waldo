import React from "react";
import {EndScreenStyle} from "../styles/EndScreen"

const EndScreen = ({ restart, levelData }) => {
  return (
    <EndScreenStyle>
      <div>
        <h2>Good Job! You found every character!</h2>

        <div>Your time was: </div>
        <div>Highscore 1</div>
        <div>Highscore 2</div>
        <div>Highscore 3</div>
        <button onClick={restart}>Restart</button>
      </div>
      <div className="imgDiv">
          {/* <img src={levelData.img}/> */}
      </div>
    </EndScreenStyle>
  );
};

export default EndScreen;
