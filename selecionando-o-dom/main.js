// SELEÇAO DE ELEMENTOS    ID
// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato')
// retorna null caso nao exista
const naoExiste = document.getElementById('teste')

//Classe e Tag
//Seleciona pela classe, retorna um HTMLCollection
//const gridSection = document.getElementsByClassName('grid-section')
const contato = document.getElementsByClassName('grid-section contato');  // seleciona apenas os elementos que tiverem exatamente essas duas classes
//Seleciona todos os UL's, retorna uma HTMLCollection
//const ul = document.getElementsByTagNameName('ul')
//retorna o primeiro elemento
//console.log(gridSection[0])

//Seletor Geral Unico
const animais = document.querySelector('.animais');
const contatos = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');
// busca dentro do ul apenas
const navItem = primeiroUl.querySelector('li')

//Seletor Geral Lista
const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
//const fotosAnimais = document.querySelectorAll('.animais-lista img')
// retorna o segundo elemento
console.log(gridSection[1]);

//HTMLCollection vs NodeList
const titulo = document.querySelector('.titulo')
//const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section')
titulo.classList.add('grid-section')
//console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

// Array-Like
gridSectionNode.forEach(function(gridItem, index, array){
  gridItem.classList.add('azul');
  console.log(index);  // index do item na array
  console.log(array);  // a array completa
})
// é possivel transformar array-like em uma array real, utilizando o metodo Array.from(gridSection)
console.clear()
// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src=^"img/imagem"]')
console.log(imagem)
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('a[href^="#"]')
console.log(links)
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)

// Selecione o último p do site
const ultimoP = document.querySelector('body p:last-child')
console.log(ultimoP)
