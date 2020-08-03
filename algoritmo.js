function cifrar(texto, vueltas, columnas) {
    let matrix = [];
    let index = 0;

    for(let i = 0; i < texto.length; i++) {
        if(i % Math.floor(texto.length / columnas) === 0) {
            matrix.push([]);
            index++;
        }
        if(typeof matrix[index] !== typeof([])) matrix[index] = [];
        matrix[index].push(texto[i]);
    }

    for(let l = 0; l < vueltas; l++) {
        let temp = [];
        let size = Math.sqrt(matrix[0].length);
        temp.length = matrix.length;

        for(let i = 0; i < matrix.length; i++) {
            let x = i % size;
            let y = Math.floor(i / size);

            let nX = size - y - 1;
            let nY = x;

            let nP = nY * size + nX;
            temp[nP] = matrix[i];
        }

        matrix = temp;
    }

    matrix.shift();
    return matrix;
}

module.exports = {
    cifrar
}


// Ho|la| m|un|do => 10 / 5 = 2
