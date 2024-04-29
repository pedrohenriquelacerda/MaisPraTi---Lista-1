const prompt = require("prompt-sync")();

let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));

if (valor1 < valor2) {
  console.log(`Os valores em ordem crescente são: ${valor1} e ${valor2}`);
} else {
  console.log(`Os valores em ordem crescente são: ${valor2} e ${valor1}`);
}
