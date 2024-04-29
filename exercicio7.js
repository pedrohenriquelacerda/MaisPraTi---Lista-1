const prompt = require("prompt-sync")();

let macas = parseInt(prompt("Digite a quantidade de maçãs compradas: "));
let valorTotal;

if (macas < 12) {
  valorTotal = macas * 0.3;
} else {
  valorTotal = macas * 0.25;
}
console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);
