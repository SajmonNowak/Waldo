import React from "react";
import { CharacterSymbol } from "../styles/CharacterSymbol";
import SideMenu from "../styles/SideMenu";
import cross from "../assets/cross.png";
import Timer from "./Timer";

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
      <Timer />
         </SideMenu>
  );
};

export default InGameNav;
