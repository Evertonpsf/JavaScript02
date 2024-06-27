const leia = require('readline-sync');

let n

n = leia.questionInt("\nDigite um numero: ");


if (n % 2 === 0) {
    if (n < 0) {
        console.log("\no numero digitado e par e negativo ")
    } else if (n > 0) {
        console.log("\no numero digitado e par e positivo")
    }
} else {
    if (n > 0) {
        console.log("\no numero digitado e impar e positivo ")
    } else {
        console.log("\no numero digitado e impar e negativo")
    }
}


