let leia = require("readline-sync")
let matrizInteiros = Array(2);
let soma = 0;

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length;indiceLinha++){
    matrizInteiros[indiceLinha] = Array (3)
}
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){

    matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);

    soma += matrizInteiros[indiceLinha][indiceColuna]
}
console.log(`\nsoma dos elementos da linha ${indiceLinha}: ${soma}`);
soma = 0

}

  