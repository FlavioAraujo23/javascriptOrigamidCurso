// Loops e Iterable

// ITERABLE
// São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros.
const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers));



// FOR...OF
// É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.
for(const fruta of frutas) { // primeiro definimos a variavel unica, e depois é passado o objeto, o retorno disso é o mesmo de fazer um foreach
  console.log(fruta);
}  // cada iteração pe diferente

for(const char of frase) { //no caso de string retorna cada letra/caracter da frase
  console.log(char);
}



// SPREAD E FOR...OF
// Com o for loop podemos manipular cada um dos elementos do objeto iterável.
const buttons = document.querySelectorAll('button');
for(const btn of buttons) { // fazendo um loop por cada botão e adicionando um bg blue
  btn.style.background = 'blue';
}
console.log(...buttons); // mostra cada um dos botoes, só serve para objetos iteraveis



// APENAS ITERÁVEIS
// O for...of não irá funcionar em um objeto comum que não seja iterável.
const carro = {
  marca: 'Honda',
  ano: 2018,
}

// Erro, não é Iterável
for(const propriedade of carro) {
  console.log(propriedade);
}



// FOR...IN
// Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.
const carro2 = {
  marca: 'Honda',
  ano: 2018,
}

for(const propriedade in carro2) { //retorna a key do objeto => marca, ano
  console.log(propriedade,carro2[propriedade]);
}


// ARRAYS E FOR...IN
// Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.
for(const index in frutas) {  // mostra o index, o melhor a se fazer em uma array é utilizar o for of
  console.log(index);
}

for(const index in frutas) {
  console.log(frutas[index]);
}


// CHAVE E VALOR
// Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

for(const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`); // loop que retorna primeiro a chave, o segundo retorna a propriedade
}


// DO / WHILE
// Outro tipo de loop é o Do / While. Não é muito utilizado.
let i = 0;
do {
  console.log(i++)
} while (i <= 5);