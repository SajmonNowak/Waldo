import styled from "styled-components";

export const ProjectInfoStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 24px;

  .card {
      padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 800px;
    height: 400px;
    border-radius: 20px;
    background: #ff9f1c;

    a {
        text-decoration: none;
        color: #e71d36;
    }
  }
`;
