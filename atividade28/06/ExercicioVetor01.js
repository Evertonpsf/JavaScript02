let leia = require("readline-sync")

let numInt = [3, 2, 4, 1, 6, 7,
    8, 5, 9, 10];
let question = true;
let numeros = Array(1);

while (question) {
    console.log(numInt)
    numeros = leia.questionInt("Digite o numero que voce deseja encontrar:");
    if (numInt.indexOf(numeros) == -1) {
        console.log("\nO numero nao foi localizado!");
    } else {
        console.log("\nA localizacao do numero solicitado e: " + numInt.indexOf(numeros));
    }
    question = leia.keyInYNStrict("\nGostaria de localizar outro numero novamente?: ")
}
