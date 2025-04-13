// Equação de Friedwald: LDL = CT - HDL - 0,2 ⋅ TG
// CT - colesterol total (mg/dL)
// HDL (lipoproteína de alta densidade) (mg/dL)
// TG – triglicerídeos (mg/dL)
// Abaixo de 115 mg/dL em pessoas com baixo risco coronariano (SCORE < 5%)
// Abaixo de 100 mg/dL em pessoas com  risco coronariano médio (SCORE 5%-10%)
// Abaixo de 70 mg/dL em pessoas com alto risco coronariano (SCORE > 10%)

let col = 0;
let hdl = 0;
let tri = 0;
let ldlC = 0;
let riscoVascular;
let tabelaLdlC = [];
let tabelaHtml = [];
let tabelaPrender = [];
let tabela = [];
const tabelaHeader = `
        <tr class="bg-slate-200">
          <th class="border border-gray-400 p-2 px-2">Colesterol</th>
          <th class="border border-gray-400 p-2 px-2">HDL</th>
          <th class="border border-gray-400 p-2 px-2">Triglicerídeos</th>
          <th class="border border-gray-400 p-2 px-2">LDL</th>
          <th class="border border-gray-400 p-2 px-2">Risco Cardiovascular</th>
        </tr>
      `;

document.addEventListener("click", (event) => {
  if (event.target.id === "calcular") {
    col = parseInt(document.getElementById("colesterol").value);
    hdl = parseInt(document.getElementById("hdl").value);
    tri = parseInt(document.getElementById("tri").value);
    ldlC = parseInt(col - hdl - 0.2 * tri);
    let campoLdl = document.getElementById("campoLdl");
    campoLdl.placeholder = ldlC;
    if (ldlC < 5) {
      riscoVascular = "Baixo Risco Coronário";
    } else if (ldlC >= 5 && ldlC <= 10) {
      riscoVascular = "Risco Coronário Médio";
    } else {
      riscoVascular = "Alto Risco Coronário";
    }
  }

  if (event.target.id === "submeter") {
    tabelaLdlC.push({ col, hdl, tri, ldlC, riscoVascular });
    localStorage.setItem("ldlC", JSON.stringify(tabelaLdlC));
    tabela = localStorage.getItem("ldlC");
    tabelaPrender = JSON.parse(tabela);
    tabelaHtml.innerHTML = tabelaHeader;
    tabelaPrender.forEach((element) => {
      tabelaHtml = document.getElementById("tabela");
      tabelaHtml.innerHTML += `
          <tr>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.col}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.hdl}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.tri}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.ldlC}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.riscoVascular}</td>
          </tr>
          `;
    });
  }

  if (event.target.id === "filtrar") {
    let listaFiltros = document.getElementById("ldl");
    tabela = localStorage.getItem("ldlC");
    tabelaPrender = JSON.parse(tabela);
    tabelaHtml.innerHTML = tabelaHeader;
    if (listaFiltros.value === "todos") {
      tabelaPrender.forEach((element) => {
        tabelaHtml = document.getElementById("tabela");
        tabelaHtml.innerHTML += `
          <tr>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.col}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.hdl}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.tri}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.ldlC}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.riscoVascular}</td>
          </tr>
          `;
      });
    } else if (listaFiltros.value === "alto risco") {
      tabelaPrender.forEach((element) => {
        tabelaHtml = document.getElementById("tabela");
        if (element.riscoVascular === "Alto Risco Coronário")
          tabelaHtml.innerHTML += `
          <tr>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.col}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.hdl}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.tri}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.ldlC}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.riscoVascular}</td>
          </tr>
          `;
      });
    } else if (listaFiltros.value === "risco médio") {
      tabelaPrender.forEach((element) => {
        tabelaHtml = document.getElementById("tabela");
        if (element.riscoVascular === "Risco Coronário Médio")
          tabelaHtml.innerHTML += `
          <tr>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.col}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.hdl}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.tri}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.ldlC}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.riscoVascular}</td>
          </tr>
          `;
      });
    } else if (listaFiltros.value === "baixo risco") {
      tabelaPrender.forEach((element) => {
        tabelaHtml = document.getElementById("tabela");
        if (element.riscoVascular === "Baixo Risco Coronário")
          tabelaHtml.innerHTML += `
          <tr>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.col}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.hdl}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.tri}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.ldlC}</td>
            <td class="border border-gray-400 p-2 px-2 font-normal">${element.riscoVascular}</td>
          </tr>
          `;
      });
    }
  }
  if (event.target.id === "ordenarAsc") {
    tabelaHtml.innerHTML = tabelaHeader;
    tabelaPrender.sort((a, b) => a.ldlC - b.ldlC);
    tabelaPrender.forEach((element) => {
      tabelaHtml.innerHTML += `
        <tr>
          <td class="border border-gray-400 p-2 px-2 font-normal">${element.col}</td>
          <td class="border border-gray-400 p-2 px-2 font-normal">${element.hdl}</td>
          <td class="border border-gray-400 p-2 px-2 font-normal">${element.tri}</td>
          <td class="border border-gray-400 p-2 px-2 font-normal">${element.ldlC}</td>
          <td class="border border-gray-400 p-2 px-2 font-normal">${element.riscoVascular}</td>
        </tr>
        `;
    });
  }
  if (event.target.id === "ordenarDesc") {
    tabelaHtml.innerHTML = tabelaHeader;
    tabelaPrender.sort((a, b) => b.ldlC - a.ldlC);
    tabelaPrender.forEach((element) => {
      tabelaHtml.innerHTML += `
        <tr>
          <td class="border border-gray-400 p-2 px-2 font-normal">${element.col}</td>
          <td class="border border-gray-400 p-2 px-2 font-normal">${element.hdl}</td>
          <td class="border border-gray-400 p-2 px-2 font-normal">${element.tri}</td>
          <td class="border border-gray-400 p-2 px-2 font-normal">${element.ldlC}</td>
          <td class="border border-gray-400 p-2 px-2 font-normal">${element.riscoVascular}</td>
        </tr>
        `;
    });
  }
});