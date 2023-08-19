// function
function areaQuadrado(lado) {
  return lado * lado;
}
const perimetroQuadrado = new Function('lado', 'return lado * 4');

// propriedades
// Function.name, Function.length
function somar(n1, n2) {
  return n1 + n2;
}
// para acessar os metodos da funcao precisa-se colocar apenas o nome dela, ao ativar a funcao com o () os metodos que aparecerao dependera do retorno da funçao, ou seja, se funçao retornar um numero os metodos que aparecerao sera os de Number
somar.length; // 2  mostra o total de argumentos da funcao
somar.name; // 'somar'


// Function.call(this, arg1, arg2, ...)
const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);  // com o call eu posso substituir o this por um novo objeto
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018  

// this
const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta  substitui o this do forEach percebese, que ele e´inicializado no carros, mas o objeto que é chamado atraves do call e o de frutas

// exemplo real
// O objeto atribuído a lista será o substituído pelo primeiro argumento de call()
function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);

// o objeto deve ser parecido
// O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.
const novoSeletor = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar');

// Array´s e call()
Array.prototype.mostreThis = function() {
  console.log(this);
}

const frutas2 = ['Uva', 'Maçã', 'Banana'];
frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas2); // Remove Banana
frutas.pop(); // Mesma coisa que a função acima

// Array-like
// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.
// geralmente utilizaremos o call, em arrays-like que sao objetos que se parecem com uma array, ex NodeList, HTMLCollection
const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});

filtro; // Retorna os itens que possuem ativo

// Function.apply(this, [arg1, arg2, ...])
// funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

// apply vs call 
//A única diferença é a array como segundo argumento.
const lis = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
  return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);


// function.bind(this, arg1, arg2 ....)
// o bind e´utilizavel quando é preciso usar mais de uma vez essa funçao
const li2 = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li2, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();

// argumentos e bind()
// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.
const carro2 = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
carro.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: 'Honda',
};
const acelerarHonda = carro.acelerar.bind(honda);
acelerarHonda(200, 10);
// Honda acelerou 200 em 10


// argumentos comuns
// Podemos passar argumentos padrões para uma função e retornar uma nova função.
function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); // 21.6
imc180(70); // 21.6










