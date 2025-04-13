## 1. Fundamentos e Estruturas de Controlo

### 1.1. Variáveis e Tipos de Dados

- **Declaração:** Use `let` para variáveis que podem mudar de valor e `const` para constantes (valores que não mudam).
  ```javascript
  let idade = 30;
  const anoNascimento = 1994;
  ```
- **Tipos Primitivos:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- **Tipos Complexos:** `object` (incluindo arrays e funções).

### 1.2. Operadores

- **Aritméticos:** `+`, `-`, `*`, `/` (divisão), `%` (resto), `**` (exponenciação).
- **Atribuição:** `=`, `+=`, `-=`, `*=`, `/=`.
- **Comparação:** `<`, `>`, `<=`, `>=`, `==` (igualdade, com coerção de tipo), `!=` (diferença, com coerção), `===` (igualdade estrita, sem coerção), `!==` (diferença estrita, sem coerção). **Prefira `===` e `!==`**.
- **Lógicos:** `&&` (E lógico), `||` (OU lógico), `!` (NÃO lógico). Usados frequentemente em condições `if`.
- **Incremento/Decremento:** `++`, `--`.

### 1.3. Input/Output Básico

- **Input (Browser):** `prompt("Mensagem")` - Pede input ao utilizador (retorna _sempre_ uma string).
  ```javascript
  let nome = prompt("Qual o seu nome?");
  let idadeStr = prompt("Qual a sua idade?");
  // Para converter para número:
  let idadeNum = parseInt(idadeStr);
  // Ou usando o operador unário +
  let idadeNumAlt = +prompt("Qual a sua idade?");
  ```
- **Output (Browser/Console):**
  - `alert("Mensagem")`: Mostra uma caixa de diálogo simples.
  - `console.log(valor1, valor2, ...)`: Escreve no console do browser (muito útil para debugging).
  - Manipulação do DOM (ver secção DOM).

### 1.4. Conversão de Tipos

- **Para Número:**
  - `parseInt(string)`: Converte string para inteiro (ignora o que vem depois do primeiro caractere não numérico).
  - `parseFloat(string)`: Converte string para número de ponto flutuante.
  - `Number(valor)`: Tenta converter o valor para número.
  - Operador Unário `+`: `let num = +"123";`
- **Para String:**
  - `String(valor)`: Converte valor para string.
  - Método `valor.toString()`: Converte valor para string (ver métodos Number).

### 1.5. Estruturas Condicionais

- **`if...else if...else`**: Executa blocos de código com base em condições.
  ```javascript
  if (idade >= 18) {
    console.log("Adulto");
  } else if (idade >= 13) {
    console.log("Adolescente");
  } else {
    console.log("Criança");
  }
  ```
- **`switch`**: Compara uma expressão com vários `case`s. Útil para múltiplos valores discretos.
  ```javascript
  switch (diaSemana) {
    case "Segunda":
      console.log("Início da semana");
      break; // Importante usar break!
    case "Sexta":
      console.log("Quase fim de semana!");
      break;
    default:
      console.log("Outro dia");
  }
  ```

### 1.6. Estruturas Iterativas (Loops)

- **`for`**: Repete um bloco de código um número específico de vezes.
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log("Iteração número:", i);
  }
  ```
- **`while`**: Repete enquanto uma condição for verdadeira (testa _antes_ de executar).
  ```javascript
  let contador = 0;
  while (contador < 3) {
    console.log("Contador (while):", contador);
    contador++;
  }
  ```
- **`do...while`**: Repete enquanto uma condição for verdadeira (executa _pelo menos uma vez_, testa _depois_).
  ```javascript
  let tentativas = 0;
  let senha;
  do {
    senha = prompt("Digite a senha:");
    tentativas++;
  } while (senha !== "1234" && tentativas < 3);
  ```
- **`for...of`**: Itera sobre os _valores_ de iteráveis (Arrays, Strings, etc.).
  ```javascript
  const cores = ["vermelho", "verde", "azul"];
  for (const cor of cores) {
    console.log(cor);
  }
  ```
- **`for...in`**: Itera sobre as _chaves_ (propriedades) de um objeto.
  ```javascript
  const pessoa = { nome: "Ana", idade: 25 };
  for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`); // Ex: nome: Ana
  }
  ```

---

## 2. Funções

Blocos de código reutilizáveis.

### 2.1. Declaração de Função (Function Declaration)

- Definida com a palavra-chave `function`. Pode ser chamada antes de ser definida (hoisting).
  ```javascript
  function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
  }
  saudacao("Carlos"); // Chama a função
  ```

### 2.2. Expressão de Função (Function Expression)

- Uma função atribuída a uma variável. Não sofre hoisting (só pode ser chamada após a definição).
  ```javascript
  const calcularQuadrado = function (numero) {
    return numero * numero;
  };
  let resultado = calcularQuadrado(5); // resultado = 25
  ```

### 2.3. Arrow Functions (Funções Seta)

- Sintaxe mais curta, especialmente para funções simples. Possui comportamento diferente do `this`.

  ```javascript
  // Sintaxe básica
  const somar = (a, b) => {
    return a + b;
  };

  // Se tiver apenas uma linha de retorno, pode omitir {} e return
  const subtrair = (a, b) => a - b;

  // Se tiver apenas um parâmetro, pode omitir os parênteses
  const dobrar = (numero) => numero * 2;

  console.log(somar(2, 3)); // 5
  console.log(subtrair(5, 2)); // 3
  console.log(dobrar(4)); // 8
  ```

### 2.4. Parâmetros e Retorno

- **Parâmetros:** Variáveis listadas na definição da função, recebem os valores passados na chamada (argumentos).
- **`return`:** Palavra-chave que especifica o valor que a função devolve. Se omitido, a função retorna `undefined`.

---

Esta parte abrange os métodos associados aos tipos `Number` e `String`.

---

## 3. Métodos de `Number`

Métodos para trabalhar com números.

- **`toString()`**: Converte o número para string.
  ```javascript
  let num = 123;
  console.log(num.toString()); // "123"
  ```
- **`toFixed(n)`**: Formata o número para ter `n` casas decimais (retorna string). Útil para valores monetários.
  ```javascript
  let preco = 19.99;
  console.log(preco.toFixed(2)); // "19.99"
  let valor = 10;
  console.log(valor.toFixed(2)); // "10.00"
  ```
- **`toPrecision(n)`**: Formata o número para ter `n` dígitos significativos no total (retorna string).
  ```javascript
  let num = 123.456;
  console.log(num.toPrecision(4)); // "123.5" (arredonda)
  console.log(num.toPrecision(2)); // "1.2e+2" (notação científica se necessário)
  ```
- **`toExponential(n)`**: Retorna a representação em notação exponencial (científica) com `n` casas decimais (retorna string).
  ```javascript
  let num = 12345;
  console.log(num.toExponential(2)); // "1.23e+4"
  ```
- **`parseInt(string)` / `parseFloat(string)`**: Funções globais (também vistas antes) frequentemente usadas com números, mas tecnicamente não são métodos _do_ Number. Convertem strings em números.

---

## 4. Métodos de `String`

Métodos para manipular strings. Strings são imutáveis; estes métodos retornam _novas_ strings.

- **`length`**: Propriedade (não método) que retorna o tamanho da string.
  ```javascript
  let texto = "Olá Mundo";
  console.log(texto.length); // 9
  ```
- **`charAt(index)`**: Retorna o caractere na posição `index`.
  ```javascript
  let texto = "JavaScript";
  console.log(texto.charAt(0)); // "J"
  ```
- **`slice(startIndex, endIndex)`**: Extrai uma parte da string. `endIndex` não é incluído. Índices negativos contam a partir do fim.
  ```javascript
  let texto = "Programação";
  console.log(texto.slice(0, 3)); // "Pro"
  console.log(texto.slice(4)); // "ramação" (até o fim)
  console.log(texto.slice(-3)); // "ção" (últimos 3)
  ```
- **`substring(startIndex, endIndex)`**: Similar ao `slice`, mas não aceita índices negativos e trata `startIndex > endIndex` trocando os valores.
  ```javascript
  let texto = "Programação";
  console.log(texto.substring(0, 3)); // "Pro"
  console.log(texto.substring(3, 0)); // "Pro" (troca 0 e 3)
  ```
- **`substr(startIndex, length)`**: Extrai uma substring a partir de `startIndex` com um `length` específico (considerado legado/depreciado em favor de `slice`/`substring`).
  ```javascript
  let texto = "Programação";
  console.log(texto.substr(4, 5)); // "ramaç"
  ```
- **`indexOf(searchValue, startIndex)`**: Retorna o índice da _primeira_ ocorrência de `searchValue`, começando a busca em `startIndex` (opcional). Retorna `-1` se não encontrar.
  ```javascript
  let texto = "Olá mundo, olá universo!";
  console.log(texto.indexOf("olá")); // 11 (case-sensitive)
  console.log(texto.indexOf("olá", 15)); // 11 (a busca começa no 15, mas encontra o de 11)
  console.log(texto.indexOf("Adeus")); // -1
  ```
- **`lastIndexOf(searchValue, startIndex)`**: Retorna o índice da _última_ ocorrência de `searchValue`, buscando de trás para frente a partir de `startIndex` (opcional). Retorna `-1` se não encontrar.
  ```javascript
  let texto = "Olá mundo, olá universo!";
  console.log(texto.lastIndexOf("olá")); // 11
  ```
- **`includes(searchValue, startIndex)`**: Verifica se a string contém `searchValue` (retorna `true` ou `false`). `startIndex` (opcional) define onde começar a busca. Case-sensitive.
  ```javascript
  let texto = "Bem-vindo ao JavaScript";
  console.log(texto.includes("Java")); // true
  console.log(texto.includes("java")); // false
  ```
- **`startsWith(searchValue, startIndex)` / `endsWith(searchValue, length)`**: Verifica se a string começa ou termina com `searchValue`. Opcionalmente, `startsWith` pode definir a posição inicial e `endsWith` o comprimento a considerar.
  ```javascript
  let ficheiro = "documento.pdf";
  console.log(ficheiro.startsWith("doc")); // true
  console.log(ficheiro.endsWith(".pdf")); // true
  ```
- **`toUpperCase()` / `toLowerCase()`**: Converte a string para maiúsculas ou minúsculas. (`toLocaleUpperCase`/`toLocaleLowerCase` consideram especificidades de localização).
  ```javascript
  let nome = "Carlos";
  console.log(nome.toUpperCase()); // "CARLOS"
  console.log(nome.toLowerCase()); // "carlos"
  ```
- **`trim()`**: Remove espaços em branco (espaços, tabs, newlines) do início e do fim da string. Existem também `trimStart()` e `trimEnd()`.
  ```javascript
  let input = "   espaços   ";
  console.log(`"${input.trim()}"`); // ""espaços""
  ```
- **`replace(searchValue, newValue)`**: Substitui a _primeira_ ocorrência de `searchValue` por `newValue`. `searchValue` pode ser uma string ou uma RegExp. Para substituir todas, use RegExp com a flag `g`.
  ```javascript
  let frase = "O gato é preto, o cão é preto.";
  console.log(frase.replace("preto", "branco")); // "O gato é branco, o cão é preto."
  console.log(frase.replace(/preto/g, "branco")); // "O gato é branco, o cão é branco."
  ```
- **`split(separator, limit)`**: Divide a string num array de substrings, usando `separator` como delimitador. `limit` (opcional) define o número máximo de divisões.

  ```javascript
  let csv = "maçã,banana,laranja";
  let frutas = csv.split(",");
  console.log(frutas); // ["maçã", "banana", "laranja"]

  let frase = "Uma frase com palavras";
  let palavras = frase.split(" ");
  console.log(palavras); // ["Uma", "frase", "com", "palavras"]
  ```

- **`concat(str1, str2, ...)`**: Junta (concatena) uma ou mais strings à string original. O operador `+` é geralmente mais usado para concatenação simples.
  ```javascript
  let s1 = "Olá";
  let s2 = " ";
  let s3 = "Mundo";
  console.log(s1.concat(s2, s3)); // "Olá Mundo"
  console.log(s1 + s2 + s3); // "Olá Mundo" (mais comum)
  ```
- **`search(regexp)`**: Procura por uma correspondência entre uma expressão regular (`regexp`) e a string, retornando o índice da primeira correspondência ou `-1`. Similar a `indexOf`, mas usa RegExp.
  ```javascript
  let texto = "O número é 123.";
  console.log(texto.search(/\d+/)); // 11 (encontra o índice do primeiro dígito)
  ```

---

Esta parte abrange Objetos e Arrays de Objetos.

---

## 5. Objetos

Coleções de pares chave-valor (propriedades). Podem conter dados primitivos, outros objetos, arrays ou funções (métodos).

### 5.1. Criação de Objetos (Literal)

```javascript
const pessoa = {
    nome: "Ana",
    apelido: "Silva",
    idade: 30,
    ativo: true,
    hobbies: ["ler", "correr"],
    endereco: {
        rua: "Rua Principal",
        numero: 123
    },
    // Método (função dentro do objeto)
    nomeCompleto: function() {
        // 'this' refere-se ao próprio objeto 'pessoa'
        return `${this.nome} ${this.apelido}`;
    },
    // Sintaxe mais curta para método (ES6+)
    saudacao() {
        console.log(`Olá, sou ${this.nome}!`);
    }
};

5.2. Acesso a Propriedades
Notação Ponto (.): Mais comum, usada quando o nome da chave é um identificador válido.

console.log(pessoa.nome); // "Ana"
console.log(pessoa.endereco.rua); // "Rua Principal"
pessoa.saudacao(); // Chama o método

Notação Colchetes ([]): Necessária quando a chave não é um identificador válido (contém espaços, hífens) ou quando a chave é uma variável.

console.log(pessoa["idade"]); // 30
let chave = "ativo";
console.log(pessoa[chave]); // true

5.3. Modificação e Adição de Propriedades
pessoa.idade = 31;        // Modifica valor existente
pessoa.email = "ana.silva@email.com"; // Adiciona nova propriedade

5.4. Métodos em Objetos
Funções associadas a um objeto. Usam this para aceder a outras propriedades do mesmo objeto.

6. Arrays de Objetos
Arrays onde cada elemento é um objeto, frequentemente com a mesma estrutura. Comum para listas de dados.

let utilizadores = [
    { id: 1, nome: "Carlos", cidade: "Porto" },
    { id: 2, nome: "Mariana", cidade: "Lisboa" },
    { id: 3, nome: "Pedro", cidade: "Porto" }
];

6.1. Iteração
for...of: Simples para percorrer os objetos.

for (const user of utilizadores) {
    console.log(`ID: ${user.id}, Nome: ${user.nome}`);
}

forEach(callback): Executa uma callback para cada elemento.

utilizadores.forEach((user, index) => {
    console.log(`Utilizador ${index + 1}: ${user.nome} (${user.cidade})`);
});

6.2. Pesquisa
find(callback): Retorna o primeiro elemento que satisfaz a condição na callback. Retorna undefined se nenhum for encontrado.

const userLisboa = utilizadores.find(user => user.cidade === "Lisboa");
console.log(userLisboa); // { id: 2, nome: "Mariana", cidade: "Lisboa" }

findIndex(callback): Retorna o índice do primeiro elemento que satisfaz a condição. Retorna -1 se nenhum for encontrado.

const indexPedro = utilizadores.findIndex(user => user.nome === "Pedro");
console.log(indexPedro); // 2

filter(callback): Retorna um novo array com todos os elementos que satisfazem a condição.

const usersPorto = utilizadores.filter(user => user.cidade === "Porto");
console.log(usersPorto); // [{ id: 1, ... }, { id: 3, ... }]

6.3. Transformação
map(callback): Cria um novo array com os resultados da chamada da callback para cada elemento. Útil para extrair ou transformar dados.

const nomesUtilizadores = utilizadores.map(user => user.nome);
console.log(nomesUtilizadores); // ["Carlos", "Mariana", "Pedro"]

const usersComIdade = utilizadores.map(user => ({ ...user, idade: 0 })); // Adiciona uma propriedade

6.4. Adicionar/Remover
push(objeto): Adiciona um objeto ao fim do array.

utilizadores.push({ id: 4, nome: "Ana", cidade: "Coimbra" });

pop(): Remove e retorna o último objeto do array.

shift(): Remove e retorna o primeiro objeto do array.

unshift(objeto): Adiciona um objeto ao início do array.

splice(startIndex, deleteCount, item1, item2, ...): Remove/substitui/adiciona elementos. Muito versátil.

// Remover o utilizador com id 2 (index 1)
utilizadores.splice(1, 1);

6.5. Ordenação
sort(compareFunction): Ordena os elementos do array no próprio array (in-place). Requer uma função de comparação para objetos.

A compareFunction(a, b) deve retornar:

< 0: se a vem antes de b.

> 0: se a vem depois de b.

0: se a ordem relativa não importa.

// Ordenar por nome (alfabeticamente)
utilizadores.sort((a, b) => {
    if (a.nome < b.nome) return -1;
    if (a.nome > b.nome) return 1;
    return 0;
    // Ou mais curto (para strings):
    // return a.nome.localeCompare(b.nome);
});

// Ordenar por id (numericamente)
utilizadores.sort((a, b) => a.id - b.id); // Ascendente
utilizadores.sort((a, b) => b.id - a.id); // Descendente

reverse(): Inverte a ordem dos elementos no array (in-place). Usado frequentemente após um sort para obter ordem descendente se a ordenação inicial foi ascendente (ou vice-versa).

// Ordenar por id descendente (alternativa)
utilizadores.sort((a, b) => a.id - b.id); // Ordena ascendente
utilizadores.reverse(); // Inverte para descendente

```

---

Esta parte abrange o DOM (Document Object Model) e Eventos.

---

## 7. DOM (Document Object Model)

Representação em árvore da estrutura HTML da página. Permite ao JavaScript interagir com o conteúdo, estrutura e estilo da página.

### 7.1. Selecionar Elementos

- **`document.getElementById(id)`**: Seleciona o elemento com o `id` específico (mais rápido).
  ```javascript
  const titulo = document.getElementById("tituloPrincipal");
  ```
- **`document.getElementsByTagName(tagName)`**: Seleciona todos os elementos com a `tagName` dada (retorna HTMLCollection).
  ```javascript
  const paragrafos = document.getElementsByTagName("p");
  ```
- **`document.getElementsByClassName(className)`**: Seleciona todos os elementos com a `className` dada (retorna HTMLCollection).
  ```javascript
  const destaques = document.getElementsByClassName("destaque");
  ```
- **`document.querySelector(cssSelector)`**: Seleciona o _primeiro_ elemento que corresponde ao seletor CSS (muito versátil).
  ```javascript
  const primeiroItemLista = document.querySelector("ul li");
  const botaoSubmit = document.querySelector("button[type='submit']");
  ```
- **`document.querySelectorAll(cssSelector)`**: Seleciona _todos_ os elementos que correspondem ao seletor CSS (retorna NodeList).
  ```javascript
  const todosItensLista = document.querySelectorAll("ul li");
  ```
  _Nota:_ HTMLCollection e NodeList são _semelhantes_ a arrays, mas não idênticos. Para usar métodos de array como `forEach`, pode ser necessário convertê-los (embora `forEach` funcione em NodeList modernos).

### 7.2. Manipular Elementos

- **Conteúdo:**
  - `elemento.innerHTML`: Obtém ou define o conteúdo HTML _dentro_ do elemento (cuidado com segurança - XSS - se definir com input do utilizador).
  - `elemento.textContent`: Obtém ou define o conteúdo de _texto_ (ignora HTML, mais seguro e performático para texto puro).
- **Atributos:**
  - `elemento.id`, `elemento.className`, etc.: Acesso direto a atributos comuns.
  - `elemento.getAttribute(nomeAtributo)`: Obtém o valor de qualquer atributo.
  - `elemento.setAttribute(nomeAtributo, valor)`: Define o valor de um atributo.
  - `elemento.removeAttribute(nomeAtributo)`: Remove um atributo.
- **Estilos:**
  - `elemento.style.propriedadeCSS`: Define estilos inline (e.g., `elemento.style.color = "red";`, `elemento.style.backgroundColor = "yellow";` - note a notação camelCase para propriedades CSS com hífen).
- **Classes CSS:**
  - `elemento.classList.add(classe)`: Adiciona uma classe.
  - `elemento.classList.remove(classe)`: Remove uma classe.
  - `elemento.classList.toggle(classe)`: Adiciona se não existir, remove se existir.
  - `elemento.classList.contains(classe)`: Verifica se a classe existe (retorna `true`/`false`).

### 7.3. Criar e Adicionar/Remover Nós (Elementos)

- **`document.createElement(tagName)`**: Cria um novo elemento HTML.
  ```javascript
  const novoParagrafo = document.createElement("p");
  ```
- **`document.createTextNode(texto)`**: Cria um nó de texto.
  ```javascript
  const textoParagrafo = document.createTextNode("Este é um novo parágrafo.");
  ```
- **`elementoPai.appendChild(elementoFilho)`**: Adiciona `elementoFilho` como o último filho de `elementoPai`.
  ```javascript
  novoParagrafo.appendChild(textoParagrafo); // Adiciona o texto ao parágrafo
  document.body.appendChild(novoParagrafo); // Adiciona o parágrafo ao body
  ```
- **`elementoPai.insertBefore(novoElemento, elementoReferencia)`**: Insere `novoElemento` antes de `elementoReferencia` dentro de `elementoPai`.
- **`elemento.remove()`**: Remove o próprio elemento do DOM.
  ```javascript
  const elementoARemover = document.getElementById("antigo");
  if (elementoARemover) {
    elementoARemover.remove();
  }
  ```
- **`elementoPai.removeChild(elementoFilho)`**: Remove `elementoFilho` de `elementoPai` (método mais antigo).

### 7.4. Navegação no DOM

A partir de um elemento selecionado, pode navegar para elementos relacionados:

- `elemento.parentNode`: Nó pai.
- `elemento.childNodes`: Nós filhos (inclui texto, comentários - retorna NodeList).
- `elemento.children`: Elementos filhos (apenas elementos HTML - retorna HTMLCollection).
- `elemento.firstChild` / `elemento.lastChild`: Primeiro/último nó filho (pode ser texto).
- `elemento.firstElementChild` / `elemento.lastElementChild`: Primeiro/último elemento filho.
- `elemento.previousSibling` / `elemento.nextSibling`: Nó irmão anterior/seguinte.
- `elemento.previousElementSibling` / `elemento.nextElementSibling`: Elemento irmão anterior/seguinte.

### 7.5. Formulários

- Aceder a elementos de formulário (`input`, `select`, `textarea`) dentro de um `<form>`.
- Ler valores: `inputElement.value`, `checkboxElement.checked`, `selectElement.value`.
- **`formElement.reset()`**: Limpa os campos do formulário para os seus valores iniciais.
- **Evento `submit`**: Disparado quando o formulário é submetido (ver Eventos).

---

## 8. Eventos

Ações que ocorrem na página (cliques, teclas pressionadas, carregamento, etc.) às quais o JavaScript pode reagir.

### 8.1. Adicionar Event Listeners (Ouvintes de Eventos)

A forma moderna e preferida de lidar com eventos.

- **`elemento.addEventListener(tipoEvento, callbackFunction, useCapture)`**:

  - `tipoEvento`: String com o nome do evento (e.g., `"click"`, `"mouseover"`, `"keydown"`, `"submit"`).
  - `callbackFunction`: A função a ser executada quando o evento ocorre. Esta função recebe automaticamente um objeto `Event` como argumento.
  - `useCapture`: Booleano (opcional, default `false`). Define a fase de propagação do evento (bubbling vs capturing). Geralmente `false` é usado.

  ```javascript
  const meuBotao = document.getElementById("meuBotao");

  function handleClick(event) {
    console.log("Botão clicado!");
    console.log("Tipo de evento:", event.type); // "click"
    console.log("Elemento alvo:", event.target); // O próprio botão
    // event.preventDefault(); // Exemplo: previne ação padrão
    // event.stopPropagation(); // Exemplo: para a propagação
  }

  meuBotao.addEventListener("click", handleClick);

  // Ou com arrow function anónima:
  meuBotao.addEventListener("mouseover", (event) => {
    console.log("Mouse sobre o botão!");
    event.target.style.backgroundColor = "lightgray";
  });
  meuBotao.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = ""; // Limpa o estilo
  });
  ```

### 8.2. Tipos Comuns de Eventos

- **Mouse:** `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`.
- **Teclado:** `keydown`, `keyup`, `keypress` (depreciado).
- **Formulário:** `submit` (no elemento `<form>`), `change` (em `<input>`, `<select>`, `<textarea>` quando o valor muda), `input` (quando o valor muda, mais imediato que `change`), `focus`, `blur`.
- **Janela/Documento:** `load` (quando a página e recursos terminaram de carregar), `DOMContentLoaded` (quando o HTML foi carregado e parseado, sem esperar por imagens/CSS), `resize`, `scroll`.

### 8.3. O Objeto `Event`

Passado automaticamente para a função callback do listener. Contém informações sobre o evento.

- **`event.target`**: O elemento que originou o evento.
- **`event.currentTarget`**: O elemento ao qual o listener está anexado (útil com event bubbling).
- **`event.type`**: O tipo de evento (e.g., `"click"`).
- **`event.preventDefault()`**: Método crucial para **cancelar a ação padrão** do browser associada ao evento.
  - Exemplo: Prevenir o envio de um formulário (`submit`) para fazer validação ou envio via AJAX.
  - Exemplo: Prevenir a navegação de um link (`click` num `<a>`) para executar outra ação.
  ```javascript
  const meuForm = document.getElementById("meuForm");
  meuForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio tradicional da página
    console.log("Formulário submetido via JS!");
    // Aqui viria a lógica de validação e/ou envio AJAX
    meuForm.reset(); // Limpa o formulário após processar
  });
  ```
- **`event.stopPropagation()`**: Método para **impedir que o evento se propague** para elementos pais (bubbling) ou filhos (capturing). Usado em cenários mais complexos para evitar que múltiplos listeners sejam disparados indesejadamente.
  ```javascript
  elementoFilho.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede que o clique "suba" para o elementoPai
    console.log("Clique no Filho");
  });
  elementoPai.addEventListener("click", () => {
    console.log("Clique no Pai (não será chamado se o filho for clicado)");
  });
  ```

---

Esta parte abrange a Web Storage API, especificamente o `localStorage`.

---

## 9. Web Storage (`localStorage`)

API para armazenar dados chave-valor no browser do utilizador de forma persistente (não expiram automaticamente).

- **Armazena apenas strings.** Para guardar objetos ou arrays, use `JSON.stringify()` antes de guardar e `JSON.parse()` depois de ler.
- Limite de ~5MB por domínio.
- Síncrono (operações bloqueiam a execução principal - evitar em operações muito pesadas).
- Dados ficam no browser, não são enviados automaticamente para o servidor.

### 9.1. Métodos Principais

- **`localStorage.setItem(key, value)`**: Armazena um par chave-valor. `value` _deve_ ser uma string.
  ```javascript
  const configuracoes = { tema: "dark", fontSize: 14 };
  localStorage.setItem("nomeUtilizador", "Maria");
  localStorage.setItem("config", JSON.stringify(configuracoes)); // Guardar objeto como JSON string
  ```
- **`localStorage.getItem(key)`**: Recupera o valor associado à `key`. Retorna `null` se a chave não existir.
  ```javascript
  const nome = localStorage.getItem("nomeUtilizador"); // "Maria"
  const configStr = localStorage.getItem("config");
  let configObj = null;
  if (configStr) {
    try {
      // É boa prática usar try...catch com JSON.parse
      configObj = JSON.parse(configStr); // Converter JSON string de volta para objeto
    } catch (e) {
      console.error("Erro ao fazer parse do JSON do localStorage:", e);
      // Tratar o erro, talvez remover o item inválido
      localStorage.removeItem("config");
    }
  }
  console.log(configObj?.tema); // Acesso seguro: "dark" ou undefined se configObj for null ou inválido
  ```
- **`localStorage.removeItem(key)`**: Remove o par chave-valor especificado.
  ```javascript
  localStorage.removeItem("nomeUtilizador");
  ```
- **`localStorage.clear()`**: Remove _todos_ os pares chave-valor do domínio atual. **Use com cuidado!**
  ```javascript
  // localStorage.clear(); // Apaga tudo
  ```
- **`localStorage.length`**: Propriedade que retorna o número de itens armazenados.
  ```javascript
  console.log(`Itens no localStorage: ${localStorage.length}`);
  ```
- **`localStorage.key(index)`**: Retorna o nome da chave na posição `index` (útil para iterar, embora menos comum).
  ```javascript
  for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);
    const valor = localStorage.getItem(chave);
    console.log(`Chave: ${chave}, Valor: ${valor}`);
  }
  ```

## 📌 Criar uma data

```javascript
const agora = new Date(); // Data e hora atuais
const dataEspecifica = new Date(2025, 3, 11); // 11 de abril de 2025 (mês é 0-based)
const dataComHoras = new Date(2025, 3, 11, 15, 30); // 11/04/2025 15:30
```

## 📥 Métodos para Obter Componentes da Data

```javascript
date.getFullYear();    // Ano (ex: 2025)
date.getMonth();       // Mês (0 = Janeiro, 11 = Dezembro)
date.getDate();        // Dia do mês (1–31)
date.getDay();         // Dia da semana (0 = Domingo, 6 = Sábado)
date.getHours();       // Hora (0–23)
date.getMinutes();     // Minutos (0–59)
date.getSeconds();     // Segundos (0–59)
date.getMilliseconds(); // Milissegundos (0–999)
date.getTime();        // Timestamp (ms desde 1/1/1970)
```

## ✏️ Métodos para Definir Componentes da Data

```javascript
date.setFullYear(2026);
date.setMonth(5);       // Junho
date.setDate(15);
date.setHours(10);
date.setMinutes(45);
date.setSeconds(30);
```

## ⏱️ Outros Métodos Úteis

```javascript
Date.now(); // Timestamp atual (número de ms desde 1/1/1970)

date.toString();        // "Fri Apr 11 2025 15:30:00 GMT+0100 (WET)"
date.toDateString();    // "Fri Apr 11 2025"
date.toTimeString();    // "15:30:00 GMT+0100 (WET)"
date.toISOString();     // "2025-04-11T14:30:00.000Z"
date.toLocaleDateString(); // Formato local (ex: "11/04/2025")
date.toLocaleTimeString(); // Formato local (ex: "15:30:00")
//Para comprar a data atual com a de um form:
const dataForm = new Date(document.getElementById("txtData").value);
const dataAtual = new Date();
```

## 📏 Comparar Datas

```javascript
const data1 = new Date(2025, 3, 11);
const data2 = new Date();

if (data1 > data2) {
  console.log("Data1 é posterior a Data2");
}
```
## Números Aleatórios
```javascript
const numeroRandom1 = Math.floor(Math.random() * 12) + 1;
const numeroRandom2 = Math.floor(Math.random() * 12) + 1;
```

## Tempo / Temporizador
```javascript
    setTimeout(function () {
      event.target.src = "/Ficha 6/Páscoa/img/DiscoverEggs.png";
    }, 2000);
```

