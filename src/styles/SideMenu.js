import styled from "styled-components";

const SideMenu = styled.div`
  margin-top: 20px;
  font-size: 32px;
  color: #011627;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 50px;
  width: 400px;
  height: auto;
  background-color: #ff9f1c;
  border-radius: 20px;

  .imgDiv {
    display: flex;
    margin-top: 20px;
  }

  .time {
      margin-top:20px;
  }
`;

export default SideMenu;
