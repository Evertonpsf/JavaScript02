const leia = require('readline-sync');

function lerMatriz() {
    let matriz = [];

    console.log("=======\nPreencha dados abaixo da Matriz========");
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = parseInt(leia.question(`Digite o elemento [${i}][${j}] da matriz: `));
        }
    }
    return matriz;
}
function diagonalPrincipal(matriz) {
    let elementos = [];
    for (let i = 0; i < 3; i++) {
        elementos.push(matriz[i][i]);
    }
    return elementos;
}

function diagonalSecundaria(matriz) {
    let elementos = [];
    for (let i = 0; i < 3; i++) {
        elementos.push(matriz[i][2 - i]);
    }
    return elementos;
}
function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += matriz[i][i];
    }
    return soma;
}
function somaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += matriz[i][2 - i];
    }
    return soma;
}

function main() {

    let matriz = lerMatriz();

    let diagPrincipal = diagonalPrincipal(matriz);
    let diagSecundaria = diagonalSecundaria(matriz);
    let somaDiagPrincipal = somaDiagonalPrincipal(matriz);
    let somaDiagSecundaria = somaDiagonalSecundaria(matriz);

    console.log("\nEsta sao os elementos da Diagonal Principal:", diagPrincipal);
    console.log("\nEstes sao os elementos da Diagonal Secundária:", diagSecundaria);
    console.log("\nesta e a soma dos Elementos da Diagonal Principal:", somaDiagPrincipal);
    console.log("\nesta e a soma dos Elementos da Diagonal Secundária:", somaDiagSecundaria);
}

main();
