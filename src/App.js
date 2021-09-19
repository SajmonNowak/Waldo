import React, { useState } from "react";
import EndScreen from "./components/EndScreen";
import Game from "./components/Game";
import LevelSelection from "./components/LevelSelection";
import StartScreen from "./components/StartScreen";
import GlobalStyle from "./styles/GlobalStyle";

const PHASES = {
  NAME: "Getting the name of User",
  SELECT: "Selection of level",
  END: "Showing End Screen",
  PLAY: "Playing the game",
};

function App() {
  const [phase, setPhase] = useState(PHASES.NAME);
  const [levelData, setLevelData] = useState(null);
  const [playerName, setPlayerName] = useState();
  const [time, setTime] = useState({start:null, end:null})

  const startLevel = (levelData) => {
    setLevelData(levelData);
    setPhase(PHASES.PLAY);
    setTime({...time, start:Date.now()})
  };

  const endGame = () => {
    setPhase(PHASES.END);
    setTime({ ...time, end: Date.now() });
  };

  const restart = () => {
    setPhase(PHASES.SELECTION);
  };

  return (
    <div style={{ position: "relative" }}>
      <GlobalStyle />
      {phase === PHASES.NAME && <StartScreen setPlayerName = {setPlayerName}></StartScreen>}
      {phase === PHASES.SELECTION && <LevelSelection startLevel={startLevel} />}
      {phase === PHASES.PLAY && (
        <Game levelData={levelData} endGame={endGame} />
      )}
      {phase === PHASES.END && (
        <EndScreen levelData={levelData} restart={restart} time={time}/>
      )}
    </div>
  );
}

export default App;
