let nome = prompt("Seu nome: ");
let preco = Number(prompt("Preço do produto: "));
const nomeLanchonete = "Lanchetech";
let nomeProduto = prompt("Nome do produto: ");
let quantidade = Number(prompt("quantidade: "));
const subtotal = preco * quanidade;
let taxaEmbalagem = 2;
let numeroPedido = 23445;
let estoqueInicial = 20;
let estoqueFinal = estoqueInicial - quantidade;
let statusPedido;

if (quantidade <= 0 && quantidade > estoqueInicial){
    statusPedido = false;
} else{
    statusPedido = true;
}
let valorTotalDesconto;
if ( statusPedido == true && subtotal >= 100 ){
valorTotalDesconto = subtotal * 1.10;
} else if ( statusPedido == true && subtotal >= 50 && subtotal < 100){
    valorTotalDesconto = subtotal * 1.05;
} else {
    console.log('não ganha desconto');
    valorTotalDesconto = - subtotal;
}
let valorTotal = subtotal - valorTotalDesconto + taxaEmbalagem;
if (statusPedido){
    valorTotal = subtotal - valorTotalDesconto + taxaEmbalagem
    
console.log("cliente: ", nome);
console.log("numero do pedido: ", numeroPedido);
console.log("Produto: ",nomeProduto);
console.log("quantidade: ", quantidade);
console.log("preço: ", preco);
console.log("valor total: R$", valortotal.toFixed(2));
}
