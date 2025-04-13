let tabelaJogos = [];
let formularioJogos = document.getElementById("formularioJogos");
formularioJogos.addEventListener("submit", (event) => {
  event.preventDefault();
  let tabela = document.getElementById("tabela");
  let nome = document.getElementById("nome").value;
  let ano = document.getElementById("ano").value;
  let genero = document.getElementById("genero").value;
  let plat = document.getElementById("plat").value;
  let aval = document.getElementById("aval").value;

  if (ano < 0 || ano > new Date().getFullYear()) {
    alert("Insira um ano válido");
    return;
  }

  tabelaJogos.push({ nome, ano, genero, plat, aval });
  localStorage.setItem("jogos", JSON.stringify(tabelaJogos));

  tabela.innerHTML += `
    <tr align="center">
    <td>${nome}</td>
    <td>${ano}</td>
    <td>${genero}</td>
    <td>
    <button type="button" class="ver bg-blue-950 text-white border-slate-900 rounded-lg px-3 py-1 my-5 w-30 hover:bg-slate-400">Ver Detalhes</button>
    <button type="button" class="remover bg-red-600 text-white border-red-950 rounded-lg px-3 py-1 my-5 w-30 hover:bg-slate-400">Remover</button>
    </td>
    </tr>
    `;
  formularioJogos.reset();
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("ver")) {
    const listaJogos = localStorage.getItem("jogos");
    let listaParsed = null;
    listaParsed = JSON.parse(listaJogos);
    listaParsed.forEach((element) => {
      const linha = event.target.closest("tr");
      const nomeDoJogo = linha.children[0].textContent;
      if (element.nome === nomeDoJogo) {
        alert(
          `Nome: ${element.nome}\nAno: ${element.ano}\nGénero: ${element.genero}\nPlataforma: ${element.plat}\nAvaliação: ${element.aval}`
        );
      }
    });
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("remover")) {
    event.target.parentNode.parentNode.parentNode.remove();
  }
});
