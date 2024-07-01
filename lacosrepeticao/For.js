const leia = require('readline-sync');

let numero, contador;  cont = 0;
let numero3;
//numero = leia.questionInt("Calcule a tabuada do: ");

for (contador = 1; contador <= 10; contador++) {
    numero = leia.questionInt("Calcule a multiplicacao do: ");
    numero3 = leia.questionInt("vezes o numero: ");
    console.log(numero + " x " + numero3 + " = " + numero * numero3);
    if (numero % 2 == 0) {
        cont++
    }
}

console.log(Cont + "vezes multiplicacao de numero pares!")