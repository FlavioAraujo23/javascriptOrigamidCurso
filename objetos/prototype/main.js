//prototype
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const flavio = new Pessoa('Flavio', 20);
console.log(Pessoa.prototype); // retorna o objeto pq prototype esta sempre na funçao
console.log(flavio.prototype); // retorna undefined pq 'flavio' é um objeto e não uma funçao


//funcao.prototype
Pessoa.prototype.andar = function() {
  return this.nome + ' andou'
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou'
}
console.log(Pessoa.prototype); // retorna o objeto
console.log(flavio.nadar())
// se exitir um metodo com o mesmo nome no objeto ele sera executado, caso nao, o metodo do prototype ira executar


//proto
// acessam o mesmo metodo
// mas __proto__ não tera
// acesso ao this.nome
flavio.andar()
flavio.__proto__.andar(); // nunca deve se usar assim


// herança de prototipo
// o objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do prototipo object
Object.prototype;
flavio.toString();
flavio.isPrototypeOf();
flavio.valueOf();


// construtores nativos
const pais = 'Brasil';
const cidade = new String('Rio');
// como na cidade, a variavel brasil por um breve segundo vai ser instanciado em uma constructor, e assim podera acessar seus metodos e propriedades como no exemplo abaixo 

pais.charAt(0); // ira acessar a letra B
cidade.charAt(0); // ira acessar a letra R

console.log(String.prototype);


// é possivel acessar a funçao do prototipo
const lista = document.querySelectorAll('li');

// transforma em uma array  aq ele transforma uma nodelist em uma array
const listaArray = Array.prototype.slice.call(lista);
// EXISTE O METODO ARRAY.FROM()


// metodo do objeto vs prototipo
Array.prototype.slice.call(lista);
Array.from(lista);

//retorna uma lista com os metodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);
// dado.constructor.namw, retorna o nome do construtor

// apenas os metodos do prototipo sao herdados
[1,2,3].slice(); // existe
[1,2,3].from(); // nao existe


// entenda o que esta sendo retornado
const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}
Carro // object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // function isso ocrre por nao executar a funçao e sim apenas passar o nome dela, isso lhe dara acesso a todos metodos do consturctor function
Carro.acelerar() // Boolean isso ocrre por excutar a funçao ou seja ira retornar o que tem nela, com isso da para se acessar os metodos do constuctor boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

// verifique o nome do construtor com .constructor.name
console.clear

// exercicios

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function pessoas(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  nomeCompleto = function() {
    return `nome completo: ${nome} ${sobrenome}`
  }
}

const eu = new pessoas('Flavio', 'Lopes', 23)
console.log(eu.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

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
li.hidden.constructor.name;
