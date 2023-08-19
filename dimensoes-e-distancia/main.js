// DIMENSOES E DISTANCIA
//Height e Width
const section = document.querySelector('.animais');
section.clientHeight;  // height + padding
section.clientWidth;   // width + padding
section.offsetHeight;  // height + padding + border
section.scrollHeight;  // height total, mesmo dentro do scroll

// offsetTop e offsetLeft
// distancia entre o topo do elemento eo topo da pagina
section.offsetTop;
// distancia entre o conteudo esquerdo do elemento
// e o canto esquerdo da pagina
section.offsetLeft

// getBoundingClientRect()
const rect = section.getBoundingClientRect()
rect.height;   // height do elemento
rect.width;   // width do elemento
rect.top;  // distancia entre o topo do elemento e o scroll

// Window
window.innerWidth;  // width da janela
window.outerWidth;  // soma dev tools tambem
window.innerHeight; // height da janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distancia total do scroll horizontal
window.pageXOffset; // distacia total do scroll vertical
if(window.innerWidth < 600) {
  console.log('tela menor que 600px')
}

// matchMedia
const small = window.matchMedia('(max-width: 600px)');
if(small.matches) {  // o matches verifica com false ou true se a condiçao do matchMedia e verdadeira
  console.log('tela menor que 600px')
} else {
  console.log('tela maior que 600px')
}




// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')
console.log(img.offsetTop)
// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img')
let larguraTotal = 0;
imgs.forEach((item,index) => {
  for(let i = 0; i < imgs.length; i++){
    larguraTotal += imgs[i].getBoundingClientRect().width
  }
  console.log(larguraTotal)
})
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
let links = document.querySelectorAll('a');
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'possui boa acessibilidade')
  } else{
    console.log(link, 'nao possui boa acessibilidade')
  }
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia('(max-width: 720px)').matches;
 const menu = document.querySelector('.menu')
if(browser){
  menu.classList.add('menu-mobile')
  console.log(menu)
}