import React, { useState } from "react";
import Game from "./components/Game";
import LevelSelection from "./components/LevelSelection";

function App() {
  const [levelData, setLevelData] = useState(null)

  const startLevel = (levelData) => {
    setLevelData(levelData)
  }

  return (
    <div style={{ position: "relative" }}>
      {!levelData && <LevelSelection startLevel={startLevel} />}
      {levelData && <Game levelData={levelData}/>}
    </div>
  );
}

export default App;
