const algoritmos = require('../algoritmo');

test('La función "genMatrix" debería generar una matriz con las columnas pedidas.', () => {
    expect(algoritmos.genMatrix("Devoff se puso ATR", 4)).toStrictEqual([
        ['D', 'e', 'v', 'o'],
        ['f', 'f', ' ', 's'],
        ['e', ' ', 'p', 'u'],
        ['s', 'o', ' ', 'A'],
        ['T', 'R', ' ', ' ']
    ])
});

test('La función "rotateMatrix" debería rotar una matriz', () => {
    expect(algoritmos.rotateMatrix([
        ['D', 'e', 'v', 'o'],
        ['f', 'f', ' ', 's'],
        ['e', ' ', 'p', 'u'],
        ['s', 'o', ' ', 'A'],
        ['T', 'R', ' ', ' ']
    ])).toStrictEqual([
        ['D', 'f', 'e', 's', 'T'],
        ['e', 'f', ' ', 'o', 'R'],
        ['v', ' ', 'p', ' ', ' '],
        ['o', 's', 'u', 'A', ' ']
    ])
})