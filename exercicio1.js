const prompt = require("prompt-sync")();

let graus = parseInt(prompt("Digite uma temperatura em graus: "));
let fahrenheit = (graus * 9) / 5 + 32;

console.log("Temperatura em Fahrenheit: " + fahrenheit);
