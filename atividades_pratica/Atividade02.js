const leia = require('readline-sync')

let nota1,nota2,nota3,nota4,media
nota1 = leia.questionFloat("Digite sua primeira nota: ");
nota2 = leia.questionFloat("Digite sua segunda nota: ");
nota3 = leia.questionFloat("Digite sua terceira nota: ");
nota4 = leia.questionFloat("Digite sua quarta nota: ");
media = (nota1+nota2+nota3+nota4)/4
console.log("A sua média é: " + media.toFixed(2))