const leia = require('readline-sync');

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ");
idade = leia.questionInt("\nDigite sua idade: ");

if (idade >= 0 && idade <= 10) {
    console.log("\no seu plano de saude custara R$ 100,00 por mes.");
} else if (idade >= 11 && idade <= 29) {
    console.log("\no seu plano de saude custara R$ 200,00 por mes.");
} else if (idade >= 30 && idade <= 45) {
    console.log("\no seu plano de saude custara R$ 300,00 por mes.");
} else if (idade >= 46 && idade <= 59) {
    console.log("\no seu plano de saude custara R$ 400,00 por mes.");
} else if (idade >= 60 && idade <= 65) {
    console.log("\no seu plano de saude custara R$ 500,00 por mes.");
} else {
    console.log("\no seu plano de saude custara R$ 1000,00 por mes.");
}

if(nome == nome){
    console.log('\n Muito obrigado ' + nome);
}
