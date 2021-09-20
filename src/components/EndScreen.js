import React from "react";
import { EndScreenStyle } from "../styles/EndScreen";
import locnar from "../assets/locnar.jpg";
import { Button } from "../styles/Button";
import useFirestore from "../hooks/useFirestore";
import { HighScore } from "../styles/HighScore";
const format = require("format-duration");

const EndScreen = ({ restart, levelData, time }) => {
  const [highScoreData, setHighScoreData] = useFirestore("highscores");

  const getPlayerTime = () => {
    return format(time.end - time.start);
  };

  const getHighScores = () => {
    console.log(highScoreData);
    return highScoreData.map((score) => {
      return (
        <HighScore>
          <div className="name">{score.name}</div>
          <div className="time">{score.time}</div>
        </HighScore>
      );
    });
  };

  return (
    <EndScreenStyle>
      <div className="leftContainer">
        <h2>Good Job! You found every character!</h2>

        <div className="personalTime">Your time was: <p>{getPlayerTime()}</p></div>
        {highScoreData && (
          <div className="highScoreTable">
          <h4>Best Times </h4>
            <div className="highscores">
            {getHighScores()}
            </div>
          </div>
        )}
        <Button onClick={restart}>Restart</Button>
      </div>
      <div className="imgDiv">
        <img src={locnar} />
      </div>
    </EndScreenStyle>
  );
};

export default EndScreen;
