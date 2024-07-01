// Definindo o vetor com 10 números inteiros não ordenados e não repetidos
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// Função para encontrar a posição de um número no vetor
function encontrarPosicao(numero) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
      return i; // Retorna a posição (índice) do número no vetor
    }
  }
  return -1; // Retorna -1 se o número não for encontrado
}

// Importando o módulo readline para entrada do usuário
const readline = require('readline');

// Criando interface para ler entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitando ao usuário para digitar o número que deseja encontrar
rl.question('Digite o número que você deseja encontrar: ', (input) => {
  const numeroProcurado = parseInt(input, 10);

  // Encontrando a posição do número no vetor
  const posicao = encontrarPosicao(numeroProcurado);

  // Exibindo o resultado
  if (posicao !== -1) {
    console.log(`O número ${numeroProcurado} está localizado na posição: ${posicao}`);
  } else {
    console.log(`O número ${numeroProcurado} não foi encontrado!`);
  }

  // Fechando a interface de entrada
  rl.close();
});
