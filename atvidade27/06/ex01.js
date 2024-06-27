const leia = require('readline-sync');

let  a,b,c

a = leia.questionInt("\nDigite o avalor A: ");
b = leia.questionInt("\nDigite o avalor B: ");
c = leia.questionInt("\nDigite o avalor C: ");


soma = (a + b);
if(soma > c){
    console.log("\nA soma entre A + B e maior do que C: ")
}else if(soma < c){
    console.log("\nA soma entre A + B e menor do que C: ")
}else if(soma = c){
    console.log("\nA soma entre A + B e igual a C")
}
