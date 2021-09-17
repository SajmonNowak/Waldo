import React, { useState } from "react";
import locnar from "../assets/locnar.jpg";
import GameImage from "../styles/GameImageCointainer";

const GameImageContainer = ({ openCharSelection, setClickedPosition, levelImg }) => {
  const getClickPosition = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    return { x, y };
  };

  const updateClickedPosition = (clickCoordinate) => {
    setClickedPosition({ x: clickCoordinate.x, y:clickCoordinate.y });
  };

  const handleClick = (e) => {
    const clickCoordinate = getClickPosition(e);
    updateClickedPosition(clickCoordinate);
    openCharSelection();
  };

  return <GameImage src={levelImg} onClick={handleClick} />;
};

export default GameImageContainer;
