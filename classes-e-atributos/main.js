//CLASSES E ATRIBUTOS
const menu = document.querySelector('.menu');
//classlist
menu.className;       // string
menu.classList;       // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo') // remove/adiciona a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

//attributes
const animais = document.querySelector('.animais');
animais.attributes;  // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

// getAttribute e setAttribute
const img = document.querySelector('img');
img.getAttribute('src');  // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt
//img.hasAttribute(); // true / false se tem algum atributo

// Read Only vs Writable
animais.className;    // string com o nome das classes
animais.className = 'azul';  // substitui competamente a string
animais.className += ' vermelho' // adiciona vermelho a string
animais.attributes = 'class="ativo"'; // nao funciona, read-only




// Adicione a classe ativo a todos os itens do menu
const menuPricipal = document.querySelectorAll('.menu a');
console.log(menuPricipal)
menuPricipal.forEach(item => {
  item.classList.add('ativo')
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuPricipal.forEach(item => {
  item.classList.remove('ativo')
})
menuPricipal[0].classList.add('ativo')
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')
imgs.forEach(img => {
  img.hasAttribute('alt')
})
// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]')
linkExterno.setAttribute('href', 'https://www.google.com')

