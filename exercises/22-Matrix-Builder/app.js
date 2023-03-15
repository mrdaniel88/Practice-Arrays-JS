// Code goes here
function matrixBuilder(number) {
    const matrix = new Array(number).fill().map(() => new Array(number).fill());

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            matrix[i][j] = Math.floor(Math.random() * 2);
        }

    }
    return matrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5))