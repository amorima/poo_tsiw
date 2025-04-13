const compra = {
  nomeProduto: "",
  catProduto: "",
};

compra.nomeProduto = prompt("Indique o Nome do Produto: ");
compra.catProduto = prompt("Indique a Categoria do Produto :");

console.log(compra);

compra.precoBase = 2.1;

compra.txIVA = 23;

compra.precoBase = 2.5;

(compra.precoFinal = function () {
  let preco = this.precoBase * (this.txIVA / 100 + 1);
  return preco;
}),
  console.log(compra);

compra.dadosEncomenda = {};

compra.dadosEncomenda.dataEncomenda = "2023-03-27";
compra.dadosEncomenda.prazoEntrega = 7;
compra.dadosEncomenda.localEntrega = "Avenida do Mar, 74, 4460-810 Matosinhos";

console.log(compra);

showLength = () => {
  console.log(compra.length);
};

showLength();
