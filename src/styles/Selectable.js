import styled from 'styled-components';

export const Selectable = styled.div`
background-color: white;
  display: flex;
  height: 80px;
  width: 100%;
  font-size: 24px;
  color: #011627;

  img{
      width: 80px;
  }

  div {
      align-self: center;
      margin: auto;
  }

  &:hover {
      background-color: #FF9F1C;
  }

`;