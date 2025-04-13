//Implemente uma calculadora da Taxa Metabólica Basal (TMB)

genero = prompt("Indique o seu género(M/F): ");
altura = +prompt("Indique a sua altura(cm): ");
peso = +prompt("Indique o seu peso(Kg): ");
idade = +prompt("Indique a sua idade: ");

if (genero.toUpperCase() == "M") {
  tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
} else {
  tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
}

console.log(`A sua Taxa Metabólica Basal ${Math.ceil(tmb)}`);
