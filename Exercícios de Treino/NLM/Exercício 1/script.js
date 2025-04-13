let tarefasStorage = JSON.parse(localStorage.getItem("tarefas")) || [];

document.addEventListener("DOMContentLoaded", () => {
  tarefasStorage.forEach((tarefa) => {
    adicionarTarefaAoDOM(tarefa);
  });
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
  let nomeTarefa = document.getElementById("newTask").value;

  if (nomeTarefa === "") {
    alert("⚠️ Por favor introduza um valor");
    return;
  }

  // Adicionar ao DOM
  adicionarTarefaAoDOM(nomeTarefa);

  // Guardar na memória e localStorage
  tarefasStorage.push(nomeTarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefasStorage));

  document.getElementById("newTask").value = ""; // limpar input
});

function adicionarTarefaAoDOM(nomeTarefa) {
  const lista = document.getElementById("taskList");

  lista.innerHTML += `
      <li>
        <span class="nomeTarefa">${nomeTarefa}</span>
        <span class="remover cursor-pointer ml-2 font-bold">X</span>
      </li>
    `;
}

// Delegar o clique nos botões de remover
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("remover")) {
    const li = event.target.parentElement;
    const nome = li.querySelector(".nomeTarefa").textContent;

    // Remover da DOM
    li.remove();

    // Remover do array e atualizar localStorage
    tarefasStorage = tarefasStorage.filter((t) => t !== nome);
    localStorage.setItem("tarefas", JSON.stringify(tarefasStorage));
  }
});
