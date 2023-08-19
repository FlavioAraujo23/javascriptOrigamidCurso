// EVENTOS
// addEventListener
const img = document.querySelector('img');
// elemento.addEventListener(event, callback, options)
// a funcao sempre e´chamada de callback
img.addEventListener('click', function() {
  console.log('clicou');
})
// o terceiro parametro é opcional

// callback
function callbackk() {
  console.log('clicou')
}
img.addEventListener('click', callbackk);  // funciona, apenas passar o nome
img.addEventListener('click', callbackk()) // undefined
img.addEventListener('click', () => {
  console.log('clicou')
})

// event
function callback(event) {
  console.log(event)
}
img.addEventListener('click', callback)
// propriedades do event
const animaisLista = document.querySelector('.animais-lista');
function executarCallback (event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path)
}
animaisLista.addEventListener('click', executarCallback)


// event.preventDefault()
//previne o comportamento padrao do evento no browser
const linkExterno = document.querySelector('a[href^="http"]');
function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}
linkExterno.addEventListener('click', clickNoLink)

// this
// no contexto de eventos, a palavra chave this fara referencia ao elemento em que addEventListener foi adicionado aqui no caso img
const imagem= document.querySelector('img');
function imagemClick(event) {
  console.log(this);  // retorna a imagem
  console.log(this.getAttribute('src'));
}
imagem.addEventListener('click', imagemClick)


// diferentes eventos
const h1 = document.querySelector('h1');
function callbacks(event) {
  console.log(event.type, event)
}
h1.addEventListener('click', callbacks);
h1.addEventListener('mouseenter', callbacks);
window.addEventListener('scroll', callbacks);
window.addEventListener('resize', callbacks);
window.addEventListener('keydown', callbacks);


// keyboard
function handleKeyboard(event) {
if (event.key === 'a')
  document.body.classList.toggle('azul');
else if (event.key === 'y')
  document.body.classList.toggle('vermelho')
}
window.addEventListener('keydown', handleKeyboard)


// forEach e eventos
const imgs = document.querySelectorAll('img');
function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}
imgs.forEach((img) => {
  img.addEventListener('click', imgSrc)
})



// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function mudarLink(event){
event.preventDefault()
event.currentTarget.classList.toggle('ativo')
}
linksInternos.forEach((link) =>{
  link.addEventListener('click', mudarLink)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll ('body *')
function mostrarElemento(event) {
 
}
todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', () => {
   elemento.remove()
  })
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function atalho (event) {
  if(event.key === 't') {
    document.body.classList.toggle('fonte')
  }
}

window.addEventListener('keydown', atalho)