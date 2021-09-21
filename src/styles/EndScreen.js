import styled from "styled-components";

export const EndScreenStyle = styled.div`
  display: flex;
  color: #011627;
  background-color:  #FF9F1C;
  height: 100vh;
  padding: 50px;

  h2 {
      font-size: 42px;
  }

  .imgDiv {
    width: 30%;
    margin-left: auto;
  }

  .imgDiv img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .leftContainer {
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: center;
  }

  .personalTime{
    display: flex;
    font-size: 32px;
    margin-top: 50px;
    
     p{
       margin-left: 5px;
       color: red;
       font-weight: bold;
     }
  }

  .highScoreTable {
    justify-self: center;
    height: 500px;
    margin-top: 50px;

    h4{
      text-align: center;
      font-size: 24px;
    }

    .highscores {
      border-top: 2px solid red;
      padding-top: 10px;
    }
  }
`;
