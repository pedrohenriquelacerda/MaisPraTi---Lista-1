const prompt = require("prompt-sync")();

let numero = parseFloat(prompt("Digite um número decimal: "));
let peso = parseFloat(prompt("Digite o peso do número: "));
let soma = 0;
let somaPesos = 0;

while (numero !== 0) {
  soma += numero * peso;
  somaPesos += peso;
  numero = parseFloat(prompt("Digite um número decimal: "));
  peso = parseFloat(prompt("Digite o peso do número: "));
}
console.log(`A média ponderada dos números é ${soma / somaPesos}`);
