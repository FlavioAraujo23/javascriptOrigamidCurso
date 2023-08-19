// TRANSVERSING E MANIPULAÇAO
// outerHTML, innerHTML e innerText
const menu = document.querySelector('.menu');
menu.outerHTML; // todo html do elemento,ex se tiver um h1 e quer por um p, ele substituira o h1 por p
menu.innerHTML; // html interno, ex se tiver um h1 e vc quer colocar um p, ele sera colocado dentro h1
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto, 
menu.innerHTML = '<p>Texto</p>'; // a tag e renderizada

// TRANSVERSING
const lista = document.querySelector('.animais-lista');
lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // ultimo filho

lista.querySelectorAll('li'); // todas as LI´s
lista.querySelector('li:last-child'); // ultimo filho


// Element vs Node
lista.previousElementSiblin;  // elemento acima
lista.previousSibling;  // node acima

lista.firstChild // primeiro node child
lista.childNodes // todos os nods child


// Manipulando Elementos
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
contato.appendChild(lista); // move a lista para final de contato
contato.insertBefore(lista, titulo)   // insere a lista antes de titulo, o primeiro parametro e o que ira ser movido, o segundo é o q recebra antes dele, importande que o segundo parametro esteja dentro do elemento que foi chamado no caso acima seria contato
contato.removeChild(titulo)   // remove titulo de contato
//contato.replaceChild(lista, titulo)   // substitui titulo por lista


// Novos Elementos
const animais = document.querySelector('.animais');
const novoH1 = document.createElement('h1');
novoH1.innerText = 'novo titulo';
novoH1.classList.add('titulo');
animais.appendChild(novoH1)


// clonar elementos
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo sao iguais
const cloneTitulo = titulo.cloneNode(true);
const contatoSection = document.querySelector('.contato');
contato.appendChild(cloneTitulo);
// true sinaliza para incluir os filhos



// Duplique o menu e adicione ele em copy
const menuExercicio = document.querySelector('.menu')
const menuClone = menuExercicio.cloneNode(true)
const copy = document.querySelector('.copy')
copy.appendChild(menuClone)
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq")
const dl = faq.querySelector('dl')
console.log(dl.children[0])
// Selecione o DD referente ao primeiro DT
console.log(faq.querySelector('dd'))
// Substitua o conteúdo html de .faq pelo de .animais
const animal =document.querySelector('.animais')
faq.innerHTML = animal.innerHTML