const leia = require('readline-sync');

let sB,aN,hE,desc,salarioLiquido
sB = leia.questionFloat("Informe seu salario bruto: ");
aN = leia.questionFloat("informe o seu adicional noturno: ");
hE = leia.questionFloat("Informe suas horas extras: ");
desc = leia.questionFloat("Informe seus descontos: ");
salarioLiquido = (sB+aN+hE*5-desc);
console.log("O seu salário Liquido é: " + salarioLiquido.toFixed(2));
 
//Eu abreviei as palavras do enunciado e coloquei assim no código, pois achei as palavras muito grande.