let custoProduto = 100;
let valorVenda = 200;
let valorCustoTotal = custoProduto + ((custoProduto*20)/100);
let lucro = valorVenda - valorCustoTotal;

if ((custoProduto < 0) || (valorVenda < 0)){
  console.log("O custo do produto ou seu valor de venda não podem ser inferiores a 0.");  
}
else{
  console.log(lucro);
}