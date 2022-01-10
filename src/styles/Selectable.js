import styled from "styled-components";

export const Selectable = styled.div`
  background-color: ${({ found }) => (found ? "grey" : "white")};
  display: flex;
  height: 80px;
  width: 100%;
  font-size: 24px;
  color: #011627;
  position: relative;

  img {
    width: 80px;
  }

  .cross {
    position: absolute;
    left: 0;
    top: 0;
  }

  div {
    align-self: center;
    margin: auto;
  }

  &:hover {
    background-color: ${({ found }) => (found ? "undefined" : "#ff9f1c")};
  }
`;
