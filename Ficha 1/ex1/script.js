primeiroNumero = +prompt("Indique o primeiro número: ");
segundoNumero = +prompt("Indique o segundo número: ");
numeros = [primeiroNumero, segundoNumero];
numeros.sort((a, b) => b - a);

soma = 0;
for (i = numeros[1]; i <= numeros[0]; i++) {
  soma += i;
}

console.log(`A soma é ${soma}`);
