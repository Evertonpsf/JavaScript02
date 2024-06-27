const leia = require('readline-sync');

let codigo;
let quantidade;

console.log("\n Codigo dos produtos: ");
console.log("\n 1 => Cachorro Quente, R$ 10.00 ");
console.log("\n 2 => X-Salada, R$ 15.00 ");
console.log("\n 3 => X-Bacon, R$ 18.00 ");
console.log("\n 4 => Bauru, R$ 12.00");
console.log("\n 5 => Refrigerante, R$ 8.00 ");
console.log("\n 6 => Suco de Laranja, R$ 13.00 ");

codigo = leia.questionInt("\nDigite o codigo do produto: ");
quantidade = leia.questionInt("\nDigite a quantidade do produto: ");

switch (codigo) {
    case 1:
        valorTotal = (quantidade * 10)
        console.log("\nCachorro quente");
        console.log(`\nValor total: ${valorTotal.toFixed(2)}`)
        break;
    case 2:
        valorTotal = (quantidade * 15)
        console.log("\nX-Salada");
        console.log(`\nValor total: ${valorTotal.toFixed(2)}`)
        break;
    case 3:
        valorTotal = (quantidade * 18)
        console.log("\nX-Bacon");
        console.log(`\nValor total: ${valorTotal.toFixed(2)}`)
        break;
    case 4:
        valorTotal = (quantidade * 12)
        console.log("\nBauru");
        console.log(`\nValor total: ${valorTotal.toFixed(2)}`)
        break;
    case 5:
        valorTotal = (quantidade * 8)
        console.log("\nRefrigerante");
        console.log(`\nValor total: ${valorTotal.toFixed(2)}`)
        break;
    case 6:
        valorTotal = (quantidade * 13)
        console.log("\nSuco de Laranja");
        console.log(`\nValor total: R$ ${valorTotal.toFixed(2)}`)
        break;
    default:
        console.log("Digite um código válido!");
}