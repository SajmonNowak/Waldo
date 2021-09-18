import React, { useState } from "react";
import EndScreen from "./components/EndScreen";
import Game from "./components/Game";
import LevelSelection from "./components/LevelSelection";


const PHASES = {
  START : "start",
  END : "end",
  PLAY : "play"
}

function App() {
  const [phase, setPhase] = useState("end")
  const [levelData, setLevelData] = useState(null)

  const startLevel = (levelData) => {
    setLevelData(levelData)
    setPhase(PHASES.PLAY)
  }

  const endGame = () => {
    setPhase(PHASES.END);
  }

  const restart = () => {
    setPhase(PHASES.START);
  }

  return (
    <div style={{ position: "relative" }}>
      {phase === PHASES.START && <LevelSelection startLevel={startLevel} />}
      {phase === PHASES.PLAY && <Game levelData={levelData} endGame={endGame}/>}
      {phase === PHASES.END && <EndScreen levelData={levelData} restart={restart}/>}
    </div>
  );
}

export default App;
