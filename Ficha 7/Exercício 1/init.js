let tasks = [];
let formTasks;

function renderTasks(tasks) {
  const cardsLocation = document.getElementById("grid");
  tasks.forEach((element) => {
    let dataCard = element.date;
    let dataComparar = new Date(dataCard);
    let dataHoje = new Date();

    let cardClass = "";
    switch (element.status) {
      case "Done":
        cardClass = "health";
        break;
      case "InProgress":
        cardClass = "work";
        break;
      case "ToDoList":
        cardClass = "personal";
        break;
      default:
        cardClass = "others";
    }

    if (dataComparar < dataHoje) {
      cardClass = "expirou";
    }

    tasks.sort((a, b) => new Date(a.date) - new Date(b.date));

    cardsLocation.innerHTML += `
        <div id="remove" class="card ${cardClass}">
            <p id="removeBotao" class="cardButton">x</p>
            <h3>${element.title}</h3>
            <p>${element.description}</p>
            <p>${element.date}</p>
            <p>${element.status}</p>
        </div>
        `;
  });
}

document.addEventListener("click", (event) => {
  if (event.target.id === "removeBotao") {
    event.target.parentNode.remove();
  }
});

export function init() {
  tasks = [
    {
      title: "Escolha Tema",
      description: "Escolher o tema da App",
      date: "2025-04-02T10:00:00",
      status: "Done",
    },
    {
      title: "Pesquisa",
      description: "Pesquisar inspirações sobre o tema escolhido",
      date: "2025-04-03T19:00:00",
      status: "Done",
    },
    {
      title: "R. Funcionais",
      description: "Definir os requisitos funcionais",
      date: "2025-04-03T08:00:00",
      status: "InProgress",
    },
    {
      title: "Mockups",
      description: "Iniciar o desenho dos Mockups",
      date: "2025-04-12T15:00:00",
      status: "InProgress",
    },
    {
      title: "Prototipagem",
      description: "Prototipagem da App em Figma",
      date: "2025-04-15T14:00:00",
      status: "ToDoList",
    },
  ];

  return tasks;
}

init();
renderTasks(tasks);

document.addEventListener("submit", (event) => {
  event.preventDefault();
  formTasks = document.getElementById("idForm");
  const dataForm = document.getElementById("txtData").value;
  const dataComp = new Date(dataForm);
  const dataAtual = new Date();
  const taskName = document.getElementById("txtActivity").value;
  const taskStatus = document.getElementById("idStatus").value;
  const taskDesc = document.getElementById("txtDescription").value;
  let taskExiste = false;
  if (dataComp < dataAtual) {
    alert("⚠️ Introduza uma data superior à atual!");
    return;
  }
  tasks.forEach((element) => {
    if (
      element.date === dataForm &&
      element.title === taskName &&
      element.status === taskStatus
    ) {
      alert("⚠️ Esta tarefa já existe!");
      taskExiste = true;
    }
  });
  if (taskExiste === false) {
    let inserirTarefa = {
      title: taskName,
      description: taskDesc,
      date: dataForm,
      status: taskStatus,
    };
    tasks.push(inserirTarefa);
    console.log(tasks);
  } else {
    return;
  }
  let todosCards = document.getElementById("grid");
  if (todosCards) {
    todosCards.innerHTML = "";
  }
  renderTasks(tasks);
});
