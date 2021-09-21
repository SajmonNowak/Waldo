import styled from "styled-components";

export const CharacterSymbol = styled.div`
  width: 100px;
  position: relative;
  font-size: 22px;

  .imgDiv {
    position: relative;
    width: 100px;
    height: 100px;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .cross {
    width: 100%;
    height: 100%;
    position: absolute;
    top:0px;
    left: 0px;
  }

  .name {
      margin-top:10px;
    text-align: center;
  }
`;
