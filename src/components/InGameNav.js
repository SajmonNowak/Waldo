import React from "react";
import { CharacterSymbol } from "../styles/CharacterSymbol";
import SideMenu from "../styles/SideMenu";
import cross from "../assets/cross.png";

const InGameNav = ({ levelData, wantedCharacters }) => {
  const checkIfFound = (character) => {
    console.log(character);
    if (wantedCharacters.some((char) => char === character)) {
      return false;
    } else {
      return true;
    }
  };

  const createCharList = () => {
    return levelData.characters.map((character) => {
      return (
        <CharacterSymbol>
          <img src={character.img} />
          {checkIfFound(character.name.toLowerCase()) && (
            <img src={cross} alt="found" />
          )}
        </CharacterSymbol>
      );
    });
  };

  return (
    <SideMenu>
      <div>Wanted</div>
      <div className="imgDiv">{createCharList()}</div>
      <div>Time</div>
    </SideMenu>
  );
};

export default InGameNav;
