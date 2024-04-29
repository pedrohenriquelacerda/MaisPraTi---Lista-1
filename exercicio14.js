const prompt = require("prompt-sync")();

let numero = parseFloat(prompt("Digite um número decimal: "));
let soma = 0;
let quantidade = 0;

while (numero !== 0) {
  soma += numero;
  quantidade++;
  numero = parseFloat(prompt("Digite um número decimal: "));
}
console.log(`A média aritmética dos números é ${soma / quantidade}`);
