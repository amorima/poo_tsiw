/* Faça  input  de  um  texto  e  de  uma  palavra  de  pesquisa  (através  de  dois 
prompts). Implemente uma função findWord que receba esses dois parâmetros 
de entrada e devolva o número de ocorrências da palavra de pesquisa no 
texto. Imprima o resultado devolvido na consola. */

function findWord(texto, pesquisaPalavra) {
  quantidade = 0;
  arrayTexto = texto.split(" ");
  arrayTexto.forEach((palavra) => {
    if (pesquisaPalavra === palavra) {
      quantidade++;
    }
  });
  console.log(
    `Existem, no total, ${quantidade} ocorrências da palavra ${pesquisaPalavra}`
  );
}

texto = prompt("Introduza um texto: ");
pesquisaPalavra = prompt("Qual palavra quer pesquisar? ");

findWord(texto, pesquisaPalavra);
