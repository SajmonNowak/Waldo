import React, { useState } from "react";
import locnar from "../assets/locnar.jpg";
import GameImage from "../styles/GameImageCointainer";

const GameImageContainer = ({openCharSelection, setClickedPosition}) => {

  const getClickPosition = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    return { x, y };
  };

  const updateClickedPosition = ({ x, y }) => {
    setClickedPosition({xPos: x, yPos: y });
  };

  const handleClick = (e) => {
    const { x, y } = getClickPosition(e);
    updateClickedPosition({x, y});
    openCharSelection();
  };

  return <GameImage src={locnar} onClick={handleClick} />;
};

export default GameImageContainer;
