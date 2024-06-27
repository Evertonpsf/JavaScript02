const leia = require('readline-sync')

let salario,abono,novoSalario
salario = leia.questionFloat("Digite o seu salário: ",{limitMessage:"numero invalida, digite um numero real"});
abono = leia.questionFloat("Digite o seu abono: ",{limitMessage:"numero invalida, digite um numero real"});
novoSalario = salario + abono
console.log("O novo salário é: " + novoSalario.toFixed(2)); 





