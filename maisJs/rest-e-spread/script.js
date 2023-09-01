// Rest e Spread

// PARÂMETROS
// Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.
function perimetroForma(lado, totalLados) {
  return lado * totalLados;
}
perimetroForma(10, 4); // 40
perimetroForma(10); // NaN



// PARÂMETRO PADRÃO (DEFAULT) ES5
// Antes do ES6 a forma de definirmos um valor padrão para um parâmetro, era através de uma expressão.
function perimetroForma(lado, totalLados) {
  totalLados = totalLados || 4; // se não for definido, será igual à 4
  return lado * totalLados;
}
perimetroForma(10, 3); // 30
perimetroForma(10); // 40



// PARÂMETRO PADRÃO (DEFAULT) ES6+
// Com o ES6 é possível definirmos o valor de um parâmetro direto na declaração do mesmo, caso o argumento não seja passado no momento da execução.
function perimetroForma(lado, totalLados = 4) {
  return lado * totalLados;
}

perimetroForma(10, 5); // 50
perimetroForma(10); // 40



// ARGUMENTS
// A palavra chave arguments é um objeto Array-like(objeto que se parece com uma array) criado dentro da função. Esse objeto contém os valores dos argumentos.
function perimetroForma(lado, totalLados = 4) {
  console.log(arguments)
  return lado * totalLados;
}
perimetroForma(10);
perimetroForma(10, 4, 20);



// PARÂMETRO REST
// É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.
// só poderá existir um parametro rest por função
// pode ser passado outros valores para serem argumentos antes do rest, desde que eles não utilizem os ...
function anunciarGanhadores(...ganhadores) {  // o parametro ganhadores irá receber todos or argumento passados, ou seja, varios argumentos, e ele irá armazenar em uma array
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou.')
  });
}

anunciarGanhadores('Pedro', 'Marta', 'Maria');


// ÚNICO REST
// Só é possível ter um único parâmetro rest e ele deve ser o último.
function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}
anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');



// REST VS ARGUMENTS
// Apesar de parecidos o parâmetro rest e a palavra arguments possuem grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.
function anunciarGanhadores(premio, ...ganhadores) {
  console.log(ganhadores);
  console.log(arguments);
}
anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');



// OPERADOR SPREAD
// Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.
const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];
// o spread pega cada item que está dentro da variavel frutas e distribui um por um dentro do array de comidas
const comidas = [...frutas, 'Pizza', ...legumes];


// SPREAD ARGUMENT
// O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.
const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximoSpread = Math.max(...listaNumeros);



// TRANSFORMAR EM ARRAY
// É possível transformar itens iteráveis em uma array real com o spread.

const btns = document.querySelectorAll('button');
const btnsArray = [...btns];  // transformando uma node list em array com o spread

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];