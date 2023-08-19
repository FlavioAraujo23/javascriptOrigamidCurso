// Crie uma função para verificar se um valor é Truthy
function verificarValor(valor){
  if(!! valor){ // operador de negaçao !! verifica se o valor e truthy ou falsey
    console.log('o valor e truthy')
  } else{console.log('o valor e falsey')}
}
verificarValor(0)
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function somaQuadrado(lado1, lado2, lado3, lado4){
  let totalQuadrado = lado1 + lado2 + lado3 + lado4
  return console.log(`o perimetro do quadrado é: ${totalQuadrado}`)
}
somaQuadrado(4,8,2,6)

console.clear()
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto (nome, sobrenome){
  return console.log(`seu nome completo é: ${nome} ${sobrenome}`)
}
nomeCompleto('Flavio', 'Araujo')
// Crie uma função que verifica se um número é par
function numeroPar(numero){
  let resultado = numero % 2  //utilizo o modulo da divisao para verificar se o numero e par, obs: so sera se o resto da divisao de 0
  if(resultado === 0){
    return console.log(`o numero ${numero} e par`)
  }
  return console.log(`o numero ${numero} é impar`)
}
numeroPar(9)

console.clear()

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado (dado){
  return console.log(typeof dado)
}
tipoDeDado('qual tipo de dado e esse')

console.clear()

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
let nome = {meu:'nome'}
//addEventListener("scroll", nome)
console.clear()
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
