const prompt = require("prompt-sync")();

let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C: "));
let tipoTriangulo;

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  if (ladoA === ladoB && ladoB === ladoC) {
    tipoTriangulo = "equilátero";
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    tipoTriangulo = "isósceles";
  } else {
    tipoTriangulo = "escaleno";
  }
  console.log(`Os lados fornecidos formam um triângulo ${tipoTriangulo}`);
} else {
  console.log("Os lados fornecidos não formam um triângulo");
}
