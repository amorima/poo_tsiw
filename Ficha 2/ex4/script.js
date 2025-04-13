function showTabuada(numero = "10") {
  posicao = 1;
  resultado = 0;
  while (posicao <= 10) {
    resultado = numero * posicao;
    console.log(`${numero} X ${posicao} = ${resultado}`);
    posicao++;
  }
}

numero = prompt("Indique qual tabuada quer ver: ");
numero = numero === "" || numero === null ? 10 : numero;
showTabuada(numero);
