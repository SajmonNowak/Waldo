import styled from 'styled-components';

export const SelectionModal = styled.div`
  position:absolute;
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 210px;
  background-color: #FDFFFC;
  left: ${p => p.x+"px"};
  top: ${p => p.y-105+"px"};
  border: 2px solid black;
`;