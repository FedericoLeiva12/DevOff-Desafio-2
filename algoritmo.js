function genMatrix(str, columnSize) {
    let res = [];
    let columns = Math.ceil(str.length / columnSize);

    for(let i = 0; i < columns; i++) {
        let filler = new Array(columnSize).fill(' ');
        let col = [...str.split('').slice(i * columnSize, i * columnSize + columnSize), ...filler];
        col = col.slice(0, columnSize);
        res = [...res, col];
    }

    return res;
}

function rotateMatrix(matrix) {
    let res = [];

    for(let i = 0; i < matrix[0].length; i++) {
        res.push([])
        for(let l = 0; l < matrix.length; l++) {
            res[i].push(matrix[l][i])
        }
    }
    return res;
}

function matrixToStr(matrix) {
    let res = '';
    for(let i = 0; i < matrix.length; i++) {
        for(let l = 0; l < matrix[i].length; l++) {
            res = res + matrix[i][l];
        }
    }

    return res;
}

function genRotatedMatrix(str, columnSize) {
    let realColumnSize = Math.ceil(str.length / columnSize);
    return genMatrix(str, realColumnSize);
}

module.exports = {
    genMatrix,
    genRotatedMatrix,
    rotateMatrix,
    matrixToStr
};