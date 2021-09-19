import styled from "styled-components";

export const EndScreenStyle = styled.div`
  display: flex;
  color: #011627;
  background-color:  #FF9F1C;
  height: 100vh;

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
    font-size: 32px;
    margin-top: 50px;
    background-color: white ;
  }
`;
