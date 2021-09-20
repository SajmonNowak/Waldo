import styled from 'styled-components';
import background from "../assets/background.jpg"

export const StartScreenContainer= styled.div`
font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(${background}) blue;
  color: #011627;
  font-weight: bold;
`;

export const NameInput = styled.input`
margin-top: 40px;
margin-bottom: 20px;
  width: 400px;
  height: 60px;
  font-size: 24px;
`;

export const Error = styled.div`
font-size: 24px;
margin-top: 10px;
color: #e71d36
  
`;