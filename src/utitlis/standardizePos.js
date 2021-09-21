
const standardizePos = ({x, y}) => {
    const standardX = standardize(x);
    const standardY = standardize(y);

    return {x: standardX, y: standardY};
}

const standardize = (coord) => {
    const imageWidth = document.body.clientWidth;
    const standardizedCoord = Math.ceil((coord * 1000) / imageWidth);

    return standardizedCoord;
}

export default standardizePos;