// Importa modulo data.js
import * as data from "./data.js";

let listUsers = [];
listUsers = data.init();

console.log(listUsers);

function listarNivel(level) {
  let nomesNivel2 = [];
  listUsers.forEach((element) => {
    if (element.nivel == level) {
      nomesNivel2.push(element.nome);
    }
  });
  alert(`Users no nível 2:\n ${nomesNivel2.join("\n")}`);
}

function somarPontos(nivel) {
  let listaNivel = listUsers.filter((element) => element.nivel == nivel);
  let totalPontos = listaNivel.reduce(
    (sum, element) => sum + element.pontos,
    0
  );
  alert(`Total de pontos no nível ${nivel}: ${totalPontos}`);
}

function verificarNivel(nivel) {
  console.log(
    `Nível de pontos no nível ${nivel}`,
    listUsers.some((element) => element.nivel == nivel)
  );
}

function pesquisarColecionaveis(colecionavel) {
  const exist = listUsers.some((user) =>
    user.colecionaveis.includes(colecionavel)
  );
  console.log(`Colecionável ${exist}`);
}

function mostrarJogadores(colecionavel) {
  let jogadores = [];
  listUsers.forEach((element) => {
    if (element.colecionaveis.includes(colecionavel)) {
      jogadores.push(element.nome);
    }
  });
  alert(
    `Os seguintes jogadores têm o colecionável "${colecionavel}":\n\n${jogadores.join(
      "\n"
    )}`
  );
}

function listaTabClass() {
  let lista = [];
  let texto = "";
  listUsers
    .sort((a, b) => b.pontos - a.pontos)
    .forEach((element) => {
      texto = `${element.pontos} ${element.nome}`;
      lista.push(texto);
    });
  alert(lista.join("\n"));
}

function giveReward(niveis) {
  listUsers.forEach((element) => {
    if (element.nivel == niveis) {
      element.pontos += 100;
    }
  });
  console.log(listUsers);
}

function sumPontos() {
  let soma = 0;
  listUsers.forEach((element) => {
    soma += element.pontos;
  });
  console.log(soma);
}

//listarNivel(3);
//somarPontos(3);
//verificarNivel(4)
//pesquisarColecionaveis("badge 1");
//mostrarJogadores('avatar')
//listaTabClass();
//giveReward(3);
//sumPontos();
