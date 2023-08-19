// array iteraçao
// forEach(callback(itemAtual, index, array))
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
  console.log(item.toUpperCase());
});

// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});


// arrow function
const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
  item.classList.add('ativa');
});


// [].map(callback(itemAtual, index, array))
// funciona igual ao forEach, a diferença é que o forEach sempre retorna undefined, ja o map retorna sempre uma array, para isso é preciso definir o return para cada item
// o map entao vai servir para quando vc quer retornar os iens de uma array moddificados
const newCarros = carros.map((item) => {
  return 'Carro' + item;
})
carros; // ['Ford', 'Fiat', 'Honda']
newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

// ARROW FUNCTION E [].MAP()
// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];


// [].map() com objetos
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];  retornando o valor de minutos da aula, que esta dentro de uma array de objetos

const puxarNomes = aula => aula.nome;  // crio a variavel com uma function que passa pelo primeiro nome da aula na array
const nomesAulas = aulas.map(puxarNomes); // itero sobre cada nome, retornando eles
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']


// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => { // quando nao e passado o valor inicial do acumulador ele ira pular o primeiro item do array, e ransformar o valor do acumulador no valor do primeiro item
  return acumulador + atual;  // retornando a iteraçao da soma do iterador com o valor atual que e simplesmente cada valor da array
});
total1; // 65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
total2; // 165   agora por ser definido no final, o valor inicial do acumulador sera 100

//  retorna 65


// MAIOR VALOR COM [].REDUCE()
const numeros4 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros4.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior; // o valor do anterior é menor que o valor do atual, se sim retorne o atual, se nao retorne o anterior
});

maiorValor; // 60

// podemos retornar outros valores com reduce
const aulas4 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas4.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;   // retorna apenas os nomes de cada aula
  return acumulador;
}, {}) // pássando um objeto vazio para armazenar as aulas passadas pelo acumulador


// [].reduceRight()
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

// [].some()
// se pelo menos um return da iteração for truthy, ele retorna true.
const frutas4 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas4.some((fruta) => {
  return fruta === 'Uva';
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros1 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros1.some(maiorQue100); // true


// [].every()
// se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.
const frutas2 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas2.every((fruta) => {
  return fruta; // false
});

const numeros2 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros2.every(x => x > 3); // true


// [].find() e [].findindex()
const frutaas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutaas.findIndex((fruta) => {
  return fruta === 'Uva'; // retorna o index do primeiro valor truthy
}); // 2

const numerros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numerros.find(x => x > 45); // 88  retorna o primeiro valor truth, neste caso foi iterado no array um numero que for maior que 45, o retorno dessa iteraçao foi 88, ou seja o primeiro valor truthy


// [].filter()
// retorna uma array somente com os valores que forem truthy
const frutasFilter = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutasFilter.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numerosFilter = [6, 43, 22, 88, 101, 29];
const buscaMaior45em = numerosFilter.filter(x => x > 45); // [88, 101]

// [].filter() em objetos
const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas3.filter((aula) => { 
  return aula.min > 15;  /// retorna os objetos que estao na array, onde que o valor que esta na propriedade min tenq ser maior que 15
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]







