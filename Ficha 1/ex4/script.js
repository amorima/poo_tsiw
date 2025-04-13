//Escreva um programa que verifique se um determinado número (inteiro e positivo) é perfeito.

numero = +prompt("Indique um número (inteiro e positivo): ");
somaDivisores = 0;

for (i = 1; i < numero; i++) {
  if (numero % i == 0) {
    somaDivisores += i;
  }
}
if (numero == somaDivisores) {
  console.log(`O número ${numero} é perfeito`);
} else {
  console.log(`O número ${numero} não é perfeito`);
}
