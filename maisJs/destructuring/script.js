// DESTRUCTURING
// Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis.
const carro = {
  marca: 'Fiat',
  ano: 2018,
  portas: 4,
}

const {marca, ano} = carro;  // puxando marca e ano, isso em obj, serão salvos em constantes
// ao passar algo que não existe no objeto, o valor sera undefined
console.log(marca); // Fiat
console.log(ano); // 2018



// DESTRUCTURING OBJECTS
// A desestruturação irá facilitar a manipulação de dados. Principalmente quando temos uma grande profundidade de objetos.

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

const {livros, videos} = cliente.compras.digitais; // não repete codigo e consequentemente o torna mais limpo
// é necessario ir no nivel que está o objeto no caso acima se for colocado apenas o = cliente, o retorno dessa constante será undefined pois não há nenhuma propriedade livros ou videos nesse nivel

console.log(livros);
console.log(videos);



// NESTING
// É possível aninhar uma desestruturação dentro de outra.

const client = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros1: ['Livro 1', 'Livro 2'],
      videos1: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

const {fisicas, digitais, digitais: {livros1, videos1}} = cliente.compras; // ao puxar digitais retorna o objeto completo, agora em digitais: {livros1, videos1} isso é utilizado para fazer outra desestruturação e ser mais especifico que o que irar retornar seja apenas os livros1 e videos1 que estiverem dentro de digitais

console.log(fisicas);
console.log(livros);
console.log(videos);
console.log(digitais);


// NOME DAS VARIÁVEIS
// É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto. É possível mudar o nome da variável final com:

const cliente2 = {
  nome: 'Andre',
  compras: 10,
}

const {nome, compras} = cliente2; // aqui a variavel é exatamente o nome da propriedade
// ou
const {nome: nomeCliente, compras: comprasCliente} = cliente2; // aqui o nome da varivel é mudado ao acessar a propriedade com nome: e depois é passado o nome a ser dado a variavel.



// VALOR INICIAL
// Caso a propriedade não exista o valor padrão dela será undefined. É possível modificar este valor no momento da desestruturação.
const {nome: nomeDoCliente, compras: comprasDoCliente, email = 'email@gmail.com', cpf} = cliente; // pode ser atribuido um valor padrão a uma propriedade que não exista no objeto ex => email = 'email@gmail.com'
console.log(email) // email@gmail.com
console.log(cpf) // undefined



// DESTRUCTURING ARRAYS
// Para desestruturar array's você deve colocar as variáveis entre [] colchetes.
const frutas = ['Banana', 'Uva', 'Morango'];
const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];
// Com destructuring
const [primeira, segunda, terceira] = frutas;   // aqui pode ser definido qualquer valor a variavel pois array´s não tem chave,



// DECLARAÇÃO DE VARIÁVEIS
// A desestruturação pode servir para declararmos uma sequência de variáveis.
const primeiro1 = 'Item 1';
const segundo2 = 'Item 2';
const terceiro3 = 'Item 3';
// ou
const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; // declarando variaveis que sejam parecidas com uma desestruturação de array



// ARGUMENTO DESESTRUTURADO
// Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração.

function handleKeyboard(event) {
  console.log(event.key);
}
// Com Destructuring
function handleKeyboard({key}) { // desestruturando o objeto event, e buscando apenas a propriedade key
  console.log(key);
}

document.addEventListener('keyup', handleKeyboard);