//forEach
//Parametros do forEach
//const imgs = document.querySelectorAll('img');
//imgs.forEach(function(valorAtual, index, array){
 // console.log(item);  // o item atual do loop
//  console.log(index); // o numero do index
 // console.log(array); // a array completa
//})

//forEach e array, transformando uma array-like
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos); // passando o titulos que e uma array-like e transformando em uma array

titulosArray.forEach(function(item){
  console.log(item)
})

// ARROW FUNCTION
// substituo a palavra chave function por uma fat arrow =>, antes tera que ser passados os argumentos (item,index, array)
//imgs.forEach((item) => {

//})

//Argumentos e Parenteses
//Argumento unico nao precisa de parenteses
//imgs.forEach(item => {
  ///console.log(item)
//})
// multiplos argumentos precisam de parenteses
//imgs.forEach((item, index) => {
 // console.log(item, index);
//})
//sem parametro precisam dos parenteses, mesmo vazio
//let i = 0;
//imgs.forEach(() => {
 // console.log(i++)
//})

// Return
//imgs.forEach(item => console.log(item))
// tambem e possivel nao utilizar chaves{} em codigos de uma linha



// Mostre no console cada parágrado do site
const todosP = document.querySelectorAll('p')
todosP.forEach((item) => console.log(item))

// Mostre o texto dos parágrafos no console
todosP.forEach((item) => console.log(item.innerText))
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

