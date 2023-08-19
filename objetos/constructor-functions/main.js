// objetos
// constructor functions
function Carro() {
  this.marca = 'Marca';  // this se refere ao objeto, carro no caso, para buscar a propriedade que deseja
  this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
const fiat = new Carro();  // cria um novo objeto, baseado na funçao construtora
fiat.marca = 'Fiat';
fiat.preco = 3000;

// usar Pascal Case, ou seja, letra maiuscula no inicio


// new Keyword
const honda = new Carro();

// 1 cria um novo objeto
honda = {};

// 2 define o prototipo
honda.prototype = Carro.prototype;

// 3 aponta a variavel this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}


// parametros e argumentos
function carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro('honda', 4000);
const fiat = new Carro('fiat', 3000)


// this keyword
function Carro(marca, precoInicial) {
  const taxa = 1.2;  // o objeto nao tem acesso a essas variaveis, ele tera apenas se passar o this ex: this.taxa
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this)
}
const ferrari = new Carro('Ferrari', 3000)


// exemplo real
//const dom = {
//  seletor: 'li',
//  element() {
//    return document.querySelector(this.seletor);
//  },
//  ativo() {
//    this.element().classList.add('ativo');
//  },
//}
//dom.ativo();    // adiciona ativo ao li
//dom.seletor = 'ul';    // troca o seletor de li para ul
//dom.ativo();   // adiciona ativo ao ul


// transformando o exemplo real em uma contructor
function dom(seletor) {
 this.element = function() {
  return document.querySelector(seletor)
 }
 this.ativar = function() {
  this.element().classList.add('ativar');
 }
}
const li = new dom('li');
const ul = new dom('ul');


// exercicios

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + ' andou')
  } 
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
 const joao = new Pessoa('joao', 20);
 const maria = new Pessoa('maria', 25);
 const bruno = new Pessoa('bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
function Dom(tag, classe) {
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
 this.elements = function() {
    return document.querySelectorAll(tag)
  }
// addClass(classe), adiciona a classe a todos os elementos
 this.addClass = function() {
  this.elements().forEach((item) => {
    item.classList.add(classe)
  })
 }
// removeClass(classe), remove a classe a todos os elementos
this.removeClass = function() {
  this.elements().forEach((item) => {
    item.classList.remove(classe)
  })
}

}
