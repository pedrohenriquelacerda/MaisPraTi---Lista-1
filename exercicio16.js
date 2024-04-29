const prompt = require("prompt-sync")();

let numero = 101;
let contador = 0;

while (contador < 50) {
    let isPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            isPrimo = false;
        break;
        }
    }
    if (isPrimo) {
        console.log(numero);
        contador++;
    }
    numero++;
    }