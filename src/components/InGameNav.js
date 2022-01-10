import React from "react";
import { CharacterSymbol } from "../styles/CharacterSymbol";
import SideMenu from "../styles/SideMenu";
import cross from "../assets/cross.png";
import TimerComponent from "./Timer";
import useToggle from "../hooks/useToggle";
import { BsChevronDoubleDown as OpenIcon } from "react-icons/bs";
import { BsChevronDoubleUp as CloseIcon } from "react-icons/bs";

const InGameNav = ({ levelData, wantedCharacters }) => {
  const [open, toggle] = useToggle(true);

  const checkIfFound = (character) => {
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
          <div className="imgDiv">
            <img src={character.img} />
            {checkIfFound(character.name.toLowerCase()) && (
              <img src={cross} alt="found" />
            )}
          </div>
          <div className="name">{character.name}</div>
        </CharacterSymbol>
      );
    });
  };

  return (
    <SideMenu open={open}>
      <div className="closedMenu" onClick={toggle}>
        {!open ? <OpenIcon className="icon" /> : <CloseIcon className="icon" />}
        <div>Wanted</div>
        <div className="time">
          <TimerComponent />
        </div>
      </div>
      {open && (
        <div className="togglePart">
          <div onClick={toggle} className="imgDiv">
            {createCharList()}
          </div>
          <p className="infoText">Click to close</p>
        </div>
      )}
    </SideMenu>
  );
};

export default InGameNav;
