// CRIANDO UM OBJETO
//Um objeto é criado utilizando as chaves {}
let moto = {};
let pessoa = {};
console.log(typeof carro); // 'object'

// Dot Notation Get
// acesse as propriedades de um objeto utilizando o ponto .
let menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2 // this e esse objeto, com isso ele ira pegar a propriedade e trazer ela para dentro do metodo, caso exista uma variavel fora do escopo com o mesmo nome, ira selecionar a propriedade de dentro do objeto pois para isso que serve o this
  }
}
let bg = menu.backgroundColor; // #84E
//Dot Notstion Set
menu.backgroundColor = '#000' // substituindo o valor da propriedade utilizando o ponto . e = apos o nome da mesma 
menu.color = 'blue'; // serve tambem para adicionar novas propriedades
menu.esconder = function() {
  return 'escondi'
} // serve tambem para adicionar funcoes
// GET significa pegar o valor, e SET adicionar um valor

//PROTOTIPO E HERENÇA
let nav = {
  width: 800,
}
nav.hasOwnProperty('width') // true
nav.hasOwnProperty('height') // false
// metodo que retorna se a propriedade existe dentro do objeto, é um metodo de object que é herdado ao criar um 

// exercicios
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let dadosPessoais = {
  nome: 'Flavio',
  sobrenome: 'Araujo',
  mostraNome() {
    console.log(`${this.nome} ${this.sobrenome}`)
  }
}
dadosPessoais.mostraNome()
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let homem = true
let labrador = {
  cor: 'preto',
  idade: 10,
  late() {
    if (homem === true) {
      console.log('cachorro late')
    }
  }
}

