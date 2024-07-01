const leia = require('readline-sync');

let somaPositivos = 0;
let numero;

do {
    numero = parseInt(leia.question('Digite um número: '));
    if (numero > 0) {
        somaPositivos += numero;
    }
} while (numero !== 0);

console.log(`A soma dos números positivos é: ${somaPositivos}`);
