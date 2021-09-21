import styled from "styled-components";

export const CharacterSymbol = styled.div`
  width: 100px;
  position: relative;
  font-size: 22px;

  .imgDiv {
    width: 100px;
    height: 100px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .cross {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .name {
      margin-top:10px;
    text-align: center;
  }
`;
