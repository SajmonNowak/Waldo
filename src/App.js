import React, { useState } from "react";
import CharSelection from "./components/CharSelection";
import GameImageContainer from "./components/GameImageContainer";
import db from "./firebase/firebase";

function App() {
  const [openModal, setModal] = useState(false);
  const [clickedPosition, setClickedPosition] = useState({
    xPos: null,
    yPos: null,
  });

  const openCharSelection = () => {
    setModal(true);
  };

  const handleSelection = () => {
    setModal(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <GameImageContainer
        openCharSelection={openCharSelection}
        setClickedPosition={setClickedPosition}
      />
      {openModal && (
        <CharSelection
          clickedPosition={clickedPosition}
          handleSelection={handleSelection}
        />
      )}
    </div>
  );
}

export default App;
