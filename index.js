const prompt = require("prompt-sync")();

let escolha = parseInt(
  prompt("Digite o número do exercício que deseja executar: ")
);

switch (escolha) {
  case 1:
    let graus = parseInt(prompt("Digite uma temperatura em graus: "));
    let fahrenheit = (graus * 9) / 5 + 32;

    console.log("Temperatura em Fahrenheit: " + fahrenheit);
    break;

  case 2:
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
    break;

  case 3:
    let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
    let num2 = parseInt(prompt("Digite o segundo número inteiro: "));
    let num3 = parseInt(prompt("Digite o terceiro número inteiro: "));
    let num4 = num1 + num2 + num3;

    num1 += 25;
    num2 *= 3;
    num3 *= 0.12;

    console.log("O primeiro número inteiro somado com 25 é: " + num1);
    console.log("O segundo número inteiro triplicado é: " + num2);
    console.log(
      "O terceiro número inteiro modificado para 12% do valor original é: " +
        num3
    );
    console.log(
      "A soma dos valores originais dos três primeiros inteiros é: " + num4
    );
    break;

  case 4:
    let nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "));
    let nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "));
    let media = (nota1 + nota2) / 2;

    if (media >= 6) {
      console.log("PARABÉNS! Você foi aprovado");
    }
    break;

  case 5:
    let nota11 = parseFloat(prompt("Digite a nota da primeira avaliação: "));
    let nota22 = parseFloat(prompt("Digite a nota da segunda avaliação: "));
    let mediaa = (nota1 + nota2) / 2;

    if (media >= 6) {
      console.log("PARABÉNS! Você foi aprovado");
    } else {
      console.log("Você foi REPROVADO! Estude mais");
    }
    break;

  case 6:
    let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
    let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
    let ladoC = parseFloat(prompt("Digite o valor do lado C: "));
    let tipoTriangulo;

    if (
      ladoA < ladoB + ladoC &&
      ladoB < ladoA + ladoC &&
      ladoC < ladoA + ladoB
    ) {
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

  case 7:
    let macas = parseInt(prompt("Digite a quantidade de maçãs compradas: "));
    let valorTotal;

    if (macas < 12) {
      valorTotal = macas * 0.3;
    } else {
      valorTotal = macas * 0.25;
    }
    console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);
    break;

  case 8:
    let valor1 = parseInt(prompt("Digite o primeiro valor: "));
    let valor2 = parseInt(prompt("Digite o segundo valor: "));

    if (valor1 < valor2) {
      console.log(`Os valores em ordem crescente são: ${valor1} e ${valor2}`);
    } else {
      console.log(`Os valores em ordem crescente são: ${valor2} e ${valor1}`);
    }
    break;

  case 9:
    let codigo = parseInt(prompt("Digite o código de origem do produto: "));
    let regiao;

    if (codigo === 1) {
      regiao = "Sul";
    } else if (codigo === 2) {
      regiao = "Norte";
    } else if (codigo === 3) {
      regiao = "Leste";
    } else if (codigo === 4) {
      regiao = "Oeste";
    } else if (codigo === 5 || codigo === 6) {
      regiao = "Nordeste";
    } else if (codigo === 7 || codigo === 8 || codigo === 9) {
      regiao = "Sudeste";
    } else if (codigo >= 10 && codigo <= 20) {
      regiao = "Centro-Oeste";
    } else if (codigo >= 25 && codigo <= 50) {
      regiao = "Nordeste";
    } else {
      regiao = "Código inválido";
    }

    console.log(`O produto é da região ${regiao}`);
    break;

  case 10:
    let numero = parseInt(prompt("Digite um número inteiro: "));

    for (let i = 0; i < 10; i++) {
      console.log(numero);
    }
    break;

  case 11:
    let numeroo = parseInt(prompt("Digite um número inteiro: "));

    while (numeroo > 0) {
      if (numeroo % 2 === 0) {
        console.log("PAR");
      } else {
        console.log("ÍMPAR");
      }
      numeroo = parseInt(prompt("Digite um número inteiro: "));
    }
    break;

  case 12:
    for (let i = 1000; i < 2000; i++) {
      if (i % 11 === 5) {
        console.log(i);
      }
    }
    break;

  case 13:
    for (let i = 1; i <= 5; i++) {
      let n = parseInt(prompt("Digite um número inteiro: "));
      for (let j = 1; j <= n; j++) {
        console.log(`${j} x ${n} = ${j * n}`);
      }
    }
    break;

  case 14:
    let numerooo = parseFloat(prompt("Digite um número decimal: "));
    let soma = 0;
    let quantidade = 0;

    while (numerooo !== 0) {
      soma += numerooo;
      quantidade++;
      numerooo = parseFloat(prompt("Digite um número decimal: "));
    }
    console.log(`A média aritmética dos números é ${soma / quantidade}`);

  case 15:
    let num = parseFloat(prompt("Digite um número decimal: "));
    let peso = parseFloat(prompt("Digite o peso do número: "));
    let somaa = 0;
    let somaPesos = 0;

    while (num !== 0 || peso !== 0) {
      somaa += num * peso;
      somaPesos += peso;
      num = parseFloat(prompt("Digite um número decimal: "));
      peso = parseFloat(prompt("Digite o peso do número: "));
    }
    console.log(`A média ponderada dos números é ${somaa / somaPesos}`);
    break;

  case 16:
    let nume = 101;
    let contador = 0;

    while (contador < 50) {
      let isPrimo = true;
      for (let i = 2; i < nume; i++) {
        if (nume % i === 0) {
          isPrimo = false;
          break;
        }
      }
      if (isPrimo) {
        console.log(nume);
        contador++;
      }
      nume++;
    }
    break;

  default:
    console.log("Exercício não encontrado");
    break;
}
