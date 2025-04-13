function showInverse(texto) {
  palavras = texto.split(" ");
  textoInv = palavras.reverse().join(" ");
  return textoInv;
}

texto = prompt("Indique um texto: ");
console.log(showInverse(texto));
