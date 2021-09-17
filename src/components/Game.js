import React, { useState } from "react";
import CharSelection from "./CharSelection";
import GameImageContainer from "./GameImageContainer";
import InGameNav from "./InGameNav";
import getDBCoordinates from "../utitlis/getDBCoordinates";
import standardizePos from "../utitlis/standardizePos";

const Game = ({ levelData }) => {
  const [openModal, setModal] = useState(false);
  const [clickedPosition, setClickedPosition] = useState({
    x: null,
    y: null,
  });

  const openCharSelection = () => {
    setModal(true);
  };

  const handleSelection = (character) => {
    setModal(false);
    evaluatePosition(character);
  };

  const checkIfClickOnChar = (charCoordinates) => {
    const relClickPos = standardizePos(clickedPosition);
    console.log(charCoordinates, relClickPos);
    if (
      relClickPos.x > charCoordinates.x1 &&
      relClickPos.x < charCoordinates.x2
    ) {
      if (
        relClickPos.y > charCoordinates.y1 &&
        relClickPos.y < charCoordinates.y2
      ) {
        return true;
      }
    } else {
      return false;
    }
  };

  const evaluatePosition = async (character) => {
    const charCoordinates = await getDBCoordinates(character);
    //  if(checkIfClickOnChar(charCoordinates)){
    //    handleHit();
    //  } else {
    //    displayFail();
    //  };
  };
  
  return (
    <div style={{ position: "relative" }}>
      <InGameNav />
      <GameImageContainer
        openCharSelection={openCharSelection}
        setClickedPosition={setClickedPosition}
        levelImg={levelData.img}
      />
      {openModal && (
        <CharSelection
          clickedPosition={clickedPosition}
          handleSelection={handleSelection}
          characters={levelData.characters}
        />
      )}
    </div>
  );
};

export default Game;
