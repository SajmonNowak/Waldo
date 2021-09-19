import React, { useState } from "react";
import { Button } from "../styles/Button";
import {
    Error,
  NameInput,
  StartScreenContainer,
} from "../styles/StartScreenContainer";

const StartScreen = ({setPlayerName}) => {
  const [name, setName] = useState("");
  const [error, setError] =useState(false)

  const changeName = (e) => {
    if(error){
        setError(false)
    }
    setName(e.target.value);
  };

  const submitName = () => {
      name.length > 0 ? setPlayerName(name) : setError("Please enter a name");
  }

  return (
    <StartScreenContainer>
      <div>What is you name?</div>
      <NameInput onChange={(e) =>changeName(e)}></NameInput>
      <Button onClick={submitName}>Play</Button>
      {error && <Error>{error}</Error>}
    </StartScreenContainer>
  );
};

export default StartScreen;
