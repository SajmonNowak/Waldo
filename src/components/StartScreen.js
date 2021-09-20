import React, { useState } from "react";
import { Button } from "../styles/Button";
import {
  Error,
  NameInput,
  StartScreenContainer,
} from "../styles/StartScreenContainer";
import { PHASES } from "../App";

const StartScreen = ({ setPlayerName, setPhase }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const changeName = (e) => {
    if (error) {
      setError(false);
    }
    setName(e.target.value);
  };

  const submit = () => {
    setPlayerName(name);
    setPhase(PHASES.SELECTION);
  };

  const handleButton = () => {
    name.length > 0 ? submit() : setError("Please enter a name");
  };

  return (
    <StartScreenContainer>
      <div>What is your name?</div>
      <NameInput onChange={(e) => changeName(e)}></NameInput>
      <Button onClick={handleButton}>Play</Button>
      {error && <Error>{error}</Error>}
    </StartScreenContainer>
  );
};

export default StartScreen;
