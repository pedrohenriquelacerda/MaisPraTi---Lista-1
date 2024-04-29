
const rg = {
  nome: "Pedro Silva",
  numero: 123456789,
  dataEmissao: "01/01/2020",
  orgaoEmissor: "SSP",
  estadoEmissor: "RS",
  valido: true,
};

rg.isValido = function () {
  console.log(this.valido ? "Válido" : "Inválido");
};

rg.isValido();

for (let propriedade in rg) {
  console.log(propriedade, rg[propriedade]);
}


Object.keys(rg).forEach((propriedade) => {
  console.log(propriedade, rg[propriedade]);
});

