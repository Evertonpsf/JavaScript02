const leia = require('readline-sync');

let continua = true
let idade, identidadeGenero, qtndDevsBackend = 0, qtndMulheresFronten = 0, pessoaDesenvolvedora = 0, mediaIdade;
let qtndNaoBinariosFullStackMenos30 = 0, qtndHomensMobileMais40 = 0;
let = totalResposta = 0, mediaIdade = 0;

while (continua) {


    idade = leia.questionInt("\nDigite sua idade: ");
    console.log("\n-----Identidade de Genero----- ");
    console.log("\n 1 -- Mulher Cis ");
    console.log("\n 2 -- Homen Cis ");
    console.log("\n 3 -- Mulher Tans ");
    console.log("\n 4 -- Homem Trans");
    console.log("\n 5 -- Outros ");

    identidadeGenero = leia.questionInt("\nCodigo da identidade de Genero: ");

    console.log("\n----Pessoa desenvolvedora------");
    console.log("\n 1 -- Backend ");
    console.log("\n 2 -- Fronteand ");
    console.log("\n 3 -- Mobile ");
    console.log("\n 4 -- Fullstack ");

    pessoaDesenvolvedora = leia.questionInt("\nCodigo da pessoa desenvolvedora: ");

    totalResposta++;
    mediaIdade += idade;
    if (pessoaDesenvolvedora == 1)
        qtndDevsBackend++
    if ((identidadeGenero == 1 || identidadeGenero == 4) && (pessoaDesenvolvedora == 2))
        qtndMulheresFronten++
    if ((identidadeGenero == 2 || identidadeGenero == 5) && (pessoaDesenvolvedora == 3) && (idade > 40))
        qntdHomensMobileMais40++
    if ((identidadeGenero == 3) && (pessoaDesenvolvedora == 4) && (idade < 30))
        qtndNaoBinariosFullStackMenos30++

    continua = leia.keyInYNStrict("\nDeseja continuar? ");
}


console.log(
`Total de pessoas desenvolvedoras Backend: ${qtndDevsBackend}
Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${qtndMulheresFronten}
Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${qtndHomensMobileMais40}   
Total de Pessoas Não Binárias desenvolvedoras fullstack menores de 30 anos: ${qtndNaoBinariosFullStackMenos30}
O número total de pessoas que responderam à pesquisa: ${totalResposta}
1A média de idade das pessoas que responderan à pesquisas ${(mediaIdade / totalResposta).toFixed(2)}`);






