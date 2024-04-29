const prompt = require("prompt-sync")();

let eleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

let percentualVotosValidos = (votosValidos / eleitores) * 100;
let percentualVotosBrancos = (votosBrancos / eleitores) * 100;
let percentualVotosNulos = (votosNulos / eleitores) * 100;

console.log("Percentual de votos brancos: " + percentualVotosBrancos + "%");
console.log("Percentual de votos nulos: " + percentualVotosNulos + "%");
console.log("Percentual de votos válidos: " + percentualVotosValidos + "%");
