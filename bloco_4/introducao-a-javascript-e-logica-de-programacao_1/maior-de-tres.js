let a = 90;
let b = 55;
let c = 70;

if (a > b && a > c){
  console.log("A variável 'a' é maior:", a);
}
else if (b > a && b > c){
  console.log("A variável 'b' é maior:", b);
}
else if (c > a && c > b){
  console.log("A variável 'c' é maior:", c);
}
else {
  console.log("Por algum motivo, não é possível determinar qual variável é maior... Existem números iguais?");
}