import styled from "styled-components";

const SideMenu = styled.div`
  margin-top: 20px;
  font-size: 32px;
  color: ${({open}) => open ? "#011627" : "#ff9f1c"};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 50px;
  width: 300px;
  height: auto;
  border: 2px solid #ff9f1c;
  border-radius: 20px;
  padding: 5px;
  background-color: ${({open}) => open ? "#ff9f1c" : ""};

  .imgDiv {
    display: flex;
    margin-top: 10px;
  }

  .time {
    margin-left: 40px;
      color: #e71d36;
  }

  .closedMenu {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 28px;
    margin-right: 10px;
  }

  .togglePart {
    background-color: "red";
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .infoText {
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 18px;
  }
`;

export default SideMenu;
