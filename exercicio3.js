const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));
let num3 = parseInt(prompt("Digite o terceiro número inteiro: "));
let num4 = num1 + num2 + num3;

num1 += 25;
num2 *= 3;
num3 *= 0.12;

console.log("O primeiro número inteiro somado com 25 é: " + num1);
console.log("O segundo número inteiro triplicado é: " + num2);
console.log("O terceiro número inteiro modificado para 12% do valor original é: " + num3);
console.log("A soma dos valores originais dos três primeiros inteiros é: " + num4);
