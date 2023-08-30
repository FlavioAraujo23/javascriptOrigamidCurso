// Factory Function

// FACTORY FUNCTION
// São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que constructor functions / classes.
function createButton(text) {
  function element() { // função que irá criar objeto
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;  //retornando um objeto
  }
  return {
    element: element,  // colocando os metodos e propriedades que irão ser retornados
    text: text,
  }
}

const comprarBtn = createButton('Comprar');


// MÉTODOS / VARIÁVEIS PRIVADAS
// Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas.
// eles são privados porque não são retornados na função, apenas são utilizados
function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return {
    nome,
    sobrenome,
    andar,
    nadar,
  }
}

const designer = criarPessoa('André', 'Rafael');


// ICE FACTORY
//Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). Ideia inicial de Douglas Crockford.
'use strict'; 

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }
  return Object.freeze({ // o freeze é usado para congelar tudo dentro do objeto, isso impede que o usuarioescreva por cima do metodo ou propriedade
    nome,
    sobrenome,
    andar,
  });
}

const designer2 = criarPessoa('André', 'Rafael');



// CONSTRUCTOR FUNCTION / FACTORY FUNCTION
// Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new. Também é possível fazer isso com uma Constructor Function.
function Pessoa(nome) {
  if (!(this instanceof Pessoa)){ // ou (!new.target (nova forma do ES6)) verifica se this(pessoa) é uma instancia(verifica se no prototipo de this tem os metodos e propriedades de Pessoa) de Pessoa, se for falso pois usa o sinal de !o retorno é uma nova instancia de Pessoa
    return new Pessoa(nome);}
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer4 = Pessoa('André');



// EXEMPLO REAL
function $$(selectedElements) { // 0 $ é o nome da função
  const elements = document.querySelectorAll(selectedElements);

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback); // função para adiocnar eventos
    });
    return this; // retornar this irá funcionar da mesma forma   o this é simplemente o objeto com os metodos
  }

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';  // esconde todos os elementos
    });
    return this;
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial'; // coloca o display inicial,para ser mostrado na tela
    });
    return this;
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);  // adiciona classes
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);  // remove classes
    });
    return this;  
  }
  
  return Object.freeze({
    elements,
    on,
    hide,
    show,
    addClass,
    removeClass,
  });
}

const buttons = $$('button');
buttons.hide().show().addClass('ativo').removeClass('ativo');