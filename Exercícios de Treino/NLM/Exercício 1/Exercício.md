**Crie uma aplicação web simples de "Lista de Tarefas" (To-Do List).**

**Requisitos:**

1.  **Estrutura HTML:** Crie um ficheiro `index.html` com a seguinte estrutura básica:
    *   Um título (`<h1>`) para a aplicação (e.g., "Lista de Tarefas").
    *   Um formulário (`<form>`) com:
        *   Um campo de entrada de texto (`<input type="text">`) para o utilizador inserir uma nova tarefa. Este campo deve ter um `id` (e.g., `newTask`) e um `placeholder` (e.g., "Adicionar nova tarefa").
        *   Um botão (`<button type="submit">`) para adicionar a tarefa à lista.
    *   Uma lista não ordenada (`<ul>`) vazia com um `id` (e.g., `taskList`) onde as tarefas serão exibidas.

2.  **Estilização CSS (Opcional):** Pode criar um ficheiro `style.css` (e ligá-lo ao `index.html` com a tag `<link>`) para adicionar algum estilo visual à sua lista de tarefas (e.g., cores, formatação da lista, etc.).

3.  **Lógica JavaScript:** Crie um ficheiro `script.js` (e ligue-o ao `index.html` com a tag `<script>`) para implementar a seguinte funcionalidade:

    *   **Adicionar Tarefa:**
        *   Adicione um **event listener** ao formulário para o evento de `submit`.
        *   Dentro da função do event listener:
            *   Use `event.preventDefault()` para impedir o comportamento padrão de submissão do formulário (recarregar a página).
            *   Obtenha o valor do texto inserido no campo de input usando `document.getElementById('newTask').value`.
            *   Verifique se o campo de input não está vazio. Se estiver, pode mostrar uma mensagem ao utilizador (e.g., usando `alert()`).
            *   Se o campo não estiver vazio, crie um novo elemento `<li>` para representar a tarefa.
            *   Defina o conteúdo de texto do novo `<li>` para o valor da tarefa inserida.
            *   Adicione um pequeno botão (ou outro elemento, como um link "X") a este `<li>` que permitirá remover a tarefa posteriormente.
            *   Adicione o novo `<li>` à lista não ordenada (`<ul>`) usando `document.getElementById('taskList').appendChild(novaTarefa)`.
            *   Limpe o valor do campo de input após adicionar a tarefa.
            *   **Persista os dados:** Guarde a lista de tarefas no **localStorage** do navegador. Para isso, pode guardar um array de strings (onde cada string é uma tarefa). Use `JSON.stringify()` para converter o array JavaScript para uma string JSON antes de guardar.

    *   **Remover Tarefa:**
        *   Adicione um **event listener** à lista de tarefas (`<ul>`) para capturar cliques em elementos dentro dela (isto é conhecido como **event delegation**).
        *   Dentro da função do event listener, verifique se o elemento clicado é o botão de remover que você adicionou a cada tarefa.
        *   Se for o botão de remover, obtenha o elemento `<li>` pai e remova-o da lista usando `elementoPai.removeChild(elementoRemover)`.
        *   **Atualize os dados persistidos:** Remova a tarefa correspondente do array de tarefas guardado no **localStorage** e atualize o **localStorage** com o array modificado.

    *   **Carregar Tarefas (ao carregar a página):**
        *   Quando a página `script.js` for carregada, verifique se existe alguma lista de tarefas guardada no **localStorage**.
        *   Se existir, obtenha a string JSON do **localStorage** e converta-a novamente para um array JavaScript usando `JSON.parse()`.
        *   Para cada tarefa no array, crie um elemento `<li>` e adicione-o à lista (`<ul>`) na página, incluindo o botão de remover.

**Sugestões Adicionais (para expandir o exercício):**

*   **Marcar Tarefas como Concluídas:** Adicione um checkbox ou funcionalidade semelhante a cada tarefa para marcar como concluída. Atualize a aparência visual da tarefa concluída (e.g., riscar o texto) e persista o estado no `localStorage`.
*   **Editar Tarefas:** Permita ao utilizador editar o texto de uma tarefa existente.
*   **Filtrar Tarefas:** Adicione botões ou um dropdown para permitir filtrar as tarefas (e.g., mostrar todas, mostrar pendentes, mostrar concluídas).

Este exercício prático cobre a criação da estrutura HTML, interação com o utilizador através de um formulário, manipulação dinâmica do DOM (adicionar e remover elementos), tratamento de eventos e persistência de dados usando o `localStorage`. É um bom ponto de partida para consolidar os fundamentos de JavaScript no contexto do desenvolvimento web.