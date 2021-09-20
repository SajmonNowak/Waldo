import React, { useState } from "react";
import EndScreen from "./components/EndScreen";
import Game from "./components/Game";
import LevelSelection from "./components/LevelSelection";
import StartScreen from "./components/StartScreen";
import GlobalStyle from "./styles/GlobalStyle";
import addScoreToDB from "./utitlis/addScoreToDB";
const format = require("format-duration");

export const PHASES = {
  NAME: "Getting the name of User",
  SELECTION: "Selection of level",
  END: "Showing End Screen",
  PLAY: "Playing the game",
};

function App() {
  const [phase, setPhase] = useState(PHASES.END);
  const [levelData, setLevelData] = useState(null);
  const [playerName, setPlayerName] = useState();
  const [time, setTime] = useState({ start: null, end: null });

  const startLevel = (levelData) => {
    setLevelData(levelData);
    setPhase(PHASES.PLAY);
    setTime({ ...time, start: Date.now() });
  };

  const saveHighScore = (endTime) => {
    const formatTime = format(endTime - time.start);
    addScoreToDB(playerName, formatTime);
  };

  const endGame = () => {
    setPhase(PHASES.END);
    setTime({ ...time, end: Date.now() });
    saveHighScore(Date.now());
  };

  const restart = () => {
    setPhase(PHASES.SELECTION);
  };

  return (
    <div style={{ position: "relative" }}>
      <GlobalStyle />
      {phase === PHASES.NAME && (
        <StartScreen
          setPlayerName={setPlayerName}
          setPhase={setPhase}
        ></StartScreen>
      )}
      {phase === PHASES.SELECTION && (
        <LevelSelection startLevel={startLevel} playerName={playerName} />
      )}
      {phase === PHASES.PLAY && (
        <Game levelData={levelData} endGame={endGame} />
      )}
      {phase === PHASES.END && (
        <EndScreen levelData={levelData} restart={restart} time={time} />
      )}
    </div>
  );
}

export default App;
