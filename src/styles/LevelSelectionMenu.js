import styled from 'styled-components';
import background from "../assets/background.jpg"

export const LevelSelectionMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${background}) blue;
    color: #011627;
    font-size: 24px;
    padding: 50px;

    h2 {
        font-size: 42px;
    }

    .marginBot {
        margin-bottom: 20px;
    }
`;
