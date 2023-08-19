// OPERADORES DE ATRIBUIÇAO
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)
// funcionam como formas abreviadas

//OPERADOR TERNARIO
let idade = 20;
let podeBeber = (idade >= 18) ? 'pode beber' : 'Nao pode beber';
console.log(podeBeber) //pode beber
// condiçao ? true : false
// primeiro passa a condiçao, se a condiçao for verdadeira retorna oq foi colocado logo apos o ?, se nao utiliza-se os : e depois passa a condiçao caso for falso
// geralmente e´utilizado quando precisamos definir o valor de uma variavael, dependendo de algo 

// if abreviado
//nao e necessario abrir e fechar chaves {} quando retornanamos uma linha de codigo

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa)