const leia = require('readline-sync');

let numero1, numero2, codigoDaOperacao

console.log("\n Codigo das operacoes matematicas ");
console.log("\n 1 => Soma");
console.log("\n 2 => Subtracao ");
console.log("\n 3 => Multiplicacao");
console.log("\n 4 => Divisao");

numero1 = leia.questionFloat("\nInforme o primeiro numero: ");
numero2 = leia.questionFloat("\nInforme o segundo numero: ");
codigoDaOperacao = leia.questionInt("\nInforme o codgio da operacao: ");


switch (codigoDaOperacao) {
    case 1:
        let soma = numero1 + numero2
        console.log("\nO resultado: " + soma.toFixed(1));
        break;
    case 2:
        let subtracao = numero1 - numero2
        console.log("\nO resultado: " + subtracao.toFixed(1));
        break;
    case 3:
        let multiplicacao = numero1 * numero2
        console.log("\nO resultado: " + multiplicacao.toFixed(1));
        break;
    case 4:
        let divisao = numero1 / numero2
        console.log("\nO resultado: " + divisao.toFixed(1));
        break;
    default:
        console.log("Digite um código válido!");

}











