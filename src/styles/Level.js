import styled from 'styled-components';

export const Level = styled.div`

display: flex;
align-items: center;
width: 750px;
margin: 20px;
border: 2px solid black;
border-radius: 20px;

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
    border: 5px solid gold;
    border-radius: 20px;
}
  
`;