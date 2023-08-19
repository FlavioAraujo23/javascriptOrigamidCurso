// Array
const instrumentos = ['guitarra', 'baixo']
const precos = [49,99,69,89]

const dados = [ new String('tipo 1'), ['carro', 'portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2] ('ford');
dados[1][2].cor // azul   acessando uma array depois acessa outra array dentro da mae

// construçao de arrays
const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11
// os valores de arr\y nao sao estaticos

// Array.from()
let li = document.querySelectorAll('li');  // nodeList
li = Array.from(li);  // Array

const carros2 = {
  0: 'fiat',
  1: 'honda',
  2: 'ford',
  length: 4,      // para trasnformar um objeto em array é necesario ter a propriedade length no objeto
}

const carrosArrays = Array.from(carros2)

// Array.isArray
let img = document.querySelectorAll('img');  // NodeList
Array.isArray(img)  // false
img = Array.from(img)  // transformando em uma array
Array.isArray(img)  // true

// Array.of(), Array(), new Array ()
Array.of(10);  // [10]
Array.of(1,2,3,4) // [1,2,3,4]
new Array(5)  // [....]
Array(5); // [...]
Array(1,2,3,4)  // [1,2,3,4,]

//[].length retorna o tamanho da array
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3
frutas[0].length; // 6 pega o length da string ou seja banana com 6 letras
frutas[1].length; // 4
frutas[2].length; // 2

// Metodos modificadore [].sort()
const instrumentos23 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos23.sort();  // organiza por ordem alfabetica
instrumentos23; // ['Baixo', 'Guitarra', Violão]

const idades = [32,21,33,43,1,12,8];
idades.sort();   // aqui ele passa organizando no primeiro valor, por ordem numerica, e depois passa pelo segundo caracter
idades; // [1, 12, 21, 32, 33, 43, 8]

// [].unshift() e [].push()
const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

// [].shift [].pop
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford'  retira o primeiro item da array
carros; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros.pop(); // 'Honda'  retira o ultimo item da array
carros; // ['Fiat', 'VW'];

// [].reverse
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];   reverte a ordem da array

// [].splice(index, remover, item1, item2)
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang'); // []  adicionou a array kia e mustang a partir do index 1, o segundo valor serve para indicar quantos itens remover ao adicionar, no caso foi 0, importante o .splice retorna o itens removidos
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

// [].copyWithin(alvo, inicio, final)
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);  // o primeiro parametro e para dizer em que qual index irar começar a copiar que no caso e 2, o segundo sera onde sera o inicio que sera colocado essa copia que no caso e 0, e por ultimo ate onde ira essa copia que no caso e 3
// ['Item1', 'Item2', 'Item1', 'Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

// [].fill(valor, inicio, final)
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']  preenche toda a array com o valor passado

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']   preenche a partir do index 2

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4'] preenche a partir do index 1 e vai ate o 3

// metodos de acesso
// os metodos abaixo nao modificam a array original, apenas retornam uma array modificada

//[].concat()
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

//[].includes(valor), [].indexOf(valor), [].lastindexOf(valor)
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true   retorna true ou false se array contem o valor passado
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4     retorna o primeiro index do valor passado, ou seja, caso tenha 2 pythons na array retorna o index do 1 
linguagens.indexOf('js'); // 2  caso passe um valor que nao existe na array ele irar retornar um numero negativo -1
linguagens.lastIndexOf('js'); // 5     retorna o index do valor passado, que esteja no final do array


// [].join(separador)
const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens.join(); // 'html,css,js,php,python'   junta a array em uma string unica, caso passe um valor ele sera usado como o separador dessa junçao, passa a virgula por padrao
linguagens.join(' '); // 'html css js php python'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>

// [].slice(inicio, final)
const linguagens3 = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python']   retorna a partir do valor passado os restantes itens da array
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();









