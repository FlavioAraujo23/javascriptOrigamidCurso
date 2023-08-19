// ESCOPO DE FUNÇAO
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro(); // Fusca no console
//console.log(carro); // Erro, carro is not defined
//ESCOPO EVITA O CONFLITO ENTRE NOMES

// VARIAVEL GLOBAL (ERRO)
function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro);
}
mostrarCarro(); // Fusca
console.log(carro); // Fusca
// 'use strict' impede isso pois torna o javascript extritramente

// {} CRIA UM BLOCO
{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
//console.log(ano); // erro ano is not defined


// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  var marca = 'Fiat';
  var portas = 4;
}
console.log(cor, marca, portas);

// Como corrigir o erro abaixo?
 const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);
console.clear()
// O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

