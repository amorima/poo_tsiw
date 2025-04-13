// Este código faz o mouseover por JS, mas está implementado por Tailwind

/* document.addEventListener("mouseover", (event) => {
  if (event.target.tagName === "IMG") {
    const td = event.target.closest("td");
    if (td) {
      td.classList.add("border-4", "border-blue-800");
    }
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.tagName === "IMG") {
    const td = event.target.closest("td");
    if (td) {
      td.classList.remove("border-4", "border-blue-800");
    }
  }
}); */

let numeroRandom1 = Math.floor(Math.random() * 12) + 1;
let numeroRandom2 = Math.floor(Math.random() * 12) + 1;
while (numeroRandom1 === numeroRandom2) {
  numeroRandom2 = Math.floor(Math.random() * 12) + 1;
}

let numerosClicados = [];
let ultimoNumero = 0;
let penultimoNumero = 0;
let idTimeout;
let numeroCliques = 1;
let cliquesVitoria = 0;

console.log(numeroRandom1, numeroRandom2);

document.addEventListener("click", (event) => {
  let targetId = event.target.id;
  numerosClicados.push(targetId);
  ultimoNumero = numerosClicados.length - 1;
  penultimoNumero = numerosClicados.length - 2;
  numeroCliques++;

  if (
    (numerosClicados[ultimoNumero] == numeroRandom1 ||
      numerosClicados[ultimoNumero] == numeroRandom2) &&
    (numerosClicados[penultimoNumero] == numeroRandom1 ||
      numerosClicados[penultimoNumero] == numeroRandom2)
  ) {
    clearTimeout(idTimeout);
    document.getElementById(numeroRandom1.toString()).src =
      "/Ficha 6/Páscoa/img/Ovo.png";
    document.getElementById(numeroRandom2.toString()).src =
      "/Ficha 6/Páscoa/img/Ovo.png";
    let footer = document.getElementById("footer");
    let fraseParabens = `
            <h1 class="font-sans font-bold text-white text-3xl text-center">Parabéns, encontraste os Ovos de Páscoa!</h1>;
            <button id="cliquesVitoria" class="text-white font-mono mx-auto border-2 p-2 block rounded-md hover:bg-lime-700 hover:border-lime-700" type="button">Quantos cliques foram necessários?</button>`;
    footer.innerHTML = fraseParabens;
    return;
  }

  if (targetId == numeroRandom1 || targetId == numeroRandom2) {
    cliquesVitoria = numeroCliques;
    event.target.src = "/Ficha 6/Páscoa/img/Ovo.png";
    idTimeout = setTimeout(function () {
      event.target.src = "/Ficha 6/Páscoa/img/DiscoverEggs.png";
    }, 2000);
  }

  if (targetId === "cliquesVitoria") {
    let textoBotao = document.getElementById("cliquesVitoria");
    textoBotao.textContent = cliquesVitoria;
  }
});
