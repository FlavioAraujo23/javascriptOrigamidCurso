//Function Expression

// FUNCTION DECLARATION
// São duas as formas mais comuns de declararmos uma função. A que utilizamos até o momento é chamado de Function Declaration.
function somar(a,b) {
  return a + b;
}
somar(4,2); // 6



// FUNCTION EXPRESSION
// É criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.
const somar = function(a,b) {
  return a + b;
}
somar(4,2); // 6



// HOISTING
// Function Declarations são completamente definidas no momento do hoisting, já function expressions apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma FE possui importância.
somar(4,2); // 6  o hoisting joga a function declaration somar lá pra cima do script antes de inicializar ela, por isso acontec o erro abaixo, por que no momento do hoisting ela irá para a temporary deadzone, ou seja, ao declarar uma function expression ela deverá ser inicializada depois da declaração
dividir(4,2); // Erro

function somar(a,b) {
  return a + b;
}
const dividir = function(a,b) {
  return a / b;
}



// ARROW FUNCTION
// Podemos criar utilizando arrow functions.

const somar = (a, b) => a + b;
somar(4,2); // 6

const quadrado = a => a * a;  // o que esta antes são os parametros e o que esta depois é o return da function
quadrado(4); // 16



// ESTRUTURA / PREFERÊNCIA
// Geralmente o uso entre expression / declaration é uma questão de preferência. Function Expression força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.

// Declarada como método de window
// vaza o escopo de bloco, como se
// fosse criada utilizando var
function somar(a,b) {
  return a + b;    // utilizar quando precisar usar a função antes da declaração da mesma 
}
const dividir2 = (a,b) => a / b; // a avantagem de definir como function expression, é que ela não irá para o window, sendo assim não ira interfirir em funçoes ja existentes no objeto window

somar(4,2);
dividir(4,2);


// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
// Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's.

var instrumento = 'Violão';

(function() {
  // código isolado do escopo global
  var instrumento = 'Guitarra';
  console.log(instrumento); // Guitarra
})();

console.log(instrumento); // Violão


// IIFE - ARROW FUNCTION
// Compiladores ainda transformam modules em IIFE's para manter a compatibilidade com browsers antigos.

const instrumento = 'Violão';

(() => {
  const instrumento = 'Guitarra';
  console.log(instrumento); // Guitarra
})();

console.log(instrumento); // Violão