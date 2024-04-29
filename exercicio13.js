const prompt = require("prompt-sync")();

for (let i = 1; i <= 5; i++) {
  let n = parseInt(prompt("Digite um número inteiro: "));
  for (let j = 1; j <= n; j++) {
    console.log(`${j} x ${n} = ${j * n}`);
  }
}
