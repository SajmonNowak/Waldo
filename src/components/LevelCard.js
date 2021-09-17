import React from "react";
import { Level } from "../styles/Level";
import { Character } from "../styles/Character";

const LevelCard = ({ levelData, startLevel }) => {
  const createCharacters = () => {
    return levelData.characters.map((character) => {
      return (
        <Character key={character.name}>
          <img src={character.img} alt={character.name}/>
          <div>{character.name}</div>
        </Character>
      );
    });
  };

  return (
    <Level onClick ={() => startLevel(levelData)}>
      <div className="levelImgDiv">
        <img src={levelData.img} alt={levelData.name} />
      </div>
      <div>{createCharacters()}</div>
    </Level>
  );
};

export default LevelCard;
