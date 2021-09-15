import React from "react";
import { SelectionModal } from "../styles/SelectionModal";
import characters from "../characters/characters";
import { Selectable } from "../styles/Selectable";

const CharSelection = ({ clickedPosition, handleSelection }) => {
  const createSelectables = () => {
    return characters.map((character) => {
      return (
        <Selectable onClick ={handleSelection}>
          <img src={character.img} alt={character.name}/>
          <div>{character.name}</div>
        </Selectable>
      );
    });
  };

  return (
    <SelectionModal x={clickedPosition.xPos} y={clickedPosition.yPos}>
      {createSelectables()}
    </SelectionModal>
  );
};

export default CharSelection;
