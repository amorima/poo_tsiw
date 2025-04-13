/* Crie uma função designada calcSoma que adiciona N números passados como 
parâmetros (o número de parâmetros pode variar) de entrada. Use o objeto 
arguments para resolver esse problema */

function calcSoma() {
  i = 0;
  soma = 0;
  while (i < arguments.length) {
    soma += arguments[i];
    i++;
  }
  console.log(`O total é ${soma}`);
}

calcSoma(10, 20, 5);
