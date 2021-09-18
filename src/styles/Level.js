import styled from 'styled-components';

export const Level = styled.div`
color: #011627;
display: flex;
align-items: center;
width: 750px;
margin: 20px;
border: 2px solid #011627;
border-radius: 20px;
background-color: #FDFFFC;

.levelImgDiv{
    width: 300px;
    height: 450px;
    border-radius: 20px;
    overflow: hidden;
} 

.levelImgDiv img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

&:hover {
    background-color: #FF9F1C;
    border-radius: 20px;
}
  
`;