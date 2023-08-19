// exercicios

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoas.prototype.nomeCompleto = function(){
  return `nome completo: ${this.nome} ${this.sobrenome}`
}

const eu = new Pessoas('Flavio', 'Lopes', 23)
console.log(eu.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
NodeList.prototype // ira mostrar todos os metodos acessados
Object.getOwnPropertyNames(NodeList.prototype) // mostra uma lista com os metodos de uma node list
document.prototype
Object.getOwnPropertyNames(document.prototype)  // Document com letra maisucula e a funcaomque constroi o objeto document
HTMLCollection.prototype
Object.getOwnPropertyNames(HTMLCollection.prototype)
// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li.constructor.name; 
li.click.constructor.name; 
li.innerText; 
li.value;  
li.hidden;
li.offsetLeft; 
li.click();  

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // string

