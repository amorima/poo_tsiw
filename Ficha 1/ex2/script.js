max = -Infinity;
min = +Infinity;

do {
  numero = +prompt("Indique o primeiro número: ");
  // determinar o maior e o menor
  if (numero > max) {
    max = numero;
  }
  if (numero < min) {
    min = numero;
  }
} while (numero != 0);

console.log(`O menor número é: ${min}`);
console.log(`O maior número é: ${max}`);
