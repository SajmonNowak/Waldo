import styled from "styled-components";

export const SelectionModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 210px;
  background-color: #fdfffc;
  left: ${(p) => (p.side === "right" ? p.x + "px" : p.x - 270 + "px")};
  top: ${(p) => p.y - 105 + "px"};
  border: 2px solid black;
`;
