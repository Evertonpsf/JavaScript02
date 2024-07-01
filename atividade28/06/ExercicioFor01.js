const leia = require('readline-sync');

let numero, contador, par = 0, impar = 0;



for (contador = 1; contador <= 4; contador++) {
    numero = leia.questionInt("\nDigite o numero: ");
    console.log("O " + contador + " º  numero digitado foi " + numero);
    if (numero % 2 === 0) {
        par++ //essa parte e par += 1 
    } else {
        impar += 1
    }
}
console.log("\nA quantidade de numeros pares digitado foi " + par);
console.log("\nA quantidade de numeros impares digitado foi " + impar);