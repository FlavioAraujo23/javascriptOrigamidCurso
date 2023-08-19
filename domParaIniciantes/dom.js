//O QUE É DOM?
//Document Object Model (DOM)
console.log(window);
//window é o objeto global do browser
//possui diferentes metodos e propriedades
window.innerHeight; // retorna a altura do browser

// Window e Document
window.alert('isso e um alerta');
alert('isso e um alerta');    // funciona
document.querySelector('h1'); // seleciona o primeiro h1
document.body;                // retorna o body
// window é um objeto global, por isso nao precisamos chamar ele na frente dos seus metodos e propriedades

// Node
const titulo = document.querySelector('h1');
//titulo.innerText;      // retorna o texto
//titulo.classList;      // retorna as classes
// titulo.id              // retorna o id
// titulo.offsetHeight    // retorna a altura do elemento

// titulo. addEventListener('click', callback)
// ativa a funaçao callback ao click no titulo


// Retorne o url da página atual utilizando o objeto window
const url = window.location.href
console.log(url)
// Seleciona o primeiro elemento da página que
// possua a classe ativo
document.querySelectorAll('.ativo')
// Retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(linguagem)
// Retorne a largura da janela 
const largura = window.innerWidth;
console.log(largura)