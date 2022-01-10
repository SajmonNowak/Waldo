import React from "react";
import { SelectionModal } from "../styles/SelectionModal";
import { Selectable } from "../styles/Selectable";
import cross from "../assets/cross.png";

const CharSelection = ({
  clickedPosition,
  handleSelection,
  characters,
  wantedCharacters,
}) => {
  const checkIfFound = (selectable) => {
    if (wantedCharacters.some((char) => char === selectable)) {
      return false;
    } else {
      return true;
    }
  };

  const displayOnLeftOrRight = () => {
    return clickedPosition.x > window.innerWidth / 2 ? "left" : "right";
  };

  const createSelectables = () => {
    return characters.map((character) => {
      return (
        <Selectable
          onClick={(e) => handleSelection(e.currentTarget.id.toLowerCase())}
          id={character.name}
          key={character.name}
          found={checkIfFound(character.name.toLowerCase())}
        >
          <img src={character.img} alt={character.name} />
          <div>{character.name}</div>
          {checkIfFound(character.name.toLowerCase()) && (
            <img className="cross" src={cross} alt="found" />
          )}
        </Selectable>
      );
    });
  };

  return (
    <SelectionModal
      x={clickedPosition.x}
      y={clickedPosition.y}
      side={displayOnLeftOrRight()}
    >
      {createSelectables()}
    </SelectionModal>
  );
};

export default CharSelection;
