import React from "react";
import { SelectionModal } from "../styles/SelectionModal";
import characters from "../data/characters";
import { Selectable } from "../styles/Selectable";

const CharSelection = ({ clickedPosition, handleSelection }) => {
  const createSelectables = () => {
    return characters.map((character) => {
      return (
        <Selectable onClick ={(e) => handleSelection(e.currentTarget.id.toLowerCase())} id={character.name} key={character.name}>
          <img src={character.img} alt={character.name}/>
          <div>{character.name}</div>
        </Selectable>
      );
    });
  };

  return (
    <SelectionModal x={clickedPosition.x} y={clickedPosition.y}>
      {createSelectables()}
    </SelectionModal>
  );
};

export default CharSelection;
